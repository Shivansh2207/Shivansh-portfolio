import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="contact-cta">
      <PageContainer className="contact-cta__inner">
        <div>
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2>HAVE A PROBLEM<br />WORTH BUILDING FOR?</h2>
        </div>
        <div>
          <p>Let’s turn it into a working product.</p>
          <Button href="/contact">START A CONVERSATION</Button>
        </div>
      </PageContainer>
    </section>
  );
}
