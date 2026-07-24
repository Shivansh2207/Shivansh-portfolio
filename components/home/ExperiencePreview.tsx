import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

export function ExperiencePreview() {
  return (
    <section className="section">
      <PageContainer>
        <div className="experience-block">
          <div>
            <p className="eyebrow">03 / EXPERIENCE</p>
            <span className="experience-block__company">ZOOTECHX</span>
          </div>
          <div>
            <p className="experience-block__role">
              Full-Stack Developer Intern
            </p>
            <p>
              Worked across custom software, web applications, automation
              systems, Shopify engineering, internal dashboards, and client
              implementation workflows.
            </p>
            <Link href="/about">
              More about my experience
              <ArrowUpRightIcon aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
