// Centralized image registry for fence styles
// Uses existing assets and public uploads so pages can import from one place

import type { StaticImageData } from "next/image";
import aluminumSlat from "@/assets/fences/aluminum-slat.jpg";
import cedar from "@/assets/fences/cedar.jpg";
import chainlink from "@/assets/fences/chainlink.jpg";
import horizontalCedar from "@/assets/fences/horizontal-cedar.jpg";
import vinyl from "@/assets/fences/vinyl.jpg";
import wroughtIron from "@/assets/fences/wrought-iron.jpg";

export type FenceStyleKey =
  | "picture-frame"
  | "horizontal-cedar"
  | "cedar"
  | "vinyl"
  | "chainlink"
  | "aluminum-slat"
  | "wrought-iron";

export interface FenceImageInfo {
  src: string | StaticImageData;
  alt: string;
}

export interface FenceStyleImages {
  name: string;
  hero: FenceImageInfo;
  gallery: FenceImageInfo[];
}

export const FENCE_STYLE_IMAGES: Record<FenceStyleKey, FenceStyleImages> = {
  "picture-frame": {
    name: "Picture Frame Fence",
    hero: {
      src: "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
      alt: "Picture frame cedar fence installed in Seattle by MyFence.com",
    },
    gallery: [
      { src: "/lovable-uploads/ad4ca7a4-6910-4508-a789-c7a367954f3e.png", alt: "Picture frame cedar fence on rock retaining wall" },
      { src: "/lovable-uploads/90a2b7d3-4ef7-402b-bc96-3ef1639df02c.png", alt: "Picture frame cedar fence with post caps, long run" },
      { src: "/lovable-uploads/2ac212df-4601-45ef-8adf-5332eab86f75.png", alt: "Picture frame fence along backyard with cap and trim" },
      { src: "/lovable-uploads/7586a395-5060-4524-a596-fd70bb61c275.png", alt: "Neighborhood corner lot picture frame cedar fence with gate" },
      { src: "/lovable-uploads/c13a6e02-2011-4437-a7cb-5de49f6f62b9.png", alt: "Wooded property picture frame fence showing cap and trim detail" },
      { src: "/lovable-uploads/bc08ad97-c013-4147-9f4e-4bf7d991ee7f.png", alt: "Picture frame fence through trees with consistent top line" },
      { src: "/lovable-uploads/07de637e-347f-4731-ae87-f86ca8fec0cf.png", alt: "Wide view of picture frame cedar fence and double gate" },
      { src: "/lovable-uploads/18bcf8ea-1a02-4a94-8c2d-8b4364b7cd7e.png", alt: "Fence Genius planning visualization with picture frame fence" },
      { src: "/lovable-uploads/129dbf8c-8581-4f19-b2d0-2813d517f092.png", alt: "Picture frame fence and Fence Genius grade-following model" },
      { src: "/lovable-uploads/9f934060-aa7f-4147-9100-775bb5867e91.png", alt: "Picture frame fence with double gate and Fence Genius design" },
      { src: "/lovable-uploads/a06e4397-cdd0-4a58-9755-5aa1b0afd8c2.png", alt: "Backyard picture frame cedar fence with gate and arbor" },
      { src: "/lovable-uploads/aee63bcb-0a8d-4983-85a3-2ecff1277f53.png", alt: "Close-up of picture frame fence line with post caps" },
      { src: "/lovable-uploads/1437b79e-8006-437b-b489-6428ff12ade9.png", alt: "Picture frame fence corner with pergola and flowering tree" },
      { src: "/lovable-uploads/7b4d4dc3-c1cc-4f43-9fb0-fbcd570a1b17.png", alt: "Pergola detail over picture frame fence" },
      { src: "/lovable-uploads/200fbe25-bf04-4245-812e-ab3d518b830d.png", alt: "Long run of picture frame fence along lawn" },
      { src: "/lovable-uploads/76312c18-6afb-42d7-916a-5dae8fceadbb.png", alt: "Picture frame fence beside garden plantings" },
      { src: "/lovable-uploads/bd583fb2-b610-4156-bd27-3e7f528192e1.png", alt: "Garden-side view of picture frame cedar fence" },
      { src: "/lovable-uploads/e0a73408-c5ab-4748-9378-9494e3f88cbd.png", alt: "Picture frame cedar fence gate with hardware" },
      { src: "/lovable-uploads/b19c0981-a9da-4706-acfa-30228d21d207.png", alt: "Team member on-site with picture frame cedar fence" },
      { src: "/lovable-uploads/f4ccaaf1-a657-4fe7-aae6-8c3b61025cde.png", alt: "Team member with newly installed picture frame fence" },
      { src: "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png", alt: "3-rail picture frame fence detail in Seattle" },
      { src: "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png", alt: "Solid board picture frame cedar fence panel close-up" },
    ],
  },
  "horizontal-cedar": {
    name: "Horizontal Cedar Fence",
    hero: { src: horizontalCedar, alt: "Horizontal cedar fence panel" },
    gallery: [
      { src: horizontalCedar, alt: "Horizontal cedar fence panel" },
      { src: cedar, alt: "Cedar fence material detail" },
    ],
  },
  cedar: {
    name: "Cedar Fence",
    hero: { src: cedar, alt: "Classic cedar privacy fence" },
    gallery: [
      { src: cedar, alt: "Cedar privacy fence panel" },
      { src: horizontalCedar, alt: "Horizontal cedar style variant" },
    ],
  },
  chainlink: {
    name: "Chain Link Fence",
    hero: { src: chainlink, alt: "Durable chain link fence section" },
    gallery: [
      { src: chainlink, alt: "Chain link fence detail" },
      { src: chainlink, alt: "Chain link fence gate" },
    ],
  },
  vinyl: {
    name: "Vinyl Fence",
    hero: { src: vinyl, alt: "Low-maintenance vinyl privacy fence" },
    gallery: [
      { src: vinyl, alt: "Vinyl privacy fence panel" },
      { src: vinyl, alt: "Vinyl fence detail" },
    ],
  },
  "aluminum-slat": {
    name: "Aluminum Slat Fence",
    hero: { src: aluminumSlat, alt: "Modern aluminum slat fence" },
    gallery: [
      { src: aluminumSlat, alt: "Aluminum slat fence panel" },
      { src: aluminumSlat, alt: "Aluminum fence detail" },
    ],
  },
  "wrought-iron": {
    name: "Wrought Iron Fence",
    hero: { src: wroughtIron, alt: "Elegant wrought iron fence" },
    gallery: [
      { src: wroughtIron, alt: "Wrought iron fence detail" },
      { src: wroughtIron, alt: "Wrought iron gate" },
    ],
  },
};

export const getFenceStyleImages = (key: FenceStyleKey): FenceStyleImages => {
  return FENCE_STYLE_IMAGES[key];
};
