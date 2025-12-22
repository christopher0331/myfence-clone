"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

const FenceOwnership = () => {
  return (
    <>
      <Seo
        title="How to Tell If a Fence Is Yours or Neighbors | MyFence.com Blog"
        description="Learn how to determine fence ownership, understand property boundaries, and resolve disputes with neighbors in Washington State."
        canonical="https://myfence.com/blog/fence-ownership"
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
            <h1 className="text-4xl font-bold mb-4">How to Tell If a Fence Is Yours or Neighbors</h1>
            <p className="text-xl text-muted-foreground mb-8">
              This article is coming soon. Please check back later.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default FenceOwnership;

