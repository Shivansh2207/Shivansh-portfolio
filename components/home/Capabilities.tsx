"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Braces, Sparkles, Workflow, Radio, Zap, RotateCcw, Monitor, Server, Database, Rocket } from "lucide-react";
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
  const [phase, setPhase] = useState(0);
  const [running, setRunning] = useState(false);
  const reducedMotion = useReducedMotion();
  const selected = capabilities[active];
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      if (phase >= 4) setRunning(false);
      else setPhase(phase + 1);
    }, 380);
    return () => window.clearTimeout(timer);
  }, [phase, running]);

  function assemble() {
    if (reducedMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setRunning(false); setPhase(4); return; }
    setPhase(0);
    setRunning(true);
  }

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
                <button key={capability.title} type="button" className={`build-choice${active === index ? " is-active" : ""}`} style={{ "--channel": capability.color } as CSSProperties} aria-pressed={active === index} aria-controls="build-schematic" onClick={() => { setActive(index); setPhase(0); setRunning(false); }}>
                  <span className="build-choice__number" aria-hidden="true">0{index + 1}</span>
                  <span className="build-choice__content"><span className="build-choice__title">{capability.title}</span><span className="build-choice__description">{capability.description}</span></span>
                  <span className="build-choice__icon" aria-hidden="true"><ChoiceIcon size={24} /><ArrowUpRight size={23} /></span>
                </button>
              );
            })}
          </div>
          <div id="build-schematic" className={`comic-workbench${phase === 4 ? " is-built" : ""}`} style={{ "--channel": selected.color } as CSSProperties} role="region" aria-label={`${selected.title}: interactive system diagram`}>
            <div className="comic-workbench__top"><span>UNDER THE HOOD</span><span>INTERACTIVE / 0{active + 1}</span></div>
            <div className="comic-workbench__heading"><h3>A LITTLE CHAOS.<br /><span>A LOT OF POSSIBILITY.</span></h3><span className="comic-workbench__note">Some assembly<br />required ↙</span></div>
            <div className="comic-workbench__board" key={active}>
              <svg className="comic-workbench__wires" viewBox="0 0 600 300" preserveAspectRatio="none" aria-hidden="true">
                <path className={phase >= 2 ? "is-connected" : ""} d="M180 65 C290 0 315 140 435 80" />
                <path className={phase >= 3 ? "is-connected" : ""} d="M460 105 C570 230 70 80 160 230" />
                <path className={phase >= 4 ? "is-connected" : ""} d="M190 235 C270 295 340 160 450 245" />
              </svg>
              <ol className="comic-workbench__parts">
                {selected.nodes.map((node, index) => {
                  const PartIcon = active === 0 ? [Monitor, Server, Database, Rocket][index] : selected.icon;
                  return <li key={node} className={`comic-part comic-part--${index + 1}${phase > index ? " is-connected" : ""}`}><span className="comic-part__number">0{index + 1}</span><PartIcon size={26} strokeWidth={1.7} aria-hidden="true" /><strong>{node}</strong><p>{selected.details[index]}</p><span className="comic-part__check" aria-hidden="true">✓</span></li>;
                })}
              </ol>
              <span className="comic-workbench__spark" aria-hidden="true">+</span>
              <span className="comic-workbench__stamp" aria-hidden="true">IT’S ALIVE!</span>
            </div>
            <div className="comic-workbench__controls"><p role="status">{phase === 4 ? selected.caption : "Good pieces. Better together."}</p><button type="button" onClick={assemble} disabled={running}>{phase === 4 ? <RotateCcw size={19} aria-hidden="true" /> : <Zap size={20} aria-hidden="true" />}{running ? "CONNECTING…" : phase === 4 ? "BUILD AGAIN" : "BUILD IT!"}</button></div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
