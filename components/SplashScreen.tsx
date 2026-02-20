"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  // Ant SVG component for the splash
  const SplashAnt = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 mb-6">
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Ant body segments */}
        <motion.ellipse 
          cx="70" cy="50" rx="18" ry="12" fill="white"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 0.4 }}
        />
        <motion.ellipse 
          cx="50" cy="50" rx="22" ry="14" fill="white"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 0.4, delay: 0.1 }}
        />
        <motion.circle 
          cx="28" cy="50" r="12" fill="white"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 0.4, delay: 0.2 }}
        />
        
        {/* Antennae */}
        <motion.path 
          d="M22 44 Q 15 40 10 30" stroke="white" strokeWidth="2" fill="none"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <motion.path 
          d="M22 56 Q 15 60 10 70" stroke="white" strokeWidth="2" fill="none"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />

        {/* Legs moving */}
        {[35, 45, 55].map((x, i) => (
          <g key={i}>
            <motion.line 
              x1={x} y1="50" x2={x-5} y2="35" stroke="white" strokeWidth="3"
              animate={{ rotate: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 0.3, delay: i * 0.1 }}
            />
            <motion.line 
              x1={x} y1="50" x2={x-5} y2="65" stroke="white" strokeWidth="3"
              animate={{ rotate: [15, -15, 15] }}
              transition={{ repeat: Infinity, duration: 0.3, delay: i * 0.1 }}
            />
          </g>
        ))}
      </motion.g>
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        <SplashAnt />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-white text-3xl font-bold tracking-widest uppercase mb-2">
            Studio Creative Ant
          </h1>
          <motion.div 
            className="h-[2px] bg-white mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="text-white/70 text-sm mt-3 font-light tracking-[0.3em]"
          >
            BUILDING THE EXTRAORDINARY
          </motion.p>
        </motion.div>
      </div>
      
      {/* Animated background particles for splash */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-10%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
