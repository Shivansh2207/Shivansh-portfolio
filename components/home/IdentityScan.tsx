"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Crosshair,
  MapPin,
  Terminal,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";

const SYSTEM_MESSAGE = "SYSTEM LINK ESTABLISHED";

const metadata = [
  { icon: MapPin, label: "BASED IN", value: "MUMBAI, INDIA" },
  { icon: Terminal, label: "CURRENT MODE", value: "BUILDING & LEARNING" },
  { icon: Crosshair, label: "FOCUS", value: "FULL-STACK + AUTOMATION" },
  { icon: Zap, label: "APPROACH", value: "UNDERSTAND → BUILD → TEST → SHIP" },
];

export function IdentityScan() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [isCompact, setIsCompact] = useState(false);
  const [activated, setActivated] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 850px)");
    const update = () => setIsCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.1) setActivated((current) => current || true);
    if (progress >= 0.94) setHasCompleted((current) => current || true);
  });

  const finalState = Boolean(reducedMotion || isCompact || hasCompleted);

  useEffect(() => {
    if (!activated || finalState) return;

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedMessage(SYSTEM_MESSAGE.slice(0, index));
      if (index >= SYSTEM_MESSAGE.length) window.clearInterval(timer);
    }, 30);

    return () => window.clearInterval(timer);
  }, [activated, finalState]);

  const displayedMessage = finalState ? SYSTEM_MESSAGE : typedMessage;

  const labelOpacity = useTransform(scrollYProgress, [0.03, 0.18], [0, 1]);
  const bootOpacity = useTransform(scrollYProgress, [0.12, 0.3], [0, 1]);
  const scanOpacity = useTransform(scrollYProgress, [0.22, 0.38, 0.5], [0, 1, 0]);
  const scanX = useTransform(scrollYProgress, [0.22, 0.47], ["-105%", "105%"]);
  const statementLabelOpacity = useTransform(scrollYProgress, [0.3, 0.42], [0, 1]);
  const lineOneOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const lineTwoOpacity = useTransform(scrollYProgress, [0.43, 0.58], [0, 1]);
  const lineThreeOpacity = useTransform(scrollYProgress, [0.51, 0.66], [0, 1]);
  const noteOpacity = useTransform(scrollYProgress, [0.58, 0.7], [0, 1]);
  const lineOneY = useTransform(scrollYProgress, [0.35, 0.5], [22, 0]);
  const lineTwoY = useTransform(scrollYProgress, [0.43, 0.58], [22, 0]);
  const lineThreeY = useTransform(scrollYProgress, [0.51, 0.66], [22, 0]);
  const bioOneOpacity = useTransform(scrollYProgress, [0.48, 0.65], [0, 1]);
  const bioTwoOpacity = useTransform(scrollYProgress, [0.58, 0.75], [0, 1]);
  const bioOneY = useTransform(scrollYProgress, [0.48, 0.65], [20, 0]);
  const bioTwoY = useTransform(scrollYProgress, [0.58, 0.75], [20, 0]);
  const metadataOpacity = useTransform(scrollYProgress, [0.64, 0.84], [0, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.7, 0.88], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0.7, 0.88], [22, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.94], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.8, 0.94], [18, 0]);

  const ready = <T,>(value: MotionValue<T>, fallback: T) =>
    finalState ? fallback : value;

  return (
    <section ref={sectionRef} className="identity-scan" aria-labelledby="identity-title">
      <div className="identity-scan__canvas">
        <div className="identity-scan__background" aria-hidden="true" />
        <div className="identity-scan__scan-line" aria-hidden="true">
          <motion.span style={{ opacity: ready(scanOpacity, 0), x: ready(scanX, "105%") }} />
        </div>

        <PageContainer className="identity-scan__inner">
          <header className="identity-scan__topbar">
            <motion.p className="identity-scan__eyebrow" style={{ opacity: ready(labelOpacity, 1) }}>
              01 / IDENTITY SCAN
            </motion.p>
            <motion.p className="identity-scan__system" style={{ opacity: ready(bootOpacity, 1) }}>
              <span aria-hidden="true">{displayedMessage}<b>▮</b></span>
              <span className="sr-only">{SYSTEM_MESSAGE}</span>
            </motion.p>
            <motion.p className="identity-scan__id" style={{ opacity: ready(labelOpacity, 1) }}>SV-22</motion.p>
          </header>

          <motion.p className="identity-scan__scanning" style={{ opacity: ready(scanOpacity, 0) }}>
            SCANNING PROFILE...
          </motion.p>

          <div className="identity-scan__layout">
            <div className="identity-scan__left">
              <div className="identity-scan__statement">
                <motion.p className="identity-scan__profile-label" style={{ opacity: ready(statementLabelOpacity, 1) }}>PROFILE / SV-22</motion.p>
                <h2 id="identity-title">
                  <motion.span style={{ opacity: ready(lineOneOpacity, 1), y: ready(lineOneY, 0) }}>CURIOUS MIND.</motion.span>
                  <motion.span className="is-red" style={{ opacity: ready(lineTwoOpacity, 1), y: ready(lineTwoY, 0) }}>BUILDER ENERGY.</motion.span>
                  <motion.span style={{ opacity: ready(lineThreeOpacity, 1), y: ready(lineThreeY, 0) }}>SLIGHTLY TOO<br className="identity-scan__desktop-break" /> MANY IDEAS.</motion.span>
                </h2>
                <motion.span className="identity-scan__note" style={{ opacity: ready(noteOpacity, 1) }}>THAT&apos;S THE FUN PART.</motion.span>
              </div>

              <motion.div className="identity-metadata" style={{ opacity: ready(metadataOpacity, 1) }}>
                {metadata.map(({ icon: Icon, label, value }) => (
                  <div className="identity-metadata__row" key={label}>
                    <Icon aria-hidden="true" size={22} />
                    <span>{label}</span>
                    <strong>{value}</strong>
                    <i aria-hidden="true" />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="identity-scan__right">
              <div className="identity-scan__bio">
                <motion.p style={{ opacity: ready(bioOneOpacity, 1), y: ready(bioOneY, 0) }}>I&apos;m <em>Shivansh Vyas</em>, a computer engineering student and full-stack developer who enjoys turning ambitious ideas into practical, working products.</motion.p>
                <motion.p style={{ opacity: ready(bioTwoOpacity, 1), y: ready(bioTwoY, 0) }}>I build across software, AI, automation, business systems and connected hardware — usually learning by creating, breaking, debugging and improving.</motion.p>
              </div>

              <motion.article className="identity-card" style={{ opacity: ready(cardOpacity, 1), y: ready(cardY, 0) }}>
                <div className="identity-card__portrait">
                  {/* Local static asset avoids the Worker image optimizer. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/hero/hero-character.png" alt="Illustrated portrait of Shivansh Vyas" width={1024} height={1536} />
                </div>
                <div className="identity-card__details">
                  <p>SHIVANSH VYAS</p>
                  <strong>SV-22</strong>
                  <span>BUILDER / ACTIVE <i aria-hidden="true" /></span>
                  <small>SYS. 87%　 CPU. 42%　 MEM. 63%</small>
                </div>
              </motion.article>

              <motion.div className="identity-scan__cta-wrap" style={{ opacity: ready(ctaOpacity, 1), y: ready(ctaY, 0) }}>
                <Link href="/about" className="identity-scan__cta">VIEW FULL STORY <ArrowRight size={18} aria-hidden="true" /></Link>
              </motion.div>
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}
