"use client";

import Link from "next/link";
import { YouTubeShortEmbed, type YouTubeShort } from "@/components/YouTubeShortEmbed";

type VideoTag = {
  label: string;
  link: string;
};

type CityFencingCopy = {
  paragraphs: string[];
  videos: YouTubeShort[];
  showVideoTags?: boolean;
};

const CITY_FENCING: Record<string, CityFencingCopy> = {
  "North Bend": {
    paragraphs: [
      "See our mountain fencing expertise in action. From steep terrain installations to wildlife-resistant designs, we've spent decades perfecting the techniques needed for North Bend's challenging conditions.",
      "Every fence we build in North Bend is engineered for the unique demands of mountain living - snow loads, rocky soil, and wildlife pressure that lowland contractors never encounter.",
    ],
    videos: [{ videoId: "5TJUg_Umx4s", title: "North Bend Fencing" }],
  },
  "Bonney Lake": {
    paragraphs: [
      "Watch our expert fence installation process in Bonney Lake. We combine precision craftsmanship with cutting-edge Fence Genius technology to deliver superior results for your property.",
      "From Tehaleh's master-planned neighborhoods to Mountain Creek estates, every Bonney Lake fence we build reflects our commitment to quality, punctuality, and lasting value.",
    ],
    videos: [{ videoId: "5SicLB5q2kA", title: "Bonney Lake Fencing" }],
  },
  Renton: {
    paragraphs: [
      "Watch our professional fence installation process in Renton. We specialize in durable cedar systems engineered for the unique terrain and climate of the South End.",
      "From Highlands neighborhoods to Kennydale lakefront craftsman spindle-top privacy fences, we build quality fences that provide privacy, security, and lasting value for your Renton property.",
    ],
    showVideoTags: true,
    videos: [
      { videoId: "iUUnbPpWYvo", title: "Renton fence installation by MyFence.com" },
      { videoId: "1oVcsgarR6o", title: "Craftsman style cedar fence walkthrough in Kennydale, Renton by MyFence.com" },
    ],
  },
  Issaquah: {
    paragraphs: [
      "See our mountain-smart fence installations in Issaquah. From Tiger Mountain foothills to Squak Mountain neighborhoods, we build fences engineered for wildlife pressure and Pacific Northwest weather.",
      "Every Issaquah fence balances privacy with your property's natural beauty—protecting your outdoor living spaces while preserving the mountain views that make this community special.",
    ],
    showVideoTags: true,
    videos: [
      { videoId: "4Ls-aTAtQsw", title: "Issaquah fence installation by MyFence.com", mute: true },
      { videoId: "9Wm8SnTomK0", title: "Hog wire fence installation in Issaquah, WA by MyFence.com" },
      { videoId: "2_uI03s4nT8", title: "5 Foot Galvanized Hogwire Fence in Issaquah by MyFence.com" },
      { videoId: "stYDZ44dhkU", title: "This one trick can make your fence posts last longer! Cedar Fence in Issaquah" },
      { videoId: "krIoTEuYyrY", title: "Hog Wire Fence in Issaquah/High Valley, WA by MyFence.com" },
    ],
  },
  "Maple Valley": {
    paragraphs: [
      "Watch our expert fence installation process in Maple Valley. We combine traditional craftsmanship with exclusive Fence Genius technology to build fences that handle the Plateau's unique terrain.",
      "From Summit neighborhoods to Wilderness Rim slopes, every Maple Valley fence we build is engineered for maximum durability in our local climate.",
    ],
    videos: [
      { videoId: "Tct8oXAwQ04", title: "Maple Valley Fencing" },
      { videoId: "rjdljZMsQYo", title: "180 Foot Three Rail Picture Frame Fence in Maple Valley by MyFence.com" },
      { videoId: "fpBjboqMwZE", title: "HOA Compliant Fence in Maple Valley by MyFence.com" },
    ],
  },
  Covington: {
    paragraphs: [
      "Experience our professional fence installation in Covington. We specialize in durable cedar and hybrid systems designed to withstand the Pacific Northwest's varied weather conditions.",
      "From family-oriented neighborhoods to larger residential lots, every Covington fence we build combines engineering precision with local craftsmanship to protect and enhance your property.",
    ],
    videos: [
      { videoId: "2nysklK-lZ0", title: "Covington Fencing" },
      { videoId: "pN0wqFY3g9s", title: "Fence Contractor in Covington, WA by MyFence.com" },
    ],
  },
  SeaTac: {
    paragraphs: [
      "Watch our expert fence installation process in SeaTac. We specialize in high-density privacy solutions designed to handle the unique noise and environment challenges of the SeaTac plateau.",
      "From Angle Lake waterfronts to McMicken Heights neighborhoods, we build durable fences that provide peace, security, and lasting beauty for your SeaTac home.",
    ],
    showVideoTags: true,
    videos: [{ videoId: "iS2gYdbPO9k", title: "SeaTac Fencing" }],
  },
  Tukwila: {
    paragraphs: [
      "Watch our professional fence installation process in Tukwila. We specialize in precision-engineered cedar and hybrid systems built to handle the unique river valley terrain.",
      "From Riverton Heights hillsides to Foster neighborhood lots, we deliver quality fences that combine durability with local craftsmanship.",
    ],
    showVideoTags: true,
    videos: [{ videoId: "8nMPyw4JjW8", title: "Tukwila Fencing" }],
  },
  "Black Diamond": {
    paragraphs: [
      "Watch our professional fence installation process in Black Diamond. We specialize in Ten Trails HOA-approved designs and durable solutions for the foothills environment.",
      "From master-planned communities to historic properties, every Black Diamond fence we build is engineered for moisture, wind, and lasting beauty.",
    ],
    videos: [{ videoId: "1bbv1lVJv2Y", title: "Black Diamond Fencing" }],
  },
  Seattle: {
    paragraphs: [
      "Watch our professional fence installation process in Seattle. We build city-smart cedar and hybrid systems for tight urban lots, hillside grades, and the year-round moisture that defines the Emerald City.",
      "From Capitol Hill townhomes to Ravenna side yards and West Seattle slopes, every Seattle fence we install is measured with Fence Genius and built for privacy, durability, and neighborhood character.",
    ],
    showVideoTags: true,
    videos: [
      { videoId: "vQOFuZl-WfA", title: "Modern Horizontal Cedar Fence in Seattle by MyFence.com" },
      { videoId: "vDRIC7VGrz8", title: "Modern Cedar Fence Design with Steel Posts in Seattle by MyFence.com" },
      { videoId: "k1G4rPGG73k", title: "Homeowners in the Seattle area! Research your contractor before hiring!" },
      { videoId: "TbobuiYTbOc", title: "Installing Contour Following Cedar Fence Panels in Seattle" },
      { videoId: "o-Kb8q7d9Ys", title: "MyFence.com installing a stained cedar fence in the Seattle area!" },
      { videoId: "6DshwPn78FY", title: "MyFence.com installs a Cedar Trellis System near Seattle" },
      { videoId: "ElK4fA4nhEc", title: "MyFence.com: Best Fence Contractor in Seattle, WA" },
      { videoId: "1tfZDonClrA", title: "What does a fence cost? Find out at SeattleFenceQuote.com" },
    ],
  },
  Kirkland: {
    paragraphs: [
      "See a craftsman-style cedar install from our Kirkland crew. Waterfront lots, hillside grades, and HOA streets each get Fence Genius measurements so panels follow the grade instead of fighting it.",
      "From Juanita and Houghton to Bridle Trails and Totem Lake, we build cedar systems that handle lake moisture, mature landscaping, and the tighter setbacks common on Eastside infill lots.",
    ],
    videos: [
      {
        videoId: "8Dxosg41svU",
        title: "MyFence.com: Fence Contractor in Kirkland, WA. Craftsman Style Fence",
      },
    ],
  },
};

export default function CityFencingVideos({
  city,
  videoTags = [],
}: {
  city: string;
  videoTags?: VideoTag[];
}) {
  const section = CITY_FENCING[city];
  if (!section) return null;

  const manyVideos = section.videos.length > 2;

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{city} Fencing</h2>
          {manyVideos ? (
            <>
              <div className="space-y-4 mb-8">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.showVideoTags && videoTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {videoTags.map((tag) => (
                      <Link
                        key={tag.label}
                        href={tag.link}
                        className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-sm font-medium transition-colors"
                      >
                        {tag.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {section.videos.map((video) => (
                  <YouTubeShortEmbed key={video.videoId} {...video} hideControls />
                ))}
              </div>
            </>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.showVideoTags && videoTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {videoTags.map((tag) => (
                      <Link
                        key={tag.label}
                        href={tag.link}
                        className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-sm font-medium transition-colors"
                      >
                        {tag.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div
                className={
                  section.videos.length > 1 ? "w-full grid grid-cols-1 sm:grid-cols-2 gap-4" : "w-full"
                }
              >
                {section.videos.map((video) => (
                  <YouTubeShortEmbed key={video.videoId} {...video} hideControls />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
