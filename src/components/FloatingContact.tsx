import { forwardRef } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { ZaloIcon, MessengerIcon } from '@/components/icons/BrandIcons';

const MAPS_LINK =
  'https://www.google.com/maps/place/Karaoke+9999+(nh%C3%A0+v%C3%A0ng+anh)/@10.8943207,106.6993868,17z/data=!3m1!4b1!4m6!3m5!1s0x3174d76e736730cf:0xa79b331ba2935dd0!8m2!3d10.8943154!4d106.7019617!16s%2Fg%2F11jmvxl1fh?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D';
const PHONE_TEL = 'tel:+84983028447';
const ZALO_LINK = 'https://zalo.me/0983028447';
const MESSENGER_LINK = 'https://www.messenger.com/t/61553721356503';

const ICONS = [
  { name: 'Gọi điện', href: PHONE_TEL, Icon: Phone, label: 'Gọi điện 098 302 8447' },
  { name: 'Zalo', href: ZALO_LINK, Icon: ZaloIcon, label: 'Chat qua Zalo' },
  { name: 'Messenger', href: MESSENGER_LINK, Icon: MessengerIcon, label: 'Nhắn tin qua Messenger' },
  { name: 'Google Maps', href: MAPS_LINK, Icon: MapPin, label: 'Xem đường đi trên Google Maps' },
];

const FloatingContact = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="fixed bottom-5 right-5 z-[70] flex flex-col items-center gap-3 md:bottom-7 md:right-7 md:gap-3.5"
      style={{ opacity: 0, pointerEvents: 'none', willChange: 'opacity', transition: 'opacity 0.4s ease' }}
      aria-label="Liên hệ nhanh"
    >
      {ICONS.map(({ name, href, Icon, label }) => (
        <a
          key={name}
          href={href}
          {...(href.startsWith('tel:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          aria-label={label}
          title={label}
          className="group flex h-11 w-11 items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-105 md:h-12 md:w-12"
          style={{
            borderRadius: '9999px',
            backgroundColor: 'rgba(11,9,8,0.7)',
            border: '1px solid rgba(198,161,91,0.35)',
            boxShadow: '0 2px 14px rgba(0,0,0,0.4)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(232,199,126,0.85)';
            e.currentTarget.style.backgroundColor = 'rgba(11,9,8,0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(198,161,91,0.35)';
            e.currentTarget.style.backgroundColor = 'rgba(11,9,8,0.7)';
          }}
        >
          <Icon
            size={19}
            style={{ color: '#E8C77E' }}
            className="transition-colors duration-300 group-hover:text-[#F3EAD9]"
          />
        </a>
      ))}
    </div>
  );
});

FloatingContact.displayName = 'FloatingContact';

export default FloatingContact;
