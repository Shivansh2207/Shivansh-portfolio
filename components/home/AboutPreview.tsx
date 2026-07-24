import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="section section--about">
      <PageContainer className="split-section">
        <div>
          <p className="eyebrow">04 / ABOUT</p>
          <h2>BUILD COMPLETE.<br />THINK PRACTICAL.</h2>
        </div>
        <div>
          <p>
            I’m Shivansh Vyas, a computer engineering student and hands-on
            developer who enjoys turning rough ideas into working software. I
            work across frontend, backend, automation, AI, and connected
            hardware, and I care more about complete usable systems than
            isolated demos.
          </p>
          <Button href="/about" variant="outline">
            READ MY STORY
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
