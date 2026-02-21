'use client';

import Link from 'next/link';
import { Section } from '../Section';
import { StudioCarousel } from '../StudioCarousel';

export function StudioIntro() {
  return (
    <Section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #EBEBEB 0%, #F0F0F0 40%, #E8E8E8 100%)', boxShadow: '0 -8px 20px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.08)' }}>
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, rgba(0,0,0,0.02) 0%, transparent 60%), radial-gradient(circle at 70% 40%, rgba(0,0,0,0.01) 0%, transparent 60%)' }}></div>
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div style={{ animation: 'slideInLeft 0.8s ease-out' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-gradient-to-b from-black to-transparent"></div>
              <h2 className="section-title font-heading text-4xl md:text-5xl font-bold">Our Studio</h2>
            </div>
            <div className="space-y-5 text-gray-800 font-body leading-relaxed">
              <p className="text-lg">
                Studio Creative Ant is an architecture and design practice founded in 2020 by Ar. Anket Tathed, 
                driven by the pursuit of meaningful, human-centered spaces. Our work explores the relationship 
                between light, material, and form to create environments that feel timeless and intentional.
              </p>
              <p className="text-lg">
                Each project is approached as a unique response to its context, guided by clarity, 
                precision, and thoughtful detailing. We believe architecture should not only function 
                efficiently but also evoke emotion and create a lasting spatial experience.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/studio"
                className="group relative inline-block text-sm font-medium uppercase tracking-widest px-6 py-3 border-2 border-black transition-all duration-500 overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #F0F0F0 0%, #E8E8E8 100%)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          </div>
          <div style={{ animation: 'slideInRight 0.8s ease-out' }}>
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
            >
              <StudioCarousel />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
