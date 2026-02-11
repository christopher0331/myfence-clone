import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

interface MdxContentProps {
  source: string;
}

/** Renders MDX from Studio-published blog posts with prose styling */
export default async function MdxContent({ source }: MdxContentProps) {
  const content = await MDXRemote({
    source,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      {content}
    </article>
  );
}
