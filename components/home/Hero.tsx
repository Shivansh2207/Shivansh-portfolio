"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  Cpu,
  MessageSquareText,
  RadioTower,
} from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ComicLabel } from "./ComicLabel";
import { HeroBackground } from "./HeroBackground";
import { SkillChip } from "./SkillChip";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const enter = reducedMotion ? { duration: 0.01 } : { duration: 0.65, ease };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroBackground />
      <PageContainer className="hero__inner">
        <div className="hero__content">
          <motion.div
            className="hero__labels"
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              { text: "CODE.", className: "label-code" },
              { text: "AUTOMATE.", className: "label-automate" },
              { text: "ELEVATE.", className: "label-elevate" },
            ].map((label) => (
              <motion.span
                key={label.text}
                variants={{
                  hidden: { opacity: 0, scale: 0.72, y: -10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: enter },
                }}
              >
                <ComicLabel className={label.className}>{label.text}</ComicLabel>
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            id="hero-title"
            className="hero__title"
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.16 } },
            }}
          >
            {[
              { text: "BUILDING", accent: false },
              { text: "THINGS THAT", accent: false },
              { text: "ACTUALLY WORK", accent: true },
            ].map((line) => (
              <motion.span
                key={line.text}
                className={line.accent ? "accent" : undefined}
                variants={{
                  hidden: { opacity: 0, x: -28 },
                  visible: { opacity: 1, x: 0, transition: enter },
                }}
              >
                {line.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="hero__intro"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...enter, delay: 0.45 }}
          >
            I’m Shivansh Vyas, a full-stack developer focused on AI,
            automation, IoT, and practical business systems. I design
            intelligent products, ship clean software, and turn ambitious ideas
            into real-world solutions.
          </motion.p>

          <motion.div
            className="hero__chips"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...enter, delay: 0.55 }}
          >
            <SkillChip icon={Code2} accent="blue">
              FULL-STACK
            </SkillChip>
            <SkillChip icon={Bot} accent="red">
              AI + AUTOMATION
            </SkillChip>
            <SkillChip icon={RadioTower} accent="cyan">
              IOT SYSTEMS
            </SkillChip>
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...enter, delay: 0.64 }}
          >
            <Link href="/projects" className="hero-cta hero-cta--primary">
              <span>VIEW PROJECTS</span>
              <ArrowRight aria-hidden="true" size={19} />
            </Link>
            <Link href="/contact" className="hero-cta hero-cta--secondary">
              <span>LET’S BUILD SOMETHING</span>
              <MessageSquareText aria-hidden="true" size={17} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero__character"
          initial={reducedMotion ? false : { opacity: 0, x: 48, y: 36 }}
          animate={
            reducedMotion
              ? { opacity: 1 }
              : { opacity: 1, x: 0, y: [0, -7, 0] }
          }
          transition={
            reducedMotion
              ? { duration: 0.01 }
              : {
                  opacity: { duration: 0.75, delay: 0.2, ease },
                  x: { duration: 0.75, delay: 0.2, ease },
                  y: {
                    duration: 5.5,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
        >
          <div className="hero__character-burst" aria-hidden="true" />
          <div className="hero__character-frame">
            {/* The local worker does not provide the image optimizer asset binding. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero/hero-character.png"
              alt="Comic-style illustration of Shivansh Vyas"
              width={1024}
              height={1536}
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero__character-tag" aria-hidden="true">
            <Cpu size={15} />
            SYSTEMS / ONLINE
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
