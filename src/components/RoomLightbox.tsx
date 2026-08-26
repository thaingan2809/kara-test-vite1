import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cld } from '@/data/roomsData';

interface RoomLightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function RoomLightbox({ images, index, onClose, onNavigate }: RoomLightboxProps) {
  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, goPrev, goNext]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(11,9,8,0.94)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Đóng"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 hover:border-[rgba(243,234,217,0.5)]"
        style={{ borderColor: 'rgba(243,234,217,0.25)', color: '#F3EAD9' }}
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Ảnh trước"
          className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border transition-colors duration-300 hover:border-[rgba(243,234,217,0.5)] md:left-6"
          style={{ borderColor: 'rgba(243,234,217,0.25)', color: '#F3EAD9' }}
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
        </button>
      )}

      <img
        src={cld(images[index], 'f_webp,q_auto,w_1600')}
        alt=""
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Ảnh sau"
          className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border transition-colors duration-300 hover:border-[rgba(243,234,217,0.5)] md:right-6"
          style={{ borderColor: 'rgba(243,234,217,0.25)', color: '#F3EAD9' }}
        >
          <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
        </button>
      )}

      {images.length > 1 && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          style={{
            color: 'rgba(243,234,217,0.6)',
            fontFamily: "'Jost', sans-serif",
            fontSize: 12,
            letterSpacing: '0.2em',
          }}
        >
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
