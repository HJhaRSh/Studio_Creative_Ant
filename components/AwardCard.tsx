'use client';

import { motion } from 'framer-motion';
import { Award } from '@/types';

interface AwardCardProps {
  award: Award;
  index?: number;
}

export function AwardCard({ award, index = 0 }: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-gray-200 py-6"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl font-bold mb-1">{award.title}</h3>
          <p className="text-sm text-gray-600">{award.organization}</p>
        </div>
        <div className="text-sm text-gray-500 font-medium">{award.year}</div>
      </div>
    </motion.div>
  );
}
