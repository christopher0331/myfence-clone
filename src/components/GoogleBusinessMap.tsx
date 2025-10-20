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
  placeId: string;
  radiusMiles: number;
  className?: string;
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

const GoogleBusinessMap = ({ placeId, radiusMiles, className = "" }: GoogleBusinessMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
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
    if (!businessData?.location || !mapRef.current) return;

    const initMap = async () => {
      const { latitude, longitude } = businessData.location!;
      const center = { lat: latitude, lng: longitude };

      // Initialize map
      const map = new window.google.maps.Map(mapRef.current!, {
        center,
        zoom: radiusMiles === 20 ? 9 : 11,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Add marker for business location
      new window.google.maps.Marker({
        position: center,
        map,
        title: businessData.displayName?.text || "MyFence.com",
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
      if (!window.google) {
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
  }, [businessData, radiusMiles]);

  if (loading) {
    return (
      <Card className={className}>
        <CardContent className="p-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (error || !businessData) {
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
      {/* Business Info Card */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-2xl font-bold mb-2">
                {businessData.displayName?.text || "MyFence.com"}
              </h3>
              {businessData.formattedAddress && (
                <div className="flex items-start gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>{businessData.formattedAddress}</span>
                </div>
              )}
              {businessData.nationalPhoneNumber && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href={`tel:${businessData.nationalPhoneNumber}`} className="hover:text-primary">
                    {businessData.nationalPhoneNumber}
                  </a>
                </div>
              )}
            </div>
            {businessData.rating && (
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="font-bold text-lg">{businessData.rating}</span>
                {businessData.userRatingCount && (
                  <span className="text-sm text-muted-foreground">
                    ({businessData.userRatingCount} reviews)
                  </span>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Map Card */}
      <Card>
        <CardContent className="p-0">
          <div ref={mapRef} className="w-full h-[500px] rounded-lg" />
          <div className="p-4 bg-muted/30 text-center text-sm text-muted-foreground">
            Serving a {radiusMiles}-mile radius from our location
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleBusinessMap;
