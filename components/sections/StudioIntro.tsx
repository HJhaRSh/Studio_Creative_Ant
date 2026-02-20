'use client';

import Link from 'next/link';
import { Section } from '../Section';

export function StudioIntro() {
  return (
    <Section className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Studio</h2>
          <div className="space-y-4 text-gray-700 font-body">
            <p>
              Studio Creative Ant is an architecture and design practice founded in 2020 by Ar. Anket Tathed, 
              driven by the pursuit of meaningful, human-centered spaces. Our work explores the relationship 
              between light, material, and form to create environments that feel timeless and intentional.
            </p>
            <p>
              Each project is approached as a unique response to its context, guided by clarity, 
              precision, and thoughtful detailing. We believe architecture should not only function 
              efficiently but also evoke emotion and create a lasting spatial experience.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/studio"
              className="inline-block text-sm font-medium uppercase tracking-wide border-b-2 border-black hover:border-gray-400 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
        <div
          className="relative aspect-[4/3] bg-gray-200"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400">Studio Image Placeholder</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
