import { useEffect, useRef } from "react";

interface TrustPilotReviewsProps {
  className?: string;
}

const TrustPilotReviews = ({ className = "" }: TrustPilotReviewsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TrustPilot script if not already loaded
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    } else {
      const script = document.createElement("script");
      script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      script.onload = () => {
        if (window.Trustpilot && ref.current) {
          window.Trustpilot.loadFromElement(ref.current, true);
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={className}>
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="54ad5defc6454f065c28af8b"
        data-businessunit-id="677f5b7c0cdac74c1ad34a14"
        data-style-height="240px"
        data-style-width="100%"
        data-theme="light"
        data-stars="4,5"
        data-review-languages="en"
      >
        <a href="https://www.trustpilot.com/review/myfence.com" target="_blank" rel="noopener noreferrer">
          Trustpilot
        </a>
      </div>
    </div>
  );
};

// Extend window interface for TypeScript
declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, refresh: boolean) => void;
    };
  }
}

export default TrustPilotReviews;
