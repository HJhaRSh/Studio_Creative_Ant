import { AwardCard } from '@/components/AwardCard';
import { Section } from '@/components/Section';
import { getAwards } from '@/lib/data';

export default async function AwardsPage() {
  const awards = await getAwards();

  return (
    <Section className="pt-32">
      <div className="mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Awards & Recognition</h1>
        <p className="text-gray-600 max-w-2xl">
          Our commitment to excellence has been recognized by leading organizations in architecture and design.
        </p>
      </div>
      <div className="space-y-0 max-w-4xl">
        {awards.map((award, index) => (
          <AwardCard key={award.id} award={award} index={index} />
        ))}
      </div>
    </Section>
  );
}
