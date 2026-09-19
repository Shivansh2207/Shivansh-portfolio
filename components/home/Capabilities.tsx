"use client";

import { useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Braces, Sparkles, Workflow, Radio, Layers3 } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import "./capabilities.css";

const capabilities = [
  {
    title: "Full-Stack Products",
    description:
      "Interfaces, APIs, data models, and deployment shaped into one dependable product.",
    icon: Braces, color: "#6d9bff", label: "PRODUCT ENGINE",
    nodes: ["Interface", "API layer", "Database", "Deployment"],
    center: "BUILD", caption: "Every layer. One product.",
  },
  {
    title: "AI and Automation",
    description:
      "Useful intelligence and workflow automation designed around a real operational need.",
    icon: Sparkles, color: "#ff5168", label: "AUTOMATION ENGINE",
    nodes: ["Input", "Intelligence", "Action", "Feedback"],
    center: "THINK", caption: "Less repetition. More possibility.",
  },
  {
    title: "Business Systems",
    description:
      "Practical software that brings structure, visibility, and control to everyday work.",
    icon: Workflow, color: "#ffd23f", label: "OPERATIONS ENGINE",
    nodes: ["People", "Processes", "Records", "Insights"],
    center: "SOLVE", caption: "Real workflows. Built to work.",
  },
  {
    title: "Connected Hardware and IoT",
    description:
      "Sensors, devices, cloud services, and applications working as one connected system.",
    icon: Radio, color: "#00e5ff", label: "CONNECTED ENGINE",
    nodes: ["Sensors", "Devices", "Cloud", "Application"],
    center: "LINK", caption: "Physical world. Digital possibilities.",
  },
] as const;

export function Capabilities() {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const selected = capabilities[active];
  const Icon = selected.icon;

  return (
    <section className="build-lab" aria-labelledby="build-lab-title" id="what-i-build">
      <PageContainer>
        <div className="build-lab__eyebrow">
          <span>02 / WHAT I BUILD</span>
          <span className="build-lab__edition">IDEAS IN. REAL THINGS OUT.</span>
        </div>
        <motion.header className="build-lab__heading" initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }}>
          <h2 id="build-lab-title">FROM ROUGH IDEA<br />TO <span>WORKING SYSTEM.</span></h2>
          <span className="build-lab__sticker">Let’s make it real.</span>
        </motion.header>
        <motion.div className="build-lab__workspace" initial={reducedMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <div className="build-lab__choices" aria-label="Explore what I build">
            {capabilities.map((capability, index) => {
              const ChoiceIcon = capability.icon;
              return (
                <button key={capability.title} type="button" className={`build-choice${active === index ? " is-active" : ""}`} style={{ "--channel": capability.color } as CSSProperties} aria-pressed={active === index} aria-controls="build-schematic" onClick={() => setActive(index)}>
                  <span className="build-choice__number" aria-hidden="true">0{index + 1}</span>
                  <span className="build-choice__content"><span className="build-choice__title">{capability.title}</span><span className="build-choice__description">{capability.description}</span></span>
                  <span className="build-choice__icon" aria-hidden="true"><ChoiceIcon size={24} /><ArrowUpRight size={23} /></span>
                </button>
              );
            })}
          </div>
          <div id="build-schematic" className="build-schematic" style={{ "--channel": selected.color } as CSSProperties} role="region" aria-label={`${selected.title} system diagram`}>
            <div className="build-schematic__top"><span><Layers3 size={16} aria-hidden="true" /> THE BUILD LAB</span><span>MODULE / 0{active + 1}</span></div>
            <motion.div key={active} className="build-schematic__body" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <p className="build-schematic__label">{selected.label}</p>
              <div className="build-schematic__diagram">
                <svg className="build-schematic__wires" viewBox="0 0 600 360" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M100 65H220L300 180L380 65H500 M100 295H220L300 180L380 295H500" />
                  <path className="build-schematic__pulse" d="M100 65H220L300 180L380 295H500 M500 65H380L300 180L220 295H100" />
                </svg>
                <div className="build-schematic__orbit" aria-hidden="true" />
                <div className="build-schematic__core"><Icon size={43} strokeWidth={1.4} aria-hidden="true" /><strong>{selected.center}</strong></div>
                {selected.nodes.map((node, index) => <div className={`build-schematic__node build-schematic__node--${index + 1}`} key={node}><span>0{index + 1}</span><strong>{node}</strong></div>)}
              </div>
              <div className="build-schematic__caption"><span aria-hidden="true">{"//"}</span><p>{selected.caption}</p></div>
            </motion.div>
            <div className="build-schematic__bottom"><span>ROUGH IDEA</span><span className="build-schematic__track" aria-hidden="true" /><ArrowRight size={17} aria-hidden="true" /><span>WORKING SYSTEM</span></div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
