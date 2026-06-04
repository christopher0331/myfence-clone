/**
 * Paste into seattlefencequote.com (e.g. in index.html or root layout).
 * Reports document height to myfence.com when embedded in an iframe.
 *
 * Parent listens in: src/components/SeattleFenceQuoteEmbed.tsx
 *
 * Also required on seattlefencequote.com when ?source=myfence&embed=1 (or in iframe):
 * - Do NOT lock the app in a fixed-height box with overflow:auto on the root.
 * - Let the page grow naturally (min-height: 100vh, overflow: visible) so
 *   scrollHeight reflects the full wizard, not a small inner viewport.
 * - When embed=1, hide site chrome (header/footer/nav) so the tool matches the parent page.
 */
(function () {
  if (window.self === window.top) return;

  var PARENT_ORIGINS = [
    "https://myfence.com",
    "https://www.myfence.com",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ];

  function measureHeight() {
    var doc = document.documentElement;
    var body = document.body;
    return Math.max(
      doc ? doc.scrollHeight : 0,
      body ? body.scrollHeight : 0,
      doc ? doc.offsetHeight : 0,
      body ? body.offsetHeight : 0,
      window.innerHeight || 0
    );
  }

  function sendHeight() {
    var height = measureHeight();
    if (!height) return;
    var payload = { type: "seattlefencequote:resize", height: height };
    for (var i = 0; i < PARENT_ORIGINS.length; i++) {
      try {
        window.parent.postMessage(payload, PARENT_ORIGINS[i]);
      } catch (e) {
        /* ignore */
      }
    }
  }

  var scheduled = false;
  function scheduleSend() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      sendHeight();
    });
  }

  sendHeight();
  window.addEventListener("load", sendHeight);
  window.addEventListener("resize", scheduleSend);

  if (typeof ResizeObserver !== "undefined" && document.body) {
    new ResizeObserver(scheduleSend).observe(document.body);
    if (document.documentElement) {
      new ResizeObserver(scheduleSend).observe(document.documentElement);
    }
  }

  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || typeof data !== "object") return;
    if (data.type === "myfence-request-height") {
      sendHeight();
    }
  });

  setInterval(sendHeight, 1500);
})();
