'use client';

import Image from 'next/image';
import { Container } from '../Container';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-32 z-10" style={{ minHeight: '100vh' }}>
      <Container>
        <div className="text-center relative z-20">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Studio Creative Ant Logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>
          <h1
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-black"
            style={{ color: '#000000' }}
          >
            STUDIO
            <br />
            CREATIVE ANT
          </h1>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-body"
          >
            Architecture and design practice driven by the pursuit of meaningful, human-centered spaces.
          </p>
          <div className="mt-12">
            <a
              href="#projects"
              className="inline-block px-8 py-4 border-2 border-black text-black font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
