import Link from "next/link";

type SmsSubmitDisclosureProps = {
  buttonLabel: string;
};

/**
 * Quiet TCPA-style disclosure shown under a lead form's submit button.
 * Submitting the form is the consent action; there is no checkbox.
 */
export function SmsSubmitDisclosure({ buttonLabel }: SmsSubmitDisclosureProps) {
  return (
    <p className="mt-3 text-xs font-normal text-muted-foreground">
      By clicking {buttonLabel}, you agree to receive calls and text messages from MyFence at the
      number provided, including automated messages, about your inquiry, appointments and fence
      updates. Consent is not a condition of purchase. Msg frequency varies. Msg &amp; data rates
      may apply. Reply STOP to opt out or HELP for help. See our{" "}
      <Link href="/privacy-policy" className="underline underline-offset-2">
        Privacy Policy
      </Link>
      .
    </p>
  );
}
