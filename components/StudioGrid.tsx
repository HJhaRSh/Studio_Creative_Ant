'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const STUDIO_PHOTOS = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
];

export function StudioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {STUDIO_PHOTOS.map((photo, index) => (
        <motion.div
          key={photo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="relative aspect-[4/3] overflow-hidden group"
          style={{
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <Image
            src={`/Our Studio/${photo}`}
            alt={`Studio photo ${photo}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        </motion.div>
      ))}
    </div>
  );
}
