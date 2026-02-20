'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AntConfig {
  id: number;
  delay: number;
  duration: number;
  size: number;
  path: { x: string[]; y: string[] };
  carrying?: boolean;
}

function Ant({ delay, duration, size, path, carrying }: AntConfig) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        x: path.x,
        y: path.y,
        opacity: [0, 0.4, 0.4, 0],
        rotate: [0, 10, -10, 5, 0], // Slight wiggling while walking
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        opacity: { times: [0, 0.1, 0.9, 1], duration: duration }
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <div className="relative w-full h-full">
        {/* The Ant SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="25" ry="15" fill="#000000" />
          <circle cx="25" cy="50" r="12" fill="#000000" />
          <ellipse cx="70" cy="50" rx="18" ry="12" fill="#000000" />
          
          {/* Antennae */}
          <motion.g
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            <line x1="20" y1="45" x2="10" y2="35" stroke="#000000" strokeWidth="2" />
            <line x1="20" y1="55" x2="10" y2="65" stroke="#000000" strokeWidth="2" />
          </motion.g>

          {/* Legs */}
          {[35, 45, 55].map((x, i) => (
            <g key={i}>
              <motion.line 
                x1={x} y1="50" x2={x-3} y2="38" stroke="#000000" strokeWidth="2"
                animate={{ rotate: [-20, 20, -20] }}
                transition={{ repeat: Infinity, duration: 0.2, delay: i * 0.05 }}
              />
              <motion.line 
                x1={x} y1="50" x2={x-3} y2="62" stroke="#000000" strokeWidth="2"
                animate={{ rotate: [20, -20, 20] }}
                transition={{ repeat: Infinity, duration: 0.2, delay: i * 0.05 }}
              />
            </g>
          ))}
        </svg>

        {/* Carrying a "building block" */}
        {carrying && (
          <motion.div
            className="absolute -top-1 left-2 w-3 h-3 bg-black/20 border border-black/10"
            animate={{ y: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function AnimatedAntBackground() {
  const [ants, setAnts] = useState<AntConfig[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const generatePath = () => {
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const startX = side === 'left' ? '-10%' : '110%';
      const endX = side === 'left' ? '110%' : '-10%';
      
      // Random "working" path with some zig-zag
      return {
        x: [startX, '25%', '50%', '75%', endX],
        y: [
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`
        ]
      };
    };

    const antConfigs: AntConfig[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      delay: i * 2,
      duration: 15 + Math.random() * 10,
      size: 40 + Math.random() * 30,
      path: generatePath(),
      carrying: Math.random() > 0.4
    }));

    setAnts(antConfigs);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-transparent" aria-hidden="true">
      {ants.map((ant) => (
        <Ant key={ant.id} {...ant} />
      ))}
      
      {/* Subtle "home" building area indicators - faint dots where ants might be heading */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-32 h-32 border border-black rounded-full"
            style={{ 
              left: `${20 + i * 15}%`, 
              top: `${30 + (i % 3) * 20}%`,
              transform: 'scale(0.8)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
