'use client';

import Link from 'next/link';
import { Section } from '../Section';

export function ContactPreview() {
  return (
    <Section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #DCDCDC 0%, #D3D3D3 50%, #DCDCDC 100%)', boxShadow: 'inset 0 2px 0 rgba(0,0,0,0.15), inset 0 -2px 0 rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.1)' }}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.02) 0%, transparent 50%)' }}></div>
      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto" style={{ animation: 'slideInFade 0.8s ease-out' }}>
          <h2
            className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ letterSpacing: '-0.01em' }}
          >
            Let&apos;s Create Something <br className="hidden md:block" />Extraordinary
          </h2>
          <p
            className="text-gray-800 mb-12 text-lg font-body leading-relaxed"
          >
            Ready to bring your vision to life? Get in touch with us to discuss your next project.
          </p>
          <div>
            <Link
              href="/contact"
              className="group relative inline-block px-8 py-4 font-medium uppercase tracking-widest transition-all duration-500 overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #000000 0%, #1a1a1a 100%)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
              }}
            >
              <span className="relative z-10 text-white flex items-center gap-2">
                Contact Us
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="flex items-center gap-2">
                  Contact Us
                  <span>→</span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
