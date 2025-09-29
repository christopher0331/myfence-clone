import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DiscountEmailRequest {
  firstName: string;
  lastName: string;
  address?: string;
  email: string;
  phone: string;
  riddle: string;
  answer: string;
  discount: string;
  description?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, address, email, phone, riddle, answer, discount, description }: DiscountEmailRequest = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !riddle || !answer || !discount) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not found");
    }

    const resend = new Resend(resendApiKey);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2563eb; text-align: center;">🎉 New Discount Winner! 🎉</h1>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #374151; margin-top: 0;">Customer Information</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
        </div>

        <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #065f46; margin-top: 0;">Riddle Challenge Results</h2>
          <p><strong>Today's Riddle:</strong> "${riddle}"</p>
          <p><strong>Correct Answer:</strong> ${answer}</p>
          <p><strong>Won Discount:</strong> <span style="color: #dc2626; font-weight: bold;">${discount}</span></p>
        </div>

        ${description ? `
        <div style="background-color: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #92400e; margin-top: 0;">Project Description</h2>
          <p>${description}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280;">This email was generated from the MyFence.com discount wheel challenge.</p>
        </div>
      </div>
    `;

    const plainText = `
New Discount Winner!

Customer Information:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
${address ? `Address: ${address}` : ''}

Riddle Challenge Results:
Today's Riddle: "${riddle}"
Correct Answer: ${answer}
Won Discount: ${discount}

${description ? `Project Description: ${description}` : ''}

This email was generated from the MyFence.com discount wheel challenge.
    `;

    const emailResponse = await resend.emails.send({
      from: "MyFence Discounts <onboarding@resend.dev>",
      to: ["info@myfence.com"],
      subject: `🎉 New Discount Winner - ${discount}`,
      html: emailHtml,
      text: plainText,
    });

    console.log("Discount email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-discount-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);