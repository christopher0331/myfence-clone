"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Defer Smartlook until interaction or a long idle timeout.
 * The recorder SDK is expensive on the main thread and blocks bfcache-friendly loads
 * if it runs during initial hydration.
 */
export default function DeferredSmartlook() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const load = () => {
      setShouldLoad(true);
      window.removeEventListener("scroll", load);
      window.removeEventListener("mousemove", load);
      window.removeEventListener("touchstart", load);
      window.removeEventListener("keydown", load);
    };

    const timer = window.setTimeout(load, 12000);

    window.addEventListener("scroll", load, { passive: true, once: true });
    window.addEventListener("mousemove", load, { passive: true, once: true });
    window.addEventListener("touchstart", load, { passive: true, once: true });
    window.addEventListener("keydown", load, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", load);
      window.removeEventListener("mousemove", load);
      window.removeEventListener("touchstart", load);
      window.removeEventListener("keydown", load);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script id="smartlook-init" strategy="lazyOnload">
      {`
        window.smartlook || (function (d) {
          var o = (window.smartlook = function () { o.api.push(arguments); });
          var h = d.getElementsByTagName("head")[0];
          var c = d.createElement("script");
          o.api = new Array();
          c.async = true;
          c.type = "text/javascript";
          c.charset = "utf-8";
          c.src = "https://web-sdk.smartlook.com/recorder.js";
          h.appendChild(c);
        })(document);
        window.smartlook("init", "96d5d4b768684eadbd4ef7c17d4310fb2e7cc980", { region: "eu" });
      `}
    </Script>
  );
}
