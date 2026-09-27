import type { Metadata } from "next";
import { AboutStory } from "@/components/about/AboutStory";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Shivansh Vyas: from computer engineering at SBMP and full-stack development at ZootechX to electronics, AI, and connected systems at DJSCE.",
};

export default function AboutPage() {
  return <AboutStory />;
}
