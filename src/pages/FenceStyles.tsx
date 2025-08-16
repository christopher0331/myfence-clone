import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const styles = [
  { img: "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png", title: "Picture Frame Fence", desc: "Refined border trim framing each panel for a premium look." },
  { img: "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png", title: "3 Rail Picture Frame Fence", desc: "Three horizontal rails add strength and architectural detail." },
  { img: "/lovable-uploads/7f3fe64f-1dd1-4d94-b585-bf9cb4ae1bd6.png", title: "Craftsman Style Fence", desc: "Distinctive craftsman accents with open top detailing." },
  { img: "/lovable-uploads/76711349-f698-430f-a01f-14709e320e1b.png", title: "Horizontal Lattice Fence", desc: "Horizontal lattice with craftsman foundation, 5/8 inch thick strips, and stainless steel fasteners." },
  { img: "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png", title: "Solid Board Fence", desc: "Budget-friendly option with 2 rails and stainless steel fasteners. Most economical choice.", badge: "Budget Option" },
  { img: "/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png", title: "Horizontal Fence", desc: "Framed horizontal fence with center rail support for maximum durability.", badge: "Fan Favorite" },
  { img: "/lovable-uploads/304e6ac7-d932-4522-a07f-a481b9dac9c2.png", title: "5' Galvanized Hogwire Fence", desc: "Strong galvanized wire panels for durable visibility and style." },
  { img: "/lovable-uploads/f729a8a5-2693-400d-96c0-a8869a528f05.png", title: "6' Black Hogwire Fence", desc: "Secure yet visually open fencing perfect for wooded properties. Cedar frame with powder-coated steel panels.", badge: "Security & Style" },
  { img: "/lovable-uploads/96fca880-7890-4f75-83cc-4a78693640a9.png", title: "3' Black Hogwire Fence", desc: "Budget-friendly option with the same open feeling. Perfect for flat terrain and wooded backdrops.", badge: "Budget Option" },
  { img: "/lovable-uploads/be14d195-34f5-4c25-9618-a506bed8ecc1.png", title: "Picket Fence", desc: "Timeless neighborhood charm with classic pickets." },
];

const postOptions = [
  {
    title: '3.5" x 3.5" Fence Posts',
    badge: 'Not recommended',
    img: '/lovable-uploads/f6023686-8397-4b40-adba-9874bf191350.png',
    desc: 'Smaller “4x4” posts with shorter lifespan; more prone to warp and rot over time.',
  },
  {
    title: '4.125" x 4.125" x 9\' Posts',
    badge: 'Recommended',
    img: '/lovable-uploads/ad96634b-cce1-43d6-ad83-d21b2b2cd5ca.png',
    desc: 'Our most common and recommended post size—great balance of strength, cost, and longevity.',
  },
  {
    title: '5.5" x 5.5" x 10\' (6x6)',
    badge: 'Longest lasting',
    img: '/lovable-uploads/3ab63582-2f4d-4294-99aa-f04fd0426960.png',
    desc: 'Premium, heavy-duty posts providing maximum rigidity and the best long-term performance.',
  },
  {
    title: 'Post on Pipe',
    badge: 'Steel core',
    img: '/lovable-uploads/4240161f-87d0-4bbd-9c54-8d4fe261f7be.png',
    desc: 'A steel fence post inserted into a 4.125" x 4.125" x 7\' wood post to resist ground-rot factors.',
  },
];

const addOns = [
  { title: 'Upgrade to 4" Screws', img: '/lovable-uploads/81402d1b-e77f-4e51-88db-e0cd71e3a274.png', desc: 'Use 4" exterior screws for 2x4 rails instead of nails for superior hold and longevity.' },
  { title: 'Clear Cedar Fence Boards Upgrade', img: '/lovable-uploads/d27f46a0-cb41-4ed9-917a-44e0969e2f57.png', desc: 'Premium clear cedar boards with minimal knots for a refined appearance.' },
  { title: 'Board on Board Style', img: '/lovable-uploads/bb4c3899-96f6-4bf3-9454-9cc827adade0.png', desc: 'Overlapping fence boards eliminate gaps for complete privacy.' },
  { title: '2x4 Rot Board', img: '/lovable-uploads/f24146a2-1913-4499-8e33-5f182b33635e.png', desc: 'Bottom 2x4 sacrificial board for near-zero ground clearance without exposing cedar to soil.' },
  { title: 'Pre-Staining', img: '/lovable-uploads/64a3d163-65f2-4ddc-a1bb-cc89381508a1.png', desc: 'Cedar components are stained prior to install for consistent coverage and early protection.' },
  { title: 'Soil Haul-Away', img: '/lovable-uploads/19760b8b-24e6-48d2-991f-f1dd5b571776.png', desc: 'We remove excess soil generated during post hole digging.' },
  { title: 'Trellis Systems', img: '/lovable-uploads/793a9940-252a-431c-bc9c-f109022e1b92.png', desc: 'Add trellis features to elevate curb appeal and support plants.' },
];

const FenceStyles = () => {
  return (
    <main>
      <Seo
        title="Fence Styles | MyFence.com Seattle"
        description="Explore cedar, horizontal, chain-link, wrought iron, and aluminum fence styles by MyFence.com in Seattle."
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
                  {s.title === "Picture Frame Fence" && (
                    <Badge variant="secondary">Most Popular</Badge>
                  )}
                  {s.badge && (
                    <Badge variant="secondary">{s.badge}</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1}>
                  <img src={s.img} alt={`${s.title} fence in Seattle by MyFence.com`} loading="lazy" className="w-full h-full object-cover rounded-md" />
                </AspectRatio>
                <p className="text-sm text-muted-foreground mt-4">{s.desc}</p>
                {s.title === "Picture Frame Fence" && (
                  <Link
                    to="/fence-styles/picture-frame-fence"
                    className="mt-3 inline-flex text-primary hover:underline"
                    aria-label="Learn more about Picture Frame Fence"
                  >
                    Learn more about Picture Frame Fence →
                  </Link>
                )}
                {s.title === "3 Rail Picture Frame Fence" && (
                  <Link
                    to="/fence-styles/3-rail-picture-frame-fence"
                    className="mt-3 inline-flex text-primary hover:underline"
                    aria-label="Learn more about 3 Rail Picture Frame Fence"
                  >
                    Learn more about 3 Rail Picture Frame Fence →
                  </Link>
                )}
                {s.title === "Craftsman Style Fence" && (
                  <Link
                    to="/fence-styles/craftsman-style-fence"
                    className="mt-3 inline-flex text-primary hover:underline"
                    aria-label="Learn more about Craftsman Style Fence"
                  >
                    Learn more about Craftsman Style Fence →
                  </Link>
                 )}
                {s.title === "Horizontal Lattice Fence" && (
                  <Link
                    to="/fence-styles/horizontal-lattice-fence"
                    className="mt-3 inline-flex text-primary hover:underline"
                    aria-label="Learn more about Horizontal Lattice Fence"
                  >
                    Learn more about Horizontal Lattice Fence →
                  </Link>
                )}
                {s.title === "Solid Board Fence" && (
                  <Link
                    to="/fence-styles/solid-board-fence"
                    className="mt-3 inline-flex text-primary hover:underline"
                    aria-label="Learn more about Solid Board Fence"
                  >
                    Learn more about Solid Board Fence →
                  </Link>
                )}
                {s.title === "Horizontal Fence" && (
                  <Link
                    to="/fence-styles/horizontal-fence"
                    className="mt-3 inline-flex text-primary hover:underline"
                    aria-label="Learn more about Horizontal Fence"
                  >
                    Learn more about Horizontal Fence →
                  </Link>
                )}
                {s.title === "6' Black Hogwire Fence" && (
                  <Link
                    to="/fence-styles/black-hogwire-fence"
                    className="mt-3 inline-flex text-primary hover:underline"
                    aria-label="Learn more about 6' Black Hogwire Fence"
                  >
                    Learn more about 6' Black Hogwire Fence →
                  </Link>
                )}
                {s.title === "3' Black Hogwire Fence" && (
                  <Link
                    to="/fence-styles/three-ft-black-hogwire-fence"
                    className="mt-3 inline-flex text-primary hover:underline"
                    aria-label="Learn more about 3' Black Hogwire Fence"
                  >
                    Learn more about 3' Black Hogwire Fence →
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </section>

      <section className="container py-10">
        <h2 id="post-options" className="text-2xl font-semibold tracking-tight">Fence Post Options</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Choose the right post for your fence. We typically recommend 4.125&quot; x 4.125&quot; x 9' posts for most projects; upgrade options increase strength and longevity.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {postOptions.map((p) => (
            <Card key={p.title} className="hover:shadow-elevated transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <Badge variant="secondary">{p.badge}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1}>
                  <img
                    src={p.img}
                    alt={`${p.title} post option for Seattle fences by MyFence.com`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-md"
                  />
                </AspectRatio>
                <p className="text-sm text-muted-foreground mt-4">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <h2 id="add-on-options" className="text-2xl font-semibold tracking-tight">Add-On Options</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Optional upgrades that enhance durability, privacy, and finish.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {addOns.map((a) => (
            <Card key={a.title} className="hover:shadow-elevated transition-shadow">
              <CardHeader>
                <CardTitle>{a.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1}>
                  <img
                    src={a.img}
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
      </section>
    </main>
  );
};

export default FenceStyles;
