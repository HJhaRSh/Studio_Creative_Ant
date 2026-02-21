import Link from 'next/link';
import { TeamCard } from '../TeamCard';
import { Section } from '../Section';
import { getTeamMembers } from '@/lib/data';

export async function TeamPreview() {
  const teamMembers = await getTeamMembers();
  const previewMembers = teamMembers.slice(0, 3);

  return (
    <Section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8E8E8 0%, #EBEBEB 50%, #E3E3E3 100%)', boxShadow: '0 -8px 20px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.08)' }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 40% 20%, rgba(0,0,0,0.02) 0%, transparent 60%), radial-gradient(circle at 60% 80%, rgba(0,0,0,0.02) 0%, transparent 60%)' }}></div>
      <div className="relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-10 bg-gradient-to-b from-black to-transparent"></div>
            <h2 className="section-title font-heading text-4xl md:text-5xl font-bold">Our Team</h2>
          </div>
          <p className="text-gray-800 max-w-2xl ml-5 font-body leading-relaxed">
            A diverse group of talented architects and designers dedicated to pushing the boundaries of design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewMembers.map((member, index) => (
            <div key={member.id} style={{ animation: `slideInFade 0.6s ease-out ${index * 0.15}s both` }}>
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/team"
            className="group relative inline-block text-sm font-medium uppercase tracking-widest px-6 py-3 border-2 border-black transition-all duration-500 overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.02) 100%)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Meet The Full Team
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="flex items-center gap-2">
                Meet The Full Team
                <span>→</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
