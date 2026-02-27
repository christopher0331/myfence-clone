import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('Quote function called with method:', req.method)
  
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Parsing quote request body...')
    const requestBody = await req.json()
    console.log('Quote request body parsed:', requestBody)
    
    const { fullName, email, phone, address, projectDescription, textConsent } = requestBody

    console.log('Validating quote fields...')
    // Validate required fields
    if (!fullName || !email || !phone || !address || !projectDescription) {
      console.log('Quote validation failed - missing fields')
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Checking quote Resend API key...')
    const apiKey = Deno.env.get('RESEND_API_KEY')
    console.log('Quote API key exists:', !!apiKey)
    
    if (!apiKey) {
      console.log('No quote API key found')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const consentValue = textConsent === true || textConsent === 'true';
    const consentLabel = consentValue ? 'Yes' : 'No';

    const emailBody = `
New Quote Request from MyFence.com

Customer Information:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Address: ${address}
Text message consent: ${consentLabel}

Project Description:
${projectDescription}

This request was submitted through the MyFence.com website.
    `.trim()

    console.log('Creating admin quote email data...')
    const adminEmailData = {
      from: 'MyFence.com <onboarding@resend.dev>',
      to: ['info@myfence.com'],
      reply_to: email,
      subject: `New Quote Request from ${fullName}`,
      text: emailBody,
      html: `
        <h2>New Quote Request from MyFence.com</h2>
        
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Address:</strong> ${address}</li>
          <li><strong>Text message consent:</strong> ${consentLabel}</li>
        </ul>
        
        <h3>Project Description:</h3>
        <p>${projectDescription.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This request was submitted through the MyFence.com website.</em></p>
      `
    }

    console.log('Sending admin quote email...')
    const resendInstance = new Resend(apiKey)
    const { data: adminResult, error: adminResendError } = await resendInstance.emails.send(adminEmailData)

    if (adminResendError) {
      console.error('Resend API error (admin quote email):', adminResendError)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Admin quote email sent successfully:', adminResult)

    const customerConfirmationHtml = `
      <h2>Thanks for your quote request</h2>
      <p>Hi ${fullName},</p>
      <p>We received your quote request and our team will review it shortly.</p>
      <h3>Request summary</h3>
      <ul>
        <li><strong>Address:</strong> ${address}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      <p><strong>Project description:</strong><br>${projectDescription.replace(/\n/g, '<br>')}</p>
      <hr>
      <p>If you need immediate help, call us at <a href="tel:+12534551885">(253) 455-1885</a>.</p>
      <p><em>- MyFence.com</em></p>
    `;

    const customerConfirmationText = `
Hi ${fullName},

Thanks for your quote request. We received it and our team will review it shortly.

Request summary
- Address: ${address}
- Phone: ${phone}

Project description:
${projectDescription}

If you need immediate help, call us at (253) 455-1885.

- MyFence.com
    `.trim();

    let customerConfirmationSent = false;
    try {
      const { data: customerResult, error: customerResendError } = await resendInstance.emails.send({
        from: 'MyFence.com <onboarding@resend.dev>',
        to: [email],
        subject: 'We received your quote request | MyFence.com',
        html: customerConfirmationHtml,
        text: customerConfirmationText,
      });

      if (customerResendError) {
        console.error('Resend API error (quote customer confirmation):', customerResendError);
      } else {
        customerConfirmationSent = true;
        console.log('Quote customer confirmation sent successfully:', customerResult);
      }
    } catch (customerError) {
      console.error('Quote customer confirmation send failed:', customerError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        id: adminResult?.id,
        customerConfirmationSent,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})