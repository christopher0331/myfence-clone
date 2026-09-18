import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { leadSubmitWarnings, shouldDeliverLead } from "../src/lib/leadSubmitPolicy.ts";

const droppedSession = {
  address: "123 Main St Seattle WA",
  addressFromPlaces: false,
  phone: "2535551234",
  textConsent: false,
};

assert.deepEqual(
  shouldDeliverLead({ address: droppedSession.address, requireAddress: true }),
  { ok: true },
  "typed address must still deliver",
);
assert.deepEqual(
  leadSubmitWarnings(droppedSession),
  ["typed_address", "no_sms_consent"],
  "record why PostHog showed submitted form without a lead",
);

assert.deepEqual(
  shouldDeliverLead({ address: "", requireAddress: true }),
  { ok: false, reason: "missing_address" },
);
assert.deepEqual(
  shouldDeliverLead({ address: "", requireAddress: false }),
  { ok: true },
);
assert.deepEqual(
  leadSubmitWarnings({
    address: "100 Yesler Way, Seattle, WA",
    addressFromPlaces: true,
    phone: "2535551234",
    textConsent: true,
  }),
  [],
);

const formFiles = [
  "src/components/pages/ContactPage.tsx",
  "src/components/forms/ContactForm.tsx",
  "src/components/forms/ServiceAreaContactForm.tsx",
  "src/components/forms/InlineQuoteForm.tsx",
  "src/components/home/InlineContactSection.tsx",
  "src/components/QuoteModal.tsx",
  "src/components/pages/DiscountsPage.tsx",
];
const banned = [
  "Please select an address from the dropdown suggestions",
  "Consent required",
  "before submitting your phone number",
  "check this box to submit when a phone number is entered",
];
for (const file of formFiles) {
  const src = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  for (const needle of banned) {
    assert.equal(src.includes(needle), false, `${file} still contains: ${needle}`);
  }
  assert.match(src, /trackLeadSubmitAttempt/, `${file} must record submit attempts`);
}

console.log("leadSubmitPolicy: all assertions passed");
