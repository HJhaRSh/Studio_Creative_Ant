'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { TeamCard } from '@/components/TeamCard';
import { getTeamMembers } from '@/lib/data';
import { useEffect, useState } from 'react';
import { TeamMember } from '@/types';

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getTeamMembers();
      setTeam(data);
    };
    fetchTeam();
  }, []);

  return (
    <main className="bg-white">
      {/* SECTION 1: PAGE HERO */}
      <Section className="pt-48 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-none mb-8 text-black"
          >
            TEAM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 uppercase tracking-[0.3em] font-medium"
          >
            The people behind Studio Creative Ant
          </motion.p>
        </div>
      </Section>

      {/* SECTION 2: TEAM MEMBERS GRID */}
      <Section className="py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
