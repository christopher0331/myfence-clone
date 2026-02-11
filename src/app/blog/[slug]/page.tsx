import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import Seo from "@/components/Seo";
import { SITE_CONFIG } from "@/constants/siteConfig";
import type { ComponentType } from "react";
import { getMdxBlogPosts } from "@/lib/blog";

// Dynamic imports for legacy blog post components
const blogPostComponents: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  "steel-vs-wood-posts": () => import("@/components/pages/blog/SteelVsWoodPosts"),
  "cedar-steel-hybrid-fence": () => import("@/components/pages/blog/CedarAluminumHybridFenceMDX"),
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
  const mdxSlugs = getMdxBlogPosts().map((p) => ({ slug: p.slug }));
  const legacySlugs = blogArticles.map((a) => ({ slug: a.id }));
  const seen = new Set(mdxSlugs.map((s) => s.slug));
  const uniqueLegacy = legacySlugs.filter((s) => !seen.has(s.slug));
  return [...mdxSlugs, ...uniqueLegacy];
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    const fm = mod.frontmatter || {};
    if (fm.title) {
      return {
        title: `${fm.title} | MyFence.com Blog`,
        description: fm.description || "",
        alternates: { canonical: `https://myfence.com/blog/${slug}` },
      };
    }
  } catch {
    // Not an MDX post, try legacy
  }
  const article = blogArticles.find((a) => a.id === slug);
  if (!article) return { title: "Blog Post Not Found | MyFence.com" };
  return {
    title: `${article.title} | MyFence.com Blog`,
    description: article.description,
    alternates: { canonical: `https://myfence.com/blog/${slug}` },
  };
}

function getImageUrl(image: string | { src?: string }): string {
  if (typeof image === "string") return image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`;
  return `${SITE_CONFIG.url}${(image as { src?: string })?.src ?? ""}`;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Try MDX from Studio (src/content/blog/*.mdx) - compiled at build time via @next/mdx
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    const Post = mod.default;
    const fm = mod.frontmatter || {};
    const title = fm.title || "Untitled";
    const description = fm.description || "";
    const image = fm.image || fm.featured_image || "";
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      image: image ? { "@type": "ImageObject", url: image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}` } : undefined,
      author: { "@type": "Organization", name: SITE_CONFIG.fullName },
      publisher: { "@type": "Organization", name: SITE_CONFIG.fullName, logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/myfence-logo.png` } },
    };
    return (
      <>
        <Seo
          title={`${title} | MyFence.com Blog`}
          description={description}
          canonical={`https://myfence.com/blog/${slug}`}
          image={image ? (image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`) : undefined}
          structuredData={structuredData}
        />
        <div className="min-h-screen bg-background">
          <section className="bg-gradient-to-b from-primary/5 to-background py-16">
            <div className="container max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
              <p className="text-xl text-muted-foreground">{description}</p>
              <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                {fm.category && <span className="bg-primary/10 text-primary px-2 py-1 rounded">{fm.category}</span>}
                {fm.readTime && <span>{fm.readTime}</span>}
                {fm.publishDate && <span>{fm.publishDate}</span>}
              </div>
            </div>
          </section>
          <section className="container max-w-3xl py-12 prose prose-lg dark:prose-invert max-w-none">
            <Post />
          </section>
        </div>
      </>
    );
  } catch {
    // Not an MDX post, fall through to legacy
  }

  // Fall back to legacy component-based posts
  const article = blogArticles.find((a) => a.id === slug);
  if (!article) notFound();

  const BlogPostComponent = blogPostComponents[slug];
  if (!BlogPostComponent) notFound();

  const Component = (await BlogPostComponent()).default;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: { "@type": "ImageObject", url: getImageUrl(article.image) },
    author: { "@type": "Organization", name: SITE_CONFIG.fullName },
    publisher: { "@type": "Organization", name: SITE_CONFIG.fullName, logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/myfence-logo.png` } },
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

