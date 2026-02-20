# Supabase Database Setup

This document outlines the database schema and storage buckets needed for Studio Creative Ant website.

## Database Tables

### 1. Projects Table

```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  location TEXT,
  year INTEGER,
  client TEXT,
  area TEXT,
  cover_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX idx_projects_slug ON projects(slug);

-- Create index on created_at for sorting
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);
```

### 2. Project Images Table

```sql
CREATE TABLE project_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on project_id for faster queries
CREATE INDEX idx_project_images_project_id ON project_images(project_id);
```

### 3. Team Table

```sql
CREATE TABLE team (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for sorting
CREATE INDEX idx_team_created_at ON team(created_at);
```

### 4. Awards Table

```sql
CREATE TABLE awards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  year INTEGER NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on year for sorting
CREATE INDEX idx_awards_year ON awards(year DESC);
```

## Storage Buckets

Create the following storage buckets in Supabase:

1. **projects** - For project cover images and gallery images
   - Public bucket: Yes
   - Allowed MIME types: image/jpeg, image/png, image/webp

2. **team** - For team member photos
   - Public bucket: Yes
   - Allowed MIME types: image/jpeg, image/png, image/webp

3. **awards** - For award images (optional)
   - Public bucket: Yes
   - Allowed MIME types: image/jpeg, image/png, image/webp

## Row Level Security (RLS) Policies

### Projects Table
```sql
-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public projects are viewable by everyone"
  ON projects FOR SELECT
  USING (true);
```

### Project Images Table
```sql
-- Enable RLS
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public project images are viewable by everyone"
  ON project_images FOR SELECT
  USING (true);
```

### Team Table
```sql
-- Enable RLS
ALTER TABLE team ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public team members are viewable by everyone"
  ON team FOR SELECT
  USING (true);
```

### Awards Table
```sql
-- Enable RLS
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public awards are viewable by everyone"
  ON awards FOR SELECT
  USING (true);
```

## Storage Policies

For each bucket, create a policy to allow public read access:

```sql
-- Projects bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'projects');

-- Team bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'team');

-- Awards bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'awards');
```

## Example Queries

### Get all projects
```sql
SELECT * FROM projects ORDER BY created_at DESC;
```

### Get project with images
```sql
SELECT 
  p.*,
  COALESCE(
    json_agg(
      json_build_object(
        'id', pi.id,
        'image_url', pi.image_url
      )
    ) FILTER (WHERE pi.id IS NOT NULL),
    '[]'
  ) as images
FROM projects p
LEFT JOIN project_images pi ON p.id = pi.project_id
WHERE p.slug = 'your-project-slug'
GROUP BY p.id;
```

## Next Steps

1. Run the SQL scripts above in your Supabase SQL Editor
2. Create the storage buckets in Supabase Dashboard
3. Set up the storage policies
4. Update `lib/data.ts` to use actual Supabase queries instead of placeholder data
5. Upload images to the respective storage buckets
6. Insert sample data using the Supabase Dashboard or SQL Editor
