export interface VideoItem {
  id: number;
  src: string;
  poster: string;
  alt: string;
}

export const videos: VideoItem[] = [
  {
    id: 1,
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%201.mp4',
    poster: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%201.jpg',
    alt: 'Khoảnh khắc vui chơi tại Karaoke 9999',
  },
  {
    id: 2,
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%202.mp4',
    poster: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%202.jpg',
    alt: 'Không khí sôi động tại Karaoke 9999',
  },
  {
    id: 3,
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%203.mp4',
    poster: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%203.jpg',
    alt: 'Ánh sáng, không gian phòng hát tại Karaoke 9999',
  },
  {
    id: 4,
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%204.mp4',
    poster: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%204.jpg',
    alt: 'Khách hàng ca hát tại Karaoke 9999',
  },
  {
    id: 5,
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%205.mp4',
    poster: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%205.jpg',
    alt: 'Tiệc tùng, vui chơi tại Karaoke 9999',
  },
  {
    id: 6,
    src: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%206.mp4',
    poster: 'https://pub-443329540b1043df9248eba039428958.r2.dev/videoshowcase%206.jpg',
    alt: 'Không gian, vibe tại Karaoke 9999',
  },
];
