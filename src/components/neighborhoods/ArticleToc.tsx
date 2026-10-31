import { List } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface ArticleTocItem {
  id: string;
  label: string;
}

interface ArticleTocProps {
  items: ArticleTocItem[];
  title?: string;
}

/**
 * In-page table of contents for article-style neighborhood pages.
 * Each item links to a section with a matching `id` via a plain anchor.
 */
export default function ArticleToc({
  items,
  title = "On this page",
}: ArticleTocProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label={title}>
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <List className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-decimal list-inside text-muted-foreground">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-primary font-medium underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </Card>
    </nav>
  );
}
