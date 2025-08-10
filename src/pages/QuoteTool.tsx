import { useMemo, useState } from "react";
import Seo from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const RATES: Record<string, { perFoot: number; gate: number }> = {
  "Cedar Privacy": { perFoot: 45, gate: 450 },
  "Horizontal Cedar": { perFoot: 52, gate: 550 },
  "Vinyl": { perFoot: 50, gate: 500 },
  "Chain-Link": { perFoot: 25, gate: 300 },
  "Wrought Iron": { perFoot: 70, gate: 800 },
  "Aluminum Slat": { perFoot: 60, gate: 700 },
};

const materials = Object.keys(RATES);

const QuoteTool = () => {
  const [length, setLength] = useState<number>(100);
  const [material, setMaterial] = useState<string>(materials[0]);
  const [gates, setGates] = useState<number>(1);
  const [zip, setZip] = useState<string>("98101");

  const estimate = useMemo(() => {
    const rate = RATES[material];
    const subtotal = length * rate.perFoot + gates * rate.gate;
    const terrainFactor = 1.0; // placeholder for slope/complexity
    const tax = subtotal * 0.101; // Seattle approx 10.1%
    const total = Math.round((subtotal * terrainFactor + tax) / 10) * 10;
    return { subtotal, tax, total };
  }, [length, material, gates]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request sent",
      description: `We'll follow up shortly with a detailed estimate for ${zip}. Rough total: $${estimate.total.toLocaleString()}.`,
    });
  };

  return (
    <main>
      <Seo
        title="Virtual Quote Tool | MyFence.com Seattle"
        description="Get a fast, rough fence estimate online. Enter length, material, and gates to see pricing for Seattle installs."
        canonical="https://myfence.com/quote"
      />
      <section className="container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Virtual Quote Tool</h1>
        <p className="text-muted-foreground max-w-2xl">Use this quick estimator to plan your fence budget. Final pricing is confirmed with a site visit powered by Fence Genius technology.</p>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6 mt-8">
          <Card className="lg:col-span-2">
            <CardContent className="space-y-6 pt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="length">Fence length (ft)</Label>
                  <Input id="length" type="number" min={10} value={length} onChange={(e) => setLength(parseInt(e.target.value || "0"))} />
                </div>
                <div>
                  <Label htmlFor="material">Material</Label>
                  <select id="material" className="w-full h-10 rounded-md border bg-background px-3" value={material} onChange={(e) => setMaterial(e.target.value)}>
                    {materials.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="gates">Number of gates</Label>
                  <Input id="gates" type="number" min={0} value={gates} onChange={(e) => setGates(parseInt(e.target.value || "0"))} />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP code</Label>
                  <Input id="zip" value={zip} onChange={(e) => setZip(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" variant="hero" className="">Request Final Quote</Button>
                <Button type="button" variant="secondary" onClick={() => window.open("/contact", "_self")}>Contact us</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Your Estimate</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Material</span><span className="font-medium">{material}</span></li>
                <li className="flex justify-between"><span>Length</span><span className="font-medium">{length} ft</span></li>
                <li className="flex justify-between"><span>Gates</span><span className="font-medium">{gates}</span></li>
                <li className="flex justify-between"><span>Subtotal</span><span className="font-medium">${estimate.subtotal.toLocaleString()}</span></li>
                <li className="flex justify-between"><span>Tax (approx)</span><span className="font-medium">${Math.round(estimate.tax).toLocaleString()}</span></li>
              </ul>
              <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold">
                <span>Rough total</span>
                <span>${estimate.total.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3">This is a planning estimate only. Final quote follows an on-site assessment.</p>
            </CardContent>
          </Card>
        </form>
      </section>
    </main>
  );
};

export default QuoteTool;
