"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AppWindow, Settings, UsersRound, CalendarDays, MapPin, Building2, ChartNoAxesColumnIncreasing, ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import "./experience-record.css";

const highlights = [
  { icon: AppWindow, title: "Product Engineering", detail: "Web applications, dashboards, custom business systems." },
  { icon: Settings, title: "Automation & Internal Tools", detail: "Workflow automation, integrations, operational dashboards." },
  { icon: UsersRound, title: "Client Implementation", detail: "Shopify engineering, production fixes, changing requirements, and client delivery." },
];

export function ExperiencePreview() {
  const reducedMotion = useReducedMotion();
  const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
  return (
    <section className="work-record" id="experience" aria-labelledby="work-record-company">
      <PageContainer>
        <header className="work-record__eyebrow"><span>03 / EXPERIENCE</span><i aria-hidden="true" /><span>FROM LEARNING TO DOING</span></header>
        <motion.div className="work-record__composition"
          initial={reducedMotion ? false : "hidden"} whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.13 } } }}>
          <motion.div className="work-record__profile" variants={reveal} transition={{ duration: 0.65 }}>
            <span className="work-record__margin-note" aria-hidden="true">BUILD<br />SOLVE<br />REPEAT</span>
            <h2 id="work-record-company">ZOOTECH<span>X</span></h2>
            <p className="work-record__role">Full-Stack Developer Intern</p>
            <ul className="work-record__details">
              <li><CalendarDays size={21} aria-hidden="true" /><span><time dateTime="2025-12">DEC 2025</time> — <time dateTime="2026-07">JUL 2026</time></span></li>
              <li><MapPin size={21} aria-hidden="true" /><span>HYBRID</span></li>
              <li><Building2 size={21} aria-hidden="true" /><span>INDUSTRIAL TRAINING</span></li>
            </ul>
            <p className="work-record__summary">Worked across real client products, internal systems, automation, e-commerce, and production implementation.</p>
            <span className="work-record__note">Learning by doing.</span>
            <span className="work-record__small-note" aria-hidden="true">REAL PROBLEMS.<br />BETTER DEVELOPERS.</span>
          </motion.div>
          <div className="work-record__panels">
            {highlights.map(({ icon: Icon, title, detail }, index) => (
              <motion.div key={title} variants={reveal} transition={{ duration: 0.65 }}>
                <Link href="/about" className={`work-record__panel work-record__panel--${index + 1}`} aria-label={`${title} — more about my experience`}>
                  <span className="work-record__number">0{index + 1}</span>
                  <Icon className="work-record__icon" size={58} strokeWidth={1.15} aria-hidden="true" />
                  <div><h3>{title}</h3><p>{detail}</p></div>
                  <ArrowRight className="work-record__arrow" size={22} strokeWidth={1.2} aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div className="work-record__takeaway" variants={reveal} transition={{ duration: 0.65 }}>
            <div className="work-record__reflection">
              <div className="work-record__reflection-label"><ChartNoAxesColumnIncreasing size={29} strokeWidth={1.2} aria-hidden="true" /><span>WHAT CHANGED FOR ME</span><i aria-hidden="true" /></div>
              <p>This internship taught me how software behaves outside college projects — with real users, real requirements, deadlines, bugs, and business constraints.</p>
            </div>
            <div className="work-record__cta-wrap"><Link href="/about" className="work-record__cta">VIEW FULL EXPERIENCE <ArrowRight size={24} aria-hidden="true" /></Link></div>
          </motion.div>
        </motion.div>
        <div className="work-record__footer" aria-hidden="true"><span>EXPERIENCE BUILDS PERSPECTIVE</span><span>NEXT<br />04 / ABOUT</span></div>
      </PageContainer>
    </section>
  );
}
