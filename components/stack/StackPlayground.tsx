import { Braces, Server, Database, ScanEye, Workflow, Cpu, Terminal, ArrowDownRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { stackGroups } from "@/data/stack";
import "./stack-playground.css";

const categories = [
  { icon: Braces, color: "#75d9f6", title: "The experience.", description: "Interfaces that make the system feel simple." },
  { icon: Server, color: "#ff758c", title: "The engine.", description: "Application logic, services, and the connections between them." },
  { icon: Database, color: "#bda7ff", title: "The memory.", description: "The right structure for the information that matters." },
  { icon: ScanEye, color: "#ffd65c", title: "The intelligence.", description: "Working with images, language, and useful automation." },
  { icon: Workflow, color: "#a2dcad", title: "The connections.", description: "Less repetition. More tools working together." },
  { icon: Cpu, color: "#72dfce", title: "Beyond the screen.", description: "Mobile experiences and software connected to the physical world." },
  { icon: Terminal, color: "#ffb27d", title: "The delivery.", description: "Version control, environments, and getting software out into the world." },
];

const roles: Record<string, string> = {
  React: "Component-based interfaces", "Next.js": "React application framework", TypeScript: "Typed application development", "Tailwind CSS": "Responsive interface styling", PWA: "Installable web experiences",
  "Node.js": "Server-side JavaScript", Express: "Routing and middleware", "REST APIs": "Application communication", Firebase: "Authentication and cloud services", Python: "Scripting, services, and automation",
  MongoDB: "Document-based data", PostgreSQL: "Relational data and SQL", Firestore: "Realtime cloud documents", Redis: "Caching and fast-access data",
  OpenCV: "Image processing", OCR: "Text recognition from images", "Computer Vision": "Understanding visual input", "LLM Workflows": "Language-model integrations",
  "Workflow Automation": "Triggers, checks, and actions", Webhooks: "Event-driven integrations", "API Integrations": "Connecting external services", Shopify: "Commerce engineering",
  "React Native": "Cross-platform mobile interfaces", "Raspberry Pi": "Connected hardware prototyping", Sensors: "Physical-world inputs", "Firebase Realtime": "Live data synchronization",
  Git: "Version control and collaboration", Docker: "Containerized environments", Vercel: "Web application deployment", Cloudflare: "Edge hosting and services", Linux: "Server and command-line workflows",
};

export function StackPlayground() {
  return <main className="stack-page">
    <PageContainer>
      <header className="stack-page__hero">
        <div><p className="stack-page__eyebrow">STACK / TOOLS & TECHNOLOGIES</p><h1>THE TOOLS<br />BEHIND <span>THE BUILD.</span></h1></div>
        <div className="stack-page__intro"><span className="stack-page__annotation">Different tools. One complete system.</span><p>My toolkit spans interfaces, backend systems, data, AI, and connected hardware. I choose the technology around the problem—not the other way around.</p><div className="stack-page__index"><span>07 AREAS OF FOCUS</span><ArrowDownRight size={23} aria-hidden="true" /></div></div>
      </header>

      <div className="stack-atlas">
        {stackGroups.map((group,index)=>{const category=categories[index];const Icon=category.icon;return <section key={group.title} className={`stack-domain stack-domain--${index+1}`} style={{"--domain-color":category.color} as React.CSSProperties} aria-labelledby={`stack-domain-${index}`}>
          <div className="stack-domain__top"><span className="stack-domain__number">0{index+1}</span><span className="stack-domain__category">{group.title}</span><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></div>
          <div className="stack-domain__intro"><h2 id={`stack-domain-${index}`}>{category.title}</h2><p>{category.description}</p></div>
          <ul className="stack-domain__tools">{group.items.map(item=><li key={item}><span className="stack-domain__tool-name">{item === "PWA" ? "Progressive Web Apps" : item === "OCR" ? "OCR / Text Recognition" : item}</span><span className="stack-domain__tool-role">{roles[item]}</span></li>)}</ul>
        </section>})}
      </div>

      <div className="stack-page__closing"><span className="stack-page__closing-mark" aria-hidden="true">+</span><p><strong>Always learning. Always connecting the dots.</strong><span>A growing toolkit, built through practical work and curiosity.</span></p><span className="stack-page__closing-note">THE NEXT PROBLEM<br />TEACHES THE NEXT SKILL.</span></div>
    </PageContainer>
  </main>;
}
