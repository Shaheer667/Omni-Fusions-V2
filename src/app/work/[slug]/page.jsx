import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';

import { projects } from '@/data/site';


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) return {};

  return {
    title: `${project.title} — ${project.service} Case Study`,

    description: project.summary,

    alternates: {
      canonical: `/work/${project.slug}`
    },

    openGraph: {
      title: `${project.title} — Omni Fusions`,
      description: project.summary,
      url: `/work/${project.slug}`,

      ...(project.image && {
        images: [
          {
            url: project.image,
            alt: `${project.title} case study`
          }
        ]
      })
    }
  };
}


export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }


  const related = projects
    .filter(
      (item) =>
        item.slug !== project.slug &&
        item.service === project.service &&
        item.image
    )
    .slice(0, 2);


  /*
    Future-ready:
    project.image = main case-study image
    project.gallery = optional additional project images

    Example in site.js:
    gallery: [
      '/images/work/gatherline-01.jpg',
      '/images/work/gatherline-02.jpg'
    ]
  */

  const projectImages = [
    project.image,
    ...(project.gallery || [])
  ].filter(Boolean);


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

    url:
      `https://www.omnifusions.com/work/${project.slug}`,

    ...(project.image && {
      image:
        `https://www.omnifusions.com${project.image}`
    })
  };


  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="caseHero sectionLight premiumCaseHero">

        <div className="shell premiumCaseHeroGrid">

          <div className="premiumCaseTitle">

            <Reveal y={18}>
              <p className="eyebrow">
                {project.discipline}
              </p>
            </Reveal>

            <Reveal
              delay={0.05}
              y={28}
            >
              <h1>
                {project.title}
              </h1>
            </Reveal>

          </div>


          <Reveal
            delay={0.1}
            y={22}
          >
            <div className="premiumCaseIntro">

              <p className="premiumCaseHeadline">
                {project.headline}
              </p>


              <div className="premiumCaseFacts">

                <div>
                  <span>
                    Industry
                  </span>

                  <strong>
                    {project.industry}
                  </strong>
                </div>


                <div>
                  <span>
                    Project Type
                  </span>

                  <strong>
                    {project.type}
                  </strong>
                </div>


                <div>
                  <span>
                    Service
                  </span>

                  <strong>
                    {project.service}
                  </strong>
                </div>

              </div>


              {project.url && (
                <a
                  className="caseLiveLink"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit live project

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                  />
                </a>
              )}

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          PRIMARY VISUAL
      ===================================================== */}

      {projectImages.length > 0 && (

        <section className="caseMediaSection sectionDark">

          <div className="shell">

            <Reveal y={28}>
              <div className="casePrimaryVisual">

                <Image
                  src={projectImages[0]}
                  alt={`${project.title} — ${project.service}`}
                  fill
                  priority
                  className="casePrimaryImage"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />

              </div>
            </Reveal>


            {projectImages.length > 1 && (

              <div className="caseGalleryGrid">

                {projectImages
                  .slice(1)
                  .map((image, index) => (

                    <Reveal
                      key={image}
                      delay={index * 0.05}
                      y={24}
                    >
                      <div className="caseGalleryVisual">

                        <Image
                          src={image}
                          alt={`${project.title} project detail ${index + 1}`}
                          fill
                          className="caseGalleryImage"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                      </div>
                    </Reveal>

                  ))}

              </div>

            )}

          </div>

        </section>

      )}


      {/* =====================================================
          PROJECT STORY
      ===================================================== */}

      <section className="section sectionLight premiumCaseNarrative">

        <div className="shell premiumCaseNarrativeGrid">

          <Reveal y={24}>
            <div className="premiumCaseSticky">

              <div className="sectionKicker">
                <p className="eyebrow">
                  THE PROJECT
                </p>
              </div>

              <h2>
                Good work starts
                <br />

                <em className="serifAccent redText">
                  with context.
                </em>
              </h2>

            </div>
          </Reveal>


          <div className="premiumCaseStory">

            <Reveal y={18}>
              <article>

                <p className="caseStoryLabel">
                  OVERVIEW
                </p>

                <h3>
                  What we were working on.
                </h3>

                <p>
                  {project.summary}
                </p>

              </article>
            </Reveal>


            <Reveal y={18}>
              <article>

                <p className="caseStoryLabel">
                  THE CHALLENGE
                </p>

                <h3>
                  What needed to change.
                </h3>

                <p>
                  {project.challenge}
                </p>

              </article>
            </Reveal>


            <Reveal y={18}>
              <article>

                <p className="caseStoryLabel">
                  OUR APPROACH
                </p>

                <h3>
                  How we approached it.
                </h3>

                <p>
                  {project.solution}
                </p>

              </article>
            </Reveal>


            <Reveal y={18}>
              <article>

                <p className="caseStoryLabel">
                  THE OUTCOME
                </p>

                <h3>
                  Where the work landed.
                </h3>

                <p>
                  {project.outcome}
                </p>

              </article>
            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          DELIVERABLES
      ===================================================== */}

      <section className="section sectionDark premiumCaseDeliverables">

        <div className="shell premiumCaseDeliverablesGrid">

          <Reveal y={24}>
            <div>

              <div className="sectionKicker sectionKickerDark">
                <p className="eyebrow eyebrowLight">
                  WHAT WE DELIVERED
                </p>
              </div>

              <h2>
                Built around
                <br />

                <em className="serifAccent">
                  what the project needed.
                </em>
              </h2>

            </div>
          </Reveal>


          <div className="premiumDeliverableList">

            {project.deliverables.map(
              (item, index) => (

                <Reveal
                  key={item}
                  delay={index * 0.04}
                  y={14}
                >
                  <div className="premiumDeliverableRow">

                    <span>
                      {item}
                    </span>

                  </div>
                </Reveal>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL PLAN / PROJECT SCOPE
      ===================================================== */}

      {project.visualPlan?.length > 0 && (

        <section className="section sectionLight caseScopeSection">

          <div className="shell caseScopeGrid">

            <Reveal y={24}>
              <div className="caseScopeHeading">

                <div className="sectionKicker">
                  <p className="eyebrow">
                    PROJECT SCOPE
                  </p>
                </div>

                <h2>
                  What shaped
                  <br />

                  <em className="serifAccent redText">
                    the final work.
                  </em>
                </h2>

              </div>
            </Reveal>


            <div className="caseScopeList">

              {project.visualPlan.map(
                (item, index) => (

                  <Reveal
                    key={item}
                    delay={index * 0.04}
                    y={14}
                  >
                    <div className="caseScopeItem">

                      <span>
                        {String(index + 1)
                          .padStart(2, '0')}
                      </span>

                      <p>
                        {item}
                      </p>

                    </div>
                  </Reveal>

                )
              )}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          RELATED WORK
      ===================================================== */}

      {related.length > 0 && (

        <section className="section sectionLight caseRelatedSection">

          <div className="shell">

            <Reveal y={24}>
              <div className="sectionHead sectionHeadSplit creativeSectionHead">

                <div>

                  <div className="sectionKicker">
                    <p className="eyebrow">
                      RELATED WORK
                    </p>
                  </div>

                  <h2>
                    More from
                    <br />

                    <em className="serifAccent redText">
                      {project.service}.
                    </em>
                  </h2>

                </div>


                <Link
                  href="/work"
                  className="textLink"
                >
                  View all work

                  <ArrowUpRight
                    size={15}
                  />
                </Link>

              </div>
            </Reveal>


            <div className="projectGrid caseRelatedGrid">

              {related.map(
                (item, index) => (

                  <ProjectCard
                    key={item.slug}
                    project={item}
                    large={false}
                  />

                )
              )}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="finalCta sectionRed creativeFinalCta caseFinalCta">

        <div className="shell finalCtaInner">

          <Reveal y={14}>
            <p className="eyebrow eyebrowLight">
              HAVE A SIMILAR PROJECT?
            </p>
          </Reveal>


          <Reveal
            delay={0.05}
            y={24}
          >
            <h2>
              Bring us the brief.
              <br />

              <em className="serifAccent">
                We’ll take it from there.
              </em>
            </h2>
          </Reveal>


          <Reveal
            delay={0.1}
            y={18}
          >
            <p>
              Tell us where the project stands,
              what needs to move and what kind
              of support you need. We’ll recommend
              the most practical next step.
            </p>
          </Reveal>


          <Reveal
            delay={0.15}
            y={14}
          >
            <Link
              href="/contact"
              className="button buttonLight creativeButton"
            >
              <span>
                Start a Project
              </span>

              <ArrowUpRight size={17} />
            </Link>
          </Reveal>

        </div>

      </section>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />

    </>
  );
}