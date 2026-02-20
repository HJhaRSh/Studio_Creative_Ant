import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { getProjects } from '@/lib/data';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Section className="pt-32">
      <div className="mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 max-w-2xl">
          A curated selection of our architectural work spanning residential, commercial, and cultural projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
