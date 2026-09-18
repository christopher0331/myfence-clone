"use client";

import { useCallback, useRef, useState } from "react";
import { shouldNudgeOptionalTextConsent } from "@/constants/textConsent";

export function useOptionalTextConsentNudge() {
  const [showNudge, setShowNudge] = useState(false);
  const alreadyNudgedRef = useRef(false);

  const interceptUncheckedSubmit = useCallback((phone: string, consented: boolean, rowId: string) => {
    if (!shouldNudgeOptionalTextConsent(phone, consented, alreadyNudgedRef.current)) {
      return false;
    }
    alreadyNudgedRef.current = true;
    setShowNudge(true);
    document.getElementById(rowId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    return true;
  }, []);

  const onConsentChange = useCallback((checked: boolean) => {
    if (checked) setShowNudge(false);
  }, []);

  const clearNudge = useCallback(() => {
    setShowNudge(false);
    alreadyNudgedRef.current = false;
  }, []);

  return { showNudge, interceptUncheckedSubmit, onConsentChange, clearNudge };
}
