"use client";

import Script from "next/script";

/** Official Google Preferred Sources badge. Keep this outside overflow/height-capped parents. */
export default function GooglePreferredSourceButton() {
  return (
    <div className="w-max max-w-full overflow-visible py-1">
      <Script src="https://news.google.com/swg/js/v1/publisher.js" strategy="afterInteractive" />
      <div
        className="block overflow-visible leading-none"
        {...{ "google-add-preferred-source-btn": "" }}
        data-theme="light"
        data-lang="en"
        aria-label="Add MyFence as a Preferred Source on Google"
      />
    </div>
  );
}
