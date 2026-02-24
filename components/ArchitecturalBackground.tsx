'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const DraftingElement = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    className={`absolute pointer-events-none ${className}`}
  >
    {children}
  </motion.div>
);

export const ArchitecturalBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none" 
      style={{ 
        zIndex: 5,
        maskImage: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 50%, black 90%)',
        WebkitMaskImage: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 50%, black 90%)'
      }}
    >
      {/* Subtle Center Reference Point - Minimal crosshair only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.3] pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.path 
            d="M50,40 L50,60 M40,50 L60,50" 
            stroke="black" strokeWidth="0.5"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </div>
      {/* Vertical Drafting Scale (Left Edge) */}
      <div className="absolute top-1/4 left-4 h-1/2 flex flex-col justify-between opacity-40 pointer-events-none">
        {[...Array(11)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`h-[1px] bg-black ${i % 5 === 0 ? 'w-4' : 'w-2'}`} />
            {i % 5 === 0 && <span className="text-[8px] font-mono">{i * 10}</span>}
          </div>
        ))}
      </div>

      {/* Project Reference Label (Bottom Left) */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-1 opacity-40 border-l border-black pl-3">
        <span className="text-[9px] font-mono font-bold uppercase tracking-wider">Ref: SCA_2024_INT</span>
        <span className="text-[8px] font-mono uppercase">Scale: 1:100 @ A1</span>
        <div className="flex gap-1 mt-1">
          <div className="w-2 h-2 bg-black/40" />
          <div className="w-2 h-2 border border-black" />
        </div>
      </div>

      {/* Dynamic Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.25]" 
        animate={{ 
          x: (mousePos.x / 120),
          y: (mousePos.y / 120)
        }}
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.8) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(0,0,0,0.8) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Rotating Blueprint Elements - Replaced circle with dashed square to avoid overlap */}
      <DraftingElement className="top-[10%] right-[15%]">
        <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-40">
          <motion.rect 
            x="20" y="20" width="160" height="160"
            fill="none" stroke="black" strokeWidth="1" strokeDasharray="6 3"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </DraftingElement>

      {/* Drawing Line Animation - Positioned at edge */}
      <div className="absolute bottom-[15%] left-[5%] opacity-50">
        <svg width="400" height="200" viewBox="0 0 400 200">
          <motion.path
            d="M0,150 L100,150 L150,50 L300,50"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      {/* Isometric Blueprint Fragments - At edge */}
      <div className="absolute top-[15%] right-[8%] opacity-[0.3]">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.path
            d="M100,40 L160,70 L160,140 L100,170 L40,140 L40,70 Z M100,40 L100,110 L160,140 M100,110 L40,140"
            fill="none" stroke="black" strokeWidth="1.2"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Floating Dimension Callout - Positioned above Studio Creative Ant text */}
      <motion.div
        className="absolute flex items-center justify-between border-t border-black/40"
        style={{ 
          width: '180px',
          left: '10%',
          top: '22%'
        }}
        animate={{ opacity: [0.1, 0.4, 0.1], width: ['180px', '220px', '180px'] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-[1px] h-4 bg-black/40 -mt-2" />
        <span className="text-[10px] font-mono font-bold text-black/40 px-2 translate-y-[-50%]">
          TOP_ELEV_REF_01
        </span>
        <div className="w-[1px] h-4 bg-black/40 -mt-2" />
      </motion.div>

      {/* Another Dimension Callout at the right edge */}
      <motion.div
        className="absolute flex items-center justify-between border-t border-black/40"
        style={{ 
          width: '150px',
          right: '5%',
          top: '70%'
        }}
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 5, delay: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-4 bg-black/40 -mt-2" />
        <span className="text-[10px] font-mono font-bold text-black/40 px-2 translate-y-[-50%]">
          ELEV_REF_02
        </span>
        <div className="w-[1px] h-4 bg-black/40 -mt-2" />
      </motion.div>

      {/* Architectural Corner Accents (L-marks) */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-black/60 opacity-60" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-black/60 opacity-60" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-black/60 opacity-60" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-black/60 opacity-60" />

      {/* Vertical Title Indicator (远离左侧文字) */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-black to-transparent" />
        <span className="text-[10px] font-mono [writing-mode:vertical-rl] tracking-[0.5em] uppercase">Drafting_Sheet_A1</span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-black to-transparent" />
      </div>

      {/* Expanding Architectural Wireframes */}
      <div className="absolute top-[15%] right-[20%] opacity-20">
        <svg width="400" height="400" viewBox="0 0 300 300">
          <motion.rect
            x="50" y="50" width="200" height="200"
            fill="none" stroke="black" strokeWidth="1"
            animate={{ 
              width: [200, 240, 200],
              height: [200, 160, 200],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Large Structural Shapes */}
      <div className="absolute right-[-10%] bottom-[5%] opacity-[0.15]">
        <svg width="800" height="800" viewBox="0 0 600 600">
          <motion.rect
            x="50" y="50" width="500" height="500"
            fill="none" stroke="black" strokeWidth="2"
            animate={{ rotate: [0, 90] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M50,50 L550,550 M550,50 L50,550"
            stroke="black" strokeWidth="1"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Perspective Grid Elements */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <linearGradient id="fadeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="black" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={i}
            x1="50%" y1="50%"
            x2={`${i * 11}%`} y2="110%"
            stroke="url(#fadeGrad)"
            strokeWidth="0.5"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
};
