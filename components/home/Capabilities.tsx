import { PageContainer } from "@/components/layout/PageContainer";
import {
  BotIcon,
  BoxesIcon,
  CircuitBoardIcon,
  PanelsIcon,
} from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  {
    title: "Full-Stack Products",
    description:
      "Interfaces, APIs, data models, and deployment shaped into one dependable product.",
    icon: PanelsIcon,
    accent: "blue",
  },
  {
    title: "AI and Automation",
    description:
      "Useful intelligence and workflow automation designed around a real operational need.",
    icon: BotIcon,
    accent: "red",
  },
  {
    title: "Business Systems",
    description:
      "Practical software that brings structure, visibility, and control to everyday work.",
    icon: BoxesIcon,
    accent: "yellow",
  },
  {
    title: "Connected Hardware and IoT",
    description:
      "Sensors, devices, cloud services, and applications working as one connected system.",
    icon: CircuitBoardIcon,
    accent: "cyan",
  },
] as const;

export function Capabilities() {
  return (
    <section className="section section--alt">
      <PageContainer>
        <SectionHeading
          eyebrow="02 / WHAT I BUILD"
          title="FROM ROUGH IDEA TO WORKING SYSTEM."
        />
        <div className="capability-grid">
          {capabilities.map(({ title, description, icon: Icon, accent }) => (
            <article
              className={`capability-card capability-card--${accent}`}
              key={title}
            >
              <div className="capability-card__icon">
                <Icon aria-hidden="true" size={25} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
