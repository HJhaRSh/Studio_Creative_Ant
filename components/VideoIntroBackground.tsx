'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoIntroBackground() {
  const loaderVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetRect, setTargetRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  const TRANSITION_START = 4.0;
  const VIDEO_DURATION = 6;

  useEffect(() => {
    const video = loaderVideoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      
      // Trigger smooth transition
      if (currentTime >= TRANSITION_START && !isTransitioning) {
        // Measure target position just before transition starts
        const target = document.getElementById('hero-video-container');
        if (target) {
          const rect = target.getBoundingClientRect();
          setTargetRect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          });
        }
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

  // Final style after transition
  const containerTargetStyles: React.CSSProperties = isTransitioning && targetRect ? {
    width: targetRect.width,
    height: targetRect.height,
    top: targetRect.top + targetRect.height / 2,
    left: targetRect.left + targetRect.width / 2,
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
