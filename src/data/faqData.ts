import { Hammer, DollarSign, Paintbrush, Wrench, Shield, LucideIcon } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "installation",
    title: "Installation Process",
    icon: Hammer,
    faqs: [
      {
        question: "How long does a typical fence installation take?",
        answer: "Most residential fence projects take 1-3 days depending on size and complexity. Our Fence Genius technology allows us to manufacture panels off-site, reducing installation time by 30-50% compared to traditional methods. We'll provide an exact timeline during your on-site consultation."
      },
      {
        question: "Do I need to be home during installation?",
        answer: "While it's not required, we recommend being available for the initial walkthrough and final inspection. Our team will communicate daily progress and can work independently once the project scope is confirmed. We'll always notify you before accessing your property."
      },
      {
        question: "What preparations should I make before installation?",
        answer: "Clear the fence line of any obstacles, toys, or outdoor furniture. Mark any underground utilities (we can arrange for locates). Ensure our team has access to the work area and a power outlet within 100 feet. We'll handle the rest, including post-installation cleanup."
      },
      {
        question: "Do you install fences year-round?",
        answer: "Yes! We install fences throughout the year in the Seattle area. Our Fence Genius manufacturing process allows us to build panels indoors regardless of weather. While we prefer dry conditions for installation, we can work in light rain and adjust schedules for severe weather."
      },
      {
        question: "How do you handle slopes and uneven terrain?",
        answer: "This is where Fence Genius technology shines. Our software calculates exact measurements for slope-following panels, and our manufacturing system cuts each piece to match your property's contours perfectly. This ensures no gaps at the bottom and a professional appearance on any terrain."
      }
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Quotes",
    icon: DollarSign,
    faqs: [
      {
        question: "How much does a wood fence cost in Seattle?",
        answer: "Wood fence pricing typically ranges from $35-65 per linear foot depending on style, height, and materials. A standard 6-foot cedar fence averages $45-55 per foot installed. Use our Virtual Quote Tool for an instant estimate, then we'll provide a final quote using Fence Genius measurements."
      },
      {
        question: "Is the Virtual Quote Tool estimate accurate?",
        answer: "Our Virtual Quote Tool provides estimates within 10-15% of the final price for most projects. The final quote uses Fence Genius technology to account for exact measurements, slope variations, and site-specific factors. There are no surprise charges—you'll know the final price before we start."
      },
      {
        question: "Do you offer financing options?",
        answer: "Yes! We partner with Wisetack to offer flexible financing with rates as low as 0% APR for qualified customers. Apply online in minutes with no impact to your credit score until you're approved. We also offer seasonal discounts—check our Discounts page for current promotions."
      },
      {
        question: "What's included in your pricing?",
        answer: "Our quotes vary based on your specifications, but as a base, our quote covers all material, labor, and removal when necessary. If you are wanting soil removed or other options to be quoted then that can be arranged. We use grade #1 cedar, stainless steel fasteners, exterior screws, and jumbo pressure treated 4x4 fence posts. Optional upgrades like clear cedar, board-on-board, or pre staining are priced seperately. Our 3-year craftsmanship warranty covers hardware and fastener failures."
      },
      {
        question: "Do you charge for estimates?",
        answer: "No, all quotes are completely free with no obligation. Use our Virtual Quote Tool for an instant online estimate, or schedule an on-site consultation where we'll use Fence Genius technology to provide an exact quote. We never charge for estimates or consultations."
      }
    ]
  },
  {
    id: "materials",
    title: "Materials & Styles",
    icon: Paintbrush,
    faqs: [
      {
        question: "What fence styles do you offer?",
        answer: "We specialize in cedar wood fences including Picture Frame, 3-Rail Picture Frame, Horizontal Lattice, Solid Board, Craftsman Style, Horizontal, and Picket fences. We also offer hogwire panels with black or galvanized frames. Each style can be customized with various heights and upgrade options."
      },
      {
        question: "What's the difference between standard and clear cedar?",
        answer: "Standard cedar has natural knots and color variations—it's durable and cost-effective. Clear cedar is premium grade with minimal knots, uniform color, and smoother grain. Clear cedar costs about 20-30% more but offers a refined appearance. Both are rot-resistant and perfect for the Pacific Northwest."
      },
      {
        question: "Should I choose board-on-board or solid board?",
        answer: "Board-on-Board provides not only added structure, but unmatched privacy with overlapping pickets. Say goodbye to the days of seeing through the vertical gaps between fence boards. This is ideal if you want added privacy for your backyard and is a common upgrade. Solid board on the other hand is more of a uniform appearance, tight fitting boards but may still yield vertical gaps between fence boards. This is a budget friendly option. Both are excellent choices; we recommend board-on-board for neighborly privacy."
      },
      {
        question: "Can I mix fence styles on my property?",
        answer: "Absolutely! Many customers combine styles—for example, solid board for privacy in the backyard and picket or horizontal lattice in the front for curb appeal. We can design a cohesive look using consistent colors, post styles, and heights while varying the panel designs."
      },
      {
        question: "Do you install metal or vinyl fences?",
        answer: "We specialize in wood fencing and offer metal hogwire accents, but we don't install all-metal or vinyl fencing. Our expertise is in premium wood construction using Fence Genius technology. If you're interested in metal or vinyl, we can refer you to trusted partners in the Seattle area."
      }
    ]
  },
  {
    id: "maintenance",
    title: "Maintenance & Care",
    icon: Wrench,
    faqs: [
      {
        question: "How often should I stain or seal my fence?",
        answer: "In the Seattle area's wet climate, we recommend staining or sealing your fence every 2-3 years. New cedar should be allowed to weather for 6-12 months before the first application. We offer professional staining services and can recommend products specifically formulated for the Pacific Northwest."
      },
      {
        question: "What maintenance does a cedar fence require?",
        answer: "Cedar is naturally rot-resistant and low-maintenance. Annual tasks include removing debris from the base, checking for loose boards or hardware, and hosing down to remove dirt or mildew. Every 2-3 years, clean, sand lightly if needed, and apply stain or sealant to maintain appearance and longevity."
      },
      {
        question: "Will my fence turn gray over time?",
        answer: "Yes, untreated cedar naturally weathers to a silver-gray color due to UV exposure—this doesn't harm the wood. Many homeowners embrace this natural look. To maintain the original warm tones, apply a UV-blocking stain or sealant every 2-3 years. We offer pre-staining services during installation."
      },
      {
        question: "How do I prevent moss and mildew?",
        answer: "Regular cleaning and proper staining help prevent moss and mildew. In shaded areas, trim back vegetation for airflow and sunlight. Use a fence cleaner with mildewcide before staining. Our Fence Genius panels are built with proper spacing for drainage, reducing moisture buildup."
      },
      {
        question: "What should I do if a board gets damaged?",
        answer: "Individual boards can be replaced without rebuilding the entire fence. Contact us for board replacement—our Fence Genius system maintains exact specifications, so replacement pieces match perfectly. Board replacements are not covered under our craftsmanship warranty as it does not cover wood products."
      }
    ]
  },
  {
    id: "warranty",
    title: "Warranties & Guarantees",
    icon: Shield,
    faqs: [
      {
        question: "What does your 3-year warranty cover?",
        answer: "Our 3-year craftsmanship warranty covers workmanship defects, hardware failures, and fastener issues. This includes failing connections, hardware defects, or fastener problems. The warranty does not cover wood products, normal wear from weather, or lack of maintenance. Full warranty details are provided with every contract."
      },
      {
        question: "Are materials covered under warranty?",
        answer: "Hardware and fasteners are covered under our 3-year craftsmanship warranty. This includes defective hardware or fastener failures. Wood products are not covered under warranty. Cedar's natural characteristics like knots, grain patterns, color variations, warping, or weathering are not defects and are not covered."
      },
      {
        question: "What happens if I have an issue after installation?",
        answer: "Contact us immediately! We respond to warranty claims within 48 hours. If covered, we'll repair or replace at no charge. Even outside warranty, we offer discounted repair services for our customers. All of our panels are built through Fence Genius software, giving you a lifelong technology asset—if a tree breaks panels or a car crashes through, we can easily rebuild them the exact same way offsite and bring the panels back to be swapped out."
      },
      {
        question: "Does the warranty transfer to new homeowners?",
        answer: "Yes! Our 3-year craftsmanship warranty is transferable to new property owners if you sell your home. This adds value to your property and gives buyers confidence. Notify us of the ownership change, and we'll update our records. All original warranty terms remain in effect for the full 3-year period."
      },
      {
        question: "How is your warranty different from competitors?",
        answer: "We offer a comprehensive 3-year craftsmanship warranty that covers hardware and fastener failures. Our warranty reflects confidence in our quality workmanship and attention to detail. We stand behind the installation work and use premium hardware to ensure long-lasting performance. We respond to warranty claims within 48 hours."
      }
    ]
  }
];

// Generate FAQ JSON-LD schema from categories
export const generateFaqSchema = (categories: FAQCategory[] = faqCategories) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap(category => 
    category.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  )
});
