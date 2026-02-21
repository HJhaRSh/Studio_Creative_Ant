import Link from 'next/link';
import { AwardCard } from '../AwardCard';
import { Section } from '../Section';
import { getAwards } from '@/lib/data';

export async function AwardsHighlight() {
  const awards = await getAwards();
  const recentAwards = awards.slice(0, 3);

  return (
    <Section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E0E0E0 0%, #D8D8D8 40%, #E0E0E0 100%)', boxShadow: 'inset 0 2px 0 rgba(0,0,0,0.12), inset 0 -2px 0 rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.1)' }}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-10 bg-gradient-to-b from-black to-transparent"></div>
            <h2 className="section-title font-heading text-4xl md:text-5xl font-bold">Awards & Recognition</h2>
          </div>
          <p className="text-gray-800 max-w-2xl ml-5 font-body leading-relaxed">
            Our commitment to excellence has been recognized by leading organizations in architecture and design.
          </p>
        </div>
        <div className="space-y-0">
          {recentAwards.map((award, index) => (
            <div key={award.id} style={{ animation: `slideInFade 0.6s ease-out ${index * 0.15}s both` }}>
              <AwardCard award={award} index={index} />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/awards"
            className="group relative inline-block text-sm font-medium uppercase tracking-widest px-6 py-3 border-2 border-black transition-all duration-500 overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.02) 100%)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Awards
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="flex items-center gap-2">
                View All Awards
                <span>→</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
