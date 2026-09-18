import { TEXT_CONSENT_NUDGE_INLINE } from "@/constants/textConsent";

export function TextConsentNudgeNote({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <p className="text-sm font-medium text-amber-900 leading-relaxed">
      {TEXT_CONSENT_NUDGE_INLINE}
    </p>
  );
}
