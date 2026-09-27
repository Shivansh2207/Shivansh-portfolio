import Link from "next/link";
import { ArrowDown, ArrowUpRight, Braces, Cpu, GraduationCap, MapPin, Wrench, Lightbulb, Search, Hammer, RefreshCw } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import "./about-story.css";

const chapters = [
  { id: "foundation", label: "The foundation", title: "It started with code.\nThen came the curiosity.", place: "SBMP", qualification: "Diploma in Computer Engineering", icon: GraduationCap,
    paragraphs: ["My journey started with a Diploma in Computer Engineering at SBMP. That’s where I built my foundation in programming, software development, databases, web technologies, AI, and computer systems.", "Somewhere along the way, completing the assignment stopped being the most interesting part. I wanted to know what happened next: could this become a real application? Could someone use it? What would break if they did?", "That curiosity led me into web and mobile applications, automation, AI, and hardware-based systems. Each project gave me another reason to go beyond what I already knew."],
    note: "The assignment ends. The experimenting doesn’t.", takeaway: "Programming → applications → complete systems" },
  { id: "experience", label: "The real-world classroom", title: "Real users. Real deadlines.\nA different kind of learning.", place: "ZOOTECHX", qualification: "Full-Stack Developer Intern · Dec 2025 – Jul 2026 · Hybrid", icon: Wrench,
    paragraphs: ["My Full-Stack Developer Internship at ZootechX put me in a startup environment, working on real client and internal projects. I contributed across custom software, web applications, automation systems, Shopify engineering, internal dashboards, and client implementation workflows.", "The work gave me hands-on experience with React, Node.js, Firebase, MongoDB, React Native, APIs, authentication, databases, cloud services, and deployment.", "But the bigger lesson wasn’t a framework. It was learning to understand requirements, handle changing client needs, debug production problems, collaborate with a team, and take an idea all the way to something people could actually use."],
    note: "The real world doesn’t come with a test case.", takeaway: "Requirements → teamwork → debugging → delivery" },
  { id: "beyond-software", label: "Connecting the dots", title: "The interesting problems\ndon’t stop at the screen.", place: "REAL-WORLD DEVELOPMENT", qualification: "Software + AI + automation + connected hardware", icon: Braces,
    paragraphs: ["Alongside software development, I began exploring AI, computer vision, automation, and IoT. I’m drawn to problems where different technologies have to work together—not just look good in separate demos.", "Assist Vision is one example: a smart-glasses system designed to assist visually impaired users. It brings together a Raspberry Pi, a camera, obstacle-detection sensors, OCR, object detection, cloud connectivity, and audio feedback.", "Work like this pushed me to think beyond the application itself. How does information move from a sensor to a useful response? How do timing, connectivity, and the physical environment affect the experience? Those questions made electronics and complete-system thinking a much bigger part of my interests."],
    note: "Software, meet the physical world.", takeaway: "Sense → understand → communicate → help" },
  { id: "next-chapter", label: "The next layer", title: "A software foundation.\nA wider engineering lens.", place: "D. J. SANGHVI COLLEGE OF ENGINEERING", qualification: "B.Tech in Electronics and Telecommunication Engineering", icon: Cpu,
    paragraphs: ["After completing my diploma, I joined D. J. Sanghvi College of Engineering (DJSCE) for a B.Tech in Electronics and Telecommunication Engineering.", "Moving into EXTC is expanding how I understand the technology underneath our applications: electronics, digital systems, communication systems, embedded hardware, and signals. It adds a new layer to the software background I already have.", "Today, I’m focused on becoming a stronger engineer by bringing those perspectives together. I keep learning through personal projects, hackathons, experiments, and real-world applications—designing, building, testing, and improving as I go."],
    note: "Not starting over. Adding another dimension.", takeaway: "Software foundations + electronics + systems thinking" },
];

const methods = [
  { icon: Search, name: "Understand", text: "Get close to the problem, the people, and the actual workflow before choosing the tools." },
  { icon: Hammer, name: "Build", text: "Connect the interface, logic, data, and hardware into a useful end-to-end foundation." },
  { icon: Wrench, name: "Test", text: "Look for the awkward cases. Debug what breaks. Make the experience understandable." },
  { icon: RefreshCw, name: "Improve", text: "Ship, learn from what happens, and keep refining until it works in practice." },
];

export function AboutStory() {
  return <main className="about-story"><PageContainer>
    <header className="story-hero">
      <div><p className="story-eyebrow">ABOUT / THE PERSON BEHIND THE BUILD</p><h1>SHIVANSH<br /><span>VYAS.</span><span className="story-hello">Hey, that’s me. ↙</span></h1><p className="story-hero__lead">A curious mind.<br /><strong>A builder by habit.</strong></p></div>
      <div className="story-hero__intro"><span className="story-sticker">STILL LEARNING. ALWAYS BUILDING.</span><p>I’m Shivansh, a developer and engineering student who enjoys turning rough ideas into complete, working products.</p><p>I work across software, AI, automation, and connected hardware. What interests me most is how all those pieces come together to solve something real.</p><div className="story-quick-facts"><span><MapPin size={17} aria-hidden="true" /> Mumbai, India</span><span><Cpu size={17} aria-hidden="true" /> Software × Electronics</span></div><a className="story-text-link" href="#my-story">HERE’S HOW I GOT HERE <ArrowDown size={18} aria-hidden="true" /></a></div>
    </header>

    <nav className="story-chapter-nav" aria-label="About page chapters">{chapters.map((chapter,index)=><a href={`#${chapter.id}`} key={chapter.id}><span>0{index+1}</span>{["SBMP","ZootechX","Real-world builds","DJSCE"][index]}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</nav>
    <div className="story-book" id="my-story">
      <aside className="story-book__margin"><p className="story-eyebrow">01 / FIELD NOTES</p><h2>NOT A<br />STRAIGHT<br /><span>LINE.</span></h2><p>One thing learned.<br />Another door opened.</p><span aria-hidden="true">↓</span></aside>
      <div className="story-chapters">{chapters.map((chapter,index)=>{const Icon=chapter.icon;return <section className="story-chapter" id={chapter.id} key={chapter.id} aria-labelledby={`${chapter.id}-title`}>
        <div className="story-chapter__meta"><span className="story-chapter__number">0{index+1}</span><span>{chapter.label}</span><Icon size={23} aria-hidden="true" /></div>
        <h2 id={`${chapter.id}-title`}>{chapter.title.split("\n").map((line,i)=><span key={line}>{line}{i===0 && <br />}</span>)}</h2>
        <div className="story-chapter__place"><strong>{chapter.place}</strong><span>{chapter.qualification}</span></div>
        <div className="story-chapter__copy">{chapter.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div>
        <div className="story-chapter__foot"><span>{chapter.takeaway}</span><span className="story-chapter__note">{chapter.note}</span></div>
      </section>})}</div>
    </div>

    <section className="story-now" aria-labelledby="story-now-title"><div><p className="story-eyebrow">02 / HOW I THINK</p><h2 id="story-now-title">NOT MARRIED<br />TO <span>ONE TOOL.</span></h2><span className="story-sticker">THE PROBLEM GETS THE FIRST WORD.</span></div><div className="story-now__copy"><p>I don’t particularly like limiting myself to a single technology or job title. Depending on the project, I work across frontend, backend, mobile development, databases, AI, automation, cloud services, IoT, and connected hardware.</p><p>I think about the whole system: what the user needs, how the interface talks to the backend, where the data lives, what automation can improve, and how software communicates with hardware when the problem calls for it.</p><p className="story-now__belief">If making it work means learning something new,<br /><strong>I’d rather learn it and build it.</strong></p><Link className="story-text-link" href="/stack">EXPLORE MY TOOLKIT <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>

    <section className="story-method" aria-labelledby="story-method-title"><div className="story-section-heading"><div><p className="story-eyebrow">03 / MY WORKING LOOP</p><h2 id="story-method-title">CURIOUS → PRACTICAL → BETTER.</h2></div><Lightbulb size={34} aria-hidden="true" /></div><ol>{methods.map((method,index)=>{const Icon=method.icon;return <li key={method.name}><div><span>0{index+1}</span><Icon size={23} aria-hidden="true" /></div><h3>{method.name}</h3><p>{method.text}</p></li>})}</ol></section>

    <section className="story-personal" aria-labelledby="story-personal-title"><div><p className="story-eyebrow">04 / OFF THE SYLLABUS</p><h2 id="story-personal-title">THAT’S THE<br /><span>FUN PART.</span></h2></div><div><p>Outside academics, I keep coming back to personal projects, hackathons, and experiments. They’re a chance to try unfamiliar ideas, break assumptions, and improve how I design and build.</p><p>I’m still figuring things out—and I enjoy that. Every finished project leaves me with a better question for the next one.</p><div className="story-personal__tags"><span>PERSONAL PROJECTS</span><span>HACKATHONS</span><span>HANDS-ON EXPERIMENTS</span></div></div></section>

    <section className="story-finale" aria-labelledby="story-finale-title"><span className="story-eyebrow">THE THREAD THROUGH IT ALL</span><h2 id="story-finale-title">“Understand the problem deeply,<br />build something practical,<br /><em>and keep improving it until it actually works.”</em></h2><div className="story-finale__bottom"><span>— SHIVANSH VYAS</span><div><Link href="/projects">SEE WHAT I BUILD <ArrowUpRight size={18} aria-hidden="true" /></Link><Link href="/contact">LET’S TALK <ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></section>
  </PageContainer></main>;
}
