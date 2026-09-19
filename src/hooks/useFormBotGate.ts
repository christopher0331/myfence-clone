"use client";

import { useCallback, useRef } from "react";
import { FormBotTrap } from "@/components/forms/FormBotTrap";
import {
  evaluateClientBotGate,
  getPageLoadedAt,
  type BotGateFields,
} from "@/lib/formBotGate";

export function useFormBotGate(idPrefix = "") {
  const loadedAtRef = useRef(getPageLoadedAt());
  const websiteRef = useRef<HTMLInputElement>(null);
  const faxRef = useRef<HTMLInputElement>(null);

  const getFields = useCallback((): Required<BotGateFields> => {
    return {
      website: websiteRef.current?.value ?? "",
      fax_number: faxRef.current?.value ?? "",
      form_loaded_at: loadedAtRef.current,
    };
  }, []);

  const shouldFakeSuccess = useCallback(() => {
    return !evaluateClientBotGate(getFields()).allow;
  }, [getFields]);

  const trap = (
    <FormBotTrap
      idPrefix={idPrefix}
      websiteRef={websiteRef}
      faxRef={faxRef}
      loadedAt={loadedAtRef.current}
    />
  );

  return { getFields, shouldFakeSuccess, trap };
}
