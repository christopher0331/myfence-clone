export const SMS_CONSENT_LABEL =
  "I agree to receive text messages from MyFence.com about my project. Message & data rates may apply. Reply STOP to opt out.";

type SmsConsentCheckboxProps = {
  id: string;
};

/**
 * Optional, passive SMS consent checkbox. Unchecked by default, not required,
 * and not wired into submit validation or lead payloads.
 */
export function SmsConsentCheckbox({ id }: SmsConsentCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-2 text-sm text-muted-foreground cursor-pointer select-none"
    >
      <input
        type="checkbox"
        id={id}
        name="smsConsent"
        value="yes"
        className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border border-primary accent-primary"
      />
      <span>{SMS_CONSENT_LABEL}</span>
    </label>
  );
}
