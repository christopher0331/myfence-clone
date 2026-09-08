import HeroVideo from "./HeroVideo";

export const HeroVideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Defer mounting the iframe until after the first paint
    const id = window.requestAnimationFrame(() => {
      setShowVideo(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative h-64 sm:h-72 md:h-screen w-full border-b">
      <div className="relative h-full w-full">
        <div className="video-hero" aria-hidden="true">
          <HeroVideo />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-32 bg-gradient-to-b from-transparent to-background"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
