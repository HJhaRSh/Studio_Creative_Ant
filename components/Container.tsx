import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
