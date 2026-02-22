'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoIntroBackground() {
  const loaderVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [isHidden, setIsHidden] = useState(false);

  const FADE_START = 5.5;
  const VIDEO_DURATION = 6;

  useEffect(() => {
    const video = loaderVideoRef.current;
    if (!video) {
      console.log('Video ref not available');
      return;
    }

    console.log('Setting up video event listeners');

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      
      if (currentTime >= FADE_START) {
        const fadeProgress = (currentTime - FADE_START) / (VIDEO_DURATION - FADE_START);
        const opacity = Math.max(0, 1 - fadeProgress);
        setVideoOpacity(opacity);
      }
    };

    const handleEnded = () => {
      console.log('Video ended');
      setVideoOpacity(0);
      setTimeout(() => {
        setIsHidden(true);
      }, 200);
    };

    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded, duration:', video.duration);
    };

    const handlePlayStart = () => {
      console.log('Video started playing');
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlayStart);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlayStart);
    };
  }, []);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timeout triggered');
      setVideoOpacity(0);
      setTimeout(() => {
        setIsHidden(true);
      }, 200);
    }, (VIDEO_DURATION + 0.5) * 1000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    if (isHidden) {
      console.log('Unhiding content');
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      
      const navbar = document.querySelector('nav');
      if (navbar) navbar.style.visibility = 'visible';
      
      const main = document.querySelector('main');
      if (main) main.style.visibility = 'visible';
      
      const footer = document.querySelector('footer');
      if (footer) footer.style.visibility = 'visible';
    }
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        ref={loaderVideoRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          backgroundColor: '#FFFFFF',
          opacity: videoOpacity,
          transition: 'opacity 0.1s linear',
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
  );
}
