"use client";

import { useState, useEffect, useRef } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const LIBRARIES: ["places"] = ["places"];

export interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onValidChange?: (valid: boolean) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  required?: boolean;
}

function AutocompleteInner({
  apiKey,
  value,
  onChange,
  onValidChange,
  placeholder,
  id,
  className,
  required,
}: AddressAutocompleteProps & { apiKey: string }) {
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: LIBRARIES,
  });

  const handlePlaceChanged = () => {
    if (!autocompleteRef.current) return;
    const place = autocompleteRef.current.getPlace();
    if (place?.formatted_address) {
      onChange(place.formatted_address);
      setIsPlaceSelected(true);
      onValidChange?.(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsPlaceSelected(false);
    setIsDirty(true);
    onValidChange?.(false);
  };

  const showError = isDirty && !isPlaceSelected && value.trim().length > 0;

  if (!isLoaded) {
    return (
      <Input
        id={id}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          onValidChange?.(e.target.value.trim().length > 0);
        }}
        placeholder={placeholder}
        className={className}
        required={required}
        autoComplete="new-password"
      />
    );
  }

  return (
    <div>
      <Autocomplete
        onLoad={(ac) => { autocompleteRef.current = ac; }}
        onPlaceChanged={handlePlaceChanged}
        options={{ componentRestrictions: { country: "us" } }}
      >
        <Input
          id={id}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`${className ?? ""} ${showError ? "border-destructive ring-destructive" : ""}`}
          required={required}
          autoComplete="new-password"
        />
      </Autocomplete>
      {showError && (
        <p className="text-sm font-medium text-destructive mt-1">
          Please select an address from the dropdown suggestions.
        </p>
      )}
    </div>
  );
}

export function AddressAutocomplete(props: AddressAutocompleteProps) {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    supabase.functions.invoke("get-maps-key").then(({ data }) => {
      if (data?.key) setApiKey(data.key);
    });
  }, []);

  if (!apiKey) {
    return (
      <Input
        id={props.id}
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
          props.onValidChange?.(e.target.value.trim().length > 0);
        }}
        placeholder={props.placeholder}
        className={props.className}
        required={props.required}
        autoComplete="street-address"
      />
    );
  }

  return <AutocompleteInner {...props} apiKey={apiKey} />;
}
