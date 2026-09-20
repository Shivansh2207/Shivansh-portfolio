"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, ScanLine, Braces, FlaskConical, Send, Search } from "lucide-react";
import { motion, useReducedMotion, useScroll, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import "./identity-dossier.css";

const approach = [
  { title: "Understand", detail: "Find the real problem.", icon: Search },
  { title: "Build", detail: "Connect the right pieces.", icon: Braces },
  { title: "Test", detail: "Break it. Learn. Improve.", icon: FlaskConical },
  { title: "Ship", detail: "Make it useful in the real world.", icon: Send },
];

export function IdentityScan() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 90%", "start 15%"] });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    // Progress only moves forward: scrolling back never hides revealed content.
    progress.set(Math.max(progress.get(), value));
  });
  const headerOpacity = useTransform(progress, [0.02, 0.16], [0, 1]);
  const nameOpacity = useTransform(progress, [0.14, 0.36], [0, 1]);
  const nameY = useTransform(progress, [0.14, 0.36], [42, 0]);
  const storyOpacity = useTransform(progress, [0.32, 0.58], [0, 1]);
  const storyY = useTransform(progress, [0.32, 0.58], [36, 0]);
  const methodOpacity = useTransform(progress, [0.56, 0.8], [0, 1]);
  const methodY = useTransform(progress, [0.56, 0.8], [28, 0]);

  return (
    <section
      ref={sectionRef}
      id="identity"
      className="identity-dossier"
      aria-labelledby="identity-title"
    >
      <div className="dossier-stage">
      <PageContainer>
        <motion.div className="dossier-header dossier-reveal" style={{ opacity: reducedMotion ? 1 : headerOpacity }}>
          <span>01 / IDENTITY SCAN</span>
          <span className="dossier-header__center"><ScanLine size={16} aria-hidden="true" /> THE PERSON BEHIND THE BUILD</span>
          <span className="dossier-header__code">SV–22</span>
        </motion.div>

        <div className="dossier-layout">
          <motion.div className="dossier-nameplate dossier-reveal" style={{ opacity: reducedMotion ? 1 : nameOpacity, y: reducedMotion ? 0 : nameY }}>
            <div className="dossier-nameplate__index"><span>DEVELOPER / THINKER / TINKERER</span><span aria-hidden="true">[ 01 ]</span></div>
            <h2 id="identity-title"><span>SHIVANSH</span><span className="dossier-nameplate__surname">VYAS<span className="dossier-nameplate__period">.</span></span></h2>
            <div className="dossier-nameplate__signature" aria-hidden="true">Always a work in progress.</div>
            <div className="dossier-nameplate__rule" aria-hidden="true" />
            <p className="dossier-nameplate__belief">CURIOUS BY NATURE.<br /><strong>BUILDER BY CHOICE.</strong></p>
            <div className="dossier-nameplate__location"><MapPin size={16} aria-hidden="true" /><span>MUMBAI, INDIA</span><span className="dossier-nameplate__coordinates">BUILDING & LEARNING</span></div>
          </motion.div>

          <motion.div className="dossier-story dossier-reveal" style={{ opacity: reducedMotion ? 1 : storyOpacity, y: reducedMotion ? 0 : storyY }}>
            <p className="dossier-kicker"><span aria-hidden="true">/</span> A LITTLE CONTEXT</p>
            <h3>I turn <span className="dossier-story__question">“what if”</span><br />into <span className="dossier-story__answer">“it works.”</span></h3>
            <p>I’m a computer engineering student and full-stack developer. I like getting past the idea stage: understanding the problem, connecting the pieces, and making something people can actually use.</p>
            <p>My work moves between software, AI, automation, and connected hardware. I learn by building, asking better questions, and figuring out why something broke.</p>
            <div className="dossier-story__aside">
              <span aria-hidden="true">*</span>
              <p>Plenty of ideas.<br /><strong>Even more reasons to start.</strong></p>
            </div>
            <Link href="/about" className="dossier-story__link">VIEW FULL STORY <ArrowUpRight size={21} aria-hidden="true" /></Link>
          </motion.div>
        </div>

        <motion.div className="dossier-method dossier-reveal" style={{ opacity: reducedMotion ? 1 : methodOpacity, y: reducedMotion ? 0 : methodY }}>
          <div className="dossier-method__heading"><span>HOW I THINK</span><span>FROM QUESTION TO SOMETHING THAT WORKS</span></div>
          <ol className="dossier-method__steps">
            {approach.map(({ title, detail, icon: Icon }, index) => (
              <li key={title}>
                <div className="dossier-method__step-top"><span>0{index + 1}</span><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></div>
                <h4>{title}<span aria-hidden="true">↗</span></h4>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </PageContainer>
      </div>
    </section>
  );
}
