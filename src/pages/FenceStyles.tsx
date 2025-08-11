import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const styles = [
  { img: "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png", title: "Solid Board Fence", desc: "Classic privacy with sturdy cedar boards and clean lines." },
  { img: "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png", title: "Picture Frame Fence", desc: "Refined border trim framing each panel for a premium look." },
  { img: "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png", title: "3 Rail Picture Frame Fence", desc: "Three horizontal rails add strength and architectural detail." },
  { img: "/lovable-uploads/7f3fe64f-1dd1-4d94-b585-bf9cb4ae1bd6.png", title: "Craftsman Style Fence", desc: "Distinctive craftsman accents with open top detailing." },
  { img: "/lovable-uploads/fe0b1d69-f6cd-49d5-9c99-1ed1e70daef5.png", title: "Horizontal Lattice Fence", desc: "Horizontal boards with a sleek lattice top for light and privacy." },
  { img: "/lovable-uploads/96a63d79-9269-47b1-96ef-9727feb60536.png", title: "Horizontal Fence", desc: "Modern horizontal boards for a contemporary curb appeal." },
  { img: "/lovable-uploads/304e6ac7-d932-4522-a07f-a481b9dac9c2.png", title: "5' Galvanized Hogwire Fence", desc: "Strong galvanized wire panels for durable visibility and style." },
  { img: "/lovable-uploads/8ea10d1b-63ce-44fe-a29f-12f029415560.png", title: "6' Black Hogwire Fence", desc: "Tall black hogwire panels for a bold, modern perimeter." },
  { img: "/lovable-uploads/81e50e54-927c-4bb5-b22e-9cf6336b8154.png", title: "3' Black Hogwire Fence", desc: "Low-profile black hogwire ideal for gardens and pets." },
  { img: "/lovable-uploads/be14d195-34f5-4c25-9618-a506bed8ecc1.png", title: "Picket Fence", desc: "Timeless neighborhood charm with classic pickets." },
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
