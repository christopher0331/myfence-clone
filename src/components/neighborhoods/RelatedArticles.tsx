import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface RelatedArticle {
  href: string;
  title: string;
  description: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  heading?: string;
}

/** Small "Related articles" block for neighborhood pages, linking to blog posts. */
export default function RelatedArticles({ articles, heading = "Related Articles" }: RelatedArticlesProps) {
  if (!articles.length) return null;
  return (
    <section className="py-16" aria-labelledby="related-articles-heading">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-7 w-7 text-primary flex-shrink-0" />
            <h2 id="related-articles-heading" className="text-3xl md:text-4xl font-bold">
              {heading}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((article) => (
              <Card key={article.href} className="p-6 hover:shadow-md transition-shadow">
                <Link href={article.href} className="group block">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{article.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read the article <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
