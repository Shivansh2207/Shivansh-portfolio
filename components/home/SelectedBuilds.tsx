import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function SelectedBuilds() {
  return (
    <section id="selected-builds" className="section">
      <PageContainer>
        <SectionHeading
          eyebrow="01 / SELECTED BUILDS"
          title="SYSTEMS WITH A JOB TO DO."
          description="A few practical products built across AI, operations, and connected technology."
        />
        <ProjectGrid projects={projects} />
      </PageContainer>
    </section>
  );
}
