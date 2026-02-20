export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  location: string | null;
  year: number | null;
  client: string | null;
  area: string | null;
  cover_image: string | null;
  status?: string;
  created_at: string;
}

export interface ProjectImage {
  id: string;
  project_id: string;
  image_url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  education?: string;
  bio: string | null;
  experience?: string[];
  awards?: string[];
  image_url: string | null;
  instagram?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  image_url: string | null;
}
