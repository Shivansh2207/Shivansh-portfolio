import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { stackGroups } from "@/data/stack";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The technologies and capabilities Shivansh Vyas uses to build complete products.",
};

export default function StackPage() {
  return (
    <main className="page">
      <PageContainer>
        <header className="page-hero">
          <p className="eyebrow">STACK / CAPABILITIES</p>
          <h1>
            TOOLS CHANGE.
            <br />
            THE JOB COMES FIRST.
          </h1>
          <p>
            A practical toolkit for moving from interface to infrastructure,
            automation, and connected devices.
          </p>
        </header>
        <div className="stack-grid">
          {stackGroups.map((group, index) => (
            <section key={group.title} className="stack-group">
              <span>0{index + 1}</span>
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </PageContainer>
    </main>
  );
}
