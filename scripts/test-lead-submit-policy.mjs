import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { leadSubmitWarnings, shouldDeliverLead } from "../src/lib/leadSubmitPolicy.ts";

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
];
const banned = ["Please select an address from the dropdown suggestions"];
for (const file of formFiles) {
  const src = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  for (const needle of banned) {
    assert.equal(src.includes(needle), false, `${file} still contains: ${needle}`);
  }
  assert.match(src, /trackLeadSubmitAttempt/, `${file} must record submit attempts`);
  assert.match(
    src,
    /Please consent to receive text messages before submitting your phone number|Consent is required to receive text messages/,
    `${file} must keep the SMS consent submit gate`,
  );
}

console.log("leadSubmitPolicy: all assertions passed");
