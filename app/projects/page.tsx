import { getProjects } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Section className="pt-32 pb-16">
      <Container>
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-10 bg-gradient-to-b from-black to-transparent"></div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold">All Projects</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}