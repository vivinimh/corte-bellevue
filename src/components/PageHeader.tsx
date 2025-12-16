import { useState, useEffect, useRef } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  variant: "mobile" | "tablet" | "desktop";
}

export default function PageHeader({ title, subtitle, image, variant }: PageHeaderProps) {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [wasInView, setWasInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const getMaxWidth = () => {
    if (variant === "mobile") return "w-full";
    if (variant === "tablet") return "max-w-[1120px]";
    if (variant === "desktop") return subtitle ? "max-w-[1120px]" : "max-w-[960px]";
    return "max-w-[1120px]";
  };

  const variants = {
    mobile: {
      container: "h-[237px]",
      padding: "px-[16px] py-[64px]",
      titleSize: "text-[32px]",
      subtitleSize: "text-[24px]",
      gap: "gap-[16px]",
      overlay: "bg-[rgba(4,18,3,0.6)]",
    },
    tablet: {
      container: "h-[217px]",
      padding: "p-[64px]",
      titleSize: "text-[32px]",
      subtitleSize: "text-[24px]",
      gap: "gap-[24px]",
      overlay: "bg-[rgba(4,18,3,0.6)]",
    },
    desktop: {
      container: "h-[274px]",
      padding: "p-[80px]",
      titleSize: "text-[48px]",
      subtitleSize: "text-[32px]",
      gap: "gap-[24px]",
      overlay: "bg-[rgba(4,18,3,0.65)]",
    },
  };

  const styles = variants[variant];
  const maxWidth = getMaxWidth();

  // IntersectionObserver for reveal effect
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasInView) {
          setIsInView(true);
          setWasInView(true);
        } else if (!entry.isIntersecting && wasInView) {
          // Reset when leaving viewport to allow replay
          setIsInView(false);
          setWasInView(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [wasInView]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;
      
      // Calcola la posizione del componente rispetto alla viewport
      // Quando il componente entra ed esce dalla viewport
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        // Calcola il progresso dello scroll (0 quando il componente è completamente sopra, 1 quando è completamente sotto)
        // L'immagine si muove più lentamente dello scroll (fattore 0.3)
        const scrollY = window.scrollY;
        const containerTop = rect.top + scrollY;
        const parallaxSpeed = 0.3; // Velocità del parallasse (più basso = più lento)
        
        // Calcola l'offset basato sulla posizione di scroll
        const offset = (scrollY - containerTop) * parallaxSpeed;
        setParallaxOffset(offset);
      } else if (rect.top > windowHeight) {
        // Il componente è sotto la viewport, reset offset
        setParallaxOffset(0);
      }
    };

    // Esegui al mount per impostare la posizione iniziale
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.container} relative shrink-0 w-full overflow-hidden reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="navhero page">
      <div aria-hidden="true" className="absolute inset-0 bottom-[-40px] pointer-events-none overflow-hidden">
        <img 
          alt="" 
          className="absolute max-w-none object-50%-50% object-cover size-full" 
          src={image}
          style={{
            transform: `translateY(${parallaxOffset}px) scale(1.1)`,
            willChange: 'transform',
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className={`absolute ${styles.overlay} inset-0 bottom-[-40px]`}
          style={{
            transform: `translateY(${parallaxOffset}px) scale(1.1)`,
            willChange: 'transform',
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full overflow-clip rounded-[inherit] size-full">
        <div className={`content-stretch flex flex-col items-center justify-center h-full ${styles.padding} relative w-full`}>
          <div className={`content-stretch flex flex-col ${styles.gap} items-center ${maxWidth} relative shrink-0 w-full text-center`} data-name="max w">
            <p className={`[text-shadow:rgba(0,0,0,0.35)_2px_2px_7px] font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] relative shrink-0 text-[#f6eee5] ${styles.titleSize} text-center text-nowrap whitespace-pre`}>
              {title}
            </p>
            {subtitle && (
              <h3 className={`block font-['EB_Garamond:Regular',sans-serif] font-normal ${variant === "desktop" ? "leading-[1.15]" : "leading-[1.18]"} min-w-full relative shrink-0 ${styles.subtitleSize} text-white w-[min-content]`}>
                {subtitle}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
