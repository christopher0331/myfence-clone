// Centralized image registry for fence styles
// Uses existing assets and public uploads so pages can import from one place

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
  src: string;
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
      {
        src: "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png",
        alt: "3-rail picture frame fence detail in Seattle",
      },
      {
        src: "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png",
        alt: "Solid board picture frame cedar fence panel close-up",
      },
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
