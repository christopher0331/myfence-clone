"use client";

import Link from "next/link";
import { Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";

const hero =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4369.webp?tr=w-960,q-70";
const img4368 =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4368.webp?tr=w-720,q-65";
const img4367 =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4367.webp?tr=w-720,q-65";
const img4371 =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4371.webp?tr=w-720,q-65";
const img4369Card =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4369.webp?tr=w-720,q-65";

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
                Why MyFence Pre-Stains Dry Panels (and What Goes Wrong When You Don’t)
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Seattle’s wet season punishes wood. Here’s why we only stain fully dry panels in controlled conditions—and what happens when stain goes on damp boards.
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
              <OptimizedImage
                src={hero}
                alt="Fence panel with peeling stain due to poor application conditions"
                className="w-full h-[360px] object-cover rounded-lg"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            Pre-staining fence panels sounds simple—until Seattle rain, overnight dew, or cold snaps turn a good idea into peeling stain and blotchy boards. At MyFence, we only stain when wood moisture is right and drying conditions are controlled. Below, we show what happens when stain goes on damp panels and how proper prep prevents corrosion, flaking, and premature re-staining.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <OptimizedImage
              src={img4368}
              alt="Failed fence stain with peeling and dark blotches from moisture entrapment"
              className="w-full h-56 object-cover rounded-lg"
            />
            <OptimizedImage
              src={img4367}
              alt="Fence boards showing stain failure and early wood rot"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>

          <h2>What goes wrong when you stain wet panels</h2>
          <ul>
            <li>
              <strong>Moisture entrapment:</strong> Damp fibers prevent stain from penetrating, so the film sits on the surface and peels once sun hits it.
            </li>
            <li>
              <strong>Uneven absorption:</strong> Waterlogged areas reject pigment, creating light/dark stripes and early UV breakdown.
            </li>
            <li>
              <strong>Accelerated decay:</strong> Stain that never bonds allows water to keep cycling into the board, speeding mildew and soft rot.
            </li>
            <li>
              <strong>Hardware staining:</strong> Trapped moisture plus tannins can streak hardware and fasteners, ruining the finish.
            </li>
          </ul>

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

          <h2>How MyFence prevents stain failure</h2>
          <p>
            We control moisture and temperature before stain ever touches cedar. Panels are assembled under cover, checked with moisture meters (below 15%), and stained with even film build. After staining, panels cure in stable airflow—no surprise showers or overnight condensation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <OptimizedImage
              src={img4371}
              alt="Fence panels with failed stain showing corrosion and flaking"
              className="w-full h-56 object-cover rounded-lg"
            />
            <OptimizedImage
              src={img4369Card}
              alt="Close-up of peeling stain from staining in poor conditions"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>

          <h3>Our controlled pre-stain workflow</h3>
          <ol>
            <li>Inspect & meter: Only panels under 15% moisture get stained.</li>
            <li>Prep & clean: Dust-free surfaces for even absorption.</li>
            <li>Stain in cover: No rain, no dew, stable temps.</li>
            <li>Even application: Factory-consistent film build across every board.</li>
            <li>Cure time: Panels dry fully before loading for install.</li>
          </ol>

          <Card className="my-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Why it matters in Seattle</h3>
                  <p className="text-muted-foreground">
                    Our climate cycles from wet mornings to bright afternoons. Staining outside in those swings traps moisture and guarantees callbacks. Factory pre-stain avoids that risk and keeps your fence looking new longer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2>When you should insist on pre-stained, dry panels</h2>
          <p>
            If you’re investing in a premium cedar fence, insist on controlled pre-staining. It protects your warranty, extends re-coat timelines, and prevents the ugly peeling you see in these examples. For re-stains, schedule after a dry stretch and verify moisture before any coating goes on.
          </p>

          <p>
            The bottom line: stain is only as good as the condition of the wood below it. MyFence pre-stains panels under the right conditions so your fence leaves the yard ready to perform—and stays that way through Seattle winters.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/quote">Get a pre-stained fence quote</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Talk with our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreStainingDryPanels;

