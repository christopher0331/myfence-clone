"use client";

import Link from "next/link";
import { Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const hero =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4369.webp?tr=w-960,q-70";
const img4368 =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4368.webp?tr=w-720,q-65";
const img4367 =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4367.webp?tr=w-720,q-65";
const img4371 =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4371.webp?tr=w-720,q-65";
const img4366 =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4366.webp?tr=w-720,q-65";

const PreStainingDryPanels = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                Maintenance
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Onsite Fence Staining Problems vs Pre Staining Components
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                At MyFence.com we properly dry every board, then stain all uncut sides before assembly. Here’s why pre staining beats onsite staining in Seattle’s wet, unpredictable weather.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min read
                </span>
                <span>January 2026</span>
              </div>
            </div>
            <div>
              <AspectRatio ratio={4 / 3}>
                <OptimizedImage
                  src={hero}
                  alt="Fence panel with peeling stain due to poor application conditions"
                  className="w-full h-full object-cover rounded-lg"
                  loading="eager"
                  fetchPriority="high"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Lead section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            At MyFence.com we are properly drying all fence boards and components, then individually staining all uncut sides for total stain and sealing. Drying the material first, ensures that the stain is adequately absorbed into the wood.
          </p>
          <p>
            The issue with onsite staining after the fence has been built, is you can only spray onto the visible surfaces. The hidden surfaces between the fence boards and behind the hidden components are no longer able to be stained. Leaving you with a weak point in your fence. Not to mention there can be onsite staining complications. Such as freak rain storms, cold snaps, or overnight dew which can impact or ruin the initial stain applied to the cedar fence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <AspectRatio ratio={4 / 3}>
              <OptimizedImage
                src={img4368}
                alt="Failed fence stain with peeling and dark blotches from moisture entrapment"
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
            <AspectRatio ratio={4 / 3}>
              <OptimizedImage
                src={img4367}
                alt="Fence boards showing stain failure and early wood rot"
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>

          <Card className="my-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Real-world failure</h3>
                  <p className="text-muted-foreground">
                    The photos above show peeling film and blackened boards—classic signs of stain applied before panels were dry. Re-sanding and re-staining costs more than getting it right the first time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <AspectRatio ratio={4 / 3}>
              <OptimizedImage
                src={img4371}
                alt="Fence panels with failed stain showing corrosion and flaking"
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
            <AspectRatio ratio={3 / 4}>
              <OptimizedImage
                src={img4366}
                alt="Fence boards showing stain failure from poor onsite conditions"
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreStainingDryPanels;

