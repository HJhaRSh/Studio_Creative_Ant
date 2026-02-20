# Studio Creative Ant

A premium, award-winning architecture firm website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Features

- 🎨 **Premium Design** - Ultra-modern, minimal, and visually striking design
- ⚡ **Performance** - Built with Next.js 14 App Router for optimal performance
- 🎭 **Smooth Animations** - Framer Motion animations throughout
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🗄️ **Dynamic Content** - Supabase integration for projects, team, and awards
- 🎯 **Type-Safe** - Full TypeScript support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for database and storage)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd studio_creative_ant
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up Supabase database:
   - Follow the instructions in `SUPABASE_SETUP.md` to create the database schema and storage buckets

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
studio_creative_ant/
├── app/                    # Next.js App Router pages
│   ├── projects/          # Projects pages
│   ├── studio/            # Studio page
│   ├── team/              # Team page
│   ├── awards/            # Awards page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── sections/         # Homepage sections
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── ProjectCard.tsx   # Project card component
│   ├── TeamCard.tsx      # Team member card
│   ├── AwardCard.tsx     # Award card component
│   ├── Gallery.tsx       # Image gallery component
│   ├── Container.tsx     # Container wrapper
│   └── Section.tsx       # Section wrapper
├── lib/                  # Utility functions
│   ├── supabase.ts      # Supabase client
│   └── data.ts          # Data fetching functions
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## Pages

- **Home** (`/`) - Hero section, featured projects, studio intro, awards, team preview, contact preview
- **Projects** (`/projects`) - Grid of all projects
- **Project Detail** (`/projects/[slug]`) - Individual project page with gallery
- **Studio** (`/studio`) - Studio information and philosophy
- **Team** (`/team`) - Team members grid
- **Awards** (`/awards`) - Awards and recognition list
- **Contact** (`/contact`) - Contact form and information

## Customization

### Fonts

The project uses Google Fonts:
- **Headings**: Bebas Neue (can be changed to Clash Display or Monument Extended)
- **Body**: Inter (can be changed to DM Sans)

To change fonts, update `app/globals.css` and `tailwind.config.ts`.

### Colors

The design uses a minimal black and white color scheme. To customize:
- Update `tailwind.config.ts` for theme colors
- Modify `app/globals.css` for global styles

## Supabase Integration

The website is structured to work with Supabase for:
- Projects and project images
- Team members
- Awards

See `SUPABASE_SETUP.md` for detailed database schema and setup instructions.

Currently, the site uses placeholder data. To connect to Supabase:
1. Set up your Supabase project
2. Run the SQL scripts from `SUPABASE_SETUP.md`
3. Update the functions in `lib/data.ts` to use actual Supabase queries

## Building for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.

## Credits

Designed and developed for Studio Creative Ant.
