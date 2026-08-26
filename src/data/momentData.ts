export interface MomentItem {
  id: number;
  src: string;
  poster: string;
  alt: string;
  title: string;
  subtitle: string;
}

// NOTE: title/subtitle là placeholder tạm thời để khớp không khí "khoảnh khắc
// bất ngờ, náo nhiệt" của quán - đổi lại câu chữ thật sau khi xem kỹ nội dung
// từng video.
export const moments: MomentItem[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787728784/Khung.mp4',
    poster:
      'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787728784/Khung.jpg',
    alt: 'Khách hàng đến ca hát, vui chơi tại Karaoke 9999',
    title: 'Đến Là Hát',
    subtitle: 'Khách tới quán là bùng nổ ngay',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787728755/Khung_1.mp4',
    poster:
      'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787728755/Khung_1.jpg',
    alt: 'Không khí hát hò, nhảy múa tại Karaoke 9999',
    title: 'Cháy Hết Mình',
    subtitle: 'Nhạc lên là quẩy tới bến',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787728755/Khung_3.mp4',
    poster:
      'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787728755/Khung_3.jpg',
    alt: 'Khoảnh khắc vui nhộn của khách hàng tại Karaoke 9999',
    title: 'Vui Là Chính',
    subtitle: 'Ai cũng thành ca sĩ tối nay',
  },
];
