import Seo from "@/components/Seo";
import gallery1 from "@/assets/gallery/gallery1.jpg";
import gallery2 from "@/assets/gallery/gallery2.jpg";
import gallery3 from "@/assets/gallery/gallery3.jpg";

const images = [gallery1, gallery2, gallery3, gallery1, gallery2, gallery3];

const Gallery = () => {
  return (
    <main>
      <Seo
        title="Fence Gallery | MyFence.com Seattle"
        description="View recent fence installations in Seattle by MyFence.com, including cedar, horizontal, iron, vinyl, and more."
        canonical="https://myfence.com/gallery"
      />
      <section className="container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Project Gallery</h1>
        <p className="text-muted-foreground max-w-2xl">A look at our craftsmanship across Seattle neighborhoods. Every project is precisely planned and executed.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Seattle fence project ${i + 1} by MyFence.com`} loading="lazy" className="w-full h-56 object-cover rounded-lg shadow-elevated" />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
