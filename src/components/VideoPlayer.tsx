import { useState, useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

interface VideoPlayerProps {
  videoSrc: string;
  className?: string;
  paddingX?: string;
}

export default function VideoPlayer({ videoSrc, className = '', paddingX = '' }: VideoPlayerProps) {
  const [ref, isInView] = useInView();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAutoPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    // Set initial muted state
    video.muted = isMuted;

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isMuted]);

  // Auto-play when video becomes visible for the first time
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasAutoPlayedRef.current) return;

    if (isInView) {
      video.play().catch((error) => {
        // Handle autoplay restrictions (browsers may block autoplay with sound)
        console.log('Autoplay prevented:', error);
      });
      hasAutoPlayedRef.current = true;
    }
  }, [isInView]);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!isFullscreen) {
        // Enter fullscreen
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if ((container as any).webkitRequestFullscreen) {
          await (container as any).webkitRequestFullscreen();
        } else if ((container as any).mozRequestFullScreen) {
          await (container as any).mozRequestFullScreen();
        } else if ((container as any).msRequestFullscreen) {
          await (container as any).msRequestFullscreen();
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
      }
    } catch (error) {
      console.log('Fullscreen error:', error);
    }
  };

  // Play icon SVG path
  const playIconPath = "M8 5v14l11-7z";
  // Pause icon SVG path
  const pauseIconPath = "M6 4h4v16H6V4zm8 0h4v16h-4V4z";
  // Audio on icon SVG path
  const audioOnIconPath = "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
  // Audio off icon SVG path
  const audioOffIconPath = "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z";
  // Fullscreen enter icon SVG path (expand)
  const fullscreenEnterIconPath = "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z";
  // Fullscreen exit icon SVG path (compress)
  const fullscreenExitIconPath = "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z";

  return (
    <div ref={ref} className={`content-stretch flex flex-col items-center justify-center relative shrink-0 w-full max-w-[1120px] mx-auto ${paddingX} ${className}`} data-name="video player">
      <div ref={containerRef} className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
          muted={isMuted}
        />
        
        {/* Custom Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-[16px] flex items-center justify-between pointer-events-none z-10">
          <button
            onClick={togglePlayPause}
            className="relative shrink-0 size-[48px] flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200 pointer-events-auto cursor-pointer"
            aria-label={isPlaying ? 'Pausa' : 'Play'}
          >
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path
                d={isPlaying ? pauseIconPath : playIconPath}
                fill="white"
              />
            </svg>
          </button>
          
          <div className="flex items-center gap-[8px]">
            <button
              onClick={toggleMute}
              className="relative shrink-0 size-[48px] flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200 pointer-events-auto cursor-pointer"
              aria-label={isMuted ? 'Attiva audio' : 'Disattiva audio'}
            >
              <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                <path
                  d={isMuted ? audioOffIconPath : audioOnIconPath}
                  fill="white"
                />
              </svg>
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="relative shrink-0 size-[48px] flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200 pointer-events-auto cursor-pointer"
              aria-label={isFullscreen ? 'Esci da schermo intero' : 'Schermo intero'}
            >
              <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                <path
                  d={isFullscreen ? fullscreenExitIconPath : fullscreenEnterIconPath}
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
