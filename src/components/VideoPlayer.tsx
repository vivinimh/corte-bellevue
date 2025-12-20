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
  const videoRef = useRef<HTMLVideoElement>(null);
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

  // Play icon SVG path
  const playIconPath = "M8 5v14l11-7z";
  // Pause icon SVG path
  const pauseIconPath = "M6 4h4v16H6V4zm8 0h4v16h-4V4z";
  // Audio on icon SVG path
  const audioOnIconPath = "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
  // Audio off icon SVG path
  const audioOffIconPath = "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z";

  return (
    <div ref={ref} className={`content-stretch flex flex-col items-center justify-center relative shrink-0 w-full max-w-[1120px] mx-auto ${paddingX} ${className}`} data-name="video player">
      <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '400px' }}>
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
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
        </div>
      </div>
    </div>
  );
}
