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
    
    const { fullName, email, phone, address, projectDescription, textConsent, sourcePage } = requestBody

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
    const submissionPage = typeof sourcePage === "string" ? sourcePage.trim() : "";
    const submissionPageLine = submissionPage ? `\nSubmitted from page: ${submissionPage}` : "";

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

This request was submitted through the MyFence.com website.${submissionPageLine}
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
        <p><em>This request was submitted through the MyFence.com website.</em>${submissionPage ? `<br><strong>Submitted from page:</strong> <a href="${submissionPage}">${submissionPage}</a>` : ""}</p>
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