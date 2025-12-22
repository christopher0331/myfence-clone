"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

const StreetSetback = () => {
  return (
    <>
      <Seo
        title="How Far Does My Fence Have To Be From The Street? | MyFence.com Blog"
        description="Understand Washington State setback requirements, municipal codes, and legal guidelines for fence placement near streets and sidewalks."
        canonical="https://myfence.com/blog/street-setback"
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">How Far Does My Fence Have To Be From The Street?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              This article is coming soon. Please check back later.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default StreetSetback;

