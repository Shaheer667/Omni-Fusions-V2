'use client';

import Link from 'next/link';
import { useState } from 'react';
import BrandLogo from './BrandLogo';
import { services } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="siteHeader">
      <div className="shell navWrap">
        <Link href="/" className="brandLink" aria-label="Omni Fusions home" onClick={close}>
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
          <Link href="/work" onClick={close}>Work</Link>
          <div className="navDropdown">
            <Link href="/services" onClick={close}>Services <span className="navChevron">⌄</span></Link>
            <div className="navDropdownPanel">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} onClick={close}>
                  <span>{service.shortTitle}</span>
                  <small>{service.summary}</small>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/contact" className="navCta" onClick={close}>Start a Project <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
