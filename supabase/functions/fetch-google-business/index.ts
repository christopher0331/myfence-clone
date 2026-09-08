import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY')
    if (!apiKey) {
      throw new Error('GOOGLE_PLACES_API_KEY not configured')
    }

    const { placeId } = await req.json()
    
    // Use Google Places API (new) to fetch business details
    // Field names: https://developers.google.com/maps/documentation/places/web-service/place-details
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,formattedAddress,location,rating,userRatingCount,regularOpeningHours,nationalPhoneNumber,websiteUri&key=${apiKey}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Google Places API error:', errorText)
      throw new Error(`Google Places API error: ${response.status}`)
    }

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error fetching Google business data:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
