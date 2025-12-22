"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

const PropertyLine = () => {
  return (
    <>
      <Seo
        title="Can You Build a Fence on the Property Line? | MyFence.com Blog"
        description="Discover the rules and regulations for building fences on property lines, including permits, neighbor agreements, and legal considerations."
        canonical="https://myfence.com/blog/property-line"
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
            <h1 className="text-4xl font-bold mb-4">Can You Build a Fence on the Property Line?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              This article is coming soon. Please check back later.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertyLine;

