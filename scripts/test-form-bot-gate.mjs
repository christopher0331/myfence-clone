import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  botGateBlockReason,
  consumeRateLimit,
  evaluateClientBotGate,
  evaluateFormBotGate,
  looksLikeGibberishName,
  MIN_SUBMIT_MS,
  resetRateLimitForTests,
  tokenLooksRandom,
} from "../src/lib/formBotGate.ts";

const now = 1_700_000_000_000;

function allowedBody(overrides = {}) {
  return {
    firstName: "Christopher",
    lastName: "Hancock",
    email: "chris@example.com",
    phone: "2535550100",
    website: "",
    fax_number: "",
    form_loaded_at: now - 8_000,
    ...overrides,
  };
}

assert.equal(evaluateFormBotGate(allowedBody(), { now }).allow, true, "real lead must pass");
assert.equal(botGateBlockReason(evaluateFormBotGate(allowedBody(), { now })), undefined);
assert.equal(
  botGateBlockReason(evaluateFormBotGate(allowedBody({ website: "https://spam.test" }), { now })),
  "honeypot",
);

assert.deepEqual(
  evaluateFormBotGate(allowedBody({ website: "https://spam.test" }), { now }),
  { allow: false, reason: "honeypot" },
);
assert.deepEqual(
  evaluateFormBotGate(allowedBody({ fax_number: "555-0100" }), { now }),
  { allow: false, reason: "honeypot" },
);

assert.deepEqual(
  evaluateFormBotGate(allowedBody({ form_loaded_at: now - 400 }), { now }),
  { allow: false, reason: "too_fast" },
);
assert.ok(MIN_SUBMIT_MS >= 3000);

assert.deepEqual(
  evaluateFormBotGate(allowedBody({ form_loaded_at: now - 49 * 60 * 60 * 1000 }), { now }),
  { allow: false, reason: "stale_or_tampered" },
);
assert.deepEqual(
  evaluateFormBotGate(allowedBody({ form_loaded_at: now + 30_000 }), { now }),
  { allow: false, reason: "stale_or_tampered" },
);

assert.deepEqual(
  evaluateFormBotGate(allowedBody({ form_loaded_at: undefined }), { now }),
  { allow: false, reason: "missing_timestamp" },
);
assert.equal(
  evaluateFormBotGate(allowedBody({ form_loaded_at: undefined }), {
    now,
    requireTimestamp: false,
  }).allow,
  true,
);

// This spam wave
assert.equal(looksLikeGibberishName("Jpkwuws"), true);
assert.equal(looksLikeGibberishName("Hqvaal", "Soktme"), true);
assert.equal(looksLikeGibberishName("Augblzr Tbnwu"), true);
assert.equal(tokenLooksRandom("Hqvaal"), true);

// Real names that must not trip the detector
for (const name of [
  "Christopher Hancock",
  "Nguyen",
  "Schmidt",
  "Schwartz",
  "Mary-Anne",
  "Jose",
  "Li",
]) {
  assert.equal(looksLikeGibberishName(name), false, `false positive on ${name}`);
}

assert.deepEqual(
  evaluateFormBotGate(allowedBody({ firstName: "Jpkwuws", lastName: "Tbnwu" }), { now }),
  { allow: false, reason: "gibberish_name" },
);

const clientNow = Date.now();
assert.equal(
  evaluateClientBotGate({ website: "x", form_loaded_at: clientNow - 8_000 }).allow,
  false,
);
assert.equal(
  evaluateClientBotGate({
    firstName: "Jpkwuws",
    website: "",
    form_loaded_at: clientNow - 8_000,
  }).allow,
  true,
  "client gate must not apply the name heuristic",
);

resetRateLimitForTests();
assert.equal(consumeRateLimit("t", 3, 60_000, now), true);
assert.equal(consumeRateLimit("t", 3, 60_000, now + 10), true);
assert.equal(consumeRateLimit("t", 3, 60_000, now + 20), true);
assert.equal(consumeRateLimit("t", 3, 60_000, now + 30), false);
assert.equal(consumeRateLimit("t", 3, 60_000, now + 60_000), true, "window reset");

const contactForm = readFileSync(new URL("../src/components/forms/ContactForm.tsx", import.meta.url), "utf8");
const referralForm = readFileSync(new URL("../src/components/forms/ReferralForm.tsx", import.meta.url), "utf8");
assert.match(contactForm, /useFormBotGate/, "ContactForm must mount the bot trap");
assert.match(contactForm, /submitContactNotification/, "ContactForm must post through the gated Next route");
assert.match(contactForm, /interceptUncheckedSubmit/, "ContactForm must keep the SMS consent nudge");
assert.match(referralForm, /useFormBotGate/, "ReferralForm must mount the bot trap");
assert.match(referralForm, /submitReferralNotification/, "ReferralForm must post through the gated Next route");

assert.equal(
  contactForm.includes("supabase.functions.invoke(\"send-contact-form\""),
  false,
  "ContactForm must not bypass the Next bot gate",
);
assert.equal(
  referralForm.includes("send-referral-email"),
  false,
  "ReferralForm must not call the Supabase function from the browser",
);

const websiteLead = readFileSync(new URL("../src/app/api/website-lead/route.ts", import.meta.url), "utf8");
assert.match(websiteLead, /guardLeadRequest/, "website-lead must run the server gate");
assert.match(websiteLead, /fakeLeadSuccess/, "website-lead must fake-succeed spam");

console.log("formBotGate: all assertions passed");
