import { useEffect, useRef, useState, type RefObject } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const PHONE_DISPLAY = '098 302 8447';
const PHONE_TEL = 'tel:+84983028447';
const ZALO_LINK = 'https://zalo.me/0983028447';

const NAV_LINKS = [
  { label: 'Giới Thiệu', id: 'trai-nghiem' },
  { label: 'Video', id: 'khong-gian' },
  { label: 'Phòng VIP', id: 'phong-vip' },
  { label: 'Đồ Ăn', id: 'am-thuc' },
  { label: 'Liên Hệ', id: 'lien-he' },
];

// Chiều cao ước lượng của thanh nav (để không cuộn quá đà, che mất phần đầu section)
const NAV_OFFSET = 84;

/** Cuộn mượt tới 1 section theo id, KHÔNG dùng href="#id" nên URL không bao giờ
 * bị gắn thêm hash (giữ nguyên đúng domain, vd luôn là karaoke9999.com). */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

interface NavProps {
  heroRef: RefObject<HTMLElement | null>;
  visible: boolean;
}

export default function Nav({ heroRef, visible }: NavProps) {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insideHero, setInsideHero] = useState(true);

  // Còn trong vùng Hero (video nền full-viewport) -> giữ thanh nav trong suốt
  // để khách xem trọn vẹn video, ra khỏi Hero -> nền nav mới hiện lên.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInsideHero(entry.intersectionRatio > 0.92),
      { threshold: [0, 0.92, 1] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroRef]);

  useEffect(() => {
    if (!visible || !navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 },
      );
    });
    return () => ctx.revert();
  }, [visible]);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 top-0 z-[100] grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-5 py-5 transition-opacity duration-700 md:px-10 lg:px-16 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden={!visible}
      >
        {/* Container nền - đây là phần fade out/biến mất khi còn trong Hero,
            còn logo/menu/CTA bên dưới luôn hiển thị rõ đè lên video */}
        <div
          className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 ${
            insideHero ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundColor: 'rgba(11,9,8,0.72)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
          aria-hidden="true"
        >
          {/* Điểm nhấn chữ ký: viền dưới nav ánh sáng nhẹ, gợi dây đèn neon viền mái hiên */}
          <div className="nav-edge-glow absolute inset-x-0 bottom-0" aria-hidden="true" />
        </div>

        {/* Logo - bấm để cuộn lên đầu Hero */}
        <button
          type="button"
          onClick={scrollToTop}
          className="relative col-start-1 flex flex-col items-start justify-self-start transition-opacity duration-300 hover:opacity-80"
          aria-label="Về đầu trang"
        >
          <span
            style={{
              color: '#F3EAD9',
              fontFamily: "'Fraunces', serif",
              fontWeight: 620,
              fontVariationSettings: "'opsz' 100, 'SOFT' 30",
              fontSize: 'clamp(19.5px, 2.6vw, 23.4px)',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            Karaoke 9999
          </span>
        </button>

        {/* Menu desktop - cột giữa của grid 3 cột, luôn nằm chính giữa nav bar
            bất kể độ rộng của logo (trái) và cụm SĐT+CTA (phải) */}
        <div className="relative col-start-2 hidden items-center gap-2 justify-self-center lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLinkClick(link.id)}
              className="whitespace-nowrap px-3.5 py-2 transition-colors duration-300"
              style={{
                color: 'rgba(243,234,217,0.85)',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 15.6,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#E8C77E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(243,234,217,0.85)';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Cột phải: SĐT + CTA (desktop) và nút hamburger (mobile/tablet) */}
        <div className="relative col-start-3 flex items-center justify-self-end gap-5">
          <div className="hidden items-center gap-5 md:flex">
            <a
              href={PHONE_TEL}
              className="whitespace-nowrap transition-colors duration-300"
              style={{
                color: 'rgba(243,234,217,0.8)',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 16.9,
                letterSpacing: '0.04em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#E8C77E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(243,234,217,0.8)';
              }}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-2.5 transition-colors duration-300"
              style={{
                backgroundColor: '#C6A15B',
                color: '#0B0908',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 600,
                fontSize: 14.95,
                letterSpacing: '0.12em',
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

          {/* SĐT hiển thị riêng cho mobile/tablet - nằm kế nút hamburger, bấm để gọi luôn */}
          <a
            href={PHONE_TEL}
            className="whitespace-nowrap transition-colors duration-300 md:hidden"
            style={{
              color: '#E8C77E',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(12.5px, 3.4vw, 14.5px)',
              letterSpacing: '0.02em',
            }}
            aria-label={`Gọi điện ${PHONE_DISPLAY}`}
          >
            {PHONE_DISPLAY}
          </a>

          {/* Nút hamburger mobile */}
          <button
            type="button"
            className="relative lg:hidden"
            style={{ color: '#F3EAD9' }}
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile fullscreen */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 pt-20 lg:hidden"
          style={{ backgroundColor: '#0B0908' }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLinkClick(link.id)}
              style={{
                color: 'rgba(243,234,217,0.9)',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 16.9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
              className="transition-colors duration-300 hover:text-[#E8C77E]"
            >
              {link.label}
            </button>
          ))}

          <a
            href={PHONE_TEL}
            className="transition-colors duration-300 hover:text-[#E8C77E]"
            style={{
              color: 'rgba(243,234,217,0.8)',
              fontFamily: "'Jost', sans-serif",
              fontSize: 18.2,
              letterSpacing: '0.06em',
            }}
          >
            {PHONE_DISPLAY}
          </a>

          <a
            href={ZALO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="px-8 py-3.5 transition-colors duration-300"
            style={{
              backgroundColor: '#C6A15B',
              color: '#0B0908',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 600,
              fontSize: 15.6,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Đặt Phòng Ngay
          </a>
        </div>
      )}
    </>
  );
}
