'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoIntroBackground() {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const [introComplete, setIntroComplete] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const video = introVideoRef.current;
    if (!video || introComplete) return;

    const handleLoadedMetadata = () => {
      video.play().catch(() => {
        console.log('Autoplay prevented by browser');
      });
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 0.5 && !showLogo) {
        setShowLogo(true);
      }
    };

    const handleEnded = () => {
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.play();
      }
      setIntroComplete(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [introComplete, showLogo]);

  if (!isMounted) return null;

  return (
    <>
      {/* Intro Container */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: introComplete ? -1 : 9999,
          backgroundColor: 'black',
          opacity: introComplete ? 0 : 1,
          transition: 'opacity 1s ease-in-out, z-index 0s linear 1s',
          pointerEvents: introComplete ? 'none' : 'auto',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <video
          ref={introVideoRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          muted
          playsInline
          autoPlay
          preload="auto"
        >
          <source src="/ani.mp4" type="video/mp4" />
        </video>

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Studio Creative Ant"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '128px',
            height: '128px',
            objectFit: 'contain',
            opacity: showLogo ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
        />
      </div>

      {/* Background Video - After Intro */}
      <video
        ref={backgroundVideoRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      >
        <source src="/ani.mp4" type="video/mp4" />
      </video>
    </>
  );
}
