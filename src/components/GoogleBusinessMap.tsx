import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, MapPin, Phone, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleBusinessMapProps {
  placeId?: string;
  city?: string;
  state?: string;
  radiusMiles: number;
  className?: string;
  showBusinessInfo?: boolean;
  zoom?: number;
}

interface BusinessData {
  displayName?: { text: string };
  formattedAddress?: string;
  location?: { latitude: number; longitude: number };
  rating?: number;
  userRatingCount?: number;
  nationalPhoneNumber?: string;
  websiteUri?: string;
}

const GoogleBusinessMap = ({ placeId, city, state, radiusMiles, className = "", showBusinessInfo = true, zoom: customZoom }: GoogleBusinessMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [cityLocation, setCityLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
      if (!placeId) {
        // If no placeId, we'll just use city geocoding
        setBusinessData(null);
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke('fetch-google-business', {
          body: { placeId }
        });

        if (error) throw error;
        setBusinessData(data);
      } catch (err) {
        console.error('Error fetching business data:', err);
        setError('Failed to load business information');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, [placeId]);

  useEffect(() => {
    if (!mapRef.current) return;
    if (!businessData?.location && !cityLocation && !city) return;
    if (loading) return; // Don't init map while still loading

    const initMap = async () => {
      // Determine center coordinates
      let center: { lat: number; lng: number };
      
      if (city && state && !cityLocation) {
        // Geocode the city to get coordinates
        const geocoder = new window.google.maps.Geocoder();
        try {
          const result = await geocoder.geocode({ address: `${city}, ${state}` });
          if (result.results && result.results[0]) {
            const location = result.results[0].geometry.location;
            center = { lat: location.lat(), lng: location.lng() };
            setCityLocation(center);
          } else {
            throw new Error('City not found');
          }
        } catch (err) {
          console.error('Geocoding error:', err);
          setError('Failed to locate city');
          return;
        }
      } else if (cityLocation) {
        center = cityLocation;
      } else if (businessData?.location) {
        const { latitude, longitude } = businessData.location;
        center = { lat: latitude, lng: longitude };
      } else {
        return;
      }

      // Initialize map with appropriate zoom based on radius and device
      const getZoomLevel = (miles: number) => {
        const isMobile = window.innerWidth < 768;
        if (miles >= 50) return isMobile ? 7 : 8;
        if (miles >= 20) return isMobile ? 8 : 9;
        return isMobile ? 9 : 11;
      };

      const map = new window.google.maps.Map(mapRef.current!, {
        center,
        zoom: customZoom || getZoomLevel(radiusMiles),
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Add marker for location
      new window.google.maps.Marker({
        position: center,
        map,
        title: city ? `${city}, ${state}` : (businessData?.displayName?.text || "MyFence.com"),
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#FF6B35",
          fillOpacity: 1,
          strokeColor: "#fff",
          strokeWeight: 2,
        }
      });

      // Add service area circle
      new window.google.maps.Circle({
        strokeColor: "#FF6B35",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF6B35",
        fillOpacity: 0.15,
        map,
        center,
        radius: radiusMiles * 1609.34, // Convert miles to meters
      });
    };

    // Load Google Maps script if not already loaded
    const loadGoogleMaps = async () => {
      if (!(window.google && window.google.maps)) {
        try {
          const { data } = await supabase.functions.invoke('get-maps-key');
          const apiKey = data?.key;
          
          if (!apiKey) {
            throw new Error('Failed to get Maps API key');
          }

          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
          script.async = true;
          script.defer = true;
          script.onload = () => initMap();
          script.onerror = () => {
            console.error('Google Maps JS failed to load');
            setError('Failed to load map');
          };
          document.head.appendChild(script);
        } catch (err) {
          console.error('Error loading Google Maps:', err);
          setError('Failed to load map');
        }
      } else {
        initMap();
      }
    };

    loadGoogleMaps();
  }, [businessData, cityLocation, city, state, radiusMiles, loading]);

  if (loading) {
    return (
      <Card className={className}>
        <CardContent className="p-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (error || (placeId && !businessData)) {
    return (
      <Card className={className}>
        <CardContent className="p-8 text-center text-muted-foreground">
          {error || "Unable to load map"}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      <Card>
        <CardContent className="p-0 relative">
          {/* Business Info Overlay - only show if we have business data and showBusinessInfo is true */}
          {showBusinessInfo && businessData && (
            <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg max-w-[280px]">
              <div className="p-3 relative">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-sm leading-tight truncate flex-1">
                    {businessData.displayName?.text || "MyFence.com"}
                  </h3>
                  {businessData.location && (
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${businessData.location.latitude},${businessData.location.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline whitespace-nowrap flex-shrink-0"
                    >
                      Directions
                    </a>
                  )}
                </div>
                {businessData.formattedAddress && (
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                    {businessData.formattedAddress}
                  </p>
                )}
                {businessData.rating && (
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="font-semibold text-sm">{businessData.rating.toFixed(1)}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-3 w-3 fill-orange-500 text-orange-500" 
                        />
                      ))}
                    </div>
                    {businessData.userRatingCount && (
                      <a 
                        href={businessData.websiteUri || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        {businessData.userRatingCount} reviews
                      </a>
                    )}
                  </div>
                )}
                {businessData.location && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${businessData.location.latitude},${businessData.location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    View larger map
                  </a>
                )}
              </div>
            </div>
          )}
          
          {/* Map */}
          <div ref={mapRef} className="w-full h-[300px] md:h-[500px] rounded-lg" />
          
          {/* Service Area Info */}
          <div className="p-4 bg-muted/30 text-center text-sm text-muted-foreground">
            {city 
              ? `Serving a ${radiusMiles}-mile radius in ${city}, ${state}`
              : `Serving a ${radiusMiles}-mile radius from our location`
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleBusinessMap;
