import Link from "next/link";
import {
  CodeProfileIcon,
  NetworkProfileIcon,
} from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="site-footer">
      <PageContainer className="site-footer__inner">
        <div>
          <strong>SHIVANSH VYAS</strong>
          <p>Full-Stack Developer</p>
        </div>
        <div className="site-footer__links">
          <Link
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile placeholder"
          >
            <CodeProfileIcon aria-hidden="true" size={18} />
            GitHub
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile placeholder"
          >
            <NetworkProfileIcon aria-hidden="true" size={18} />
            LinkedIn
          </Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Built with intent.
        </p>
      </PageContainer>
    </footer>
  );
}
