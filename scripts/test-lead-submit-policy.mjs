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
  assert.match(src, /shouldDeliverLead/, `${file} must use the typed-address delivery policy`);
  assert.match(
    src,
    /interceptUncheckedSubmit/,
    `${file} must keep the optional SMS consent nudge`,
  );
  assert.equal(
    /Please consent to receive text messages before submitting your phone number|Consent is required to receive text messages/.test(src),
    false,
    `${file} must not hard-block submit on SMS consent`,
  );
}

console.log("leadSubmitPolicy: all assertions passed");
