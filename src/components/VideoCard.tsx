import { useState, useRef, useEffect } from 'react';
import type { VideoItem } from '@/data/videoData';

interface VideoCardProps {
  video: VideoItem;
  index: number;
}

const GLOW_CYCLE = ['card-glow-gold', 'card-glow-magenta', 'card-glow-violet'];

export default function VideoCard({ video, index }: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowClass = GLOW_CYCLE[index % GLOW_CYCLE.length];

  // Single source of truth: is this card near the viewport right now?
  // No second "brain" for play/pause - the <video autoPlay loop playsInline>
  // attributes handle that natively. Mounting the element starts it,
  // unmounting it stops it. Nothing else to manage.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setMounted(entry.isIntersecting);
        }
      },
      { threshold: 0.2, rootMargin: '200px 0px 200px 0px' },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={`group relative aspect-[9/16] w-[72vw] shrink-0 snap-start overflow-hidden outline-none sm:w-[300px] lg:w-[320px] ${glowClass}`}
      style={{ backgroundColor: '#15110D' }}
    >
      {mounted ? (
        <video
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          className="h-full w-full object-cover transition-transform duration-[1000ms] will-change-transform group-hover:scale-[1.05]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
      ) : (
        <img
          src={video.poster}
          alt={video.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1000ms] will-change-transform group-hover:scale-[1.05]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
      )}

      {/* Gradient tối đáy để giữ tông "luxury nightlife" đồng bộ Hero/Experience */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,9,8,0) 55%, rgba(11,9,8,0.55) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
