import Link from 'next/link';

import {
  ArrowUpRight,
  Palette,
  Clapperboard,
  Code2,
  Layers3,
  Check,
  Sparkles
} from 'lucide-react';

import { services } from '@/data/site';
import Reveal from '../components/Reveal';

export const metadata = {
  title: 'Services',
  description:
    'Graphic design, video editing, web development and ongoing creative support for ambitious businesses worldwide.',
  alternates: {
    canonical: '/services'
  }
};

const serviceIcons = {
  'graphic-design': Palette,
  'video-editing': Clapperboard,
  'web-development': Code2,
  'dedicated-creative-support': Layers3
};

const engagementOptions = [
  {
    icon: Sparkles,
    title: 'Project-based',
    text:
      'Best for a defined website, campaign, design system, video package or focused deliverable with a clear scope.',
    points: [
      'Clear scope & deliverables',
      'Defined timeline',
      'Focused execution'
    ]
  },
  {
    icon: Layers3,
    title: 'Ongoing support',
    text:
      'Best for businesses with recurring creative or digital production needs that want continuity and flexible capacity.',
    points: [
      'Recurring production',
      'Consistent brand knowledge',
      'Flexible monthly capacity'
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pageHero sectionLight servicesPageHero">
        <div className="shell servicesHeroGrid">

          <div className="servicesHeroCopy">
            <Reveal y={22}>
              <p className="eyebrow">SERVICES</p>
            </Reveal>

            <Reveal delay={0.05} y={28}>
              <h1>
                <span className="servicesHeroMainLine">
                  Built to make
                </span>

                <em className="serifAccent redText">
                  good ideas happen.
                </em>
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={22}>
            <div className="servicesHeroSide">
              <p className="servicesHeroLead">
                Design, video and web production under one team—built for
                businesses that want reliable execution without managing
                multiple disconnected freelancers.
              </p>

              <div className="servicesHeroCapabilities">
                <span>Graphic Design</span>
                <span>Video Editing</span>
                <span>Web Development</span>
                <span>Ongoing Support</span>
              </div>

              <Link href="/contact" className="textLink servicesHeroLink">
                Start a Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="section sectionLight servicesListingSection">
        <div className="shell">

          <Reveal y={24}>
            <div className="sectionHead sectionHeadSplit creativeSectionHead">

              <div>
                <div className="sectionKicker">
                  <p className="eyebrow">CORE CAPABILITIES</p>
                </div>

                <h2>
                  Different disciplines.
                  <br />
                  <em className="serifAccent redText">
                    One standard.
                  </em>
                </h2>
              </div>

              <p>
                Start with exactly what you need. When the scope grows,
                the same team can support the next part without forcing you
                to rebuild the workflow from scratch.
              </p>

            </div>
          </Reveal>


          <div className="servicesPageGrid">

            {services.map((service, index) => {
              const Icon =
                serviceIcons[service.slug] ||
                [Palette, Clapperboard, Code2, Layers3][index] ||
                Layers3;

              return (
                <Reveal
                  key={service.slug}
                  delay={index * 0.06}
                  y={30}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="servicesPageCard"
                  >
                    <div className="servicesPageCardTop">

                      <div className="servicesPageIcon">
                        <Icon size={25} strokeWidth={1.55} />
                      </div>

                      <span className="roundArrow">
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.7}
                        />
                      </span>

                    </div>

                    <div className="servicesPageCardBody">

                      <p className="eyebrow">
                        {service.eyebrow}
                      </p>

                      <h3>{service.shortTitle}</h3>

                      <p className="servicesPageSummary">
                        {service.summary}
                      </p>

                    </div>

                    {service.capabilities?.length > 0 && (
                      <div className="servicesPageTags">
                        {service.capabilities
                          .slice(0, 4)
                          .map((capability) => (
                            <span key={capability}>
                              {capability}
                            </span>
                          ))}
                      </div>
                    )}

                  </Link>
                </Reveal>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          WAYS TO WORK
      ===================================================== */}

      <section className="section sectionDark servicesEngagementSection">
        <div className="shell">

          <Reveal y={24}>
            <div className="servicesEngagementIntro">

              <div>
                <div className="sectionKicker sectionKickerDark">
                  <p className="eyebrow eyebrowLight">
                    WAYS TO WORK
                  </p>
                </div>

                <h2>
                  Start focused.
                  <br />
                  <em className="serifAccent">
                    Grow from there.
                  </em>
                </h2>
              </div>

              <p>
                Some clients need one serious project. Others need a team
                that can stay close to the business month after month.
                Both work.
              </p>

            </div>
          </Reveal>


          <div className="servicesEngagementCards">

            {engagementOptions.map(
              ({ icon: Icon, title, text, points }, index) => (
                <Reveal
                  key={title}
                  delay={index * 0.08}
                  y={28}
                >
                  <article className="servicesEngagementCard">

                    <div className="engagementIcon">
                      <Icon size={23} strokeWidth={1.5} />
                    </div>

                    <h3>{title}</h3>

                    <p>{text}</p>

                    <div className="engagementPoints">
                      {points.map((point) => (
                        <span key={point}>
                          <Check size={14} />
                          {point}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="servicesEngagementLink"
                    >
                      Discuss your project
                      <ArrowUpRight size={16} />
                    </Link>

                  </article>
                </Reveal>
              )
            )}

          </div>

        </div>
      </section>


      {/* =====================================================
          CLIENT FIT
      ===================================================== */}

      <section className="section sectionLight servicesFitSection">
        <div className="shell servicesFitGrid">

          <Reveal y={24}>
            <div className="servicesFitHeading">

              <div className="sectionKicker">
                <p className="eyebrow">WHO WE WORK WITH</p>
              </div>

              <h2>
                Serious about the work?
                <br />
                <em className="serifAccent redText">
                  We’ll probably get along.
                </em>
              </h2>

            </div>
          </Reveal>


          <Reveal delay={0.1} y={28}>
            <div className="servicesFitList">

              {[
                'Startups & SaaS',
                'E-commerce brands',
                'Agencies & studios',
                'Creators & media brands',
                'Local businesses',
                'Growing teams & enterprises'
              ].map((item) => (
                <div key={item}>
                  <span>{item}</span>
                  <ArrowUpRight size={15} />
                </div>
              ))}

            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="finalCta sectionRed creativeFinalCta servicesFinalCta">
        <div className="shell finalCtaInner">

          <Reveal y={14}>
            <p className="eyebrow eyebrowLight">
              NOT SURE WHERE TO START?
            </p>
          </Reveal>

          <Reveal delay={0.05} y={26}>
            <h2>
              Bring us the brief.
              <br />
              <em className="serifAccent">
                We’ll figure out the rest.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.12} y={18}>
            <p>
              Tell us what you’re working on, what you need help with and
              where the project currently stands. We’ll recommend the most
              practical next step.
            </p>
          </Reveal>

          <Reveal delay={0.18} y={14}>
            <Link
              href="/contact"
              className="button buttonLight creativeButton"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>

        </div>
      </section>
    </>
  );
}