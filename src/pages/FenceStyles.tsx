import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const postOptions = [
  {
    title: '3.5" x 3.5" Fence Posts',
    badge: 'Not recommended',
    desc: 'Smaller “4x4” posts with shorter lifespan; more prone to warp and rot over time.',
  },
  {
    title: '4.125" x 4.125" x 9\' Posts',
    badge: 'Recommended',
    desc: 'Our most common and recommended post size—great balance of strength, cost, and longevity.',
  },
  {
    title: '5.5" x 5.5" x 10\' (6x6)',
    badge: 'Longest lasting',
    desc: 'Premium, heavy-duty posts providing maximum rigidity and the best long-term performance.',
  },
  {
    title: 'Post on Pipe',
    badge: 'Steel core',
    desc: 'A steel fence post inserted into a 4.125" x 4.125" x 7\' wood post to resist ground-rot factors.',
  },
];

const addOns = [
  { title: 'Upgrade to 4" Screws', desc: 'Use 4" exterior screws for 2x4 rails instead of nails for superior hold and longevity.' },
  { title: 'Clear Cedar Fence Boards Upgrade', desc: 'Premium clear cedar boards with minimal knots for a refined appearance.' },
  { title: 'Board on Board Style', desc: 'Overlapping fence boards eliminate gaps for complete privacy.' },
  { title: '2x4 Rot Board', desc: 'Bottom 2x4 sacrificial board for near-zero ground clearance without exposing cedar to soil.' },
  { title: 'Pre-Staining', desc: 'Cedar components are stained prior to install for consistent coverage and early protection.' },
  { title: 'Soil Haul-Away', desc: 'We remove excess soil generated during post hole digging.' },
  { title: 'Trellis Systems', desc: 'Add trellis features to elevate curb appeal and support plants.' },
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

        <hr className="my-12 border-border" />

        <h2 id="options" className="text-2xl font-semibold tracking-tight">Fence Options</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Choose the right post and optional upgrades for performance and style.</p>

        <Tabs defaultValue="posts" className="mt-4">
          <TabsList className="flex flex-wrap gap-2">
            <TabsTrigger value="posts">Post Options</TabsTrigger>
            <TabsTrigger value="addons">Add-On Options</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {postOptions.map((p) => (
                <Card key={p.title} className="hover:shadow-elevated transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{p.title}</span>
                      <Badge variant="secondary">{p.badge}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addons" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((a) => (
                <Card key={a.title} className="hover:shadow-elevated transition-shadow">
                  <CardHeader>
                    <CardTitle>{a.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AspectRatio ratio={1}>
                      <img
                        src="/placeholder.svg"
                        alt={`${a.title} add-on option for Seattle fences by MyFence.com`}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </AspectRatio>
                    <p className="text-sm text-muted-foreground mt-4">{a.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default FenceStyles;
