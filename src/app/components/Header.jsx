'use client';

import Link from 'next/link';
import { useState } from 'react';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="shell navWrap">
        <Link href="/" className="brandLink" aria-label="Omni Fusions home" onClick={() => setOpen(false)}>
          <BrandLogo priority />
        </Link>
        <button
          className="menuToggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? 'mainNav mainNavOpen' : 'mainNav'} aria-label="Primary navigation">
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="navCta" onClick={() => setOpen(false)}>Start a Project <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
