'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
        <Image
          src={member.image_url || '/placeholder-team.jpg'}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-heading text-3xl uppercase tracking-tight leading-none mb-2 text-black">
              {member.name}
            </h3>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              {member.role}
            </p>
          </div>
          
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-500 transition-colors"
              aria-label={`${member.name} on Instagram`}
            >
              <Instagram size={20} />
            </a>
          )}
        </div>

        {member.education && (
          <div className="flex gap-3 text-sm text-gray-600">
            <GraduationCap size={18} className="flex-shrink-0 mt-0.5" />
            <p>{member.education}</p>
          </div>
        )}
        
        <p className="text-gray-700 leading-relaxed font-body text-base">
          {member.bio}
        </p>

        {member.experience && member.experience.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              <Briefcase size={14} />
              <span>Experience</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {member.experience.map((exp) => (
                <li key={exp} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
                  {exp}
                </li>
              ))}
            </ul>
          </div>
        )}

        {member.awards && member.awards.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              <Trophy size={14} />
              <span>Key Awards</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {member.awards.map((award) => (
                <li key={award} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-black rounded-full flex-shrink-0" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
