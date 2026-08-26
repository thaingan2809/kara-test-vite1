import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselControlsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export default function CarouselControls({
  scrollPrev,
  scrollNext,
  canScrollPrev,
  canScrollNext,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Video trước"
        className="flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-25"
        style={{
          borderColor: 'rgba(198,161,91,0.3)',
          color: '#F3EAD9',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(198,161,91,0.7)';
          e.currentTarget.style.backgroundColor = 'rgba(198,161,91,0.06)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(198,161,91,0.3)';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Video sau"
        className="flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-25"
        style={{
          borderColor: 'rgba(198,161,91,0.3)',
          color: '#F3EAD9',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(198,161,91,0.7)';
          e.currentTarget.style.backgroundColor = 'rgba(198,161,91,0.06)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(198,161,91,0.3)';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
      </button>
    </div>
  );
}
