import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div className="footerBrand">
          <BrandLogo dark />
          <p>Pakistan-based. Working with ambitious businesses worldwide.</p>
        </div>
        <div>
          <p className="footerLabel">Explore</p>
          <div className="footerLinks">
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Start a Project</Link>
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
          <p className="footerLabel">Contact</p>
          <div className="footerLinks">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>US · UK · Canada · Australia · Worldwide</span>
          </div>
        </div>
      </div>
      <div className="shell footerBottom">
        <span>© {new Date().getFullYear()} Omni Fusions. All rights reserved.</span>
        <span><a href="/privacy">Privacy</a> · Creative + Technology Partner</span>
      </div>
    </footer>
  );
}
