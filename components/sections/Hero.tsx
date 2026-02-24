'use client';

import { useEffect, useRef } from 'react';
import { Container } from '../Container';
import { ArchitecturalBackground } from '../ArchitecturalBackground';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wait for intro to finish before playing
    const handleStartVideo = () => {
      if (video) {
        video.currentTime = 0;
        video.play().catch(err => console.log("Hero video play failed:", err));
      }
    };

    window.addEventListener('start-hero-video', handleStartVideo);
    
    // If intro already finished or not active (e.g. navigating back from another page), play immediately
    const isIntroActive = (window as any).isIntroActive;
    const introFinished = sessionStorage.getItem('intro-finished') === 'true';

    if (!isIntroActive || introFinished) {
      video.play().catch(err => console.log("Hero video play failed:", err));
    } else {
      // Initially pause it if intro is still running
      video.pause();
      video.currentTime = 0;
    }

    return () => {
      window.removeEventListener('start-hero-video', handleStartVideo);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center z-10 overflow-hidden" style={{ minHeight: '100vh', background: '#FFFFFF', boxShadow: '0 20px 60px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)' }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.02) 0%, transparent 50%)' }}></div>
      <ArchitecturalBackground />
      <Container className="pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
          <div className="text-left" style={{ animation: 'slideInLeft 0.8s ease-out' }}>
            <div className="relative mb-6">
              <h1
                className="font-heading text-6xl md:text-8xl lg:text-7xl font-bold tracking-tight text-black leading-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                STUDIO
                <br />
                CREATIVE ANT
              </h1>
              <div className="absolute -left-8 top-1/4 w-1 h-32 bg-gradient-to-b from-black via-gray-800 to-transparent opacity-20"></div>
            </div>
            <p
              className="text-lg md:text-xl text-gray-700 font-body mb-12 leading-relaxed"
            >
              Architecture and design practice driven by the pursuit of meaningful, human-centered spaces.
            </p>
            <div className="flex gap-6">
              <a
                href="#projects"
                className="group relative px-8 py-4 border-2 border-black text-black font-medium uppercase tracking-wide transition-all duration-500 overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #F5F5F5 100%)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Projects</span>
              </a>
            </div>
          </div>
          <div id="hero-video-container" className="relative group" style={{ 
            overflow: 'hidden', 
            backgroundColor: 'transparent',
          }}>
            {/* Subtle gray glow/gradient behind the video */}
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ 
              background: 'radial-gradient(circle at center, rgba(0,0,0,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}></div>
            
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="w-full h-full object-cover relative z-10"
              style={{
                aspectRatio: '16/8.5',
                marginLeft: '-80px',
                width: 'calc(100% + 120px)', // Increased to ensure coverage with margin
                objectPosition: 'center 50%',
                backgroundColor: 'transparent',
                maskImage: 'radial-gradient(ellipse 70% 85% at center, black 40%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 85% at center, black 40%, transparent 95%)'
              }}
            >
              <source src="/Ant_Video_Loop_Generation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
