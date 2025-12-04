import OptimizedImage from "@/components/OptimizedImage";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const images = [
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/MyFence.com%201080x1080%201.webp?updatedAt=1762037747463&tr=w-280",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/MyFence.com%201080x1080%201.webp?updatedAt=1762037747463&tr=w-400",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Extreme%20Terrain%20Fence%20Job.webp?updatedAt=1762037741363&tr=w-280",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Extreme%20Terrain%20Fence%20Job.webp?updatedAt=1762037741363&tr=w-400",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Full%20Panel%20With%20Before%20Fence%20Genius%20Render.webp?updatedAt=1762037786713&tr=w-280",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Full%20Panel%20With%20Before%20Fence%20Genius%20Render.webp?updatedAt=1762037786713&tr=w-400",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Bryans%20Square.webp?updatedAt=1762037737857&tr=w-280",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Bryans%20Square.webp?updatedAt=1762037737857&tr=w-400",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/MyFence.com%201280x720%20Extreme%20Terrain.webp?updatedAt=1762037743125&tr=w-380,h-220",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/MyFence.com%201280x720%20Extreme%20Terrain.webp?updatedAt=1762037743125&tr=w-570,h-320",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Craftsman%20Style/Craftsman%20Style%20Fence%20With%20Fence%20Genius%201.webp?updatedAt=1762037598601&tr=w-380,h-220",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Craftsman%20Style/Craftsman%20Style%20Fence%20With%20Fence%20Genius%201.webp?updatedAt=1762037598601&tr=w-570,h-320",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Craftsman%20Style/Craftsman%20Style%20Fence%20With%20Fence%20Genius.webp?updatedAt=1762037598862&tr=w-380,h-220",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Craftsman%20Style/Craftsman%20Style%20Fence%20With%20Fence%20Genius.webp?updatedAt=1762037598862&tr=w-570,h-320",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Horizontal%20Fence/Horizontal%20Style%20With%20Fence%20Genius.webp?updatedAt=1762037633271&tr=w-380,h-220",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Horizontal%20Fence/Horizontal%20Style%20With%20Fence%20Genius.webp?updatedAt=1762037633271&tr=w-570,h-320",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/3%20Rail%20Picture%20Frame%20Pre-Stained%20Fence%20Fence%20Genius.webp?updatedAt=1762037642699&tr=w-280",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/3%20Rail%20Picture%20Frame%20Pre-Stained%20Fence%20Fence%20Genius.webp?updatedAt=1762037642699&tr=w-400",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%201280x720%20Software%204.webp?updatedAt=1762037635822&tr=w-380,h-220",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%201280x720%20Software%204.webp?updatedAt=1762037635822&tr=w-570,h-320",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%20Software%20and%20Actual%203.webp?updatedAt=1762037647007&tr=w-280",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%20Software%20and%20Actual%203.webp?updatedAt=1762037647007&tr=w-400",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%20Software%20and%20Actual%205.webp?updatedAt=1762037644149&tr=w-280",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%20Software%20and%20Actual%205.webp?updatedAt=1762037644149&tr=w-400",
  },
];

export const ScrollingCarousel = () => {
  const isMobile = useIsMobile();
  const speedOptions = [1, 2, 3, 4, 5];
  const [speedIndex, setSpeedIndex] = useState(0); // Start at 1x
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollPositionRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const lastTimestampRef = useRef<number>();
  const setWidthRef = useRef(0);
  const [isInView, setIsInView] = useState(false);

  const currentSpeed = speedOptions[speedIndex];
  const baseSpeed = 50; // pixels per second at 1x speed

  // Intersection Observer to detect when component is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setIsInView(true), 1500);
        } else {
          clearTimeout(timeoutId);
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const computeSetWidth = () => {
      const children = Array.from(container.children).slice(0, images.length) as HTMLElement[];
      const total = children.reduce((acc, child) => acc + child.offsetWidth + 32, 0);
      setWidthRef.current = total;
    };

    computeSetWidth();
    window.addEventListener("resize", computeSetWidth);

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = (timestamp - lastTimestampRef.current) / 1000; // seconds
      lastTimestampRef.current = timestamp;

      if (!isPaused && isInView) {
        // advance position
        scrollPositionRef.current += baseSpeed * currentSpeed * deltaTime;

        // reset after one full set width
        const totalWidth = setWidthRef.current;
        if (totalWidth > 0 && scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current -= totalWidth;
        }

        // apply transform without rerender
        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", computeSetWidth);
    };
  }, [currentSpeed, isPaused, isInView]);

  const cycleSpeed = () => {
    setSpeedIndex((prev) => (prev + 1) % speedOptions.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden bg-muted/50">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Powered by Fence Genius Technology</h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          See our process from design to installation. Our 3D renderings help prefabricate panels in the warehouse for
          precision and efficiency, followed by expert installation at your property.
        </p>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={togglePause}
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            className="rounded-full"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            onClick={cycleSpeed}
            aria-label={`Change speed (current: ${currentSpeed}x)`}
            className="rounded-full min-w-[80px] gap-2"
          >
            <Gauge className="h-4 w-4" />
            <span className="font-semibold">{currentSpeed}x</span>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div ref={containerRef} className="flex items-center will-change-transform">
        {/* Triple set for seamless loop without visible reset */}
          {[...images, ...images, ...images].map((image, index) => {
            const baseIndex = index % images.length;
            const imageSrc = isMobile ? image.mobile : image.desktop;
            return (
              <div
                key={`img-${index}`}
                className={`relative flex-shrink-0 mx-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-muted/50 ${
                  image.isWide
                    ? "w-[320px] h-[180px] md:w-[570px] md:h-[320px]"
                    : "w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
                }`}
              >
                <div className="absolute top-2 left-2 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded z-10">
                  {baseIndex + 1}
                </div>
                <OptimizedImage
                  src={imageSrc}
                  alt={`Seattle Fence Project ${baseIndex + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
