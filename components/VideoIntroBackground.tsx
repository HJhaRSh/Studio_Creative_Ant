'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoIntroBackground() {
  const loaderVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const TRANSITION_START = 4.0;
  const VIDEO_DURATION = 6;

  useEffect(() => {
    const video = loaderVideoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      
      // Trigger smooth transition
      if (currentTime >= TRANSITION_START && !isTransitioning) {
        setIsTransitioning(true);
      }
    };

    const handleEnded = () => {
      // Signal Hero video to start exactly at this moment
      window.dispatchEvent(new CustomEvent('start-hero-video'));
      
      // Short delay to ensure hero video has rendered its first frame
      setTimeout(() => {
        setIsHidden(true);
      }, 50);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isTransitioning]);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('start-hero-video'));
      setIsHidden(true);
    }, (VIDEO_DURATION + 0.5) * 1000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    if (isHidden) {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      
      const navbar = document.querySelector('nav');
      if (navbar) navbar.style.visibility = 'visible';
      
      const main = document.querySelector('main');
      if (main) {
        main.style.visibility = 'visible';
        main.style.opacity = '1';
      }
      
      const footer = document.querySelector('footer');
      if (footer) footer.style.visibility = 'visible';
    }
  }, [isHidden]);

  // Proactively unhide content slightly before the transition finishes
  useEffect(() => {
    const unhideTimer = setTimeout(() => {
      const navbar = document.querySelector('nav');
      if (navbar) navbar.style.visibility = 'visible';
      
      const main = document.querySelector('main');
      if (main) {
        main.style.visibility = 'visible';
        main.style.opacity = '1';
      }
    }, (VIDEO_DURATION - 0.5) * 1000);

    return () => clearTimeout(unhideTimer);
  }, []);

  if (isHidden) return null;

  // Exact matching logic for Hero video
  // Container: max-w-7xl (1280px), px-12 (96px padding)
  // Grid: 2 columns, gap-12 (48px)
  const contentWidth = 'min(100vw, 1280px) - 96px';
  const colWidth = `calc((${contentWidth} - 48px) / 2)`;
  const colHeight = `calc(${colWidth} * 8.5 / 16)`;
  
  // Center of the second column
  // (50% of screen) + (24px for half gap) + (half of colWidth)
  const containerLeft = `calc(50% + 24px + (${contentWidth} - 48px) / 4)`;
  const containerTop = 'calc(50% + 16px)'; // Shifted by (128px top - 96px bottom) / 2

  const containerTargetStyles: React.CSSProperties = isTransitioning ? {
    width: colWidth,
    height: colHeight,
    top: containerTop,
    left: containerLeft,
    transform: 'translate(-50%, -50%)',
  } : {
    width: '100vw',
    height: '100vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const videoTargetStyles: React.CSSProperties = isTransitioning ? {
    marginLeft: '-80px',
    width: 'calc(100% + 80px)',
    height: '100%',
  } : {
    marginLeft: '0px',
    width: '100%',
    height: '100%',
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
          ...containerTargetStyles,
        }}
      >
        <video
          ref={loaderVideoRef}
          style={{
            position: 'absolute',
            objectFit: 'cover',
            backgroundColor: '#FFFFFF',
            transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: videoOpacity,
            ...videoTargetStyles,
          }}
          muted
          playsInline
          autoPlay
          preload="auto"
        >
          <source src="/loader.mp4" type="video/mp4" />
          <source src="/loader.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}
