"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  POSTHOG_HOST,
  POSTHOG_KEY,
  posthogSuperProperties,
  shouldSkipPosthogCapture,
} from "@/lib/posthogConfig";

/**
 * Defer PostHog (session replay + heatmaps) until interaction or a long idle timeout.
 * Same load strategy as the old Smartlook snippet so the recorder does not compete
 * with first-paint / hydration.
 *
 * Loads only when this deployment has a project key. Other client sites copy this
 * component and set NEXT_PUBLIC_POSTHOG_KEY + NEXT_PUBLIC_SITE_ID — never the
 * MyFence token.
 */
export default function DeferredPostHog() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!POSTHOG_KEY || shouldSkipPosthogCapture()) return;

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

  if (!POSTHOG_KEY || shouldSkipPosthogCapture() || !shouldLoad) return null;

  const superProps = posthogSuperProperties();

  return (
    <Script id="posthog-init" strategy="lazyOnload">
      {`
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        window.posthog.init(${JSON.stringify(POSTHOG_KEY)}, {
          api_host: ${JSON.stringify(POSTHOG_HOST)},
          ui_host: "https://us.posthog.com",
          defaults: "2025-05-24",
          person_profiles: "identified_only",
          session_recording: { maskAllInputs: true },
          loaded: function (ph) {
            ph.register(${JSON.stringify(superProps)});
            var queues = [window.__phEventQueue, window.__mfPosthogQueue];
            window.__phEventQueue = [];
            window.__mfPosthogQueue = [];
            for (var q = 0; q < queues.length; q++) {
              var list = queues[q];
              if (!list || !list.length) continue;
              for (var i = 0; i < list.length; i++) {
                ph.capture(list[i].event, list[i].properties);
              }
            }
          }
        });
      `}
    </Script>
  );
}
