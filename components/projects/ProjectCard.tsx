import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import type { Project } from "@/data/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={cn("project-card", `project-card--${project.accent}`)}>
      <div className="project-card__top">
        <span className="project-card__number">{project.number}</span>
        <StatusBadge status={project.status} />
      </div>
      <p className="project-card__category">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <Link href={`/projects/${project.slug}`} className="project-card__link">
        View case study
        <ArrowUpRightIcon aria-hidden="true" size={17} />
      </Link>
    </article>
  );
}
