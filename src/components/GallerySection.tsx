import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1
        );
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1
        );
      }
    };

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex]);

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null ? GALLERY_ITEMS[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F9F7F2] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
            <span>HERITAGE & CAMPUS LIFE ALBUM</span>
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15] mb-4">
            Moments <span className="italic font-normal text-[#C5A059]">That Matter.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#121A26]/85 leading-relaxed font-normal">
            A visual retrospective into the daily rhythm of inquiry, laboratory experimentation, collegiate camaraderie, and artistic discovery at RIA.
          </p>
        </div>

        {/* 8-Tile Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-[#C5A059]/30 hover:border-[#C5A059] bg-[#070F1E]"
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#070F1E]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-3.5 left-3.5 bg-[#070F1E]/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-extrabold text-[#E5C782] uppercase tracking-wider border border-[#C5A059]/40">
                {item.category}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#E5C782]" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#E5C782] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#F9F7F2]/80 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${activeItem.title}`}
          className="fixed inset-0 z-50 bg-[#070F1E]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar with counter & close button */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20">
            <div className="text-white text-xs sm:text-sm font-semibold bg-[#0D1A30] px-4 py-2 rounded-xl border border-[#C5A059]/40 shadow-lg">
              <span className="text-[#E5C782] font-bold">{activeLightboxIndex + 1}</span> / {GALLERY_ITEMS.length}
              <span className="mx-2 text-white/40">·</span>
              <span className="tracking-wide">{activeItem.category}</span>
            </div>

            <button
              onClick={closeLightbox}
              type="button"
              aria-label="Close Lightbox"
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            type="button"
            aria-label="Previous Image"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#0D1A30]/90 hover:bg-[#1A382B] text-white transition-colors z-20 border border-[#C5A059]/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            type="button"
            aria-label="Next Image"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#0D1A30]/90 hover:bg-[#1A382B] text-white transition-colors z-20 border border-[#C5A059]/30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Content Box */}
          <div
            className="max-w-4xl w-full bg-[#0D1A30] rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image display */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-contain max-h-[65vh]"
              />
            </div>

            {/* Info footer */}
            <div className="p-5 sm:p-6 bg-[#070F1E] border-t border-[#C5A059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] font-bold text-[#E5C782] uppercase tracking-[0.2em] block">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F9F7F2]/80 mt-1 max-w-2xl">
                  {activeItem.caption}
                </p>
              </div>

              <div className="text-[11px] text-[#C5A059] shrink-0 font-semibold">
                Use ← / → arrows or swipe
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
