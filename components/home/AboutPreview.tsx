"use client";

import { useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Braces, BriefcaseBusiness, CircuitBoard, Workflow } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import "./about-journey.css";

const stops = [
  { name: "SBMP", tag: "THE STARTING POINT", short: "Computer Engineering", title: ["FIRST,", "THE FOUNDATIONS."], text: "A Diploma in Computer Engineering gave me the building blocks: programming, databases, web technologies, and computer systems.", extra: "Then assignments became experiments. Experiments became applications. I wanted to see how far an idea could go.", lesson: "Curiosity became a habit.", skills: ["Programming", "Databases", "Web development"], color: "#00e5ff", icon: Braces },
  { name: "ZOOTECHX", tag: "OUTSIDE THE CLASSROOM", short: "Full-Stack Internship", title: ["REAL CLIENTS.", "REAL CONSTRAINTS."], text: "At ZootechX, I worked on client products and internal tools—from interfaces and APIs to authentication, databases, and deployment.", extra: "Changing requirements, production bugs, and team delivery taught me what building usable software really takes.", lesson: "Working code is only the beginning.", skills: ["Client requirements", "Full-stack delivery", "Production debugging"], color: "#ff475e", icon: BriefcaseBusiness },
  { name: "REAL-WORLD BUILDS", tag: "CONNECTING THE PIECES", short: "From idea to working system", title: ["NOT JUST DEMOS.", "COMPLETE SYSTEMS."], text: "Web and mobile apps. Business workflows. AI, automation, and connected hardware. Different tools, one goal: solve a practical problem.", extra: "Personal projects, hackathons, and real-world applications push me to connect the whole system—not just make one part look good.", lesson: "Learn what the problem needs.", skills: ["Software + AI", "Automation", "IoT + hardware"], color: "#ffd23f", icon: Workflow },
  { name: "DJSCE", tag: "THE CHAPTER I’M IN", short: "Electronics & Telecommunication", title: ["BEYOND SOFTWARE.", "INTO THE SYSTEM."], text: "Now pursuing a B.Tech in Electronics and Telecommunication Engineering at D. J. Sanghvi College of Engineering.", extra: "Electronics, embedded hardware, signals, and communication systems are adding a new dimension to my software background.", lesson: "More connections. More possibilities.", skills: ["Electronics", "Embedded systems", "Communication"], color: "#00e5ff", icon: CircuitBoard },
];

export function AboutPreview() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const storyRef = useRef<HTMLDivElement>(null);
  const selectStop = (index: number) => {
    setActive(index);
    if (window.matchMedia("(max-width: 760px)").matches) {
      storyRef.current?.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" });
    }
  };
  const stop = stops[active];
  return (
    <section className="route-journey" id="about" aria-labelledby="journey-title" style={{ "--stop-color": stop.color } as CSSProperties}>
      <PageContainer>
        <div className="route-eyebrow"><span>04 / THE JOURNEY</span><span>IN PROGRESS. ON PURPOSE.</span></div>
        <header className="route-heading"><h2 id="journey-title">NO STRAIGHT LINES.<br /><span>JUST FORWARD.</span></h2><p>From learning the rules<br /> to building my own way.<span className="route-sticker">Take the scenic route.</span></p></header>
        <div className="route-explorer">
          <div className="route-map">
            <p className="route-map__hint">PICK A STOP. FOLLOW THE STORY. <ArrowRight size={16} aria-hidden="true" /></p>
            <svg className="route-map__line" viewBox="0 0 700 540" preserveAspectRatio="none" aria-hidden="true">
              <path className="route-map__ghost" d="M85 76 H470 Q590 76 590 167 Q590 210 470 210 H195 Q85 210 85 305 Q85 370 205 370 H495 Q590 370 590 452 H650" />
              <motion.path d="M85 76 H470 Q590 76 590 167 Q590 210 470 210 H195 Q85 210 85 305 Q85 370 205 370 H495 Q590 370 590 452 H650" initial={reduced ? false : {pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true,amount:.25}} transition={{duration:1.8,ease:"easeInOut"}} />
            </svg>
            <div className="route-map__stops" role="group" aria-label="Explore journey chapters">
              {stops.map(({name, short, color, icon: Icon}, i) => <button type="button" key={name} className={`route-stop route-stop--${i+1}${active === i ? " is-selected" : ""}`} style={{"--node-color":color} as CSSProperties} aria-pressed={active === i} aria-controls="journey-story-panel" onClick={()=>selectStop(i)}>
                <span className="route-stop__pin"><Icon size={24} aria-hidden="true"/><small>0{i+1}</small></span><span className="route-stop__text"><strong>{name}</strong><span>{short}</span>{i===3 && <em>YOU ARE HERE ↗</em>}</span>
              </button>)}
            </div>
            <span className="route-map__scribble" aria-hidden="true">A few detours.<br />A lot of learning.</span>
          </div>
          <div ref={storyRef} className="route-story" id="journey-story-panel" role="region" aria-label="Selected journey chapter" aria-live="polite" style={{scrollMarginTop:90}}>
            <div className="route-story__top"><span>CHAPTER 0{active+1} / 04</span><span>{stop.tag}</span></div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} className="route-story__body" initial={reduced ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduced?0:-8}} transition={{duration:.2}}>
                <span className="route-story__number" aria-hidden="true">0{active+1}</span>
                <h3>{stop.title[0]}<br /><span>{stop.title[1]}</span></h3>
                <p>{stop.text}</p><p>{stop.extra}</p>
                <ul className="route-story__skills" aria-label="What I explored">{stop.skills.map(skill=><li key={skill}>{skill}</li>)}</ul>
                <p className="route-story__lesson"><span>TAKEAWAY /</span>{stop.lesson}</p>
              </motion.div>
            </AnimatePresence>
            <div className="route-controls"><span>THERE’S ALWAYS A NEXT CHAPTER.</span><button type="button" onClick={()=>setActive(v=>Math.max(0,v-1))} disabled={active===0} aria-label="Previous journey chapter"><ArrowLeft size={20}/></button><button type="button" onClick={()=>setActive(v=>Math.min(3,v+1))} disabled={active===3} aria-label="Next journey chapter"><ArrowRight size={20}/></button></div>
          </div>
        </div>
        <footer className="route-footer"><p><span>THE THREAD THROUGH IT ALL</span>Understand. Build. Break. Improve. <strong>Keep going.</strong></p><Link href="/about">READ MY FULL STORY <ArrowUpRight size={22} aria-hidden="true" /></Link></footer>
      </PageContainer>
    </section>
  );
}
