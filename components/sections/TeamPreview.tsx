import Link from 'next/link';
import { TeamCard } from '../TeamCard';
import { Section } from '../Section';
import { getTeamMembers } from '@/lib/data';

export async function TeamPreview() {
  const teamMembers = await getTeamMembers();
  const previewMembers = teamMembers.slice(0, 3);

  return (
    <Section className="bg-gray-50">
      <div className="mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600 max-w-2xl">
          A diverse group of talented architects and designers dedicated to pushing the boundaries of design.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewMembers.map((member, index) => (
          <TeamCard key={member.id} member={member} index={index} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/team"
          className="inline-block text-sm font-medium uppercase tracking-wide border-b-2 border-black hover:border-gray-400 transition-colors"
        >
          Meet The Full Team →
        </Link>
      </div>
    </Section>
  );
}
