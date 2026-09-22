"use client";

import { useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Braces, Sparkles, Workflow, Radio } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import "./capabilities.css";
import "./build-pipeline.css";

const capabilities = [
  {
    title: "Full-Stack Products",
    description:
      "Interfaces, APIs, data models, and deployment shaped into one dependable product.",
    icon: Braces, color: "#6d9bff", label: "PRODUCT ENGINE",
    nodes: ["Interface", "API layer", "Database", "Deployment"],
    details: ["Make it intuitive.", "Connect the logic.", "Give data a home.", "Put it in people's hands."],
    center: "BUILD", caption: "Every layer. One product.",
  },
  {
    title: "AI and Automation",
    description:
      "Useful intelligence and workflow automation designed around a real operational need.",
    icon: Sparkles, color: "#ff5168", label: "AUTOMATION ENGINE",
    nodes: ["Input", "Intelligence", "Action", "Feedback"],
    details: ["Start with a real signal.", "Find what matters.", "Make the next move.", "Learn from the result."],
    center: "THINK", caption: "Less repetition. More possibility.",
  },
  {
    title: "Business Systems",
    description:
      "Practical software that brings structure, visibility, and control to everyday work.",
    icon: Workflow, color: "#ffd23f", label: "OPERATIONS ENGINE",
    nodes: ["People", "Processes", "Records", "Insights"],
    details: ["Understand the work.", "Bring order to the everyday.", "Keep one source of truth.", "Make better decisions."],
    center: "SOLVE", caption: "Real workflows. Built to work.",
  },
  {
    title: "Connected Hardware and IoT",
    description:
      "Sensors, devices, cloud services, and applications working as one connected system.",
    icon: Radio, color: "#00e5ff", label: "CONNECTED ENGINE",
    nodes: ["Sensors", "Devices", "Cloud", "Application"],
    details: ["Read the physical world.", "Process at the edge.", "Connect the moving parts.", "Make it useful to someone."],
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
          <div id="build-schematic" className="build-pipeline" style={{ "--channel": selected.color } as CSSProperties} role="region" aria-label={`${selected.title}: under the hood`}>
            <div className="build-pipeline__kicker"><span>UNDER THE HOOD</span><span>0{active + 1} / 04</span></div>
            <motion.div key={active} className="build-pipeline__content" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
              <div className="build-pipeline__title"><h3>{selected.center}.<span>{["EVERY LAYER COUNTS.", "LESS BUSYWORK. MORE POSSIBILITY.", "ORDER FROM EVERYDAY CHAOS.", "BEYOND THE SCREEN."][active]}</span></h3><Icon size={38} strokeWidth={1.3} aria-hidden="true" /></div>
              <ol className="build-pipeline__steps">
                {selected.nodes.map((node, index) => <motion.li key={node} initial={reducedMotion ? false : { opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .45, delay: index * .1 }} style={{ "--step": index } as CSSProperties}><span className="build-pipeline__number">0{index + 1}</span><strong>{node}</strong><span className="build-pipeline__detail">{selected.details[index]}</span><ArrowUpRight size={16} aria-hidden="true" /></motion.li>)}
              </ol>
              <div className="build-pipeline__result"><span className="build-pipeline__sticker">IT ALL CONNECTS.</span><p>{selected.caption}</p><ArrowRight size={21} aria-hidden="true" /></div>
            </motion.div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
