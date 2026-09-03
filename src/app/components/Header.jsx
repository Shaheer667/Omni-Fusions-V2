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
    if (path === '/services') {
      return pathname.startsWith('/services');
    }

    if (path === '/work') {
      return pathname.startsWith('/work');
    }

    return pathname === path;
  };

  return (
    <header className="siteHeader editorialHeader">

      <div className="shell editorialNav">

        {/* LOGO */}

        <Link
          href="/"
          className="brandLink editorialBrand"
          aria-label="Omni Fusions home"
          onClick={close}
        >
          <BrandLogo priority />
        </Link>


        {/* MOBILE BUTTON */}

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


        {/* NAV */}

        <nav
          className={`editorialMainNav ${
            open ? 'editorialMainNavOpen' : ''
          }`}
        >

          <Link
            href="/work"
            onClick={close}
            className={active('/work') ? 'active' : ''}
          >
            Work
          </Link>


          {/* SERVICES */}

          <div
            className={`editorialServices ${
              active('/services') ? 'active' : ''
            }`}
          >

            <button
              type="button"
              className="editorialServicesTrigger"
              onClick={() =>
                setServicesOpen((value) => !value)
              }
            >
              Services

              <ChevronDown
                size={13}
                strokeWidth={1.7}
              />
            </button>


            <div
              className={`editorialDropdown ${
                servicesOpen
                  ? 'editorialDropdownOpen'
                  : ''
              }`}
            >

              <p>Services</p>

              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={close}
                >
                  <span>
                    {service.shortTitle}
                  </span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                  />
                </Link>
              ))}


              <Link
                href="/services"
                className="editorialDropdownAll"
                onClick={close}
              >
                View all services

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
            href="/contact"
            className="editorialNavCta"
            onClick={close}
          >
            Start a Project

            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
            />
          </Link>

        </nav>

      </div>

    </header>
  );
}