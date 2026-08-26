export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(' ');
}

/** Chèn chuỗi transform Cloudinary (vd: 'f_webp,q_auto,w_900') vào URL gốc */
export function cldTransform(url: string, transform: string): string {
  return url.replace('/upload/', `/upload/${transform}/`);
}
