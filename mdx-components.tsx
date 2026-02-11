import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import Callout from "@/components/blog/Callout";
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
    Callout,
    Card,
    CardContent,
    AspectRatio,
    ...components,
  };
}
