import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack, AI, automation, business software, and IoT projects by Shivansh Vyas.",
};

export default function ProjectsPage() {
  return (
    <main className="page">
      <PageContainer>
        <header className="page-hero">
          <p className="eyebrow">WORK / SELECTED SYSTEMS</p>
          <h1>
            PROJECTS BUILT
            <br />
            TO DO REAL WORK.
          </h1>
          <p>
            Products and systems shaped around practical constraints, complete
            workflows, and people who need them to work.
          </p>
        </header>
        <div className="filter-bar" aria-label="Project categories">
          <span>FILTER</span>
          <button type="button" className="is-active">All</button>
          <button type="button">AI + IoT</button>
          <button type="button">Full-Stack</button>
          <button type="button">Business Software</button>
        </div>
        <ProjectGrid projects={projects} />
      </PageContainer>
    </main>
  );
}
