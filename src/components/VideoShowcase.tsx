import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { videos } from '@/data/videoData';
import VideoCard from '@/components/VideoCard';
import CarouselControls from '@/components/CarouselControls';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Không dùng thư viện drag/carousel - scroll ngang gốc của trình duyệt
  // (overflow-x-auto + snap-x snap-mandatory ở track bên dưới) xử lý toàn bộ
  // thao tác vuốt/kéo. Hàm này chỉ "đẩy" scroll container, giống hệt việc
  // vuốt tay, dùng cho 2 nút mũi tên.
  const scrollByDirection = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const track = trackRef.current;
    if (!section || !header || !track) return;

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
        track.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: track, start: 'top 85%', once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Không gian và không khí tại Karaoke 9999"
      id="khong-gian"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: '#0B0908' }}
    >
      <div
        className="ambient-glow"
        style={{
          top: '-10%',
          left: '4%',
          width: 640,
          height: 640,
          backgroundColor: '#6C5CE0',
          ['--glow-opacity' as string]: 0.1,
          ['--glow-duration' as string]: '10s',
        }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div
          ref={headerRef}
          className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-col gap-3">
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
              Trực Tiếp Tại Đây
            </span>
            <h2
              className="max-w-[760px]"
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
              Cảm Nhận Không Khí Thật
            </h2>
            <p
              className="max-w-[480px] pb-1"
              style={{
                color: 'rgba(243,234,217,0.7)',
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: 'clamp(13px, 1.6vw, 15px)',
                lineHeight: 1.7,
              }}
            >
              Ánh sáng, âm thanh và những khoảnh khắc thật của khách hàng tại
              Karaoke 9999 - xem để cảm nhận trước khi bước vào.
            </p>
          </div>

          <div className="hidden md:block">
            <CarouselControls
              scrollPrev={() => scrollByDirection(-1)}
              scrollNext={() => scrollByDirection(1)}
              canScrollPrev={true}
              canScrollNext={true}
            />
          </div>
        </div>

        {/* Video track - scroll ngang native + snap, không dùng thư viện JS drag */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
          <div aria-hidden="true" className="w-1 shrink-0 md:w-3" />
        </div>

        {/* Mobile controls */}
        <div className="mt-8 flex md:hidden">
          <CarouselControls
            scrollPrev={() => scrollByDirection(-1)}
            scrollNext={() => scrollByDirection(1)}
            canScrollPrev={true}
            canScrollNext={true}
          />
        </div>

        {/* CTA */}
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
