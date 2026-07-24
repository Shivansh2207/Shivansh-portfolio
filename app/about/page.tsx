import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shivansh Vyas, a full-stack developer focused on practical products and complete systems.",
};

const values = [
  "Start with the real workflow, not the fashionable tool.",
  "Make complex systems understandable to the people using them.",
  "Ship complete, usable foundations before chasing polish.",
  "Treat hardware, software, and operations as one product.",
];

export default function AboutPage() {
  return (
    <main className="page about-page">
      <PageContainer>
        <header className="page-hero">
          <p className="eyebrow">ABOUT / SHIVANSH VYAS</p>
          <h1>
            HANDS-ON.
            <br />
            SYSTEM-MINDED.
          </h1>
          <p>
            I’m a computer engineering student and developer who likes turning
            rough, ambitious ideas into working software.
          </p>
        </header>

        <div className="about-grid">
          <section>
            <p className="eyebrow">01 / APPROACH</p>
            <h2>Build around the problem.</h2>
            <p>
              I work across frontend, backend, automation, AI, and connected
              hardware. The interesting part is making all of them cooperate in
              a system someone can actually use.
            </p>
          </section>
          <section>
            <p className="eyebrow">02 / CURRENT FOCUS</p>
            <h2>Practical intelligence.</h2>
            <p>
              I’m focused on AI-powered workflows, operational software, and
              IoT products where thoughtful engineering removes friction from
              real work.
            </p>
          </section>
          <section className="about-grid__experience">
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2>ZootechX</h2>
            <strong>Full-Stack Developer Intern</strong>
            <p>
              Worked across custom software, web applications, automation
              systems, Shopify engineering, internal dashboards, and client
              implementation workflows.
            </p>
          </section>
          <section>
            <p className="eyebrow">04 / DEVELOPMENT VALUES</p>
            <ul className="values-list">
              {values.map((value) => (
                <li key={value}>
                  <ArrowUpRightIcon aria-hidden="true" size={17} />
                  {value}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="about-links">
          <Button href="/projects">VIEW PROJECTS</Button>
          <Button href="/contact" variant="outline">START A CONVERSATION</Button>
          <Link href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</Link>
          <Link href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link>
        </div>
      </PageContainer>
    </main>
  );
}
