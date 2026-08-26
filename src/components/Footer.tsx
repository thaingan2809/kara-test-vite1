import { ZaloIcon, MessengerIcon, TikTokIcon } from '@/components/icons/BrandIcons';

const FOOTER_BG =
  'https://res.cloudinary.com/dcnf2dmf/image/upload/f_webp,q_auto,w_1600/v1787719462/test_3.jpg';

const MAPS_LINK =
  'https://www.google.com/maps/place/Karaoke+9999+(nh%C3%A0+v%C3%A0ng+anh)/@10.8943207,106.6993868,17z/data=!3m1!4b1!4m6!3m5!1s0x3174d76e736730cf:0xa79b331ba2935dd0!8m2!3d10.8943154!4d106.7019617!16s%2Fg%2F11jmvxl1fh?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D';

const SOCIALS = [
  { name: 'Zalo', href: 'https://zalo.me/0983028447', Icon: ZaloIcon },
  { name: 'Messenger', href: 'https://www.messenger.com/t/61553721356503', Icon: MessengerIcon },
  { name: 'TikTok', href: 'https://www.tiktok.com/@karaoke9999_thun.a', Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay tối đồng bộ tông "luxury nightlife" của toàn site */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,9,8,0.88) 0%, rgba(11,9,8,0.94) 40%, rgba(11,9,8,0.97) 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="ambient-glow"
        style={{
          bottom: '-12%',
          right: '-6%',
          width: 560,
          height: 560,
          backgroundColor: '#E8C77E',
          ['--glow-opacity' as string]: 0.08,
          ['--glow-duration' as string]: '10s',
        }}
        aria-hidden="true"
      />

      <div className="relative px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-[1200px] sm:px-4 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {/* Logo + giới thiệu ngắn */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span
                  style={{
                    color: '#F3EAD9',
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 620,
                    fontVariationSettings: "'opsz' 100, 'SOFT' 30",
                    fontSize: 22,
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                  }}
                >
                  Karaoke 9999
                </span>
                <span
                  style={{
                    marginTop: 2,
                    color: 'rgba(232,199,126,0.75)',
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 12.5,
                  }}
                >
                  Nhà Vàng Anh
                </span>
              </div>
              <p
                style={{
                  color: 'rgba(243,234,217,0.55)',
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 13,
                  lineHeight: 1.8,
                }}
              >
                Karaoke VIP tại Lái Thiêu, Thuận An.
                <br />
                Không gian sang trọng, phục vụ tận tâm.
              </p>
            </div>

            {/* Liên hệ */}
            <div className="flex flex-col gap-3">
              <span
                style={{
                  color: '#E8C77E',
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                Liên Hệ
              </span>
              <p
                style={{
                  color: 'rgba(243,234,217,0.6)',
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 13,
                  lineHeight: 1.9,
                }}
              >
                102 Đường Lái Thiêu
                <br />
                Lái Thiêu, Thuận An
                <br />
                <a
                  href="tel:+84983028447"
                  className="transition-colors duration-300 hover:text-[#F3EAD9]"
                >
                  098 302 8447
                </a>
                <br />
                <a
                  href="mailto:karaoke9999@gmail.com"
                  className="transition-colors duration-300 hover:text-[#F3EAD9]"
                >
                  karaoke9999@gmail.com
                </a>
              </p>
            </div>

            {/* Giờ mở cửa */}
            <div className="flex flex-col gap-3">
              <span
                style={{
                  color: '#E8C77E',
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                Giờ Mở Cửa
              </span>
              <p
                style={{
                  color: 'rgba(243,234,217,0.6)',
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 13,
                  lineHeight: 1.9,
                }}
              >
                08:00 – 24:00
                <br />
                Mở cửa tất cả các ngày trong tuần
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 transition-colors duration-300 hover:text-[#F3EAD9]"
                style={{
                  color: 'rgba(243,234,217,0.6)',
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 13,
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                  textDecorationColor: 'rgba(198,161,91,0.4)',
                }}
              >
                Xem đường đi trên Google Maps
              </a>
            </div>

            {/* Mạng xã hội */}
            <div className="flex flex-col gap-3">
              <span
                style={{
                  color: '#E8C77E',
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                Mạng Xã Hội
              </span>
              <div className="flex flex-col gap-3">
                {SOCIALS.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 transition-colors duration-300"
                    style={{
                      color: 'rgba(243,234,217,0.6)',
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontSize: 13,
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: '#E8C77E' }}
                      className="transition-colors duration-300 group-hover:text-[#F3EAD9]"
                    />
                    <span className="transition-colors duration-300 group-hover:text-[#F3EAD9]">
                      {name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mt-16 pt-8 md:mt-20"
            style={{ borderTop: '1px solid rgba(198,161,91,0.2)' }}
          >
            <p
              style={{
                color: 'rgba(243,234,217,0.35)',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              © 2026 Karaoke 9999 (Nhà Vàng Anh). Bảo lưu mọi quyền.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
