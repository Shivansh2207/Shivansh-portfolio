import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { ArrowLeftIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <main className="not-found">
      <PageContainer>
        <p className="eyebrow">ERROR / 404</p>
        <span aria-hidden="true">404</span>
        <h1>
          THIS ROUTE
          <br />
          MISSED THE TIMELINE.
        </h1>
        <p>The page you’re looking for does not exist or has moved.</p>
        <Link href="/">
          <ArrowLeftIcon aria-hidden="true" size={18} />
          RETURN HOME
        </Link>
      </PageContainer>
    </main>
  );
}
