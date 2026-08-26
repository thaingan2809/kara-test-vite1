import { useState, useRef, useEffect } from 'react';
import type { MomentItem } from '@/data/momentData';

interface MomentCardProps {
  moment: MomentItem;
  index: number;
}

const GLOW_CYCLE = ['card-glow-gold', 'card-glow-magenta', 'card-glow-violet'];

export default function MomentCard({ moment, index }: MomentCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowClass = GLOW_CYCLE[index % GLOW_CYCLE.length];

  // Cùng nguyên tắc với VideoCard: mount/unmount <video> chính là play/pause,
  // không cần state trung gian nào khác.
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
      className={`group relative aspect-[9/16] w-full overflow-hidden outline-none ${glowClass}`}
      style={{ backgroundColor: '#15110D' }}
    >
      {mounted ? (
        <video
          src={moment.src}
          poster={moment.poster}
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
          src={moment.poster}
          alt={moment.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1000ms] will-change-transform group-hover:scale-[1.05]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
      )}

      {/* Gradient tối đáy để chữ luôn đọc rõ trên mọi nền video */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,9,8,0) 45%, rgba(11,9,8,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Tiêu đề + phụ đề đè đáy, góc trái - giống ảnh mẫu */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-5 pt-10 sm:px-6 sm:pb-6">
        <p
          style={{
            color: '#F3EAD9',
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontVariationSettings: "'opsz' 90, 'SOFT' 30",
            fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
            lineHeight: 1.15,
            textShadow: '0 2px 12px rgba(0,0,0,0.6)',
          }}
        >
          {moment.title}
        </p>
        <p
          style={{
            marginTop: 4,
            color: 'rgba(243,234,217,0.75)',
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(12px, 1.4vw, 13.5px)',
            lineHeight: 1.5,
          }}
        >
          {moment.subtitle}
        </p>
      </div>
    </div>
  );
}
