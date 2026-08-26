import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rooms, type Room } from '@/data/roomsData';
import RoomBlock from '@/components/RoomBlock';
import RoomLightbox from '@/components/RoomLightbox';

gsap.registerPlugin(ScrollTrigger);

export default function RoomsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{ room: Room; index: number } | null>(null);

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

      gsap.utils.toArray<HTMLElement>('.room-block').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Phòng VIP tại Karaoke 9999"
      id="phong-vip"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: '#0B0908' }}
    >
      {/* Ambient glow đỏ nhạt neon - chỉ mobile, nằm ở khoảng trống giữa CTA của
          section trước và heading "Phòng VIP", lệch nhẹ khỏi tâm cho tự nhiên */}
      <div
        className="ambient-glow block md:hidden"
        style={{
          top: '-14%',
          left: '58%',
          width: 420,
          height: 420,
          backgroundColor: '#FF5C5C',
          ['--glow-opacity' as string]: 0.1,
          ['--glow-duration' as string]: '9s',
        }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-6 sm:px-10 lg:px-16">
        <div
          ref={headerRef}
          className="mx-auto mb-16 flex max-w-[640px] flex-col items-center gap-3 text-center md:mb-24"
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
            Phòng VIP
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
            Mỗi Phòng Một Chất Riêng
          </h2>
          <p
            style={{
              color: 'rgba(243,234,217,0.7)',
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              lineHeight: 1.7,
            }}
          >
            Cùng đẳng cấp phục vụ, khác biệt ở không gian và ánh sáng - chọn phòng hợp gu của bạn.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-28">
          {rooms.map((room, i) => (
            <div key={room.id} className="room-block">
              <RoomBlock
                room={room}
                reverse={i % 2 === 1}
                onOpenLightbox={(r, index) => setLightbox({ room: r, index })}
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <RoomLightbox
          images={lightbox.room.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) =>
            setLightbox((prev) => (prev ? { ...prev, index } : prev))
          }
        />
      )}
    </section>
  );
}
