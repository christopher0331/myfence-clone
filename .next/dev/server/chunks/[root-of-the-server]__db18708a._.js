module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/website-lead/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const DEFAULT_WEBHOOK_URL = "https://mdcbcpowsrrebtustwwp.supabase.co/functions/v1/receive-website-lead-webhook";
function toStringOrEmpty(v) {
    if (typeof v === "string") return v;
    if (v == null) return "";
    return String(v);
}
function parseAddressParts(input) {
    const raw = (input || "").trim();
    if (!raw) return {
        address: "",
        city: "",
        state: "",
        zip: ""
    };
    // Heuristic parse:
    // "123 Main St, Seattle, WA 98101"
    const parts = raw.split(",").map((p)=>p.trim()).filter(Boolean);
    const address = parts[0] ?? raw;
    const city = parts[1] ?? "";
    let state = "";
    let zip = "";
    const stateZip = parts[2] ?? "";
    if (stateZip) {
        const tokens = stateZip.split(/\s+/).filter(Boolean);
        state = tokens[0] ?? "";
        zip = tokens[1] ?? "";
    }
    return {
        address,
        city,
        state,
        zip
    };
}
async function POST(req) {
    const apiKey = process.env.WEBSITE_LEADS_API;
    if (!apiKey) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(// Return 200 so clients can gracefully fall back to the legacy email flow without noisy 500s in dev.
        {
            ok: false,
            error: "Missing server env var WEBSITE_LEADS_API"
        }, {
            status: 200
        });
    }
    const webhookUrl = process.env.WEBSITE_LEADS_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
    let body;
    try {
        body = await req.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Invalid JSON"
        }, {
            status: 400
        });
    }
    // Accept either snake_case or camelCase from the client
    const firstName = toStringOrEmpty(body.first_name ?? body.firstName);
    const lastName = toStringOrEmpty(body.last_name ?? body.lastName);
    const email = toStringOrEmpty(body.email);
    const phone = toStringOrEmpty(body.phone);
    const addressInput = toStringOrEmpty(body.address);
    const parsed = parseAddressParts(addressInput);
    const city = toStringOrEmpty(body.city) || parsed.city;
    const state = toStringOrEmpty(body.state) || parsed.state;
    const zip = toStringOrEmpty(body.zip) || parsed.zip;
    const fenceType = toStringOrEmpty(body.fence_type ?? body.fenceType);
    const message = toStringOrEmpty(body.message ?? body.description ?? body.projectDescription ?? body.notes);
    const payload = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        address: parsed.address || addressInput,
        city,
        state,
        zip,
        fence_type: fenceType,
        message
    };
    try {
        const res = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-api-key": apiKey
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            const text = await res.text().catch(()=>"");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(// Return 200 so clients can gracefully fall back to the legacy email flow.
            {
                ok: false,
                error: `Webhook failed (${res.status})`,
                details: text.slice(0, 500)
            }, {
                status: 200
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(// Return 200 so clients can gracefully fall back to the legacy email flow.
        {
            ok: false,
            error: "Failed to reach webhook",
            details: e instanceof Error ? e.message : String(e)
        }, {
            status: 200
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__db18708a._.js.map