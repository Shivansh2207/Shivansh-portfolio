"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PageContainer } from "./PageContainer";
import "./footer-finale.css";

export function Footer() {
  return (
    <footer className="footer-finale">
      <PageContainer>
        <div className="footer-finale__top"><p>END OF THE SCROLL.<br /><span>NOT THE IDEAS.</span></p><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ArrowUp size={30} aria-hidden="true" /><span>ONE MORE<br />ROUND?</span></button></div>
        <div className="footer-finale__stage"><span className="footer-finale__edition" aria-hidden="true">IDEAS DON'T CLOCK OUT.</span><Link href="/" className="footer-finale__signature" aria-label="Shivansh Vyas — home">SHIVANSH<span>VYAS.</span><span className="footer-finale__stamp" aria-hidden="true">STILL<br />BUILDING ↗</span></Link><div className="footer-finale__afterword"><span>CODE. BREAK. LEARN. REPEAT.</span><span>SEE YOU IN THE NEXT BUILD.</span></div></div>
        <div className="footer-finale__bottom"><span>© {new Date().getFullYear()} SHIVANSH VYAS</span><nav aria-label="Footer navigation"><Link href="/projects">PROJECTS</Link><Link href="/about">MY STORY</Link><a href="https://github.com/Shivansh2207" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} aria-hidden="true" /></a><Link href="/contact">SAY HELLO <ArrowUpRight size={14} aria-hidden="true" /></Link></nav><span>MUMBAI, INDIA / BUILT WITH INTENT</span></div>
      </PageContainer>
    </footer>
  );
}
