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
    
    const { name, email, phone, message, firstName, lastName, address, description, textConsent } = requestBody

    console.log('Validating fields...')
    
    // Handle both old contact form format (name, message) and new format (firstName, lastName, description)
    const customerName = name || (firstName && lastName ? `${firstName} ${lastName}` : '')
    const customerMessage = message || description || ''
    
    // Be tolerant here so lead capture is resilient even if a field is omitted by
    // an older frontend build or a transient client-side serialization issue.
    const normalizedEmail = typeof email === "string" ? email.trim() : "";
    const normalizedPhone = typeof phone === "string" ? phone.trim() : "";
    const normalizedAddress = typeof address === "string" ? address.trim() : "";
    const normalizedMessage = typeof customerMessage === "string" ? customerMessage.trim() : "";

    // Hard requirements for contact delivery.
    if (!customerName || !normalizedEmail || !normalizedMessage) {
      console.log('Validation failed - missing core fields', {
        hasName: !!customerName,
        hasEmail: !!normalizedEmail,
        hasMessage: !!normalizedMessage,
      })
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
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

    const consentValue = textConsent === true || textConsent === 'true';
    const consentLabel = consentValue ? 'Yes' : 'No';

    const emailBody = `
New Contact Form Submission from MyFence.com

Customer Information:
Name: ${customerName}
Email: ${normalizedEmail}
Phone: ${normalizedPhone || "Not provided"}
Address: ${normalizedAddress || "Not provided"}
Text message consent: ${consentLabel}

Message:
${normalizedMessage}

This message was submitted through the MyFence.com contact form.
    `.trim()

    console.log('Creating admin email data...')
    const adminEmailData = {
      from: 'MyFence.com <onboarding@resend.dev>',
      to: ['info@myfence.com'],
      reply_to: normalizedEmail,
      subject: `New Contact Form Message from ${customerName}`,
      text: emailBody,
      html: `
        <h2>New Contact Form Submission from MyFence.com</h2>
        
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${customerName}</li>
          <li><strong>Email:</strong> ${normalizedEmail}</li>
          <li><strong>Phone:</strong> ${normalizedPhone || "Not provided"}</li>
          <li><strong>Address:</strong> ${normalizedAddress || "Not provided"}</li>
          <li><strong>Text message consent:</strong> ${consentLabel}</li>
        </ul>
        
        <h3>Message:</h3>
        <p>${normalizedMessage.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This message was submitted through the MyFence.com contact form.</em></p>
      `
    }

    console.log('Sending admin email...')
    const resendInstance = new Resend(apiKey)
    const { data: adminResult, error: adminResendError } = await resendInstance.emails.send(adminEmailData)

    if (adminResendError) {
      console.error('Resend API error (admin email):', adminResendError)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Admin email sent successfully:', adminResult)

    return new Response(
      JSON.stringify({
        success: true,
        id: adminResult?.id,
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