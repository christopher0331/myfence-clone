"use client";

import { useState, useEffect, useRef } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const LIBRARIES: ["places"] = ["places"];

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onValidChange?: (valid: boolean) => void;
  placeholder?: string;
  required?: boolean;
  id?: string;
  name?: string;
  className?: string;
}

function AutocompleteInner({
  apiKey,
  value,
  onChange,
  onValidChange,
  placeholder,
  required,
  id,
  name,
  className,
}: AddressAutocompleteProps & { apiKey: string }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: LIBRARIES,
  });

  const [isPlaceSelected, setIsPlaceSelected] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.formatted_address) {
      onChange(place.formatted_address);
      setIsPlaceSelected(true);
      onValidChange?.(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsPlaceSelected(false);
    setIsDirty(true);
    onValidChange?.(false);
  };

  const showError = isDirty && !isPlaceSelected && value.trim().length > 0;

  if (!isLoaded) {
    return (
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        id={id}
        name={name}
        className={className}
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
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          id={id}
          name={name}
          autoComplete="new-password"
          className={`${className ?? ""} ${showError ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
      </Autocomplete>
      {showError && (
        <p className="text-sm text-red-500 mt-1">
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
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        required={props.required}
        id={props.id}
        name={props.name}
        className={props.className}
        autoComplete="new-password"
      />
    );
  }

  return <AutocompleteInner {...props} apiKey={apiKey} />;
}

export default AddressAutocomplete;
