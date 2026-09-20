import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import "./closing-scene.css";

export function ContactCTA() {
  return (
    <section className="closing-scene" aria-labelledby="closing-title">
      <PageContainer>
        <div className="closing-kicker"><span>READY WHEN YOU ARE</span><span>END OF THE SCROLL. START OF SOMETHING.</span></div>
        <div className="closing-layout">
          <div className="closing-copy"><span className="closing-aside">Got a “what if”?</span><h2 id="closing-title">LET’S MAKE<br />IT <span>A THING.</span><Asterisk aria-hidden="true" /></h2><p>A rough idea. A stubborn problem. A system that could work better.<br />Bring it over. Let’s figure out what’s worth building.</p></div>
          <Link href="/contact" className="build-ticket">
            <span className="build-ticket__top"><span>ADMIT ONE GOOD IDEA</span><span>SV / NEXT</span></span>
            <span className="build-ticket__main"><span>YOUR NEXT<br />“IT WORKS!”<br /><em>STARTS HERE.</em></span><ArrowUpRight size={64} strokeWidth={1.4} aria-hidden="true" /></span>
            <span className="build-ticket__note">No polished pitch required.</span>
            <span className="build-ticket__tear">START A CONVERSATION <ArrowUpRight size={23} aria-hidden="true" /></span>
          </Link>
        </div>
        <div className="closing-postscript"><span>YOU BRING THE PROBLEM.</span><i aria-hidden="true" /><span>I’LL BRING THE CURIOSITY.</span></div>
      </PageContainer>
    </section>
  );
}
