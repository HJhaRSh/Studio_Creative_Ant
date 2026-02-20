# What to Do Next — Step by Step

Follow these steps in order to run and customize your Studio Creative Ant website.

---

## Step 1: Run the website locally

1. Open a terminal in the project folder:
   - In VS Code/Cursor: **Terminal → New Terminal**
   - Or open PowerShell and run: `cd c:\Users\hjhar\OneDrive\Desktop\studio_creative_ant`

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open your browser and go to: **http://localhost:3000**

4. You should see the homepage with placeholder content. Click through: Projects, Studio, Team, Awards, Contact.

**Note:** The site works without Supabase. It uses placeholder data until you connect a database.

---

## Step 2: Create a Supabase project (optional but recommended)

1. Go to **https://supabase.com** and sign in (or create an account).

2. Click **New Project**.

3. Choose an organization, set:
   - **Name:** e.g. `studio-creative-ant`
   - **Database Password:** choose a strong password and save it
   - **Region:** pick one close to you

4. Click **Create new project** and wait until it’s ready.

---

## Step 3: Get your Supabase keys

1. In the Supabase dashboard, open your project.

2. Go to **Project Settings** (gear icon) → **API**.

3. Copy and save:
   - **Project URL**
   - **anon public** key (under "Project API keys")

---

## Step 4: Add environment variables

1. In the project folder, create a file named **`.env.local`** (same folder as `package.json`).

2. Paste this and replace the placeholders with your values from Step 3:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. Save the file.

4. Restart the dev server (in the terminal press `Ctrl+C`, then run `npm run dev` again).

---

## Step 5: Set up the database in Supabase

1. In Supabase, go to **SQL Editor**.

2. Open the file **`SUPABASE_SETUP.md`** in this project.

3. Copy the SQL from **"Database Tables"** (the `CREATE TABLE` and `CREATE INDEX` blocks for `projects`, `project_images`, `team`, `awards`).

4. Paste into the SQL Editor and click **Run**.

5. Copy the **Row Level Security (RLS)** SQL from `SUPABASE_SETUP.md` and run that too.

---

## Step 6: Create storage buckets in Supabase

1. In Supabase, go to **Storage**.

2. Click **New bucket** and create:
   - **projects** (public)
   - **team** (public)
   - **awards** (public)

3. For each bucket, open it → **Policies** → add a policy that allows **public read** (you can use the policy examples in `SUPABASE_SETUP.md` under "Storage Policies").

---

## Step 7: Connect the app to Supabase (replace placeholder data)

1. Open **`lib/data.ts`** in your editor.

2. In each function (`getProjects`, `getProjectBySlug`, `getTeamMembers`, `getAwards`):
   - Uncomment or add the Supabase `select` query.
   - Remove or comment out the placeholder `return [...]` array.

3. Example for `getProjects`:
   ```ts
   export const getProjects = async (): Promise<Project[]> => {
     const { data, error } = await supabase
       .from('projects')
       .select('*')
       .order('created_at', { ascending: false });
     if (error) throw error;
     return data ?? [];
   };
   ```

4. Do the same for the other functions using the table names: `projects`, `project_images`, `team`, `awards`.

5. Save and refresh **http://localhost:3000**. Content will come from Supabase once you add rows.

---

## Step 8: Add real content in Supabase

1. **Projects:** Table **`projects`**  
   Add rows with: `name`, `slug`, `description`, `location`, `year`, `client`, `area`, `cover_image` (use a URL from the **projects** storage bucket after uploading an image).

2. **Project images:** Table **`project_images`**  
   Add rows with: `project_id` (UUID from `projects`), `image_url` (storage URL).

3. **Team:** Table **`team`**  
   Add rows with: `name`, `role`, `bio`, `image_url` (optional; use **team** bucket).

4. **Awards:** Table **`awards`**  
   Add rows with: `title`, `organization`, `year`, `image_url` (optional).

5. Upload images in **Storage** → **projects** / **team** / **awards**, then use the **Public URL** of each file in the `cover_image`, `image_url` fields.

---

## Step 9: Customize content and design

- **Text:** Edit copy in the section components under **`components/sections/`** and in **`app/studio/page.tsx`**, **`app/contact/page.tsx`**.
- **Contact details:** Update address, phone, email in **`components/Footer.tsx`** and **`app/contact/page.tsx`**.
- **Fonts/colors:** Adjust **`app/globals.css`** and **`tailwind.config.ts`**.

---

## Step 10: Build for production

When you’re ready to deploy:

```bash
npm run build
npm start
```

Or connect the project to **Vercel** (recommended for Next.js): push to GitHub, then import the repo at **vercel.com** and add your **`.env.local`** values as environment variables in the Vercel project settings.

---

## Quick reference

| Step | What you do |
|------|-------------|
| 1 | Run `npm run dev` → open http://localhost:3000 |
| 2 | Create Supabase project at supabase.com |
| 3 | Copy Project URL and anon key from Project Settings → API |
| 4 | Create `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| 5 | Run SQL from `SUPABASE_SETUP.md` in Supabase SQL Editor |
| 6 | Create storage buckets: projects, team, awards |
| 7 | Update `lib/data.ts` to use Supabase instead of placeholder data |
| 8 | Add projects, team, awards (and images) in Supabase |
| 9 | Edit copy and contact info in components and pages |
| 10 | Run `npm run build` and deploy (e.g. Vercel) |

If you get stuck, check **README.md** and **SUPABASE_SETUP.md** in this project for more detail.
