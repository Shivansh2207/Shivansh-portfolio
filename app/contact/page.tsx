import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageContainer } from "@/components/layout/PageContainer";
import { MailIcon, MessageSquareIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Shivansh Vyas about a product, automation, business system, or IoT project.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <PageContainer>
        <header className="page-hero">
          <p className="eyebrow">CONTACT / START HERE</p>
          <h1>
            BRING THE PROBLEM.
            <br />
            WE’LL SHAPE THE SYSTEM.
          </h1>
          <p>
            Tell me what is not working, what you want to make possible, and
            where the constraints are.
          </p>
        </header>
        <div className="contact-layout">
          <div className="contact-intro">
            <MessageSquareIcon aria-hidden="true" size={32} />
            <h2>What happens next?</h2>
            <p>
              I’ll read through the context, identify the important unknowns,
              and reply with a practical next step.
            </p>
            <div>
              <MailIcon aria-hidden="true" size={18} />
              <span>Response details coming soon</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </PageContainer>
    </main>
  );
}
