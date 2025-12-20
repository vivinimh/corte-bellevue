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
  initialIndex = 0,
  variant = "desktop",
  previousIconPath,
  nextIconPath,
  mainImageAspectRatio,
}: ImageCarouselProps) {
  // Ensure initialIndex is within bounds
  const safeInitialIndex = images.length > 0 ? Math.max(0, Math.min(initialIndex, images.length - 1)) : 0;
  const [currentIndex, setCurrentIndex] = useState(safeInitialIndex);
  
  // Swipe handling for tablet and mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  // Minimum swipe distance (in pixels) to trigger navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };


  // Get variant-specific styles
  // Note: aspect ratios are kept the same across all variants
  const getVariantStyles = () => {
    const baseAspectRatio = mainImageAspectRatio || "aspect-[1280/706]";
    const baseInnerAspectRatio = "aspect-[1016/560]";
    
    switch (variant) {
      case "desktop":
        return {
          mainAspectRatio: baseAspectRatio,
          innerAspectRatio: baseInnerAspectRatio,
          imageMarginBottom: "mb-[-88px]",
          controlsMarginBottom: "mb-[-88px]",
          controlsPadding: "pb-[88px]",
          buttonPadding: "px-[24px] py-[16px]",
          buttonGap: "gap-[24px]",
          iconSize: "size-[24px]",
          textSize: "text-[16px]",
          controlsPaddingInner: "p-[16px]",
        };
      case "tablet":
        return {
          mainAspectRatio: baseAspectRatio,
          innerAspectRatio: baseInnerAspectRatio,
          imageMarginBottom: "mb-[-88px]",
          controlsMarginBottom: "mb-[-88px]",
          controlsPadding: "pb-[88px]",
          buttonPadding: "px-[20px] py-[12px]",
          buttonGap: "gap-[16px]",
          iconSize: "size-[20px]",
          textSize: "text-[14px]",
          controlsPaddingInner: "p-[12px]",
        };
      case "mobile":
        return {
          mainAspectRatio: baseAspectRatio,
          innerAspectRatio: baseInnerAspectRatio,
          imageMarginBottom: "mb-[-88px]",
          controlsMarginBottom: "mb-[-88px]",
          controlsPadding: "pb-[88px]",
          buttonPadding: "px-[16px] py-[12px]",
          buttonGap: "gap-[12px]",
          iconSize: "size-[20px]",
          textSize: "text-[14px]",
          controlsPaddingInner: "p-[12px]",
        };
    }
  };

  const styles = getVariantStyles();

  // Counter component for tablet and mobile (positioned to not interfere with swipe)
  function ImageCounter() {
    if (variant === "desktop") return null;
    
    return (
      <div 
        className="absolute top-4 right-4 z-10 pointer-events-none"
        data-name="counter"
      >
        <span className={`font-['Open_Sans:Regular',sans-serif] text-white ${styles.textSize} leading-[1.5] [text-shadow:rgba(0,0,0,0.7)_1px_1px_4px] bg-black/30 px-3 py-1.5 rounded-md`}>
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    );
  }

  // Image component with variant-specific styling
  function MainImage({ src }: { src: string }) {
    // For tablet and mobile, no negative margin needed since there are no controls
    const imageMargin = variant === "desktop" ? styles.imageMarginBottom : "mb-0";
    
    return (
      <div 
        ref={variant !== "desktop" ? imageContainerRef : null}
        className={`${styles.mainAspectRatio} content-stretch flex flex-col items-start ${imageMargin} overflow-clip relative shrink-0 w-full`} 
        data-name="image"
        onTouchStart={variant !== "desktop" ? onTouchStart : undefined}
        onTouchMove={variant !== "desktop" ? onTouchMove : undefined}
        onTouchEnd={variant !== "desktop" ? onTouchEnd : undefined}
      >
        <div className={`${styles.innerAspectRatio} relative shrink-0 w-full`} data-name="image">
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={src} 
            draggable={false}
          />
        </div>
        <ImageCounter />
      </div>
    );
  }

  // Default arrow icons for tablet and mobile
  function DefaultPreviousIcon() {
    return (
      <div className={`relative shrink-0 ${styles.iconSize}`} data-name="icons">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  }

  function DefaultNextIcon() {
    return (
      <div className={`relative shrink-0 ${styles.iconSize}`} data-name="icons">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  }

  // Navigation button icons (custom for desktop, default for tablet/mobile)
  function PreviousIcon() {
    if (variant === "desktop" && previousIconPath) {
      return (
        <div className={`relative shrink-0 ${styles.iconSize}`} data-name="icons">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="icons">
              <path d={previousIconPath} fill="var(--fill-0, #F6EEE5)" id="Union" />
            </g>
          </svg>
        </div>
      );
    }
    return <DefaultPreviousIcon />;
  }

  function NextIcon() {
    if (variant === "desktop" && nextIconPath) {
      return (
        <div className={`relative shrink-0 ${styles.iconSize}`} data-name="icons">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="icons">
              <path d={nextIconPath} fill="var(--fill-0, #FFFAF4)" id="Union" />
            </g>
          </svg>
        </div>
      );
    }
    return <DefaultNextIcon />;
  }

  // Navigation buttons with variant-specific styling
  // Only shown on desktop variant
  function NavigationButtons({ onPrevious, onNext }: { onPrevious: () => void; onNext: () => void }) {
    // Hide navigation for tablet and mobile
    if (variant !== "desktop") return null;

    return (
      <div className={`${styles.controlsMarginBottom} relative shrink-0 w-full`} data-name="controls">
        {/* Transparent gradient overlay for button contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
        <div className="flex flex-row items-end justify-center size-full">
          <div className={`content-stretch flex ${styles.buttonGap} items-center justify-center ${styles.controlsPaddingInner} relative w-full`}>
            <button
              aria-label="View previous image"
              className={`bg-[#CA427D] content-stretch flex gap-[10px] items-center justify-center ${styles.buttonPadding} relative shrink-0 cursor-pointer hover:bg-[#953C52] active:bg-[#7a2f41] transition-colors duration-200 touch-manipulation`}
              data-name="Button"
              onClick={onPrevious}
            >
              <div aria-hidden="true" className="absolute border-2 border-[#f6eee5] border-solid inset-0 pointer-events-none" />
              <PreviousIcon />
            </button>
            <span className={`font-['Open_Sans:Regular',sans-serif] text-white ${styles.textSize} leading-[1.5] [text-shadow:rgba(0,0,0,0.5)_1px_1px_3px]`}>
              {currentIndex + 1} / {images.length}
            </span>
            <button
              aria-label="View next image"
              className={`bg-[#CA427D] content-stretch flex gap-[10px] items-center justify-center ${styles.buttonPadding} relative shrink-0 cursor-pointer hover:bg-[#953C52] active:bg-[#7a2f41] transition-colors duration-200 touch-manipulation`}
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
    // For tablet and mobile, simplify structure - no wrapper divs
    if (variant !== "desktop") {
      return <MainImage src={src} />;
    }
    
    // Desktop version with controls
    return (
      <div className={`content-stretch flex flex-col items-center justify-center pt-0 px-0 relative shrink-0 w-full ${styles.controlsPadding}`} data-name="img + controls">
        <div className="relative shrink-0 w-full">
          <MainImage src={src} />
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
