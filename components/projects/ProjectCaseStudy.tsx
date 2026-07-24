import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
} from "@/components/ui/Icons";
import type { Project } from "@/data/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <main className="case-study">
      <PageContainer>
        <Link href="/projects" className="back-link">
          <ArrowLeftIcon aria-hidden="true" size={17} />
          All projects
        </Link>
        <header className="case-study__hero">
          <div>
            <p className="eyebrow">
              CASE STUDY / {project.number}
            </p>
            <h1>{project.name}</h1>
          </div>
          <StatusBadge status={project.status} />
          <p>{project.description}</p>
        </header>

        <div className="case-study__layout">
          <aside className="case-study__meta">
            <div>
              <span>Category</span>
              <strong>{project.category}</strong>
            </div>
            <div>
              <span>Role</span>
              <p>{project.role}</p>
            </div>
            <div>
              <span>Technologies</span>
              <ul className="tag-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="case-study__content">
            <CaseSection title="Overview" content={project.overview} />
            <CaseSection title="Problem" content={project.problem} />
            <CaseSection title="Solution" content={project.solution} />
            <section>
              <p className="eyebrow">04 / FEATURES</p>
              <h2>What the system does</h2>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <ArrowUpRightIcon aria-hidden="true" size={17} />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <p className="eyebrow">05 / ARCHITECTURE</p>
              <h2>System architecture</h2>
              <div className="architecture-placeholder">
                <span>INPUTS</span>
                <i aria-hidden="true" />
                <span>CORE SYSTEM</span>
                <i aria-hidden="true" />
                <span>OUTPUTS</span>
              </div>
              <p>
                Detailed architecture diagrams and implementation notes will be
                added as this case study is expanded.
              </p>
            </section>
            <CaseSection title="Challenges" content={project.challenges} />
            <CaseSection title="Results" content={project.results} />
            <CaseSection title="Future improvements" content={project.future} />
          </div>
        </div>
      </PageContainer>
    </main>
  );
}

function CaseSection({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <p className="eyebrow">{title.toUpperCase()}</p>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
