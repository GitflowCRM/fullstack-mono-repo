'use client';

import { useEffect } from 'react';
import NextImage from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react-native';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate(currentIndex - 1)}
        className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-3xl aspect-square">
        <NextImage
          src={images[currentIndex]}
          alt={`Product image ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      <button
        onClick={() => onNavigate(currentIndex + 1)}
        className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === images.length - 1}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
