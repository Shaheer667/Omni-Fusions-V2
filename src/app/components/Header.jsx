'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

import BrandLogo from './BrandLogo';
import { services } from '@/data/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const active = (path) => {
    if (path === '/services') return pathname.startsWith('/services');
    if (path === '/work') return pathname.startsWith('/work');
    return pathname === path;
  };

  return (
    <header className="siteHeader editorialHeader">
      <div className="shell editorialNav">
        <Link
          href="/"
          className="brandLink editorialBrand"
          aria-label="Omni Fusions home"
          onClick={close}
        >
          <BrandLogo priority />
        </Link>

        <button
          className="editorialMenuToggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`editorialMainNav ${open ? 'editorialMainNavOpen' : ''}`}
          aria-label="Primary navigation"
        >
          <Link
            href="/work"
            onClick={close}
            className={active('/work') ? 'active' : ''}
          >
            Work
          </Link>

          <div className={`editorialServices ${active('/services') ? 'active' : ''}`}>
            <button
              type="button"
              className="editorialServicesTrigger"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <ChevronDown size={13} strokeWidth={1.7} />
            </button>

            <div className={`editorialDropdown ${servicesOpen ? 'editorialDropdownOpen' : ''}`}>
              <p>Services</p>

              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={close}
                >
                  <span>{service.shortTitle}</span>
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </Link>
              ))}

              <Link
                href="/services"
                className="editorialDropdownAll"
                onClick={close}
              >
                <span>View all services</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          <Link
            href="/about"
            onClick={close}
            className={active('/about') ? 'active' : ''}
          >
            About
          </Link>

          <Link
            href="/careers"
            onClick={close}
            className={active('/careers') ? 'active' : ''}
          >
            Careers
          </Link>

          <Link
            href="/contact"
            onClick={close}
            className={active('/contact') ? 'active' : ''}
          >
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}
