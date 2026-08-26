import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cldTransform } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787727549/foodndrinks_2.jpg',
  'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787727552/foodndrinks_1.jpg',
  'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787727548/foodndrinks_8.jpg',
  'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787727582/481219537_122179368746124045_3389339280910690230_n.jpg',
  'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787727548/foodndrinks_5.jpg',
];

function BentoImage({
  src,
  alt,
  className,
  sizeHint,
}: {
  src: string;
  alt: string;
  className: string;
  sizeHint: string;
}) {
  return (
    <div
      tabIndex={0}
      className={`card-glow-gold group relative overflow-hidden outline-none ${className}`}
    >
      <img
        src={cldTransform(src, `f_webp,q_auto,${sizeHint}`)}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[900ms] will-change-transform group-hover:scale-[1.05]"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      />
    </div>
  );
}

export default function FlavorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileGridRef = useRef<HTMLDivElement>(null);
  const desktopGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

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

      [mobileGridRef.current, desktopGridRef.current].forEach((grid) => {
        if (!grid) return;
        gsap.fromTo(
          grid.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Ẩm thực và thức uống tại Karaoke 9999"
      id="am-thuc"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: '#0B0908' }}
    >
      <div
        className="ambient-glow"
        style={{
          bottom: '-10%',
          left: 'calc(50% - 310px)',
          width: 620,
          height: 620,
          backgroundColor: '#E8C77E',
          ['--glow-opacity' as string]: 0.07,
          ['--glow-duration' as string]: '10s',
        }}
        aria-hidden="true"
      />
      {/* Ambient glow tím nhạt neon - chỉ mobile, nằm ngay phía trên heading,
          lệch nhẹ khỏi tâm cho tự nhiên, không đối xứng cứng nhắc */}
      <div
        className="ambient-glow block md:hidden"
        style={{
          top: '-8%',
          left: '38%',
          width: 380,
          height: 380,
          backgroundColor: '#9B7FE0',
          ['--glow-opacity' as string]: 0.11,
          ['--glow-duration' as string]: '8.5s',
        }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-6 sm:px-10 lg:px-16">
        <div
          ref={headerRef}
          className="mx-auto mb-10 flex max-w-[560px] flex-col items-center gap-3 text-center md:mb-14"
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
            Ẩm Thực & Thức Uống
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
            Ngon Miệng, Đã Khát
          </h2>
          <p
            style={{
              color: 'rgba(243,234,217,0.7)',
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              lineHeight: 1.7,
            }}
          >
            Trái cây tươi, món ăn nhẹ và thức uống được chuẩn bị chu đáo cho mọi cuộc vui.
          </p>
        </div>

        {/* Mobile: 1 ảnh to phía trên + lưới 2x2 phía dưới */}
        <div ref={mobileGridRef} className="grid grid-cols-2 gap-3 md:hidden">
          <BentoImage
            src={IMAGES[0]}
            alt="Món ăn, trái cây, thức uống tại Karaoke 9999"
            className="col-span-2 aspect-[16/10]"
            sizeHint="w_900"
          />
          {IMAGES.slice(1).map((src) => (
            <BentoImage
              key={src}
              src={src}
              alt="Món ăn, trái cây, thức uống tại Karaoke 9999"
              className="aspect-square"
              sizeHint="w_500"
            />
          ))}
        </div>

        {/* Desktop: bento 1 ảnh to (2x2) + 4 ảnh nhỏ xung quanh */}
        <div
          ref={desktopGridRef}
          className="hidden gap-4 md:grid md:h-[560px] md:grid-cols-4 md:grid-rows-2 lg:h-[620px]"
        >
          <BentoImage
            src={IMAGES[0]}
            alt="Món ăn, trái cây, thức uống tại Karaoke 9999"
            className="col-span-2 row-span-2"
            sizeHint="w_1200"
          />
          {IMAGES.slice(1).map((src) => (
            <BentoImage
              key={src}
              src={src}
              alt="Món ăn, trái cây, thức uống tại Karaoke 9999"
              className="col-span-1 row-span-1"
              sizeHint="w_700"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
