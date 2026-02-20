import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 relative z-10 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
