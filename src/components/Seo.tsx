import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

const Seo = ({ title, description, canonical, image, structuredData }: SeoProps) => {
  // Handle both single structured data object and arrays
  const structuredDataArray = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData 
      : [structuredData]
    : [];

  // Convert relative image URLs to absolute URLs
  const absoluteImage = image 
    ? image.startsWith('http') 
      ? image 
      : `${SITE_CONFIG.url}${image}`
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}
      {absoluteImage && <meta property="og:image:width" content="1200" />}
      {absoluteImage && <meta property="og:image:height" content="630" />}
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}
      
      {canonical && <link rel="canonical" href={canonical} />}
      {structuredDataArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
