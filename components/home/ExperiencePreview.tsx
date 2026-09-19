"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CodeXml, Workflow, ShoppingBag } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import "./experience-record.css";

const highlights = [
  { icon: CodeXml, title: "Products & platforms", detail: "Custom software and web applications." },
  { icon: Workflow, title: "Behind the scenes", detail: "Automation systems and internal dashboards." },
  { icon: ShoppingBag, title: "Into the real world", detail: "Shopify engineering and client implementation." },
];

export function ExperiencePreview() {
  const reducedMotion = useReducedMotion();
  return (
    <section className="work-record" id="experience" aria-labelledby="work-record-company">
      <PageContainer>
        <div className="work-record__eyebrow"><span>03 / EXPERIENCE</span><span>FROM LEARNING TO DOING</span></div>
        <motion.article className="work-record__sheet"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="work-record__main">
            <div className="work-record__company">
              <span className="work-record__label">THE WORK CHAPTER</span>
              <h2 id="work-record-company">ZOOTECH<span>X</span></h2>
              <span className="work-record__note">Learning by doing.</span>
            </div>
            <div className="work-record__intro">
              <span className="work-record__badge">INTERNSHIP</span>
              <h3>Full-Stack<br />Developer Intern<span>.</span></h3>
              <p>Worked across the stack—from web applications and business tools to automation, commerce, and client implementation.</p>
            </div>
          </div>
          <ul className="work-record__highlights">
            {highlights.map(({ icon: Icon, title, detail }, index) => (
              <li key={title}>
                <span className="work-record__number">0{index + 1}</span>
                <div><h4><Icon size={19} aria-hidden="true" />{title}</h4><p>{detail}</p></div>
              </li>
            ))}
          </ul>
          <div className="work-record__footer">
            <span>CODE. COLLABORATE. KEEP LEARNING.</span>
            <Link href="/about">More about my experience <ArrowUpRightIcon aria-hidden="true" size={19} /></Link>
          </div>
        </motion.article>
      </PageContainer>
    </section>
  );
}
