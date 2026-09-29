export const TEXT_CONSENT_MESSAGE =
  "I consent to follow-up & informational text messages. Frequency varies. Msg & day rates may apply. Reply STOP to opt out.";

export const TEXT_CONSENT_NUDGE_TITLE = "Mind checking the text updates box?";

export const TEXT_CONSENT_NUDGE_DESCRIPTION =
  "It's optional — check the box so we can text you about meetings and fence updates, or click Send again if you're sure you don't want texts.";

export const TEXT_CONSENT_NUDGE_INLINE =
  "This box is optional. If you can, please check it so we can text you about meetings and fence updates. If you're sure you don't want that, click Send again.";

export function shouldNudgeOptionalTextConsent(
  phone: string,
  consented: boolean,
  alreadyNudged: boolean,
): boolean {
  return phone.trim().length > 0 && !consented && !alreadyNudged;
}
