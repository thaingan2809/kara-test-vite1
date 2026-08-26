export interface VideoItem {
  id: number;
  src: string;
  poster: string;
  alt: string;
}

export const videos: VideoItem[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787723466/0805.mp4',
    poster: 'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787723466/0805.jpg',
    alt: 'Khoảnh khắc vui chơi tại Karaoke 9999',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787723466/0805_3.mp4',
    poster: 'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787723466/0805_3.jpg',
    alt: 'Không khí sôi động tại Karaoke 9999',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787723465/0805_6.mp4',
    poster: 'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787723465/0805_6.jpg',
    alt: 'Ánh sáng, không gian phòng hát tại Karaoke 9999',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787723465/0805_4.mp4',
    poster: 'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787723465/0805_4.jpg',
    alt: 'Khách hàng ca hát tại Karaoke 9999',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787723469/0805_2.mp4',
    poster: 'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787723469/0805_2.jpg',
    alt: 'Tiệc tùng, vui chơi tại Karaoke 9999',
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/dcnf2dmf/video/upload/q_auto,f_mp4/v1787723465/0805_1.mp4',
    poster: 'https://res.cloudinary.com/dcnf2dmf/video/upload/so_0,f_jpg,q_auto,w_800/v1787723465/0805_1.jpg',
    alt: 'Không gian, vibe tại Karaoke 9999',
  },
];
