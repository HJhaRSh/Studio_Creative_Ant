import Link from 'next/link';
import { ProjectCard } from '../ProjectCard';
import { Section } from '../Section';
import { getProjects } from '@/lib/data';

export async function FeaturedProjects() {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section id="projects" className="bg-white">
      <div className="mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 max-w-2xl">
          Explore our latest architectural achievements that blend innovation with sustainability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-block text-sm font-medium uppercase tracking-wide border-b-2 border-black hover:border-gray-400 transition-colors"
        >
          View All Projects →
        </Link>
      </div>
    </Section>
  );
}
