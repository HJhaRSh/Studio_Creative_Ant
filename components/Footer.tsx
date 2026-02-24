import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-white relative z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Studio Creative Ant Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <h3 className="font-heading text-xl font-bold">STUDIO CREATIVE ANT</h3>
            </div>
            <p className="text-sm text-gray-600">
              The concept for better living. Architecture and design practice driven by the pursuit of meaningful, human-centered spaces.
            </p>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/studio_creative_ant?igsh=MXh5dWcxaHR6b2M1bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
              >
                <Instagram size={16} />
                <span className="text-xs font-medium uppercase tracking-widest">Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="hover:text-gray-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-gray-600 transition-colors">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-gray-600 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  22, M.R Trade Centre, Maliwada,<br />
                  Ahmednagar, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:studiocreativeant@gmail.com" className="hover:text-black transition-colors">
                  studiocreativeant@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+919767455511" className="hover:text-black transition-colors">
                  +91 9767455511
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Studio Creative Ant. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
