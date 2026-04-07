"use client";

import Link from "next/link";

const LEFT_IMAGE_URL =
  "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Maple-Valley/Daybreak-at-River-Ridge-Steel-Cedar-Hybrid-4.webp";
const RIGHT_IMAGE_URL =
  "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Kent/Kent-Steel-Cedar-Hybrid-1.webp";

export const SteelSystemsAnnouncementSection = () => {
  return (
    <section className="container py-8 md:py-12">
      <div
        className="rounded-xl overflow-hidden shadow-elevated border"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          minHeight: 460,
        }}
      >
        {/* Left image */}
        <div style={{ flex: "0 0 30%", position: "relative", overflow: "hidden" }}>
          <img
            src={LEFT_IMAGE_URL}
            alt="Steel and cedar hybrid fence installed in Maple Valley"
            loading="lazy"
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Center content */}
        <div
          style={{
            flex: "1 1 40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 24px",
            textAlign: "center",
            background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)",
          }}
        >
          <span
            className="text-muted-foreground"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Now Available
          </span>

          <h2
            className="text-foreground"
            style={{
              marginTop: 12,
              fontSize: "clamp(16px, 2.2vw, 28px)",
              fontWeight: 800,
              lineHeight: 1.25,
              maxWidth: 420,
            }}
          >
            MyFence.com Now Offering Steel Fence Posts &amp; Steel Fence Systems
          </h2>

          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/#contact-form"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                backgroundColor: "#f97316",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 8,
                textDecoration: "none",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "#ea580c")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "#f97316")}
            >
              Contact Us
            </Link>
            <Link
              href="/fence-styles/cedar-steel-hybrid-fence"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                backgroundColor: "transparent",
                color: "hsl(var(--foreground))",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 8,
                textDecoration: "none",
                border: "2px solid hsl(var(--border))",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "hsl(var(--muted))")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "transparent")}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div style={{ flex: "0 0 30%", position: "relative", overflow: "hidden" }}>
          <img
            src={RIGHT_IMAGE_URL}
            alt="Steel and cedar hybrid fence installed in Kent"
            loading="lazy"
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
};
