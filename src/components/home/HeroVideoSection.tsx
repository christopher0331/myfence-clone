export const HeroVideoSection = () => {
  return (
    <section className="relative h-64 sm:h-72 md:h-screen w-full border-b">
      <div className="relative h-full w-full">
        <div className="video-hero" aria-hidden="true">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/LlFKNi-35Mk?autoplay=1&mute=1&loop=1&playlist=LlFKNi-35Mk&controls=0&playsinline=1&modestbranding=1&rel=0"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="no-referrer-when-downgrade"
            title="MyFence.com installation montage"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-32 bg-gradient-to-b from-transparent to-background" aria-hidden="true" />
      </div>
    </section>
  );
};
