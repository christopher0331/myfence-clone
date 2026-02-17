import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import Callout from "@/components/blog/Callout";
import ImageCaption from "@/components/blog/ImageCaption";
import ImageGrid from "@/components/blog/ImageGrid";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        );
      }
      return href ? (
        <Link href={href} className="text-primary hover:underline" {...props}>
          {children}
        </Link>
      ) : (
        <a href={href} {...props}>{children}</a>
      );
    },
    img: ({ src, alt }) => (
      <span className="block my-6">
        <OptimizedImage
          src={src || ""}
          alt={alt || ""}
          className="w-full h-auto rounded-lg object-cover"
        />
      </span>
    ),
    table: ({ children }) => (
      <Card className="my-8">
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">{children}</table>
          </div>
        </CardContent>
      </Card>
    ),
    thead: ({ children }) => <thead className="border-b">{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children, ...props }) => (
      <tr className="border-b last:border-b-0 even:bg-muted/30" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }) => (
      <th className="text-left p-3 font-semibold text-center last:text-center [&:first-child]:text-left" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="p-3 text-center [&:first-child]:text-left" {...props}>
        {children}
      </td>
    ),
    Callout,
    ProTtip: Callout, // Alias for Gemini typo
    ProTip: Callout,
    Card,
    CardContent,
    ImageCaption,
    ImageGrid,
    AspectRatio,
    OptimizedImage,
    ...components,
  };
}
