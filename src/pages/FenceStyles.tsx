import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cedar from "@/assets/fences/cedar.jpg";
import horizontalCedar from "@/assets/fences/horizontal-cedar.jpg";
import chainlink from "@/assets/fences/chainlink.jpg";
import vinyl from "@/assets/fences/vinyl.jpg";
import wroughtIron from "@/assets/fences/wrought-iron.jpg";
import aluminum from "@/assets/fences/aluminum-slat.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const styles = [
  { img: cedar, title: "Cedar Privacy", desc: "Timeless beauty with Western Red Cedar for warmth and privacy." },
  { img: horizontalCedar, title: "Horizontal Cedar", desc: "Modern, clean lines with black steel accents for curb appeal." },
  { img: chainlink, title: "Chain-Link", desc: "Durable, budget-friendly security with coated options." },
  { img: vinyl, title: "Vinyl", desc: "Low maintenance privacy with a clean, bright look." },
  { img: wroughtIron, title: "Wrought Iron", desc: "Elegant metalwork with superior strength and style." },
  { img: aluminum, title: "Aluminum Slat", desc: "Sleek contemporary style with long-lasting performance." },
];

const FenceStyles = () => {
  return (
    <main>
      <Seo
        title="Fence Styles | MyFence.com Seattle"
        description="Explore cedar, horizontal, vinyl, chain-link, wrought iron, and aluminum fence styles by MyFence.com in Seattle."
        canonical="https://myfence.com/fence-styles"
      />
      <section className="container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Fence Styles for Every Seattle Home</h1>
        <p className="text-muted-foreground max-w-2xl">We design and build fences that fit your property, lifestyle, and budget — backed by our exclusive Fence Genius technology for perfect planning.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {styles.map((s) => (
            <Card key={s.title} className="overflow-hidden hover:shadow-elevated transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{s.title}</span>
                  <Badge variant="secondary">Popular</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1}>
                  <img src={s.img} alt={`${s.title} fence in Seattle by MyFence.com`} loading="lazy" className="w-full h-full object-cover rounded-md" />
                </AspectRatio>
                <p className="text-sm text-muted-foreground mt-4">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FenceStyles;
