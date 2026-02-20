import { Project, TeamMember, Award } from '@/types';

export const getProjects = async (): Promise<Project[]> => {
  return [
    {
      id: '1',
      name: 'Brick Jaali House',
      slug: 'brick-jaali-house',
      description: 'A residence reflecting the studio’s philosophy using sustainable materials and innovative spatial arrangements.',
      location: 'Ahmednagar',
      year: 2024,
      client: 'Private Client',
      area: null,
      cover_image: '/placeholder-project.jpg',
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
      status: 'Ongoing',
      created_at: new Date().toISOString(),
    },
    {
      id: '7',
      name: 'Ghorpade House',
      slug: 'ghorpade-house',
      description: 'Contemporary living spaces integrated with nature.',
      location: 'Ahmednagar',
      year: 2024,
      client: 'Private Client',
      area: null,
      cover_image: '/placeholder-project.jpg',
      status: 'Ongoing',
      created_at: new Date().toISOString(),
    },
    {
      id: '8',
      name: 'Affordable Housing Project',
      slug: 'affordable-housing-project',
      description: 'Low-cost housing designed with passive cooling and sustainable design principles.',
      location: 'Ahmednagar',
      year: 2023,
      client: 'Development',
      area: null,
      cover_image: '/placeholder-project.jpg',
      created_at: new Date().toISOString(),
    },
  ];
};

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug) || null;
};

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
