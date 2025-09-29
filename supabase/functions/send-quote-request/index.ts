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
    
    const { fullName, email, phone, address, projectDescription } = requestBody

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

    const emailBody = `
New Quote Request from MyFence.com

Customer Information:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Address: ${address}

Project Description:
${projectDescription}

This request was submitted through the MyFence.com website.
    `.trim()

    console.log('Creating quote email data...')
    const emailData = {
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
        </ul>
        
        <h3>Project Description:</h3>
        <p>${projectDescription.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This request was submitted through the MyFence.com website.</em></p>
      `
    }

    console.log('Sending quote email...')
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