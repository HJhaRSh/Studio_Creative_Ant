import { notFound } from 'next/navigation';
import Image from 'next/image';
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

  // Placeholder images - replace with actual project images from database
  const projectImages = project.cover_image
    ? [project.cover_image, project.cover_image, project.cover_image]
    : [];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
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
              {project.client && (
                <div>
                  <span className="text-gray-500 uppercase tracking-wide">Client</span>
                  <p className="mt-1 font-medium">{project.client}</p>
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
          {project.cover_image && (
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <Image
                src={project.cover_image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          )}
        </Container>
      </section>

      {/* Description Section */}
      {project.description && (
        <Section className="bg-white">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold mb-6">About This Project</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{project.description}</p>
            </div>
          </div>
        </Section>
      )}

      {/* Gallery Section */}
      {projectImages.length > 0 && (
        <Section className="bg-gray-50">
          <Gallery images={projectImages} projectName={project.name} />
        </Section>
      )}
    </>
  );
}
