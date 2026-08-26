import { useRef, useEffect } from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MAPS_URL =
  'https://www.google.com/maps/place/Karaoke+9999+(nh%C3%A0+v%C3%A0ng+anh)/@10.8943207,106.6993868,17z/data=!3m1!4b1!4m6!3m5!1s0x3174d76e736730cf:0xa79b331ba2935dd0!8m2!3d10.8943154!4d106.7019617!16s%2Fg%2F11jmvxl1fh?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D';

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.911626654481!2d106.69938677600683!3d10.894320657006155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d76e736730cf%3A0xa79b331ba2935dd0!2sKaraoke%209999%20(nh%C3%A0%20v%C3%A0ng%20anh)!5e0!3m2!1sen!2s!4v1787733042330!5m2!1sen!2s';

const ZALO_LINK = 'https://zalo.me/0983028447';

const CONTACT_INFO = [
  {
    label: 'Địa Chỉ',
    icon: MapPin,
    content: (
      <>
        102 Đường Lái Thiêu
        <br />
        Lái Thiêu, Thuận An
      </>
    ),
  },
  {
    label: 'Điện Thoại',
    icon: Phone,
    content: (
      <a
        href="tel:+84983028447"
        style={{ color: '#F3EAD9', transition: 'color 0.3s ease' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#E8C77E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#F3EAD9';
        }}
      >
        098 302 8447
      </a>
    ),
  },
  {
    label: 'Giờ Mở Cửa',
    icon: Clock,
    content: '08:00 – 24:00 mỗi ngày',
  },
];

export default function ContactMapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactRowRef = useRef<HTMLDivElement>(null);
  const mapWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const contactRow = contactRowRef.current;
    const mapWrap = mapWrapRef.current;
    if (!section || !header || !contactRow || !mapWrap) return;

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
        contactRow.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: contactRow, start: 'top 85%', once: true },
        },
      );

      gsap.fromTo(
        mapWrap,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: mapWrap, start: 'top 88%', once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lien-he"
      aria-label="Liên hệ và vị trí Karaoke 9999"
      className="py-20 md:py-28"
      style={{ backgroundColor: '#0B0908' }}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div
          ref={headerRef}
          className="mx-auto mb-12 flex max-w-[640px] flex-col items-center gap-3 text-center md:mb-16"
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
            Liên Hệ &amp; Vị Trí
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
            Ghé Karaoke 9999
          </h2>
          <p
            style={{
              color: 'rgba(243,234,217,0.7)',
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              lineHeight: 1.7,
            }}
          >
            Ngay tại trung tâm Lái Thiêu, Thuận An - dễ tìm, dễ ghé, mở cửa cả tuần.
          </p>
        </div>

        {/* Hàng thông tin liên hệ */}
        <div
          ref={contactRowRef}
          className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-3 md:gap-8"
          style={{ borderTop: '1px solid rgba(198,161,91,0.25)', borderBottom: '1px solid rgba(198,161,91,0.25)' }}
        >
          {CONTACT_INFO.map((info) => {
            const Icon = info.icon;
            return (
              <div key={info.label} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Icon size={18} strokeWidth={1.5} style={{ color: '#E8C77E', flexShrink: 0 }} />
                  <span
                    style={{
                      color: '#E8C77E',
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 500,
                      fontSize: 10,
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {info.label}
                  </span>
                </div>
                <p
                  style={{
                    color: 'rgba(243,234,217,0.85)',
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: 'clamp(14px, 1.6vw, 16px)',
                    lineHeight: 1.7,
                  }}
                >
                  {info.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Google Maps embed full-width */}
        <div ref={mapWrapRef} className="mt-10 md:mt-14">
          <div
            className="group/map relative overflow-hidden"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(198,161,91,0.25)' }}
          >
            <div className="aspect-[16/9] w-full md:aspect-[21/9]">
              <iframe
                src={MAP_EMBED_SRC}
                title="Bản đồ vị trí Karaoke 9999 tại Lái Thiêu, Thuận An"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.15) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn absolute right-4 top-4 z-10 flex items-center gap-2 px-5 py-2.5 backdrop-blur-sm transition-colors duration-300 md:right-6 md:top-6"
              style={{
                backgroundColor: 'rgba(11,9,8,0.75)',
                border: '1px solid rgba(198,161,91,0.4)',
                color: '#F3EAD9',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232,199,126,0.8)';
                e.currentTarget.style.backgroundColor = 'rgba(11,9,8,0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,161,91,0.4)';
                e.currentTarget.style.backgroundColor = 'rgba(11,9,8,0.75)';
              }}
            >
              Mở Google Maps
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center md:mt-16">
          <a
            href={ZALO_LINK}
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
