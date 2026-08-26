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
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/MomentSection%201.mp4',
    poster:
      'https://pub-443329540b1043df9248eba039428958.r2.dev/MomentSection%201.jpg',
    alt: 'Khách hàng đến ca hát, vui chơi tại Karaoke 9999',
    title: 'Đến Là Hát',
    subtitle: 'Khách tới quán là bùng nổ ngay',
  },
  {
    id: 2,
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/MomentSection%202.mp4',
    poster:
      'https://pub-443329540b1043df9248eba039428958.r2.dev/MomentSection%202.jpg',
    alt: 'Không khí hát hò, nhảy múa tại Karaoke 9999',
    title: 'Cháy Hết Mình',
    subtitle: 'Nhạc lên là quẩy tới bến',
  },
  {
    id: 3,
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/MomentSection%203.mp4',
    poster:
      'https://pub-443329540b1043df9248eba039428958.r2.dev/MomentSection%203.jpg',
    alt: 'Khoảnh khắc vui nhộn của khách hàng tại Karaoke 9999',
    title: 'Vui Là Chính',
    subtitle: 'Ai cũng thành ca sĩ tối nay',
  },
];
