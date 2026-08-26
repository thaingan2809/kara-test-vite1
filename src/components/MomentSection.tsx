import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { moments } from '@/data/momentData';
import MomentCard from '@/components/MomentCard';

gsap.registerPlugin(ScrollTrigger);

export default function MomentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: section, start: 'top 80%', once: true },
        },
      );

      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Khoảnh khắc khách hàng tại Karaoke 9999"
      id="khoanh-khac"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: '#0B0908' }}
    >
      <div
        className="ambient-glow"
        style={{
          top: '-6%',
          left: '-4%',
          width: 560,
          height: 560,
          backgroundColor: '#E0559C',
          ['--glow-opacity' as string]: 0.09,
          ['--glow-duration' as string]: '8.5s',
        }}
        aria-hidden="true"
      />
      <div
        className="ambient-glow"
        style={{
          bottom: '-8%',
          right: '-4%',
          width: 560,
          height: 560,
          backgroundColor: '#6C5CE0',
          ['--glow-opacity' as string]: 0.09,
          ['--glow-duration' as string]: '9.5s',
          ['--glow-delay' as string]: '1.5s',
        }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-6 sm:px-10 lg:px-16">
        <div
          ref={headerRef}
          className="mx-auto mb-10 flex max-w-[620px] flex-col items-center gap-3 text-center md:mb-14"
        >
          <span
            style={{
              color: '#E8C77E',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(10px, 1.4vw, 12px)',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
            }}
          >
            Khoảnh Khắc Thật
          </span>
          <h2
            style={{
              color: '#F3EAD9',
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontVariationSettings: "'opsz' 120, 'SOFT' 30",
              fontSize: 'clamp(1.9rem, 4vw, 3.2rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            Khách Đến Là Quẩy
          </h2>
          <p
            style={{
              color: 'rgba(243,234,217,0.7)',
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              lineHeight: 1.7,
            }}
          >
            Những khoảnh khắc thật, không dàn dựng - đúng chất náo nhiệt của
            khách hàng khi bước vào Karaoke 9999.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6"
        >
          {moments.map((moment, index) => (
            <MomentCard key={moment.id} moment={moment} index={index} />
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <a
            href="https://zalo.me/0983028447"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 transition-colors duration-300"
            style={{
              backgroundColor: '#C6A15B',
              color: '#0B0908',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E8C77E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C6A15B';
            }}
          >
            Đặt Phòng Ngay
          </a>
        </div>
      </div>
    </section>
  );
}
