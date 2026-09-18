import assert from "node:assert/strict";
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

console.log("leadSubmitPolicy: all assertions passed");
