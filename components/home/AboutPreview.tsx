"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Braces, BriefcaseBusiness, ScanEye, CircuitBoard } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import "./about-journey.css";

const chapters = [
  { label: "THE FOUNDATION", place: "SBMP", title: "Started with code.", detail: "Diploma in Computer Engineering. Programming, databases, and the first ideas that became real applications.", unlock: "Software foundations", icon: Braces },
  { label: "THE REAL-WORLD LEVEL", place: "ZOOTECHX", title: "Built beyond the classroom.", detail: "Full-stack internship. Real clients, changing requirements, production bugs—and products people actually use.", unlock: "End-to-end delivery", icon: BriefcaseBusiness },
  { label: "THE CROSSOVER", place: "ASSIST VISION", title: "Gave software a sixth sense.", detail: "Smart glasses combining computer vision, sensors, OCR, and audio to help visually impaired users.", unlock: "AI meets the physical world", icon: ScanEye },
  { label: "THE NEXT CHAPTER", place: "DJSCE", title: "Now connecting the dots.", detail: "B.Tech in Electronics & Telecommunication. Adding electronics, embedded hardware, and signals to my software toolkit.", unlock: "A wider engineering lens", icon: CircuitBoard },
];

export function AboutPreview() {
  const reduced = useReducedMotion();
  return (
    <section className="about-journey" id="about" aria-labelledby="about-journey-title">
      <PageContainer>
        <div className="journey-eyebrow"><span>04 / ABOUT</span><span>NOT A STRAIGHT LINE. A CONNECTED ONE.</span></div>
        <header className="journey-heading">
          <div><p className="journey-preface">THE SHORT VERSION</p><h2 id="about-journey-title">ONE CURIOUS MIND.<br /><span>MORE THAN ONE LANE.</span></h2></div>
          <div className="journey-intro"><span className="journey-sticker">Plot twist: it all connects.</span><p>I’m Shivansh. I started with software.<br /> Now I’m exploring everything it can connect to.</p></div>
        </header>
        <ol className="journey-map" aria-label="My engineering journey">
          {chapters.map(({ label, place, title, detail, unlock, icon: Icon }, i) => (
            <motion.li className={`journey-stop journey-stop--${i + 1}`} key={place}
              initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .25 }} transition={{ duration: .65, delay: i * .1 }}>
              <div className="journey-node"><span>0{i + 1}</span><Icon size={27} strokeWidth={1.5} aria-hidden="true" /></div>
              <div className="journey-chapter"><span>{label}</span><h3>{place}</h3><h4>{title}</h4><p>{detail}</p><div className="journey-unlock"><span>+ UNLOCKED</span><strong>{unlock}</strong></div></div>
            </motion.li>
          ))}
        </ol>
        <div className="journey-takeaway">
          <div><span className="journey-takeaway__label">THE COMMON THREAD</span><p>Understand deeply. <strong>Build practically.</strong><br />Keep going until it works.</p></div>
          <div className="journey-next"><span>STILL LEARNING. STILL BUILDING.</span><p>Projects, hackathons, and a healthy habit<br />of asking “what if?”</p></div>
          <Link href="/about" className="journey-story">READ MY STORY <ArrowUpRight size={23} aria-hidden="true" /></Link>
        </div>
      </PageContainer>
    </section>
  );
}
