import { useRef, useEffect } from "react";

const HeroVideo = () => {
  const ref = useRef(null);

  // Pausar cuando sale de viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!ref.current) return;
        if (entry.isIntersecting) {
          ref.current.play().catch(() => {});
        } else {
          ref.current.pause();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="ratio ratio-16x9 mb-4" /* ancho = 100%, alto se calcula */>
      <video
        ref={ref}
        src="/videos/video.mp4"
        poster="/img/dog-poster.jpg"
        className="rounded-3 shadow"
        controls
        playsInline
        muted
        preload="metadata"
      />
    </div>
  );
};

export default HeroVideo;
