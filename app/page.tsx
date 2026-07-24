import { AboutPreview } from "@/components/home/AboutPreview";
import { Capabilities } from "@/components/home/Capabilities";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { Hero } from "@/components/home/Hero";
import { IdentityScan } from "@/components/home/IdentityScan";
import { PlaygroundPreview } from "@/components/home/PlaygroundPreview";
import { SelectedBuilds } from "@/components/home/SelectedBuilds";

export default function Home() {
  return (
    <main>
      <Hero />
      <IdentityScan />
      <SelectedBuilds />
      <Capabilities />
      <ExperiencePreview />
      <AboutPreview />
      <PlaygroundPreview />
      <ContactCTA />
    </main>
  );
}
