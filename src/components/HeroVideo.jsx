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
    <video
      ref={ref}
      className="w-full rounded-2xl shadow"
      src="/videos/video.mp4"
      poster="/img/dog-poster.jpg"
      controls
      playsInline
      muted // si querés autoplay sin bloqueo
      preload="metadata"
    >
      {/* Opcional: segundo formato para más compatibilidad */}
      {/* <source src="/videos/video.webm" type="video/webm" /> */}
      <track kind="captions" src="/captions.vtt" label="ES" default />
    </video>
  );
};

export default HeroVideo;
