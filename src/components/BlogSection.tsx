import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import { blogArticles } from "@/data/blogArticles";

interface BlogSectionProps {
  limit?: number;
}

const BlogSection = ({ limit }: BlogSectionProps) => {
  const featuredArticles = limit ? blogArticles.slice(0, limit) : blogArticles;

  return (
    <section className="bg-muted py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expert Fence Insights & Advice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get professional advice on fence installation, maintenance, and costs from Seattle's trusted fencing experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="block">
              <Card className="group cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardHeader className="p-0">
                  <AspectRatio ratio={4/3}>
                    <OptimizedImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {article.publishDate}
                    </span>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;