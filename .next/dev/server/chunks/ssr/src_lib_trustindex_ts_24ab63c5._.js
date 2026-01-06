module.exports = [
"[project]/src/lib/trustindex.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRUSTINDEX_SCRIPT_SRC",
    ()=>TRUSTINDEX_SCRIPT_SRC,
    "TRUSTINDEX_WIDGET_ID",
    ()=>TRUSTINDEX_WIDGET_ID,
    "mountTrustindexWidget",
    ()=>mountTrustindexWidget
]);
const TRUSTINDEX_WIDGET_ID = "d273c79511b386516c861cd858a";
const TRUSTINDEX_SCRIPT_SRC = `https://cdn.trustindex.io/loader.js?${TRUSTINDEX_WIDGET_ID}`;
function runWhenIdle(cb, timeoutMs = 1500) {
    const w = window;
    if (w.requestIdleCallback) {
        const id = w.requestIdleCallback(cb, {
            timeout: timeoutMs
        });
        return ()=>w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(cb, 0);
    return ()=>window.clearTimeout(t);
}
function ensureTrustindexScript(onLoaded) {
    const existing = document.querySelector(`script[src^="${TRUSTINDEX_SCRIPT_SRC}"]`);
    if (existing) {
        console.info("[Trustindex] script already present");
        onLoaded?.();
        return ()=>{};
    }
    console.info("[Trustindex] injecting script", TRUSTINDEX_SCRIPT_SRC);
    const script = document.createElement("script");
    script.src = TRUSTINDEX_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = ()=>onLoaded?.();
    script.onerror = (e)=>console.error("[Trustindex] script load error", e);
    document.body.appendChild(script);
    return ()=>{
    // Keep the script around once loaded to avoid churn; removing/re-adding can cause more work.
    };
}
function mountTrustindexWidget(container, options = {}) {
    const { rootMargin = "250px", delayMs = 1200, onLoaded, immediate = false } = options;
    const widgetDiv = document.createElement("div");
    widgetDiv.setAttribute("data-widget-id", TRUSTINDEX_WIDGET_ID);
    widgetDiv.className = "trustindex-widget";
    container.appendChild(widgetDiv);
    console.info("[Trustindex] widget div appended");
    let cancelled = false;
    let cancelIdle = null;
    let delayTimer = null;
    const load = ()=>{
        if (cancelled) return;
        cancelIdle = runWhenIdle(()=>{
            if (cancelled) return;
            ensureTrustindexScript(onLoaded);
        });
    };
    if (immediate) {
        console.info("[Trustindex] immediate load requested");
        delayTimer = window.setTimeout(load, delayMs);
    } else {
        const observer1 = new IntersectionObserver(([entry])=>{
            if (!entry.isIntersecting) return;
            observer1.disconnect();
            delayTimer = window.setTimeout(load, delayMs);
        }, {
            rootMargin
        });
        console.info("[Trustindex] observing for viewport", {
            rootMargin
        });
        observer1.observe(container);
    }
    return ()=>{
        cancelled = true;
        // observer only exists when not immediate
        // @ts-ignore
        if (typeof observer !== "undefined") observer.disconnect();
        if (delayTimer) window.clearTimeout(delayTimer);
        cancelIdle?.();
        widgetDiv.remove();
    };
}
}),
];

//# sourceMappingURL=src_lib_trustindex_ts_24ab63c5._.js.map