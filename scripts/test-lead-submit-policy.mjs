import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { leadSubmitBlockReason, leadSubmitWarnings, shouldDeliverLead } from "../src/lib/leadSubmitPolicy.ts";

assert.deepEqual(
  shouldDeliverLead({ address: "123 Main St Seattle WA", requireAddress: true }),
  { ok: true },
  "typed address must still deliver",
);
assert.deepEqual(
  leadSubmitWarnings({
    address: "123 Main St Seattle WA",
    addressFromPlaces: false,
  }),
  ["typed_address"],
);

assert.equal(
  leadSubmitBlockReason(shouldDeliverLead({ address: "123 Main St Seattle WA" })),
  undefined,
);
assert.deepEqual(
  shouldDeliverLead({ address: "", requireAddress: true }),
  { ok: false, reason: "missing_address" },
);
assert.equal(
  leadSubmitBlockReason(shouldDeliverLead({ address: "", requireAddress: true })),
  "missing_address",
);
assert.deepEqual(
  shouldDeliverLead({ address: "", requireAddress: false }),
  { ok: true },
);
assert.deepEqual(
  leadSubmitWarnings({
    address: "100 Yesler Way, Seattle, WA",
    addressFromPlaces: true,
  }),
  [],
);

const disclosure = readFileSync(
  new URL("../src/components/forms/SmsSubmitDisclosure.tsx", import.meta.url),
  "utf8",
);
assert.match(disclosure, /text-xs font-normal text-muted-foreground/);
assert.match(
  disclosure,
  /By clicking \{buttonLabel\}, you agree to receive calls and text messages from MyFence/,
);
assert.match(disclosure, /href="\/privacy-policy"/);
assert.equal(/border|bg-amber|Checkbox/.test(disclosure), false);

const formFiles = [
  ["src/components/pages/ContactPage.tsx", "Send Message"],
  ["src/components/forms/ContactForm.tsx", "Send Message"],
  ["src/components/forms/ServiceAreaContactForm.tsx", "Send Message"],
  ["src/components/forms/InlineQuoteForm.tsx", "Send Quote Request"],
  ["src/components/home/InlineContactSection.tsx", "Send Message"],
  ["src/components/QuoteModal.tsx", "Send Quote Request"],
];
const banned = [
  "Please select an address from the dropdown suggestions",
  "This box is optional",
  "Mind checking the text updates box",
  "TEXT_CONSENT_MESSAGE",
  "interceptUncheckedSubmit",
  "TextConsentNudgeNote",
  "border-amber-500",
];
for (const [file, buttonLabel] of formFiles) {
  const src = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  for (const needle of banned) {
    assert.equal(src.includes(needle), false, `${file} still contains: ${needle}`);
  }
  assert.match(src, /trackLeadSubmitAttempt/, `${file} must record submit attempts`);
  assert.match(src, /shouldDeliverLead/, `${file} must use the typed-address delivery policy`);
  assert.match(src, /SUBMIT_DISCLOSURE_CONSENT/, `${file} must record consent on submit`);
  assert.match(
    src,
    new RegExp(`<SmsSubmitDisclosure buttonLabel="${buttonLabel}" />`),
    `${file} must show fine print for its submit button`,
  );
  assert.equal(
    /Please consent to receive text messages before submitting your phone number|Consent is required to receive text messages/.test(src),
    false,
    `${file} must not hard-block submit on SMS consent`,
  );
}

const discounts = readFileSync(
  new URL("../src/components/pages/DiscountsPage.tsx", import.meta.url),
  "utf8",
);
for (const needle of banned) {
  assert.equal(discounts.includes(needle), false, `DiscountsPage still contains: ${needle}`);
}
assert.match(discounts, /SUBMIT_DISCLOSURE_CONSENT/);
assert.match(discounts, /buttonLabel="Claim My Discount!"/);
assert.match(discounts, /buttonLabel="Get My Free Quote!"/);

const leadRoute = readFileSync(new URL("../src/app/api/website-lead/route.ts", import.meta.url), "utf8");
assert.match(leadRoute, /pushNote\("Text consent", body\.textConsent === true \? "Yes" : ""\)/);
assert.equal(leadRoute.includes("consent_method"), false, "website-lead contract must stay unchanged");
assert.equal(
  /textConsent[^\n]*required|required[^\n]*textConsent/.test(leadRoute),
  false,
  "website-lead must not require text consent",
);

console.log("leadSubmitPolicy: all assertions passed");
