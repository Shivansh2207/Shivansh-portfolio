import type { Metadata } from "next";
import { ArrowUpRight, MapPin, MessageCircle, Code2, Users, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageContainer } from "@/components/layout/PageContainer";
import { contactEmail, githubProfile, linkedinProfile } from "@/data/contact";
import "@/components/contact/contact-page.css";

export const metadata: Metadata = { title: "Contact", description: "Talk to Shivansh Vyas about practical software, AI, automation, connected hardware, or a new collaboration." };

export default function ContactPage() {
  return <main className="hello-page"><PageContainer>
    <header className="hello-hero"><div><p className="hello-eyebrow">CONTACT / GOOD THINGS START WITH A CONVERSATION</p><h1>BIG IDEA?<br />SMALL QUESTION?<br /><span>LET’S TALK.</span></h1></div><div className="hello-hero__aside"><span className="hello-sticker">NO PERFECT BRIEF REQUIRED.</span><p>A product to build, a process to improve, or something you’re still figuring out—I’d love to hear the thinking behind it.</p><span className="hello-location"><MapPin size={17} aria-hidden="true" /> MUMBAI, INDIA · IST</span></div></header>
    <div className="hello-layout"><aside className="hello-notes"><p className="hello-eyebrow">BRING YOUR CURIOSITY.</p><h2>START WHERE<br /><span>YOU ARE.</span></h2><ul><li><Code2 size={24} aria-hidden="true" /><div><h3>Build something useful.</h3><p>Web, mobile, AI, automation, or connected hardware. Start with the problem.</p></div></li><li><Users size={24} aria-hidden="true" /><div><h3>Make something together.</h3><p>Collaborations, engineering opportunities, and ideas that need another perspective.</p></div></li><li><MessageCircle size={24} aria-hidden="true" /><div><h3>Just say hello.</h3><p>A question or an interesting conversation is a good starting point too.</p></div></li></ul><div className="hello-direct"><span>FIND ME HERE</span>{contactEmail && <a href={`mailto:${contactEmail}`}><Mail size={18} aria-hidden="true" /><span>{contactEmail}</span><ArrowUpRight size={17} aria-hidden="true" /></a>}<a href={linkedinProfile} target="_blank" rel="noreferrer"><Users size={18} aria-hidden="true" /><span>LinkedIn / Shivansh Vyas</span><ArrowUpRight size={17} aria-hidden="true" /></a><a href={githubProfile} target="_blank" rel="noreferrer"><Code2 size={18} aria-hidden="true" /><span>GitHub / Shivansh2207</span><ArrowUpRight size={17} aria-hidden="true" /></a></div><p className="hello-handwritten">A rough idea is enough. ↗</p></aside><ContactForm recipient={contactEmail} /></div>
    <div className="hello-bottom"><span>PROBLEM FIRST. POSSIBILITIES NEXT.</span><p>Let’s figure out what’s worth building.</p><ArrowUpRight size={35} aria-hidden="true" /></div>
  </PageContainer></main>;
}
