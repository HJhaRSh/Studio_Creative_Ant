import Link from 'next/link';
import { AwardCard } from '../AwardCard';
import { Section } from '../Section';
import { getAwards } from '@/lib/data';

export async function AwardsHighlight() {
  const awards = await getAwards();
  const recentAwards = awards.slice(0, 3);

  return (
    <Section className="bg-white">
      <div className="mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
        <p className="text-gray-600 max-w-2xl">
          Our commitment to excellence has been recognized by leading organizations in architecture and design.
        </p>
      </div>
      <div className="space-y-0">
        {recentAwards.map((award, index) => (
          <AwardCard key={award.id} award={award} index={index} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/awards"
          className="inline-block text-sm font-medium uppercase tracking-wide border-b-2 border-black hover:border-gray-400 transition-colors"
        >
          View All Awards →
        </Link>
      </div>
    </Section>
  );
}
