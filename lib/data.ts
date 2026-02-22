import { Project, TeamMember, Award } from '@/types';
import { client } from './sanity';
import { urlFor } from './sanity';

/* =========================
   PROJECTS (FROM SANITY)
========================= */

const DEMO_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Brick Jaali House',
    slug: 'brick-jaali-house',
    description: "A residence reflecting the studio's philosophy using sustainable materials and innovative spatial arrangements.",
    location: 'Ahmednagar',
    year: 2024,
    client: 'Private Client',
    area: null,
    cover_image: '/placeholder-project.jpg',
    images: [],
    status: 'Ongoing',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Dhansari Residence',
    slug: 'dhansari-residence',
    description: 'Minimalist residence emphasizing decluttering, seamless finishes, and emotional detachment from possessions.',
    location: 'Chhatrapati Sambhajinagar',
    year: 2024,
    client: 'Private Client',
    area: null,
    cover_image: '/placeholder-project.jpg',
    images: [],
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Pathak Residence',
    slug: 'pathak-residence',
    description: 'Modern residential project focusing on spatial clarity.',
    location: 'Ahmednagar',
    year: 2024,
    client: 'Private Client',
    area: null,
    cover_image: '/placeholder-project.jpg',
    images: [],
    status: 'Ongoing',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Parampara Restaurant',
    slug: 'parampara-restaurant',
    description: 'Renovation project focusing on spatial alignment and social interaction.',
    location: 'Ahmednagar',
    year: 2023,
    client: 'Commercial',
    area: null,
    cover_image: '/placeholder-project.jpg',
    images: [],
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Priyadarshini Pre School',
    slug: 'priyadarshini-pre-school',
    description: 'Educational space designed for interactive learning.',
    location: 'Pune',
    year: 2024,
    client: 'Educational',
    area: null,
    cover_image: '/placeholder-project.jpg',
    images: [],
    status: 'Ongoing',
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'House of Skylight',
    slug: 'house-of-skylight',
    description: 'Exploring natural light and volume in residential architecture.',
    location: 'Dhondgaon',
    year: 2024,
    client: 'Private Client',
    area: null,
    cover_image: '/placeholder-project.jpg',
    images: [],
    status: 'Ongoing',
    created_at: new Date().toISOString(),
  },
];

export const getProjects = async (): Promise<Project[]> => {
  try {
    const sanityProjects = await client.fetch(`
      *[_type == "project"]{
        _id,
        title,
        description,
        location,
        year,
        status,
        images,
        _createdAt
      }
    `);

    if (sanityProjects && sanityProjects.length > 0) {
      return sanityProjects
        .map((project: any) => ({
          id: project._id,
          name: project.title,
          slug: project.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, ''),
          description: project.description,
          location: project.location,
          year: Number(project.year),
          client: 'Private Client',
          area: null,
          cover_image: project.images?.[0]
            ? urlFor(project.images[0]).url()
            : '/placeholder-project.jpg',
          images: project.images
            ? project.images.map((img: any) => urlFor(img).url())
            : [],
          status: project.status
            ? project.status.charAt(0).toUpperCase() + project.status.slice(1)
            : undefined,
          created_at: project._createdAt,
        }))
        .sort((a: Project, b: Project) => (b.year || 0) - (a.year || 0));
    }
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error);
  }

  return DEMO_PROJECTS.sort((a: Project, b: Project) => (b.year || 0) - (a.year || 0));
};

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug) || null;
};

/* =========================
   TEAM (UNCHANGED)
========================= */

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  return [
    {
      id: '1',
      name: 'Ar. Anket Sanjay Tathed',
      role: 'Founder & Principal Architect',
      education: 'Bachelor of Architecture (2019), Sinhgad College of Architecture, Pune',
      bio: 'Ar. Anket Tathed is the founder and principal architect at Studio Creative Ant. With a keen sense of detailing, he constantly explores architectural expressions that connect human experience with nature. He founded Studio Creative Ant in 2020 with the aim of creating sensitive and meaningful spaces.',
      experience: ['Madhav Joshi and Associates (2018–19)', 'RED Architect and Associates (2019–20)'],
      awards: ['Jeevitaan Riverfront Design Award Winner', 'NASA Convention Citation Trophy', 'Everest Design Solution Winner'],
      image_url: '/team/anket.JPEG',
      instagram: 'https://instagram.com/anket_tathed',
    },
    {
      id: '2',
      name: 'Ar. Khushboo Anket Tathed',
      role: 'Principal Architect',
      education: 'Bachelor of Architecture (2021), Kamla Raheja Vidyanidhi Institute, Mumbai',
      bio: 'Ar. Khushboo Tathed is a principal architect at Studio Creative Ant. She focuses on sustainable, contextual, and resource-efficient architecture that connects users with nature and surroundings.',
      experience: ['Mistry Architects', 'Mega Design Architects'],
      awards: ['COA Excellence in Architectural Heritage Documentation', 'INTACH Heritage Award', 'Star Students Award'],
      image_url: '/team/khushboo.JPEG',
      instagram: 'https://instagram.com/_khushboo.jain_',
    },
  ];
};

/* =========================
   AWARDS (UNCHANGED)
========================= */

export const getAwards = async (): Promise<Award[]> => {
  return [
    {
      id: '1',
      title: 'Most Promising and Futuristic Design Firm of the Year 2025',
      organization: 'Architecture Awards',
      year: 2025,
      image_url: null,
    },
    {
      id: '2',
      title: 'Top 30 Under 30 Creative Architects and Interior Designers 2025',
      organization: 'Design Excellence',
      year: 2025,
      image_url: null,
    },
    {
      id: '3',
      title: 'Design Awards India Recognition',
      organization: 'Design Awards India',
      year: 2024,
      image_url: null,
    },
    {
      id: '4',
      title: 'INTACH Heritage Award',
      organization: 'INTACH',
      year: 2023,
      image_url: null,
    },
    {
      id: '5',
      title: 'COA Excellence Award',
      organization: 'Council of Architecture',
      year: 2023,
      image_url: null,
    },
    {
      id: '6',
      title: 'NASA Citation Trophy',
      organization: 'NASA',
      year: 2023,
      image_url: null,
    },
  ];
};