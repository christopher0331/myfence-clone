import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const images = [
  "/lovable-uploads/5f84fd61-a240-4aab-9d39-9728f6a27f36.png",
  "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png",
  "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
  "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png",
  "/lovable-uploads/7f3fe64f-1dd1-4d94-b585-bf9cb4ae1bd6.png",
  "/lovable-uploads/fe0b1d69-f6cd-49d5-9c99-1ed1e70daef5.png",
  "/lovable-uploads/96a63d79-9269-47b1-96ef-9727feb60536.png",
  "/lovable-uploads/304e6ac7-d932-4522-a07f-a481b9dac9c2.png",
  "/lovable-uploads/8ea10d1b-63ce-44fe-a29f-12f029415560.png",
  "/lovable-uploads/81e50e54-927c-4bb5-b22e-9cf6336b8154.png",
  "/lovable-uploads/be14d195-34f5-4c25-9618-a506bed8ecc1.png",
];

const Gallery = () => {
  return (
    <main>
      <Seo
        title="Fence Gallery | MyFence.com Seattle"
        description="View recent fence installations in Seattle by MyFence.com, including cedar, horizontal, iron, and more."
        canonical="https://myfence.com/gallery"
      />
      <section className="container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Project Gallery</h1>
        <p className="text-muted-foreground max-w-2xl">A look at our craftsmanship across Seattle neighborhoods. Every project is precisely planned using <Link to="/fence-genius" className="text-primary hover:underline">Fence Genius technology</Link> and executed to perfection.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {images.map((src, i) => (
            <div key={i} className="aspect-square w-full overflow-hidden rounded-lg shadow-elevated">
              <img
                src={src}
                alt={`Seattle fence project ${i + 1} by MyFence.com`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
