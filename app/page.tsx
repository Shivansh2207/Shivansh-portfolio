import { AboutPreview } from "@/components/home/AboutPreview";
import { Capabilities } from "@/components/home/Capabilities";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { Hero } from "@/components/home/Hero";
import { IdentityScan } from "@/components/home/IdentityScan";
import { SectionBreak } from "@/components/home/SectionBreak";
import "@/components/home/viewport-sections.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionBreak from="THE INTRO" to="01 / THE PERSON" phrase="BEHIND EVERY BUILD, A CURIOUS MIND." />
      <IdentityScan />
      <SectionBreak from="THE PERSON" to="02 / THE CRAFT" phrase="LESS WHAT IF. MORE LET’S BUILD." />
      <Capabilities />
      <SectionBreak from="THE CRAFT" to="03 / THE REAL WORLD" phrase="IDEAS MEET REAL-WORLD REQUIREMENTS." />
      <ExperiencePreview />
      <SectionBreak from="THE EXPERIENCE" to="04 / THE JOURNEY" phrase="EVERY BUILD ADDS A NEW CONNECTION." />
      <AboutPreview />
      <SectionBreak from="STILL EXPLORING" to="LET’S TALK" phrase="THE NEXT GOOD IDEA COULD BE YOURS." />
      <ContactCTA />
    </main>
  );
}
