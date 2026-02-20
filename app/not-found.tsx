import Link from 'next/link';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <Container>
        <div className="text-center">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-4">404</h1>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-black text-white font-medium uppercase tracking-wide hover:bg-gray-800 transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
