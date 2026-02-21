import Link from 'next/link';
import { ProjectCard } from '../ProjectCard';
import { Section } from '../Section';
import { getProjects } from '@/lib/data';

export async function FeaturedProjects() {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section id="projects" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D8D8D8 0%, #E5E5E5 50%, #DDD 100%)', boxShadow: 'inset 0 2px 0 rgba(0,0,0,0.15), inset 0 -2px 0 rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.1)' }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-10 bg-gradient-to-b from-black to-transparent"></div>
            <h2 className="section-title font-heading text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <p className="text-gray-700 max-w-2xl ml-5 font-body leading-relaxed">
            Explore our latest architectural achievements that blend innovation with sustainability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id} style={{ animation: `slideInFade 0.6s ease-out ${index * 0.15}s both` }}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="group relative inline-block text-sm font-medium uppercase tracking-widest px-6 py-3 border-2 border-black transition-all duration-500"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.02) 100%)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects 
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
