"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { PageContainer } from "./PageContainer";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={cn("navbar", scrolled && "navbar--scrolled")}>
      <PageContainer className="navbar__inner">
        <Link
          href="/"
          className="brand"
          aria-label="Shivansh Vyas — home"
          onClick={() => setIsOpen(false)}
        >
          <span className="brand__logo-wrap" aria-hidden="true">
            {/* Static local asset avoids the unsupported Worker image optimizer. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand__logo"
              src="/images/brand/shivansh-logo.png"
              alt=""
              width={1928}
              height={816}
              decoding="async"
            />
          </span>
          <span className="brand__text">
            <strong>VYAS <em>{"//"}</em></strong>
            <small>DEV PORTFOLIO</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(isActive(item.href) && "is-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </PageContainer>

      <nav
        id="mobile-navigation"
        className={cn("mobile-nav", isOpen && "is-open")}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <PageContainer>
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(isActive(item.href) && "is-active")}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </PageContainer>
      </nav>
    </header>
  );
}
