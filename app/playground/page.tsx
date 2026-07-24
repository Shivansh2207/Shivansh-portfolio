import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Experiments, concepts, visual prototypes, and technical explorations by Shivansh Vyas.",
};

const items = [
  ["Experiment", "Motion and interaction studies", "Small tests for making interfaces feel clearer and more responsive."],
  ["In Progress", "AI workflow building blocks", "Exploring focused automations that fit into practical business processes."],
  ["Concept", "Connected device interfaces", "Early interaction ideas for sensors, hardware, and real-time feedback."],
  ["Experiment", "Data-dense UI patterns", "Readable ways to shape operational information without dashboard clutter."],
  ["Concept", "Field-first mobile tools", "Thinking through resilient workflows for people working away from a desk."],
  ["In Progress", "Reusable system starters", "Practical foundations for role-aware products and internal software."],
] as const;

export default function PlaygroundPage() {
  return (
    <main className="page">
      <PageContainer>
        <header className="page-hero">
          <p className="eyebrow">PLAYGROUND / LAB NOTES</p>
          <h1>
            IDEAS BEFORE
            <br />
            THEY BECOME PRODUCTS.
          </h1>
          <p>
            Experiments, unfinished ideas, visual prototypes, and technical
            explorations. Nothing here is presented as shipped production work.
          </p>
        </header>
        <div className="playground-grid">
          {items.map(([label, title, description], index) => (
            <article key={title}>
              <div>
                <span>0{index + 1}</span>
                <p>{label}</p>
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="playground-card__visual" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </main>
  );
}
