import type { CSSProperties } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

/** Bong bóng chat với chữ Z - biểu tượng Zalo, vẽ đơn giản dạng nét mảnh để hợp tông vàng-đen của site */
export function ZaloIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 3.5c-4.97 0-9 3.3-9 7.35 0 2.55 1.62 4.8 4.08 6.1-.13.86-.5 2.07-1.4 3.15a.4.4 0 0 0 .43.64c1.6-.5 2.94-1.28 3.9-1.96.62.13 1.28.2 1.99.2 4.97 0 9-3.3 9-7.13S16.97 3.5 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 9.7h5.1l-5 5.1h5.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Tia sét trong bong bóng chat - biểu tượng Messenger */
export function MessengerIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 3c-5 0-9 3.68-9 8.36 0 2.67 1.32 5.05 3.4 6.6V21l3.1-1.72c.8.22 1.64.34 2.5.34 5 0 9-3.68 9-8.26S17 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="m7.2 12.9 3.5-3.7 2.6 2 3.4-3.7-3.5 3.9-2.6-2-3.4 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Nốt nhạc cách điệu - biểu tượng TikTok */
export function TikTokIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M14.2 3v10.6a2.6 2.6 0 1 1-2.1-2.55"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 3c.35 2.1 1.9 3.7 4 4V9.3c-1.5-.05-2.9-.55-4-1.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
