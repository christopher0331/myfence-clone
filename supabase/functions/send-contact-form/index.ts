import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('Function called with method:', req.method)
  
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Parsing request body...')
    const requestBody = await req.json()
    console.log('Request body parsed:', requestBody)
    
    const { name, email, phone, message, firstName, lastName, address, description } = requestBody

    console.log('Validating fields...')
    
    // Handle both old contact form format (name, message) and new format (firstName, lastName, description)
    const customerName = name || (firstName && lastName ? `${firstName} ${lastName}` : '')
    const customerMessage = message || description || ''
    
    // Validate required fields
    if (!customerName || !email || !customerMessage) {
      console.log('Validation failed - missing fields')
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Checking Resend API key...')
    const apiKey = Deno.env.get('RESEND_API_KEY')
    console.log('API key exists:', !!apiKey)
    
    if (!apiKey) {
      console.log('No API key found')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const emailBody = `
New Contact Form Submission from MyFence.com

Customer Information:
Name: ${customerName}
Email: ${email}
Phone: ${phone || 'Not provided'}${address ? `\nAddress: ${address}` : ''}

Message:
${customerMessage}

This message was submitted through the MyFence.com contact form.
    `.trim()

    console.log('Creating email data...')
    const emailData = {
      from: 'MyFence.com <onboarding@resend.dev>',
      to: ['info@myfence.com'],
      reply_to: email,
      subject: `New Contact Form Message from ${customerName}`,
      text: emailBody,
      html: `
        <h2>New Contact Form Submission from MyFence.com</h2>
        
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${customerName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          ${address ? `<li><strong>Address:</strong> ${address}</li>` : ''}
        </ul>
        
        <h3>Message:</h3>
        <p>${customerMessage.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This message was submitted through the MyFence.com contact form.</em></p>
      `
    }

    console.log('Sending email...')
    const resendInstance = new Resend(apiKey)
    const { data: result, error: resendError } = await resendInstance.emails.send(emailData)

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