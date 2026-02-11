import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => (
      <a href={href} className="text-primary hover:underline" {...props}>
        {children}
      </a>
    ),
    ...components,
  };
}
