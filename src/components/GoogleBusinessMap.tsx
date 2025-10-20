import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type LatLng = { lat: number; lng: number };

interface GoogleBusinessMapProps {
  center: LatLng;
  radiusMiles: number;
  label: string;
  className?: string;
  placeTypes?: string[]; // e.g. ["restaurant"] (max 5)
}

declare global {
  interface Window {
    google?: any;
    _mapsJsLoading?: Promise<void>;
  }
}

export default function GoogleBusinessMap({
  center,
  radiusMiles,
  label,
  className = "",
  placeTypes = ["restaurant"],
}: GoogleBusinessMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapObj = useRef<google.maps.Map>();
  const markers = useRef<google.maps.Marker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadMapsJs = async (apiKey: string) => {
      if (window.google?.maps) return;
      if (!window._mapsJsLoading) {
        window._mapsJsLoading = new Promise<void>((resolve, reject) => {
          const s = document.createElement("script");
          // load async + modern importLibrary path
          s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=maps,marker,places`;
          s.async = true;
          s.defer = true;
          s.onload = () => resolve();
          s.onerror = () => reject(new Error("Maps JS failed to load"));
          document.head.appendChild(s);
        });
      }
      await window._mapsJsLoading;
    };

    const getZoom = (miles: number) => (miles >= 50 ? 8 : miles >= 20 ? 9 : 11);

    const init = async () => {
      try {
        if (!mapRef.current) return;

        const { data, error: fnErr } = await supabase.functions.invoke("get-maps-key");
        if (fnErr) throw fnErr;
        const apiKey = data?.key as string;
        if (!apiKey) throw new Error("No Maps API key");

        await loadMapsJs(apiKey);

        // Import libraries (new style)
        const { Map, Circle } = (await window.google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
        await window.google.maps.importLibrary("places"); // gives access to Place class, etc.

        // Map
        mapObj.current = new Map(mapRef.current, {
          center,
          zoom: getZoom(radiusMiles),
          styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }],
          mapId: undefined, // set your vector mapId here if you have one
        });

        // Marker at center
        new window.google.maps.Marker({
          position: center,
          map: mapObj.current!,
          title: label,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#FF6B35",
            fillOpacity: 1,
            strokeColor: "#fff",
            strokeWeight: 2,
          },
        });

        // Service radius
        new Circle({
          map: mapObj.current!,
          center,
          radius: radiusMiles * 1609.34,
          strokeColor: "#FF6B35",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF6B35",
          fillOpacity: 0.15,
        });

        // --- Places (New) Nearby Search via REST v1 ---
        // Note: FieldMask is REQUIRED and controls cost. Ask only for what you need.
        const meters = Math.round(radiusMiles * 1609.34);
        const resp = await fetch("https://places.googleapis.com/v1/places:searchNearby", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask":
              // minimal example: id + displayName + location
              "places.id,places.displayName,places.location",
          },
          body: JSON.stringify({
            includedTypes: placeTypes, // max 5; omit to search all
            maxResultCount: 20,
            locationRestriction: {
              circle: {
                center: { latitude: center.lat, longitude: center.lng },
                radius: meters,
              },
            },
          }),
        });

        if (!resp.ok) throw new Error(`Places search failed: ${resp.status}`);
        const dataJson = await resp.json();

        // Drop markers for results
        markers.current.forEach((m) => m.setMap(null));
        markers.current = (dataJson.places ?? []).map((p: any) => {
          const pos = { lat: p.location.latitude, lng: p.location.longitude };
          return new window.google.maps.Marker({
            position: pos,
            map: mapObj.current!,
            title: p.displayName?.text,
          });
        });

        if (!cancelled) setLoading(false);
      } catch (e: any) {
        if (!cancelled) {
          console.error(e);
          setError(e.message || "Failed to initialize map");
          setLoading(false);
        }
      }
    };

    init();

    return () => {
      cancelled = true;
      markers.current.forEach((m) => m.setMap(null));
      markers.current = [];
    };
  }, [center.lat, center.lng, radiusMiles, label, JSON.stringify(placeTypes)]);

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
        <CardContent className="p-8 text-center text-muted-foreground">{error}</CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      <Card>
        <CardContent className="p-0 relative">
          <div ref={mapRef} className="w-full h-[500px] rounded-lg" />
          <div className="p-4 bg-muted/30 text-center text-sm text-muted-foreground">
            Serving a {radiusMiles}-mile radius from {label}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
