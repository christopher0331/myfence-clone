import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogArticles } from "@/data/blogArticles";
import Seo from "@/components/Seo";
import { SITE_CONFIG } from "@/constants/siteConfig";
import type { ComponentType } from "react";
import { getMdxBlogPost, getMdxBlogPosts } from "@/lib/blog";
import OptimizedImage from "@/components/OptimizedImage";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArticleSummary } from "@/components/ArticleSummary";
import BlogShareButtons from "@/components/blog/BlogShareButtons";

// Dynamic imports for legacy blog post components
const blogPostComponents: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  "wood-fence-post-warping": () => import("@/components/pages/blog/WoodFencePostWarping"),
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
  const mdxPost = getMdxBlogPost(slug);
  if (mdxPost) {
    const ogImage = mdxPost.firstBodyImage || mdxPost.image;
    const absoluteOgImage = ogImage ? (ogImage.startsWith("http") ? ogImage : `${SITE_CONFIG.url}${ogImage}`) : undefined;

    return {
      title: `${mdxPost.title} | MyFence.com`,
      description: mdxPost.description || "",
      alternates: { canonical: `https://myfence.com/blog/${slug}` },
      openGraph: {
        title: mdxPost.title,
        description: mdxPost.description || "",
        url: `https://myfence.com/blog/${slug}`,
        type: "article",
        images: absoluteOgImage ? [{ url: absoluteOgImage, width: 1200, height: 630 }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: mdxPost.title,
        description: mdxPost.description || "",
        images: absoluteOgImage ? [absoluteOgImage] : undefined,
      },
    };
  }

  const article = blogArticles.find((a) => a.id === slug);
  if (!article) return { title: "Blog Post Not Found | MyFence.com" };
  const legacyImage = typeof article.image === "string" ? article.image : article.image.src;
  const absoluteLegacyImage = legacyImage.startsWith("http") ? legacyImage : `${SITE_CONFIG.url}${legacyImage}`;

  const socialTitle = article.metaTitle || article.title;

  return {
    title: article.metaTitle || `${article.title} | MyFence.com`,
    description: article.description,
    alternates: { canonical: `https://myfence.com/blog/${slug}` },
    openGraph: {
      title: socialTitle,
      description: article.description,
      url: `https://myfence.com/blog/${slug}`,
      type: "article",
      images: [{ url: absoluteLegacyImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: article.description,
      images: [absoluteLegacyImage],
    },
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
    const seoTitle = fm.metaTitle || `${title} | MyFence.com`;
    const description = fm.description || "";
    const image = fm.image || fm.featured_image || "";
    const mdxPost = getMdxBlogPost(slug);
    const ogImage = mdxPost?.firstBodyImage || image;
    const imageUrl = image ? (image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`) : null;
    const ogImageUrl = ogImage ? (ogImage.startsWith("http") ? ogImage : `${SITE_CONFIG.url}${ogImage}`) : null;
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      image: ogImageUrl ? { "@type": "ImageObject", url: ogImageUrl } : undefined,
      author: { "@type": "Organization", name: SITE_CONFIG.fullName },
      publisher: { "@type": "Organization", name: SITE_CONFIG.fullName, logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/myfence-logo.png` } },
    };
    const layout = fm.layout || "two-column";
    const showArticleSummary = fm.showArticleSummary === true || fm.showArticleSummary === "true";

    return (
      <>
        <Seo
          title={seoTitle}
          description={description}
          canonical={`https://myfence.com/blog/${slug}`}
          image={ogImageUrl ?? imageUrl ?? undefined}
          structuredData={structuredData}
        />
        <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4 py-8">
            <article className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link href="/blog" className="text-primary hover:underline">
                  ← Back to Blog
                </Link>
              </div>

              <BlogShareButtons title={title} url={`${SITE_CONFIG.url}/blog/${slug}`} />

              {layout === "centered" ? (
                <>
                  <header className="text-center mb-8">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      {fm.category && <Badge variant="secondary">{fm.category}</Badge>}
                      {fm.readTime && (
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {fm.readTime}
                        </span>
                      )}
                      {fm.publishDate && <span className="text-sm text-muted-foreground">{fm.publishDate}</span>}
                    </div>
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-xl text-muted-foreground mb-8">{description}</p>
                    {imageUrl && (
                      <>
                        <div className="relative rounded-lg overflow-hidden mb-4">
                          <OptimizedImage
                            src={imageUrl}
                            alt={title}
                            className="w-full h-64 md:h-80 object-cover"
                            loading="eager"
                            fetchPriority="high"
                          />
                        </div>
                        {fm.imageCaption && (
                          <p className="text-center text-sm text-muted-foreground mb-8">{fm.imageCaption}</p>
                        )}
                      </>
                    )}
                  </header>
                  {showArticleSummary && (
                    <div className="mb-12">
                      <ArticleSummary pageTitle={title} pageContent={description} />
                    </div>
                  )}
                </>
              ) : (
                <section className="relative py-4 pb-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      {fm.category && (
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {fm.category}
                        </span>
                      )}
                      <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{title}</h1>
                      <p className="text-xl text-muted-foreground mb-6">{description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {fm.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {fm.readTime}
                          </span>
                        )}
                        {fm.publishDate && <span>{fm.publishDate}</span>}
                      </div>
                    </div>
                    {imageUrl && (
                      <div>
                        <AspectRatio ratio={4 / 3}>
                          <OptimizedImage
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover rounded-lg"
                            loading="eager"
                            fetchPriority="high"
                          />
                        </AspectRatio>
                      </div>
                    )}
                  </div>
                </section>
              )}

              <section className="py-8 px-0">
                <div className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-li:text-muted-foreground prose-ul:my-5 prose-ol:my-5 prose-li:my-1 prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none [&_ul]:pl-5 [&_ol]:pl-5 [&_ul]:border-l-2 [&_ul]:border-primary/20 [&_ol]:border-l-2 [&_ol]:border-primary/20">
                  <Post />
                </div>
              </section>
            </article>
          </div>
        </main>
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

  // Only PreStainingDryPanels lacks component-level JSON-LD; others define their own @graph.
  const wrapperStructuredData =
    slug === "onsite-staining-vs-pre-staining"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          image: { "@type": "ImageObject", url: getImageUrl(article.image) },
          author: { "@type": "Organization", name: SITE_CONFIG.fullName },
          publisher: {
            "@type": "Organization",
            name: SITE_CONFIG.fullName,
            logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/myfence-logo.png` },
          },
        }
      : undefined;

  return (
    <>
      {wrapperStructuredData && <Seo structuredData={wrapperStructuredData} />}
      <main className="container mx-auto px-4 pt-8">
        <BlogShareButtons title={article.title} url={`${SITE_CONFIG.url}/blog/${slug}`} />
      </main>
      <Component />
    </>
  );
}
