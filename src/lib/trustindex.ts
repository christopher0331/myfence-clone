export const TRUSTINDEX_WIDGET_ID = "d273c79511b386516c861cd858a";
export const TRUSTINDEX_SCRIPT_SRC = `https://cdn.trustindex.io/loader.js?${TRUSTINDEX_WIDGET_ID}`;

type MountOptions = {
  /** Only load the script when the widget scrolls near the viewport */
  rootMargin?: string;
  /** If true, load immediately without intersection gating */
  immediate?: boolean;
  /** Delay before loading the script after intersection */
  delayMs?: number;
  /** Called once the loader script is loaded (or already present) */
  onLoaded?: () => void;
};

function runWhenIdle(cb: () => void, timeoutMs = 1500) {
  const w = window as unknown as {
    requestIdleCallback?: (fn: () => void, opts?: { timeout: number }) => number;
    cancelIdleCallback?: (id: number) => void;
  };

  if (w.requestIdleCallback) {
    const id = w.requestIdleCallback(cb, { timeout: timeoutMs });
    return () => w.cancelIdleCallback?.(id);
  }

  const t = window.setTimeout(cb, 0);
  return () => window.clearTimeout(t);
}

function ensureTrustindexScript(onLoaded?: () => void) {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src^="${TRUSTINDEX_SCRIPT_SRC}"]`,
  );

  if (existing) {
    console.info("[Trustindex] script already present");
    onLoaded?.();
    return () => {};
  }

  console.info("[Trustindex] injecting script", TRUSTINDEX_SCRIPT_SRC);
  const script = document.createElement("script");
  script.src = TRUSTINDEX_SCRIPT_SRC;
  script.async = true;
  script.defer = true;
  script.onload = () => onLoaded?.();
  script.onerror = (e) => console.error("[Trustindex] script load error", e);
  document.body.appendChild(script);

  return () => {
    // Keep the script around once loaded to avoid churn; removing/re-adding can cause more work.
  };
}

export function mountTrustindexWidget(container: HTMLElement, options: MountOptions = {}) {
  const { rootMargin = "250px", delayMs = 1200, onLoaded, immediate = false } = options;

  const widgetDiv = document.createElement("div");
  widgetDiv.setAttribute("data-widget-id", TRUSTINDEX_WIDGET_ID);
  widgetDiv.className = "trustindex-widget";
  container.appendChild(widgetDiv);
  console.info("[Trustindex] widget div appended");

  let cancelled = false;
  let cancelIdle: (() => void) | null = null;
  let delayTimer: number | null = null;

  const load = () => {
    if (cancelled) return;
    cancelIdle = runWhenIdle(() => {
      if (cancelled) return;
      ensureTrustindexScript(onLoaded);
    });
  };

  if (immediate) {
    console.info("[Trustindex] immediate load requested");
    delayTimer = window.setTimeout(load, delayMs);
  } else {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        delayTimer = window.setTimeout(load, delayMs);
      },
      { rootMargin },
    );

    console.info("[Trustindex] observing for viewport", { rootMargin });
    observer.observe(container);
  }

  return () => {
    cancelled = true;
    // observer only exists when not immediate
    // @ts-ignore
    if (typeof observer !== "undefined") observer.disconnect();
    if (delayTimer) window.clearTimeout(delayTimer);
    cancelIdle?.();
    widgetDiv.remove();
  };
}


