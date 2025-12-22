import Seo from "@/components/Seo";
import BlogSection from "@/components/BlogSection";

const BlogIndexPage = () => {
  return (
    <>
      <Seo
        title="Fence FAQ & Learning Center | MyFence.com"
        description="Browse in-depth fence FAQs, cost guides, and how-to articles from MyFence.com. Learn about fence pricing, neighbor rules, staining, and more for Seattle-area homeowners."
        canonical="https://myfence.com/blog"
      />
      <BlogSection />
    </>
  );
};

export default BlogIndexPage;
