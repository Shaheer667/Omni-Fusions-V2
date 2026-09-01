import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/site';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.service} Case Study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Omni Fusions`,
      description: project.summary,
      url: `/work/${project.slug}`
    }
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((item) => item.slug !== project.slug && item.service === project.service)
    .slice(0, 2);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    creator: {
      '@type': 'Organization',
      name: 'Omni Fusions',
      url: 'https://www.omnifusions.com'
    },
    genre: project.service,
    url: `https://www.omnifusions.com/work/${project.slug}`
  };

  return (
    <>
      <section className="caseHero sectionLight">
        <div className="shell caseHeroGrid">
          <div>
            <p className="eyebrow">{project.discipline}</p>
            <h1>{project.title}</h1>
          </div>
          <div className="caseHeroSide">
            <p>{project.headline}</p>
            <div className="caseFacts">
              <div><span>Industry</span><strong>{project.industry}</strong></div>
              <div><span>Type</span><strong>{project.type}</strong></div>
              <div><span>Service</span><strong>{project.service}</strong></div>
            </div>
            {project.url ? <a className="textLink" href={project.url} target="_blank" rel="noreferrer">Visit live project <span>↗</span></a> : null}
          </div>
        </div>
      </section>

      <section className="caseVisualBand sectionDark">
        <div className="shell caseVisualGrid">
          {project.visualPlan.map((visual, index) => (
            <div className={`caseVisual caseVisual${index + 1} projectVisual${project.accent}`} key={visual}>
              <div className="visualGrid" />
              <span>0{index + 1}</span>
              <strong>{project.title}</strong>
              <p>{visual}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section sectionLight caseNarrative">
        <div className="shell caseNarrativeGrid">
          <div className="caseSticky">
            <p className="eyebrow">THE PROJECT</p>
            <h2>Context before decoration.</h2>
          </div>
          <div className="caseStory">
            <article><span>01</span><h3>Overview</h3><p>{project.summary}</p></article>
            <article><span>02</span><h3>The challenge</h3><p>{project.challenge}</p></article>
            <article><span>03</span><h3>Our approach</h3><p>{project.solution}</p></article>
            <article><span>04</span><h3>Outcome</h3><p>{project.outcome}</p></article>
          </div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="shell caseDeliverablesGrid">
          <div>
            <p className="eyebrow eyebrowLight">WHAT WE DELIVERED</p>
            <h2>Built around the scope.</h2>
          </div>
          <div className="caseDeliverables">
            {project.deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section sectionLight">
          <div className="shell">
            <div className="sectionHead sectionHeadSplit">
              <div><p className="eyebrow">RELATED WORK</p><h2>More in {project.service}.</h2></div>
              <Link href="/work" className="textLink">View all work <span>→</span></Link>
            </div>
            <div className="relatedCaseGrid">
              {related.map((item) => (
                <Link href={`/work/${item.slug}`} className="relatedCase" key={item.slug}>
                  <span>{item.discipline}</span>
                  <h3>{item.title}</h3>
                  <p>{item.headline}</p>
                  <b>View case study ↗</b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="finalCta sectionRed">
        <div className="shell finalCtaInner">
          <p className="eyebrow eyebrowLight">HAVE A SIMILAR PROJECT?</p>
          <h2>Bring us the brief.</h2>
          <p>Tell us where the project stands and what you need from the team. We can start focused and expand the relationship if the fit is right.</p>
          <Link href="/contact" className="button buttonLight">Start a Project <span>↗</span></Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
