import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  ArrowUpRight,
  Palette,
  Clapperboard,
  Code2,
  Layers3,
  Check,
  Sparkles,
  CircleCheck
} from 'lucide-react';

import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';

import { projects, services } from '@/data/site';


/* =========================================================
   SERVICE VISUAL CONFIG
========================================================= */

const serviceConfig = {
  'graphic-design': {
    icon: Palette,

    heroLines: [
      'Design that',
      'means business.'
    ],

    statement: 'Design that looks considered, not assembled.',

    description:
      'From one focused deliverable to an ongoing creative system, the goal is consistent work that actually feels like your brand.',

    pillars: [
      'Brand-aware execution',
      'Campaign-ready creative',
      'Consistent visual systems'
    ]
  },

  'video-editing': {
    icon: Clapperboard,

    heroLines: [
      'Video that keeps',
      'people watching.'
    ],

    statement: 'Edits built to hold attention.',

    description:
      'Story, pacing, sound and visual polish come together to create videos that feel intentional from the first frame to the last.',

    pillars: [
      'Strong hooks & pacing',
      'Platform-aware editing',
      'Repeatable production'
    ]
  },

  'web-development': {
    icon: Code2,

    heroLines: [
      'Web experiences',
      'built to perform.'
    ],

    statement: 'Web experiences built for real businesses.',

    description:
      'From polished marketing websites to custom products, we focus on reliable implementation, usability and room to grow.',

    pillars: [
      'Modern development',
      'Responsive experiences',
      'Scalable implementation'
    ]
  },

  'dedicated-creative-support': {
    icon: Layers3,

    heroLines: [
      'Creative support',
      'that stays useful.'
    ],

    statement: 'A creative workflow that gets better over time.',

    description:
      'Recurring work becomes easier when the same team already understands your standards, feedback and production rhythm.',

    pillars: [
      'Recurring production',
      'Flexible capacity',
      'Long-term consistency'
    ]
  }
};


export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) return {};

  return {
    title: service.seoTitle.replace(
      ' | Omni Fusions',
      ''
    ),

    description: service.seoDescription,

    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}


export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }


  const relevantProjects = projects
    .filter(
      (project) =>
        project.serviceSlug === service.slug
    )
    .slice(0, 4);


  const config =
    serviceConfig[service.slug] || {
      icon: Sparkles,
      statement:
        'Focused expertise. Reliable execution.',
      description:
        'A practical way to move important work forward with an experienced team behind it.',
      pillars: [
        'Clear execution',
        'Reliable communication',
        'Flexible support'
      ]
    };




  /* =========================================================
     STRUCTURED DATA
  ========================================================= */

  const structuredData = {
    '@context': 'https://schema.org',

    '@graph': [
      {
        '@type': 'Service',

        name: service.shortTitle,

        description:
          service.seoDescription,

        provider: {
          '@type': 'Organization',
          name: 'Omni Fusions',
          url: 'https://www.omnifusions.com'
        },

        areaServed: [
          'United States',
          'United Kingdom',
          'Canada',
          'Australia',
          'Worldwide'
        ],

        url:
          `https://www.omnifusions.com/services/${service.slug}`
      },

      {
        '@type': 'FAQPage',

        mainEntity: service.faqs.map(
          ([question, answer]) => ({
            '@type': 'Question',

            name: question,

            acceptedAnswer: {
              '@type': 'Answer',
              text: answer
            }
          })
        )
      }
    ]
  };


  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pageHero sectionLight serviceDetailHero">
        <div className="shell serviceDetailHeroGrid">

          <div className="serviceDetailHeroCopy">

            <Reveal y={18}>
              <p className="eyebrow">
                {service.eyebrow}
              </p>
            </Reveal>

            <Reveal
              delay={0.05}
              y={28}
            >
              <h1>
                {(config.heroLines || [service.title]).map((line) => (
                  <span
                    key={line}
                    className="serviceHeroTitleLine"
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>

          </div>


          <Reveal
            delay={0.12}
            y={22}
          >
            <div className="serviceDetailHeroSide">

              <p className="serviceDetailLead">
                {service.intro}
              </p>


              <div className="serviceHeroTags">

                {service.capabilities
                  .slice(0, 4)
                  .map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

              </div>


              <div className="serviceHeroActions">

                <Link
                  href="/contact"
                  className="button buttonDark creativeButton"
                >
                  <span>
                    Discuss Your Project
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                  />
                </Link>


                <Link
                  href="/work"
                  className="serviceHeroWorkLink"
                >
                  View our work

                  <ArrowUpRight
                    size={15}
                  />
                </Link>

              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          SERVICE POSITIONING
      ===================================================== */}

      <section className="servicePositionSection sectionDark">

        <div className="shell servicePositionGrid">

          <Reveal y={26}>
            <div className="servicePositionMain">


              <p className="eyebrow eyebrowLight">
                THE STANDARD
              </p>

              <h2>
                {config.statement}
              </h2>

            </div>
          </Reveal>


          <Reveal
            delay={0.1}
            y={24}
          >
            <div className="servicePositionSide">

              <p>
                {config.description}
              </p>


              <div className="servicePillars">

                {config.pillars.map(
                  (pillar) => (
                    <div key={pillar}>

                      <Check
                        size={14}
                        strokeWidth={1.8}
                      />

                      <span>
                        {pillar}
                      </span>

                    </div>
                  )
                )}

              </div>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="section sectionLight serviceCapabilitiesSection">

        <div className="shell serviceCapabilityGrid">

          <Reveal y={24}>
            <div className="serviceCapabilityHeading">

              <div className="sectionKicker">
                <p className="eyebrow">
                  CAPABILITIES
                </p>
              </div>

              <h2>
                What we can
                <br />

                <em className="serifAccent redText">
                  handle.
                </em>
              </h2>

            </div>
          </Reveal>


          <div className="serviceCapabilityList">

            {service.capabilities.map(
              (item, index) => (

                <Reveal
                  key={item}
                  delay={index * 0.04}
                  y={16}
                >
                  <div className="serviceCapabilityRow">

                    <div className="capabilityDot">
                      <CircleCheck
                        size={17}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3>
                      {item}
                    </h3>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.4}
                    />

                  </div>
                </Reveal>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO IT FITS
      ===================================================== */}

      <section className="section sectionDark serviceIdealSection">

        <div className="shell serviceIdealPremiumGrid">

          <Reveal y={24}>
            <div className="serviceIdealHeading">

              <div className="sectionKicker sectionKickerDark">
                <p className="eyebrow eyebrowLight">
                  WHO IT FITS
                </p>
              </div>

              <h2>
                Built for teams
                <br />

                <em className="serifAccent">
                  with real work to move.
                </em>
              </h2>

            </div>
          </Reveal>


          <div className="serviceIdealPremiumList">

            {service.idealFor.map(
              (item, index) => (

                <Reveal
                  key={item}
                  delay={index * 0.05}
                  y={18}
                >
                  <div className="serviceIdealItem">

                    <span className="serviceIdealMark">
                      <Check
                        size={15}
                        strokeWidth={1.8}
                      />
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


      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      {relevantProjects.length > 0 && (

        <section className="section sectionLight serviceSelectedWork">

          <div className="shell">

            <Reveal y={24}>
              <div className="sectionHead sectionHeadSplit creativeSectionHead">

                <div>

                  <div className="sectionKicker">
                    <p className="eyebrow">
                      SELECTED WORK
                    </p>
                  </div>

                  <h2>
                    See the service
                    <br />

                    <em className="serifAccent redText">
                      in context.
                    </em>
                  </h2>

                </div>


                <div className="serviceWorkIntro">

                  <p>
                    A selection of projects that
                    show how this capability comes
                    together in real client work.
                  </p>

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

              </div>
            </Reveal>


            <div className="projectGrid">

              {relevantProjects.map(
                (project, index) => (

                  <Reveal
                    key={project.slug}
                    delay={index * 0.06}
                    y={28}
                  >
                    <ProjectCard
                      project={project}
                      large={index === 0}
                    />
                  </Reveal>

                )
              )}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="section processSection serviceProcessSection">

        <div className="shell">

          <Reveal y={24}>
            <div className="sectionHead sectionHeadSplit creativeSectionHead">

              <div>

                <div className="sectionKicker">
                  <p className="eyebrow">
                    OUR APPROACH
                  </p>
                </div>

                <h2>
                  Clear process.
                  <br />

                  <em className="serifAccent redText">
                    Room to adapt.
                  </em>
                </h2>

              </div>


              <p>
                Enough structure to keep the
                project moving, without turning
                every engagement into unnecessary
                process.
              </p>

            </div>
          </Reveal>


          <div className="processGrid processGridFour serviceProcessGrid">

            {service.approach.map(
              ([title, text], index) => (

                <Reveal
                  key={title}
                  delay={index * 0.05}
                  y={20}
                >
                  <article>

                    <div className="serviceProcessNumber">
                      0{index + 1}
                    </div>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {text}
                    </p>

                  </article>
                </Reveal>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROOF
      ===================================================== */}

      <section className="section serviceProofSection">

        <div className="shell serviceProofGrid">

          <Reveal y={18}>
            <div className="serviceProofMeta">

              <p className="eyebrow">
                CLIENT FEEDBACK
              </p>

              <div className="serviceProofRating">
                <strong>
                  5.0
                </strong>

                <span>
                  ★★★★★
                </span>
              </div>

              <small>
                Verified client feedback
              </small>

            </div>
          </Reveal>


          <Reveal
            delay={0.08}
            y={24}
          >
            <div className="serviceProofQuote">

              <blockquote>
                “{service.proof}”
              </blockquote>

              <p>
                {service.proofLabel}
              </p>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="section sectionLight serviceFaqSection">

        <div className="shell serviceFaqGrid">

          <Reveal y={24}>
            <div className="serviceFaqHeading">

              <div className="sectionKicker">
                <p className="eyebrow">
                  FAQ
                </p>
              </div>

              <h2>
                Before
                <br />

                <em className="serifAccent redText">
                  we start.
                </em>
              </h2>

            </div>
          </Reveal>


          <Reveal
            delay={0.08}
            y={22}
          >
            <div className="faqList serviceFaqList">

              {service.faqs.map(
                ([question, answer]) => (

                  <details key={question}>

                    <summary>

                      {question}

                      <span>
                        +
                      </span>

                    </summary>

                    <p>
                      {answer}
                    </p>

                  </details>

                )
              )}

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="finalCta sectionRed creativeFinalCta serviceDetailFinalCta">

        <div className="shell finalCtaInner">

          <Reveal y={12}>
            <p className="eyebrow eyebrowLight">
              NEXT STEP
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
              One focused project or ongoing
              support—tell us what needs to move
              and we’ll recommend the right way
              to work together.
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

              <ArrowUpRight
                size={17}
              />
            </Link>
          </Reveal>

        </div>

      </section>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              structuredData
            )
        }}
      />

    </>
  );
}