import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, address, message } = await req.json()

    // Validate required fields
    if (!name || !email || !phone || !address || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!resend.apiKey) {
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const emailBody = `
New Contact Form Submission from MyFence.com

Customer Information:
Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}

Message:
${message}

This message was submitted through the MyFence.com contact form.
    `.trim()

    const emailData = {
      from: 'MyFence.com <onboarding@resend.dev>',
      to: ['andrew.knudsen25@gmail.com'],
      reply_to: email,
      subject: `New Contact Form Message from ${name}`,
      text: emailBody,
      html: `
        <h2>New Contact Form Submission from MyFence.com</h2>
        
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Address:</strong> ${address}</li>
        </ul>
        
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This message was submitted through the MyFence.com contact form.</em></p>
      `
    }

    const { data: result, error: resendError } = await resend.emails.send(emailData)

    if (resendError) {
      console.error('Resend API error:', resendError)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Email sent successfully:', result)

    return new Response(
      JSON.stringify({ success: true, id: result?.id }),
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