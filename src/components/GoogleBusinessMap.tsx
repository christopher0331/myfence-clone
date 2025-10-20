import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleBusinessMapProps {
  center: { lat: number; lng: number };
  radiusMiles: number;
  label: string;
  className?: string;
}

const GoogleBusinessMap = ({ center, radiusMiles, label, className = "" }: GoogleBusinessMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (!mapRef.current || !center) return;

    const initMap = async () => {
      try {
        console.log('Initializing map with center:', center);
        
        // Wait for Google Maps API to be fully loaded
        if (!(window.google && window.google.maps)) {
          console.error('Google Maps API not loaded');
          return;
        }

        // Initialize map with appropriate zoom based on radius
        const getZoomLevel = (miles: number) => {
          if (miles >= 50) return 8;
          if (miles >= 20) return 9;
          return 11;
        };

        console.log('Creating map...');
        const map = new window.google.maps.Map(mapRef.current!, {
          center,
          zoom: getZoomLevel(radiusMiles),
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
          title: label,
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

        console.log('Map initialized successfully');
        setLoading(false);
      } catch (err) {
        console.error('Error initializing map:', err);
        setError('Failed to initialize map');
        setLoading(false);
      }
    };

    // Load Google Maps script if not already loaded
    const loadGoogleMaps = async () => {
      console.log('Loading Google Maps API...');
      
      if (window.google && window.google.maps) {
        console.log('Google Maps API already loaded');
        initMap();
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('get-maps-key');
        
        if (error) {
          throw error;
        }
        
        const apiKey = data?.key;
        
        if (!apiKey) {
          throw new Error('Failed to get Maps API key');
        }

        console.log('Loading Google Maps script...');
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          console.log('Google Maps script loaded');
          initMap();
        };
        script.onerror = () => {
          console.error('Google Maps JS failed to load');
          setError('Failed to load map');
          setLoading(false);
        };
        document.head.appendChild(script);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load map');
        setLoading(false);
      }
    };

    loadGoogleMaps();
  }, [center, radiusMiles, label]);

  if (loading) {
    return (
      <Card className={className}>
        <CardContent className="p-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardContent className="p-8 text-center text-muted-foreground">
          {error}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      <Card>
        <CardContent className="p-0 relative">
          {/* Map */}
          <div ref={mapRef} className="w-full h-[500px] rounded-lg" />
          
          {/* Service Area Info */}
          <div className="p-4 bg-muted/30 text-center text-sm text-muted-foreground">
            Serving a {radiusMiles}-mile radius from {label}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleBusinessMap;
