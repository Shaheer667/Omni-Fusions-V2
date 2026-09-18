import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { site } from '@/data/site';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/officialomnifusions',
    icon: FaFacebookF
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/officialomnifusions/',
    icon: FaInstagram
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/omni-fusions/',
    icon: FaLinkedinIn
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/923192506120',
    icon: FaWhatsapp
  }
];

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid footerGridCorporate">
        <div className="footerBrand">
          <BrandLogo dark />

          <p>
            Creative and technology partner for ambitious businesses worldwide.
          </p>

          <div className="footerSocials">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footerSocialLink"
                aria-label={`Omni Fusions on ${name}`}
                title={name}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="footerLabel">Company</p>
          <div className="footerLinks">
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/work">Selected Work</Link>
          </div>
        </div>

        <div>
          <p className="footerLabel">Services</p>
          <div className="footerLinks">
            <Link href="/services/graphic-design">Graphic Design</Link>
            <Link href="/services/video-editing">Video Editing</Link>
            <Link href="/services/web-development">Web Development</Link>
            <Link href="/services/dedicated-creative-support">Ongoing Support</Link>
          </div>
        </div>

        <div>
          <p className="footerLabel">Legal</p>
          <div className="footerLinks">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/cookies">Cookie Policy</Link>
            <Link href="/refund-policy">Cancellation & Refund</Link>
          </div>
        </div>

        <div>
          <p className="footerLabel">Contact</p>
          <div className="footerLinks">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a
              href="https://wa.me/923192506120"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <span>US · UK · Canada · Australia · Worldwide</span>
          </div>
        </div>
      </div>

      <div className="shell footerBottom">
        <span>
          © {new Date().getFullYear()} Omni Fusions. All rights reserved.
        </span>

        <span className="footerLegalInline">
          <Link href="/privacy">Privacy</Link>
          {' · '}
          <Link href="/terms">Terms</Link>
          {' · '}
          <Link href="/cookies">Cookies</Link>
        </span>
      </div>
    </footer>
  );
}
