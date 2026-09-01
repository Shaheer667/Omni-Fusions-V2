import Link from 'next/link';
import { services } from '@/data/site';

export const metadata = {
  title: 'Services',
  description: 'Graphic design, video editing, web development and ongoing creative support for ambitious businesses worldwide.',
  alternates: { canonical: '/services' }
};

export default function ServicesPage() {
  return (
    <>
      <section className="pageHero sectionLight">
        <div className="shell pageHeroInner">
          <p className="eyebrow">SERVICES</p>
          <h1>Focused capabilities.<br />Flexible ways to work.</h1>
          <p>Omni Fusions combines an in-house creative team with experienced developers to support serious one-time projects and longer-term partnerships.</p>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell serviceListPage">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="serviceRow">
              <span>0{index + 1}</span>
              <div><p className="eyebrow">{service.eyebrow}</p><h2>{service.shortTitle}</h2><p>{service.summary}</p></div>
              <span className="roundArrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section sectionDark">
        <div className="shell serviceEngagementGrid">
          <div><p className="eyebrow eyebrowLight">WAYS TO WORK</p><h2>One project or an ongoing production relationship.</h2></div>
          <div className="engagementCards">
            <article><span>01</span><h3>Project-based</h3><p>Best for a defined website, brand, campaign, video package or other focused deliverable with a clear scope.</p></article>
            <article><span>02</span><h3>Ongoing support</h3><p>Best for businesses with recurring design, editing or production needs that want continuity and flexible capacity.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
