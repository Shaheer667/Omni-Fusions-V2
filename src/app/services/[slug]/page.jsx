import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.seoTitle.replace(' | Omni Fusions', ''),
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="pageHero serviceHero sectionLight">
        <div className="shell serviceHeroGrid">
          <div><p className="eyebrow">{service.eyebrow}</p><h1>{service.title}</h1></div>
          <div><p className="heroLead">{service.intro}</p><Link href="/contact" className="button buttonDark">Discuss Your Project <span>↗</span></Link></div>
        </div>
      </section>
      <section className="serviceVisualSection sectionDark">
        <div className="shell serviceVisualPlaceholder">
          <span>PRIMARY SERVICE VISUAL</span>
          <h2>Replace this area with 3–5 real {service.shortTitle.toLowerCase()} project visuals.</h2>
          <p>Use real work only. Recommended: one hero asset at 16:10 plus two supporting details. See ASSET-BRIEF.md in the project root.</p>
        </div>
      </section>
      <section className="section sectionLight">
        <div className="shell capabilityGrid">
          <div><p className="eyebrow">CAPABILITIES</p><h2>What we can handle.</h2></div>
          <div className="capabilityList">{service.capabilities.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}</div>
        </div>
      </section>
      <section className="section proofSection">
        <div className="shell proofInner">
          <p className="rating">★★★★★ <span>5.0</span></p>
          <blockquote>{service.proof}</blockquote>
          <p>{service.proofLabel}</p>
        </div>
      </section>
      <section className="finalCta sectionDark">
        <div className="shell finalCtaInner"><p className="eyebrow eyebrowLight">NEXT STEP</p><h2>Bring us the brief.</h2><p>One-time project or ongoing support—tell us the scope and we’ll shape the right way to work together.</p><Link href="/contact" className="button buttonLight">Start a Project <span>↗</span></Link></div>
      </section>
    </>
  );
}
