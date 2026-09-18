export const TEXT_CONSENT_MESSAGE =
  "I consent to follow-up & informational text messages. Frequency varies. Msg & day rates may apply. Reply STOP to opt out.";

export const TEXT_CONSENT_NUDGE_TITLE = "Mind checking the text updates box?";

export const TEXT_CONSENT_NUDGE_DESCRIPTION =
  "It's optional — you can still send this form. Checking it just helps us keep you informed about meetings and fence updates.";

export const TEXT_CONSENT_NUDGE_INLINE =
  "This box is optional. If you can, please check it so we can text you about meetings and fence updates. You can submit without it if you'd rather not.";

export function shouldNudgeOptionalTextConsent(
  phone: string,
  consented: boolean,
  alreadyNudged: boolean,
): boolean {
  return phone.trim().length > 0 && !consented && !alreadyNudged;
}
