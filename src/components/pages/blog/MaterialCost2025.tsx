"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

const MaterialCost2025 = () => {
  return (
    <>
      <Seo
        title="What Is The Material Cost For Wood Fence in 2025? | MyFence.com Blog"
        description="Get detailed pricing for wood fence materials in 2025, including cedar, pine, and composite options with current market rates."
        canonical="https://myfence.com/blog/material-cost-2025"
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
            <h1 className="text-4xl font-bold mb-4">What Is The Material Cost For Wood Fence in 2025?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              This article is coming soon. Please check back later.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MaterialCost2025;

