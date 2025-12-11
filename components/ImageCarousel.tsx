import { useState, useRef, useEffect } from "react";
import type React from "react";

interface ImageCarouselProps {
  images: string[];
  initialIndex?: number;
  variant?: "desktop" | "tablet" | "mobile";
  // Desktop-specific props
  previousIconPath?: string;
  nextIconPath?: string;
  // Styling customization
  mainImageAspectRatio?: string;
}

export default function ImageCarousel({
  images,
  initialIndex = 1,
  variant = "desktop",
  previousIconPath,
  nextIconPath,
  mainImageAspectRatio = variant === "desktop" ? "aspect-[1280/706]" : "aspect-[725.209/400]",
}: ImageCarouselProps) {
  const isMobileOrTablet = variant === "tablet" || variant === "mobile";
  // Ensure initialIndex is within bounds
  const safeInitialIndex = images.length > 0 ? Math.max(0, Math.min(initialIndex, images.length - 1)) : 0;
  const [currentIndex, setCurrentIndex] = useState(safeInitialIndex);
  
  // Swipe handling for tablet and mobile with drag effect
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragOffsetRef = useRef(0);
  const currentIndexRef = useRef(safeInitialIndex);
  const isDraggingRef = useRef(false);
  const listenersAttachedRef = useRef(false);
  
  // Keep refs in sync
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);
  
  useEffect(() => {
    dragOffsetRef.current = dragOffset;
  }, [dragOffset]);
  
  // Store images.length in ref to avoid recreating handlers
  const imagesLengthRef = useRef(images.length);
  useEffect(() => {
    imagesLengthRef.current = images.length;
  }, [images.length]);

  // Attach touch listeners for mobile/tablet - using useEffect like Trendyol approach
  useEffect(() => {
    if (!isMobileOrTablet || !containerRef.current) return;
    
    const el = containerRef.current;
    
    const touchStartHandler = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartX.current = touch.clientX;
      setIsDragging(true);
      isDraggingRef.current = true;
      setDragOffset(0);
      dragOffsetRef.current = 0;
    };
    
    const touchMoveHandler = (e: TouchEvent) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      
      e.preventDefault();
      const currentX = e.touches[0].clientX;
      const diff = currentX - touchStartX.current;
      const containerWidth = containerRef.current.offsetWidth || 0;
      
      if (containerWidth > 0) {
        const offsetPercent = (diff / containerWidth) * 100;
        const clampedOffset = Math.max(-100, Math.min(100, offsetPercent));
        setDragOffset(clampedOffset);
        dragOffsetRef.current = clampedOffset;
      }
    };
    
    const touchEndHandler = () => {
      const currentOffset = dragOffsetRef.current;
      const thresholdPercent = 25;
      const absOffset = Math.abs(currentOffset);
      
      setIsDragging(false);
      isDraggingRef.current = false;
      
      if (absOffset > thresholdPercent) {
        if (currentOffset < 0) {
          const currentIdx = currentIndexRef.current;
          const next = currentIdx === imagesLengthRef.current - 1 ? 0 : currentIdx + 1;
          setCurrentIndex(next);
        } else {
          const currentIdx = currentIndexRef.current;
          const next = currentIdx === 0 ? imagesLengthRef.current - 1 : currentIdx - 1;
          setCurrentIndex(next);
        }
        setDragOffset(0);
        dragOffsetRef.current = 0;
      } else {
        setDragOffset(0);
        dragOffsetRef.current = 0;
      }
      
      touchStartX.current = 0;
    };
    
    el.addEventListener('touchstart', touchStartHandler, { passive: false });
    el.addEventListener('touchmove', touchMoveHandler, { passive: false });
    el.addEventListener('touchend', touchEndHandler, { passive: false });
    
    return () => {
      el.removeEventListener('touchstart', touchStartHandler, { passive: false } as any);
      el.removeEventListener('touchmove', touchMoveHandler, { passive: false } as any);
      el.removeEventListener('touchend', touchEndHandler, { passive: false } as any);
    };
  }, [isMobileOrTablet]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setDragOffset(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setDragOffset(0);
  };

  // Desktop image component (used for all variants)
  function MainImage({ src }: { src: string }) {
    const innerAspectRatio = variant === "desktop" ? "aspect-[1016/560]" : "aspect-[725.209/400]";
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    
    // For tablet/mobile, always show all three images (prev, current, next) for smooth dragging
    if (isMobileOrTablet) {
      return (
        <div 
          ref={containerRef}
          className={`${mainImageAspectRatio} content-stretch flex flex-col items-start overflow-hidden relative shrink-0 w-full`} 
          data-name="image"
          style={{ touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}
        >
          <div className={`${innerAspectRatio} relative shrink-0 w-full`} data-name="image">
            {/* Previous image */}
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={images[prevIndex]} 
              draggable={false}
              style={{
                transform: `translateX(${-100 + dragOffset}%)`,
                transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
            {/* Current image */}
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={src} 
              draggable={false}
              style={{
                transform: `translateX(${dragOffset}%)`,
                transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
            {/* Next image */}
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={images[nextIndex]} 
              draggable={false}
              style={{
                transform: `translateX(${100 + dragOffset}%)`,
                transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
          </div>
        </div>
      );
    }
    
    // Desktop view
    return (
      <div 
        ref={containerRef}
        className={`${mainImageAspectRatio} content-stretch flex flex-col items-start mb-[-88px] overflow-clip relative shrink-0 w-full`} 
        data-name="image"
      >
        <div className={`${innerAspectRatio} relative shrink-0 w-full`} data-name="image">
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={src} 
            draggable={false}
          />
        </div>
      </div>
    );
  }

  // Navigation button icons
  function PreviousIcon() {
    if (!previousIconPath) return null;
    return (
      <div className="relative shrink-0 size-[24px]" data-name="icons">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="icons">
            <path d={previousIconPath} fill="var(--fill-0, #F6EEE5)" id="Union" />
          </g>
        </svg>
      </div>
    );
  }

  function NextIcon() {
    if (!nextIconPath) return null;
    return (
      <div className="relative shrink-0 size-[24px]" data-name="icons">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="icons">
            <path d={nextIconPath} fill="var(--fill-0, #FFFAF4)" id="Union" />
          </g>
        </svg>
      </div>
    );
  }

  // Image counter (shown on all variants)
  function ImageCounter() {
    if (isMobileOrTablet) {
      return (
        <div 
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" 
          data-name="image-counter"
          style={{ touchAction: 'none', WebkitTouchCallout: 'none' }}
        >
          {/* Gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
          {/* Counter text */}
          <div className="relative flex flex-row items-center justify-center p-[16px] pointer-events-none">
            <span className="font-['Open_Sans:Regular',sans-serif] text-white text-[16px] leading-[1.5] [text-shadow:rgba(0,0,0,0.5)_1px_1px_3px] pointer-events-none">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      );
    }
    return null; // On desktop, counter is shown in NavigationButtons
  }

  // Navigation buttons (only show if icons are provided and on desktop)
  function NavigationButtons({ onPrevious, onNext }: { onPrevious: () => void; onNext: () => void }) {
    if (!previousIconPath || !nextIconPath || isMobileOrTablet) return null;

    return (
      <div className="mb-[-88px] relative shrink-0 w-full" data-name="controls">
        {/* Transparent gradient overlay for button contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
        <div className="flex flex-row items-end justify-center size-full">
          <div className="content-stretch flex gap-[24px] items-center justify-center p-[16px] relative w-full">
            <button
              aria-label="View previous image"
              className="bg-[#714b55] content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 cursor-pointer"
              data-name="Button"
              onClick={onPrevious}
            >
              <div aria-hidden="true" className="absolute border-2 border-[#f6eee5] border-solid inset-0 pointer-events-none" />
              <PreviousIcon />
            </button>
            <span className="font-['Open_Sans:Regular',sans-serif] text-white text-[16px] leading-[1.5] [text-shadow:rgba(0,0,0,0.5)_1px_1px_3px]">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              aria-label="View next image"
              className="bg-[#714b55] content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 cursor-pointer"
              data-name="Button"
              onClick={onNext}
            >
              <div aria-hidden="true" className="absolute border-2 border-[#fffaf4] border-solid inset-0 pointer-events-none" />
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main image with controls wrapper
  function ImageWithControls({ src, onPrevious, onNext }: { src: string; onPrevious: () => void; onNext: () => void }) {
    return (
      <div className={`content-stretch flex flex-col items-center justify-center pt-0 px-0 relative shrink-0 w-full ${isMobileOrTablet ? '' : 'pb-[88px]'}`} data-name="img + controls">
        <div className="relative shrink-0 w-full">
          <MainImage src={src} />
          {isMobileOrTablet && <ImageCounter />}
        </div>
        <NavigationButtons onPrevious={onPrevious} onNext={onNext} />
      </div>
    );
  }

  return (
    <figure className="content-stretch flex flex-col items-start p-0 relative shrink-0 w-full" data-name="carousel">
      <ImageWithControls
        src={images[currentIndex]}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </figure>
  );
}
