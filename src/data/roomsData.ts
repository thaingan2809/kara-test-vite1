export type RoomGlow = 'gold' | 'violet' | 'magenta';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  /** Màu ambient glow + hover glow khớp đúng tông ánh sáng thật của phòng */
  glow: RoomGlow;
}

// NOTE: Tên và mô tả dưới đây là gợi ý tạm thời (ấm áp / dịu nhẹ / sôi động).
// Chưa xem được ảnh thật của từng phòng nên chưa thể khớp chính xác 100% với
// màu đèn/decor thực tế - dễ dàng đổi lại text sau khi xem bản build.
export const rooms: Room[] = [
  {
    id: 'vip-1',
    name: 'VIP Dạ Yến',
    tagline: 'Ấm Áp · Sang Trọng',
    description:
      'Tông ánh sáng ấm, không gian tinh tế - phù hợp cho những buổi gặp gỡ cần sự riêng tư, kín đáo.',
    images: [
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726045/phong_11.jpg',
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726042/phong_10.jpg',
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726042/phong_9.jpg',
    ],
    glow: 'gold',
  },
  {
    id: 'vip-2',
    name: 'VIP Nguyệt Cung',
    tagline: 'Dịu Dàng · Thư Thái',
    description:
      'Ánh sáng êm dịu, không gian nhẹ nhàng - lựa chọn lý tưởng cho những cuộc trò chuyện thư giãn cùng bạn bè.',
    images: [
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726039/phong_1.jpg',
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726039/phong_2.jpg',
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726040/phong_3.jpg',
    ],
    glow: 'violet',
  },
  {
    id: 'vip-3',
    name: 'VIP Thịnh Yến',
    tagline: 'Sôi Động · Rực Rỡ',
    description:
      'Hệ đèn màu biến ảo theo nhịp nhạc - không gian lý tưởng cho tiệc sinh nhật, họp mặt đông vui.',
    images: [
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726041/phong_6.jpg',
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726045/phong_4.jpg',
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726042/phong_5.jpg',
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726040/phong_7.jpg',
      'https://res.cloudinary.com/dcnf2dmf/image/upload/v1787726041/phong_8.jpg',
    ],
    glow: 'magenta',
  },
];

/** Chèn chuỗi transform Cloudinary (vd: 'f_webp,q_auto,w_1200') vào URL gốc */
export function cld(url: string, transform: string): string {
  return url.replace('/upload/', `/upload/${transform}/`);
}
