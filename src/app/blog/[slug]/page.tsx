import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import Seo from "@/components/Seo";
import { SITE_CONFIG } from "@/constants/siteConfig";
import type { ComponentType } from "react";

// Dynamic imports for blog post components
const blogPostComponents: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  "steel-vs-wood-posts": () => import("@/components/pages/blog/SteelVsWoodPosts"),
  "cedar-aluminum-hybrid-fence-mdx": () => import("@/components/pages/blog/CedarAluminumHybridFenceMDX"),
  "cedar-board-grade": () => import("@/components/pages/blog/CedarBoardGrade"),
  "virtual-quote-tool": () => import("@/components/pages/blog/VirtualQuoteTool"),
  "six-ft-fence-cost": () => import("@/components/pages/blog/SixFtFenceCost"),
  "wooden-fence-cost2025": () => import("@/components/pages/blog/WoodenFenceCost2025"),
  "neighbor-fence-cost-split": () => import("@/components/pages/blog/NeighborFenceCostSplit"),
  "fence-cleaning-staining": () => import("@/components/pages/blog/FenceCleaningStaining"),
  "how-to-stain-fence": () => import("@/components/pages/blog/HowToStainFence"),
  "fence-ownership": () => import("@/components/pages/blog/FenceOwnership"),
  "street-setback": () => import("@/components/pages/blog/StreetSetback"),
  "property-line": () => import("@/components/pages/blog/PropertyLine"),
  "material-cost-2025": () => import("@/components/pages/blog/MaterialCost2025"),
  "onsite-staining-vs-pre-staining": () => import("@/components/pages/blog/PreStainingDryPanels"),
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.id === slug);

  if (!article) {
    return {
      title: "Blog Post Not Found | MyFence.com",
    };
  }

  return {
    title: `${article.title} | MyFence.com Blog`,
    description: article.description,
    alternates: {
      canonical: `https://myfence.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.id === slug);

  if (!article) {
    notFound();
  }

  const BlogPostComponent = blogPostComponents[slug];
  
  if (!BlogPostComponent) {
    // If component doesn't exist, show a placeholder or redirect
    notFound();
  }

  const Component = (await BlogPostComponent()).default;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}${article.image}`,
    },
    "author": {
      "@type": "Organization",
      "name": SITE_CONFIG.fullName,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.fullName,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/myfence-logo.png`,
      },
    },
  };

  return (
    <>
      <Seo
        title={`${article.title} | MyFence.com Blog`}
        description={article.description}
        canonical={`https://myfence.com/blog/${slug}`}
        image={article.image}
        structuredData={structuredData}
      />
      <Component />
    </>
  );
}

