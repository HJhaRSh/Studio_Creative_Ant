'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {project.cover_image ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full"
            >
              <Image
                src={project.cover_image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ) : (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No Image</span>
            </div>
          )}
          
          {project.status && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
              {project.status}
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="mt-4">
          <h3 className="font-heading text-xl font-bold mb-1 uppercase tracking-tight">{project.name}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {project.location && <span>{project.location}</span>}
            {project.year && <span>{project.year}</span>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
