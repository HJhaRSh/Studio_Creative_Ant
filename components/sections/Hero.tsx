'use client';

import Image from 'next/image';
import { Container } from '../Container';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 z-10 overflow-hidden" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #EFEFEF 100%)', boxShadow: '0 20px 60px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)', paddingBottom: '6rem' }}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.02) 0%, transparent 50%)' }}></div>
      <Container>
        <div className="text-center relative z-20">
          <div className="mb-8 flex justify-center" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <Image
              src="/logo_bg.png"
              alt="Studio Creative Ant Logo"
              width={140}
              height={140}
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
          <div className="relative inline-block mb-6 w-full">
            <h1
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-black leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              STUDIO
              <br />
              CREATIVE ANT
            </h1>
            <div className="absolute -left-8 top-1/4 w-1 h-32 bg-gradient-to-b from-black via-gray-800 to-transparent opacity-20"></div>
          </div>
          <p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-body mb-12 leading-relaxed"
          >
            Architecture and design practice driven by the pursuit of meaningful, human-centered spaces.
          </p>
          <div className="flex justify-center gap-6">
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
      </Container>
    </section>
  );
}
