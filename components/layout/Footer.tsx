"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PageContainer } from "./PageContainer";
import "./footer-finale.css";

export function Footer() {
  return (
    <footer className="footer-finale">
      <PageContainer>
        <div className="footer-finale__top"><p>BUILT WITH CURIOSITY.<br /><span>AND A FEW TOO MANY IDEAS.</span></p><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>BACK TO THE TOP <ArrowUp size={20} aria-hidden="true" /></button></div>
        <Link href="/" className="footer-finale__signature" aria-label="Shivansh Vyas — home">SHIVANSH<span>VYAS.</span><span className="footer-finale__stamp" aria-hidden="true">STILL<br />BUILDING ↗</span></Link>
        <div className="footer-finale__afterword" aria-hidden="true"><span>NOT THE END.</span><i/><span>JUST THE NEXT COMMIT.</span><b>↗</b></div>
        <div className="footer-finale__bottom"><span>© {new Date().getFullYear()} SHIVANSH VYAS</span><nav aria-label="Footer navigation"><Link href="/projects">PROJECTS</Link><Link href="/about">MY STORY</Link><a href="https://github.com/Shivansh2207" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} aria-hidden="true" /></a><Link href="/contact">SAY HELLO <ArrowUpRight size={14} aria-hidden="true" /></Link></nav><span>MUMBAI, INDIA / BUILT WITH INTENT</span></div>
      </PageContainer>
    </footer>
  );
}
