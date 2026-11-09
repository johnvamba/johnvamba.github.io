"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./Logo";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav page" aria-label="Main">
        <a className="nav-brand" href="#top">
          <LogoMark size={30} />
          <span>
            John <b>V</b> Amba
          </span>
        </a>
        <button
          type="button"
          className="btn btn-icon nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
        <div id="nav-links" className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              className="link"
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary" href="mailto:johnvamba@gmail.com" onClick={() => setOpen(false)}>
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
