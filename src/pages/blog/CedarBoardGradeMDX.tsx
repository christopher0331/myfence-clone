import { useEffect } from "react";
import MDXContent from "./CedarBoardGrade.mdx";
import { ArticleSummary } from "@/components/ArticleSummary";

const CedarBoardGradeMDX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Choosing Cedar Fence Board Grade: A Complete Guide";
  const pageContent = `Learn about the different cedar fence board grades MyFence.com offers, including 1x4x6 #1 - 2 Face, 1x6x6 #1 & Better, and Clear Cedar options. Understand the benefits of different board widths, how shrinkage affects fence appearance over time, and which grade is best for your specific fence style and budget.`;

  return (
    <div className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none
          prose-headings:font-bold
          prose-h1:text-4xl prose-h1:mb-4 prose-h1:text-foreground
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-foreground
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
          prose-p:text-muted-foreground prose-p:leading-7 prose-p:mb-4
          prose-ul:text-muted-foreground prose-ul:my-4
          prose-li:my-2
          prose-strong:text-foreground prose-strong:font-semibold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8">
          <MDXContent />
        </div>
        
        <div className="mt-12">
          <ArticleSummary 
            pageTitle={pageTitle}
            pageContent={pageContent}
          />
        </div>
      </article>
    </div>
  );
};

export default CedarBoardGradeMDX;
