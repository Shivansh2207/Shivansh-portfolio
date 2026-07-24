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
    if (progress >= 0.88) setHasCompleted((current) => current || true);
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

  const labelOpacity = useTransform(scrollYProgress, [0.02, 0.14], [0, 1]);
  const bootOpacity = useTransform(scrollYProgress, [0.1, 0.22], [0, 1]);
  const scanOpacity = useTransform(scrollYProgress, [0.22, 0.34, 0.44], [0, 1, 0]);
  const scanX = useTransform(scrollYProgress, [0.22, 0.4], ["-105%", "105%"]);
  const statementOpacity = useTransform(scrollYProgress, [0.37, 0.52], [0, 1]);
  const statementY = useTransform(scrollYProgress, [0.37, 0.52], [28, 0]);
  const bioOpacity = useTransform(scrollYProgress, [0.52, 0.7], [0, 1]);
  const bioY = useTransform(scrollYProgress, [0.52, 0.7], [24, 0]);
  const metadataOpacity = useTransform(scrollYProgress, [0.64, 0.8], [0, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.7, 0.87], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0.7, 0.87], [24, 0]);

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
              <motion.div className="identity-scan__statement" style={{ opacity: ready(statementOpacity, 1), y: ready(statementY, 0) }}>
                <p className="identity-scan__profile-label">PROFILE / SV-22</p>
                <h2 id="identity-title">
                  <span>CURIOUS MIND.</span>
                  <span className="is-red">BUILDER ENERGY.</span>
                  <span>SLIGHTLY TOO<br className="identity-scan__desktop-break" /> MANY IDEAS.</span>
                </h2>
                <span className="identity-scan__note">THAT&apos;S THE FUN PART.</span>
              </motion.div>

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
              <motion.div className="identity-scan__bio" style={{ opacity: ready(bioOpacity, 1), y: ready(bioY, 0) }}>
                <p>I&apos;m <em>Shivansh Vyas</em>, a computer engineering student and full-stack developer who enjoys turning ambitious ideas into practical, working products.</p>
                <p>I build across software, AI, automation, business systems and connected hardware — usually learning by creating, breaking, debugging and improving.</p>
              </motion.div>

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

              <motion.div className="identity-scan__cta-wrap" style={{ opacity: ready(cardOpacity, 1), y: ready(cardY, 0) }}>
                <Link href="/about" className="identity-scan__cta">VIEW FULL STORY <ArrowRight size={18} aria-hidden="true" /></Link>
              </motion.div>
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}
