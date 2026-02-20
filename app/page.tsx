import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { AwardsHighlight } from "@/components/sections/AwardsHighlight";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <FeaturedProjects />
      <StudioIntro />
      <AwardsHighlight />
      <TeamPreview />
      <ContactPreview />
    </>
  );
}
