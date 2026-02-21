import { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export function Section({ children, className = '', id, style }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 relative z-10 ${className}`} style={style}>
      <Container>{children}</Container>
    </section>
  );
}
