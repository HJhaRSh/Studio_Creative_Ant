import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/data';
import { Gallery } from '@/components/Gallery';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const projectImages = project.images && project.images.length > 0
    ? project.images
    : project.cover_image
      ? [project.cover_image]
      : [];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-6">
        <Container>
          <div className="mb-8">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {project.name}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              {project.location && (
                <div>
                  <span className="text-gray-500 uppercase tracking-wide">Location</span>
                  <p className="mt-1 font-medium">{project.location}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <span className="text-gray-500 uppercase tracking-wide">Year</span>
                  <p className="mt-1 font-medium">{project.year}</p>
                </div>
              )}
              {project.area && (
                <div>
                  <span className="text-gray-500 uppercase tracking-wide">Area</span>
                  <p className="mt-1 font-medium">{project.area}</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      {projectImages.length > 0 && (
        <section className="py-8 px-4 md:px-8 lg:px-12 xl:px-16 w-full">
          <div className="w-full">
            <Gallery images={projectImages} projectName={project.name} />
          </div>
        </section>
      )}

      {/* Description Section */}
      {project.description && (
        <section className="py-16 px-4 md:px-8 lg:px-12 xl:px-16 w-full bg-white">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-10 bg-gradient-to-b from-black to-transparent"></div>
              <h2 className="font-heading text-4xl font-bold uppercase tracking-tight">About This Project</h2>
            </div>
            <p className="font-body text-base leading-relaxed text-gray-700 text-justify">
              {project.description}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
