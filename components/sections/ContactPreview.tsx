'use client';

import Link from 'next/link';
import { Section } from '../Section';

export function ContactPreview() {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className="font-heading text-4xl md:text-5xl font-bold mb-6"
        >
          Let&apos;s Create Something Extraordinary
        </h2>
        <p
          className="text-gray-600 mb-8 text-lg"
        >
          Ready to bring your vision to life? Get in touch with us to discuss your next project.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white font-medium uppercase tracking-wide hover:bg-gray-800 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
}
