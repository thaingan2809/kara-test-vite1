import { useState } from 'react';
import type { Room } from '@/data/roomsData';
import { cld } from '@/data/roomsData';

interface RoomBlockProps {
  room: Room;
  reverse: boolean;
  onOpenLightbox: (room: Room, index: number) => void;
}

const GLOW_COLOR: Record<Room['glow'], string> = {
  gold: '#E8C77E',
  magenta: '#E0559C',
  violet: '#6C5CE0',
};

const GLOW_CLASS: Record<Room['glow'], string> = {
  gold: 'card-glow-gold',
  magenta: 'card-glow-magenta',
  violet: 'card-glow-violet',
};

export default function RoomBlock({ room, reverse, onOpenLightbox }: RoomBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const glowHex = GLOW_COLOR[room.glow];
  const glowClass = GLOW_CLASS[room.glow];

  return (
    <div
      className={`relative flex flex-col gap-7 overflow-hidden md:items-center md:gap-14 ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Ambient glow riêng của phòng - đúng tông ánh sáng thật (ấm/dịu/rực rỡ) */}
      <div
        className="ambient-glow"
        style={{
          top: '-10%',
          ...(reverse ? { left: '-6%' } : { right: '-6%' }),
          width: 560,
          height: 560,
          backgroundColor: glowHex,
          ['--glow-opacity' as string]: 0.1,
          ['--glow-duration' as string]: '9s',
        }}
        aria-hidden="true"
      />
      {/* Chữ giới thiệu phòng - căn giữa trên mobile, căn trái trên desktop */}
      <div className="flex flex-col items-center text-center md:w-[32%] md:shrink-0 md:items-start md:text-left">
        <span
          style={{
            color: '#E8C77E',
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(10px, 1.4vw, 12px)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
          }}
        >
          {room.tagline}
        </span>
        <h3
          style={{
            marginTop: 10,
            color: '#F3EAD9',
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontVariationSettings: "'opsz' 100, 'SOFT' 30",
            fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
            lineHeight: 1.08,
          }}
        >
          {room.name}
        </h3>
        <p
          style={{
            marginTop: 14,
            maxWidth: 360,
            color: 'rgba(243,234,217,0.7)',
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: 'clamp(13px, 1.6vw, 15px)',
            lineHeight: 1.7,
          }}
        >
          {room.description}
        </p>

        <a
          href="https://zalo.me/0983028447"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit px-8 py-3.5 transition-colors duration-300"
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

      {/* Gallery: ảnh chính + thumbnail */}
      <div className="md:flex-1">
        <button
          type="button"
          onClick={() => onOpenLightbox(room, activeIndex)}
          aria-label={`Xem toàn bộ ảnh ${room.name}`}
          className={`group relative block w-full overflow-hidden outline-none ${glowClass}`}
          style={{ aspectRatio: '4 / 3' }}
        >
          <img
            src={cld(room.images[activeIndex], 'f_webp,q_auto,w_800')}
            srcSet={`${cld(room.images[activeIndex], 'f_webp,q_auto,w_400')} 400w, ${cld(room.images[activeIndex], 'f_webp,q_auto,w_640')} 640w, ${cld(room.images[activeIndex], 'f_webp,q_auto,w_800')} 800w, ${cld(room.images[activeIndex], 'f_webp,q_auto,w_1200')} 1200w`}
            sizes="(max-width: 767px) 92vw, (max-width: 1023px) 48vw, 640px"
            alt={`${room.name} - ảnh ${activeIndex + 1}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          />
        </button>

        {room.images.length > 1 && (
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {room.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Xem ảnh ${i + 1} của ${room.name}`}
                className="relative h-16 w-24 shrink-0 overflow-hidden outline-none transition-[opacity,box-shadow] duration-300 md:h-[70px] md:w-[104px]"
                style={{
                  boxShadow:
                    i === activeIndex
                      ? 'inset 0 0 0 2px #E8C77E'
                      : 'inset 0 0 0 1px rgba(243,234,217,0.15)',
                  opacity: i === activeIndex ? 1 : 0.5,
                }}
                onMouseEnter={(e) => {
                  if (i === activeIndex) return;
                  e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${glowHex}, 0 0 14px ${glowHex}66`;
                  e.currentTarget.style.opacity = '0.85';
                }}
                onMouseLeave={(e) => {
                  if (i === activeIndex) return;
                  e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(243,234,217,0.15)';
                  e.currentTarget.style.opacity = '0.5';
                }}
                onFocus={(e) => {
                  if (i === activeIndex) return;
                  e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${glowHex}, 0 0 14px ${glowHex}66`;
                  e.currentTarget.style.opacity = '0.85';
                }}
                onBlur={(e) => {
                  if (i === activeIndex) return;
                  e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(243,234,217,0.15)';
                  e.currentTarget.style.opacity = '0.5';
                }}
              >
                <img
                  src={cld(img, 'f_webp,q_auto,w_240')}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
