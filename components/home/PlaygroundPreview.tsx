import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiments = [
  { status: "Experiment", title: "Interface motion studies" },
  { status: "In Progress", title: "Small AI workflow prototypes" },
  { status: "Concept", title: "Connected device interactions" },
] as const;

export function PlaygroundPreview() {
  return (
    <section className="section section--alt">
      <PageContainer>
        <SectionHeading
          eyebrow="05 / PLAYGROUND"
          title="IDEAS STILL IN MOTION."
          description="Experiments, unfinished ideas, visual prototypes, and technical explorations live here."
        />
        <div className="experiment-grid">
          {experiments.map((experiment, index) => (
            <article key={experiment.title}>
              <span>0{index + 1}</span>
              <p>{experiment.status}</p>
              <h3>{experiment.title}</h3>
              <div aria-hidden="true" />
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
