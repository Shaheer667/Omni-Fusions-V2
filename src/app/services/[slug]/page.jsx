import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectCard from '../../components/ProjectCard';
import { projects, services } from '@/data/site';

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

  const relevantProjects = projects.filter((project) => project.serviceSlug === service.slug).slice(0, 4);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.shortTitle,
    description: service.seoDescription,
    provider: { '@type': 'Organization', name: 'Omni Fusions', url: 'https://www.omnifusions.com' },
    areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia', 'Worldwide'],
    url: `https://www.omnifusions.com/services/${service.slug}`
  };

  return (
    <>
      <section className="pageHero serviceHero sectionLight">
        <div className="shell serviceHeroGrid">
          <div><p className="eyebrow">{service.eyebrow}</p><h1>{service.title}</h1></div>
          <div><p className="heroLead">{service.intro}</p><Link href="/contact" className="button buttonDark">Discuss Your Project <span>↗</span></Link></div>
        </div>
      </section>

      <section className="serviceVisualSection sectionDark">
        <div className="shell serviceVisualPlaceholder serviceVisualReady">
          <span>SELECTED {service.shortTitle.toUpperCase()} WORK</span>
          <h2>{relevantProjects.length ? relevantProjects.map((item) => item.title).join(' · ') : 'Your next project can live here.'}</h2>
          <p>Selected work across this discipline—from focused projects to ongoing production support.</p>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell capabilityGrid">
          <div><p className="eyebrow">CAPABILITIES</p><h2>What we can handle.</h2></div>
          <div className="capabilityList">{service.capabilities.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}</div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="shell serviceIdealGrid">
          <div><p className="eyebrow eyebrowLight">WHO IT FITS</p><h2>Built for teams with real work to move.</h2></div>
          <div className="idealList">{service.idealFor.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
        </div>
      </section>

      {relevantProjects.length ? (
        <section className="section sectionLight">
          <div className="shell">
            <div className="sectionHead sectionHeadSplit"><div><p className="eyebrow">SELECTED WORK</p><h2>See the service in context.</h2></div><Link href="/work" className="textLink">View all work <span>→</span></Link></div>
            <div className="projectGrid">{relevantProjects.map((project, index) => <ProjectCard key={project.slug} project={project} large={index === 0} />)}</div>
          </div>
        </section>
      ) : null}

      <section className="section processSection">
        <div className="shell">
          <div className="sectionHead sectionHeadWide"><p className="eyebrow">OUR APPROACH</p><h2>Clear process. Enough flexibility to fit the project.</h2></div>
          <div className="processGrid processGridFour">{service.approach.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section proofSection">
        <div className="shell proofInner">
          <p className="rating">★★★★★ <span>5.0</span></p>
          <blockquote>{service.proof}</blockquote>
          <p>{service.proofLabel}</p>
        </div>
      </section>

      <section className="section sectionLight faqSection">
        <div className="shell faqGrid">
          <div><p className="eyebrow">FAQ</p><h2>Before we start.</h2></div>
          <div className="faqList">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="finalCta sectionDark">
        <div className="shell finalCtaInner"><p className="eyebrow eyebrowLight">NEXT STEP</p><h2>Bring us the brief.</h2><p>One-time project or ongoing support—tell us the scope and we’ll shape the right way to work together.</p><Link href="/contact" className="button buttonLight">Start a Project <span>↗</span></Link></div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
