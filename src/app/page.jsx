import Link from 'next/link';
import {
  ArrowUpRight,
  BadgeCheck,
  Clapperboard,
  Code2,
  Layers3,
  MessageSquareText,
  Palette,
  Play,
  Rocket,
  Sparkles,
  Workflow,
  Zap
} from 'lucide-react';

import Image from 'next/image';
import CountUp from './components/CountUp';
import ProjectCard from './components/ProjectCard';
import TestimonialCard from './components/TestimonialCard';
import TestimonialShowcase from './components/TestimonialShowcase';
import Reveal from './components/Reveal';
import { featuredProjects, services, testimonials } from '@/data/site';

export const metadata = {
  title: 'Creative Agency for Design, Video & Web Development',
  description:
    'Omni Fusions helps ambitious businesses with graphic design, video editing and web development, serving clients across the US, UK, Canada, Australia and worldwide.',
  alternates: { canonical: '/' }
};

const serviceIcons = [Palette, Clapperboard, Code2];

const heroMockups = [
  {
    title: 'Gatherline',
    slug: 'gatherline',
    type: 'SaaS Product / Web Development',
    label: 'Smarter growth for modern agents.',
    image: '/images/hero/gatherline-showcase.png'
  },
  {
    title: 'Feel.travel',
    slug: 'feel-travel',
    type: 'Custom Development / Travel Platform',
    label: 'Remote work meets better travel.',
    image: '/images/hero/feel-travel-showcase.png'
  },
  {
    title: 'BizMap Legal',
    slug: 'bizmap-legal',
    type: 'Website Redesign / Legal',
    label: 'Clearer structure. Stronger trust.',
    image: '/images/hero/bizmap-legal-showcase.png'
  }
];

const reasons = [
  {
    icon: Layers3,
    title: 'An actual team behind the work.',
    text: 'Designers, editors and developers collaborate around projects instead of operating as disconnected freelancers.'
  },
  {
    icon: Palette,
    title: 'Built around your brand.',
    text: 'We adapt to existing guidelines, references and audience expectations so new work feels like part of the same business.'
  },
  {
    icon: Workflow,
    title: 'Feedback becomes a better workflow.',
    text: 'What we learn on the first task carries into the next one, reducing repeated explanations and making ongoing production smoother.'
  },
  {
    icon: Zap,
    title: 'Capacity that grows with the account.',
    text: 'Start with a focused project, continue monthly, or expand production capacity when the workload becomes larger.'
  }
];

const process = [
  {
    num: '01',
    icon: MessageSquareText,
    title: 'Share the brief',
    text: 'Tell us the goal, scope, timeline and what already exists.'
  },
  {
    num: '02',
    icon: Workflow,
    title: 'Align on the approach',
    text: 'We clarify deliverables, team needs, milestones and the best way to execute.'
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Start with focused work',
    text: 'A defined first task is often the cleanest way to establish quality and working chemistry.'
  },
  {
    num: '04',
    icon: BadgeCheck,
    title: 'Review, refine and deliver',
    text: 'Feedback is handled cleanly, then final files or production builds are delivered.'
  },
  {
    num: '05',
    icon: Sparkles,
    title: 'Keep the team if it fits',
    text: 'When recurring work makes sense, we turn what we learned into an ongoing production workflow.'
  }
];

const tickerItems = [
  'Brand Identity',
  'Graphic Design',
  'Video Editing',
  'Motion',
  'Next.js',
  'WordPress',
  'UI/UX',
  'Short-form',
  'Web Development',
  'Ongoing Creative Support'
];

export default function HomePage() {
  const heroProjects = featuredProjects.slice(0, 3);

  return (
    <>
      <section className="hero sectionLight creativeHero heroV3">
        <div className="heroWordmark" aria-hidden="true">
          OMNI
        </div>

        <div className="shell heroGrid heroGridV3">
          {/* LEFT SIDE */}
          <div className="heroCopy heroCopyV3">
            <Reveal delay={0.02} y={26}>
              <h1 className="heroTitleV3">
                <span className="heroTitleMain">Make your brand</span>

                <em className="heroTitleAccent serifAccent">
                  hard to ignore.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={0.1} y={20}>
              <p className="heroLead heroLeadV3">
                Design, video and web—built by one team for businesses that care
                how they look, communicate and grow.
              </p>
            </Reveal>

            <Reveal delay={0.16} y={16}>
              <div className="heroActionsV3">
                <Link
                  className="button buttonDark creativeButton"
                  href="/contact"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </Link>

                <Link className="heroWorkLink" href="/work">
                  View Selected Work
                  <ArrowUpRight size={16} strokeWidth={1.8} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.22} y={12}>
              <div className="heroServicesV3">
                <span>Graphic Design</span>
                <i>·</i>
                <span>Video Editing</span>
                <i>·</i>
                <span>Web Development</span>
              </div>
            </Reveal>

            <Reveal delay={0.28} y={12}>
              <div className="heroProofV3">
                <div>
                  <strong>250+</strong>
                  <span>clients served worldwide</span>
                </div>

                <div className="heroProofDivider" />

                <div>
                  <strong>5.0 ★</strong>
                  <span>verified client feedback</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE */}
          <Reveal className="heroStageReveal" delay={0.1} y={32}>
            <div
              className="heroShowcaseV3"
              aria-label="Selected Omni Fusions projects"
            >
              {/* LARGE PROJECT */}
              {heroMockups[0] && (
                <Link
                  href="/work/gatherline-saas-platform"
                  className="heroShowcaseMain"
                >
                  <div className="heroShowcaseVisual heroShowcaseImageWrap">
                    <Image
                      src={heroMockups[0].image}
                      alt="Gatherline project mockup"
                      fill
                      className="heroShowcaseImg"
                      priority
                    />
                  </div>

                  <div className="showcaseMeta">
                    <div>
                      <strong>{heroMockups[0].title}</strong>
                      <span>{heroMockups[0].type}</span>
                    </div>

                    <span className="showcaseArrow">↗</span>
                  </div>
                </Link>
              )}

              {/* SMALL PROJECT 1 */}
              {heroMockups[1] && (
                <Link
                  href="/work/feel-travel-custom-platform"
                  className="heroShowcaseSmall heroShowcaseSmallOne"
                >
                  <div className="heroShowcaseVisual heroShowcaseImageWrap">
                    <Image
                      src={heroMockups[1].image}
                      alt="Feel.travel project mockup"
                      fill
                      className="heroShowcaseImg"
                    />
                  </div>

                  <div className="showcaseSmallMeta">
                    <strong>{heroMockups[1].title}</strong>
                    <span>↗</span>
                  </div>
                </Link>
              )}

              {/* SMALL PROJECT 2 */}
              {heroMockups[2] && (
                <Link
                  href="/work/bizmap-legal-redesign"
                  className="heroShowcaseSmall heroShowcaseSmallTwo"
                >
                  <div className="heroShowcaseVisual heroShowcaseImageWrap">
                    <Image
                      src={heroMockups[2].image}
                      alt="BizMap Legal project mockup"
                      fill
                      className="heroShowcaseImg"
                    />
                  </div>

                  <div className="showcaseSmallMeta">
                    <strong>{heroMockups[2].title}</strong>
                    <span>↗</span>
                  </div>
                </Link>
              )}

              <span className="heroAnnotation">
                selected work →
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="capabilityTicker" aria-label="Omni Fusions capabilities">
        <div className="tickerTrack">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i>✦</i>
            </span>
          ))}
        </div>
      </section>

      <section className="section sectionLight servicesCreative">
        <div className="shell">
          <Reveal y={24}>
            <div className="sectionHead sectionHeadWide creativeSectionHead">
              <div className="sectionKicker">
                <p className="eyebrow">WHAT WE DO</p>
              </div>

              <h2>
                Three disciplines.
                <br />
                <em className="serifAccent redText">One creative standard.</em>
              </h2>

              <p>
                Design that builds credibility, video that holds attention,
                and web experiences built to perform. One team keeps the work
                connected from brief to delivery.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="serviceGrid creativeServiceGrid">
              {services.slice(0, 3).map((service, index) => {
                const Icon = serviceIcons[index];

                return (
                  <Link
                    className={`serviceCard creativeServiceCard serviceCard0${index + 1}`}
                    href={`/services/${service.slug}`}
                    key={service.slug}
                  >
                    <div className="serviceCardHeader">
                      <div className="serviceIconWrap">
                        <Icon size={25} strokeWidth={1.55} />
                      </div>

                      <span className="roundArrow">
                        <ArrowUpRight size={17} strokeWidth={1.8} />
                      </span>
                    </div>

                    <h3>{service.shortTitle}</h3>
                    <p>{service.summary}</p>

                    <div className="serviceTags">
                      {service.capabilities.slice(0, 3).map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section sectionDark workSection creativeWorkSection">
        <div className="shell">
          <Reveal y={24}>
            <div className="sectionHead sectionHeadSplit darkHead creativeSectionHead">
              <div>
                <div className="sectionKicker sectionKickerDark">
                  <p className="eyebrow eyebrowLight">SELECTED WORK</p>
                </div>

                <h2>
                  Work that earns
                  <br />
                  <em className="serifAccent">a second look.</em>
                </h2>
              </div>

              <p>
                From SaaS products and business websites to brand systems and
                ongoing video production, every project starts with the actual
                brief—not a house template.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={34}>
            <div className="projectGrid">
              {featuredProjects.slice(0, 6).map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  large={index === 0 || index === 3}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16} y={16}>
            <div className="sectionAction">
              <Link href="/work" className="button buttonLight creativeButton">
                <span>View Selected Work</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section sectionRed partnershipSection creativePartnership">
        <div className="shell partnershipGrid">
          <Reveal y={28}>
            <div>
              <div className="sectionKicker sectionKickerDark">
                <p className="eyebrow eyebrowLight">ONGOING PARTNERSHIPS</p>
              </div>

              <h2>
                Start with one project.
                <br />
                <em className="serifAccent">Stay for the workflow.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={28}>
            <div className="partnershipCopy">
              <p>
                A focused first task proves the working style, then the scope
                can grow. For businesses with recurring needs, we stay close
                to the brand and handle a steady flow of creative and digital
                production.
              </p>

              <div className="partnershipList creativePartnershipList">
                {[
                  'Graphic design requests',
                  'Ongoing video editing',
                  'Campaign support',
                  'Web production',
                  'Flexible capacity',
                  'Scale as demand grows'
                ].map((item) => (
                  <span key={item}>
                    <BadgeCheck size={16} />
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/services/dedicated-creative-support"
                className="button buttonLight creativeButton"
              >
                <span>Explore Ongoing Support</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section sectionLight whyCreative">
        <div className="shell whyGrid">
          <Reveal y={26}>
            <div className="stickyCopy">
              <div className="sectionKicker">
                <p className="eyebrow">WHY OMNI FUSIONS</p>
              </div>

              <h2>
                Less managing.
                <br />
                <em className="serifAccent redText">More momentum.</em>
              </h2>

              <p>
                Good execution matters. So does having a team that understands
                the brief, communicates clearly and keeps work moving without
                constant supervision.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={32}>
            <div className="reasonList creativeReasonList">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <article key={reason.title}>
                    <div className="reasonIcon">
                      <Icon size={21} strokeWidth={1.55} />
                    </div>

                    <div>
                      <h3>{reason.title}</h3>
                      <p>{reason.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="numbersSection sectionDark creativeNumbers">
        <Reveal y={24}>
          <div className="shell numberGrid">
            <div>
              <CountUp end={250} duration={1000} />
              <span>Clients served worldwide</span>
            </div>

            <div>
              <CountUp end={5} duration={700} />
              <span>Years of industry experience</span>
            </div>

            <div>
              <CountUp end={10} duration={800} />
              <span>Creative & technical specialists</span>
            </div>

            <div>
              <strong>Global</strong>
              <span>Remote delivery across major international markets</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section sectionLight testimonialsSection">
        <div className="shell">
          <Reveal y={24}>
            <div className="sectionHead sectionHeadSplit creativeSectionHead">
              <div>
                <div className="sectionKicker">
                  <p className="eyebrow">CLIENT FEEDBACK</p>
                </div>

                <h2>
                  Good work gets
                  <br />
                  <em className="serifAccent redText">remembered.</em>
                </h2>
              </div>

              <p>
                Verified feedback from client projects delivered across
                graphic design, video editing and web development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
              <TestimonialShowcase />
          </Reveal>
        </div>
      </section>

      <section className="section processSection creativeProcess">
        <div className="shell">
          <Reveal y={22}>
            <div className="sectionHead sectionHeadWide creativeSectionHead">
              <div className="sectionKicker">
                <p className="eyebrow">HOW WE WORK</p>
              </div>

              <h2>
                Straightforward
                <br />
                <em className="serifAccent redText">from day one.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="processGrid creativeProcessGrid">
              {process.map(({ num, icon: Icon, title, text }) => (
                <article key={num}>
                  <div className="processTop">
                    <span>{num}</span>
                  </div>

                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="finalCta sectionRed creativeFinalCta">
        <div className="shell finalCtaInner">
          <Reveal y={14}>
            <p className="eyebrow eyebrowLight finalCtaEyebrow">
              START A CONVERSATION
            </p>
          </Reveal>

          <Reveal delay={0.06} y={26}>
            <h2>
              Have something
              <br />
              <em className="serifAccent">worth building?</em>
            </h2>
          </Reveal>

          <Reveal delay={0.12} y={20}>
            <p>
              Tell us what you need, where the project stands and what a good
              outcome looks like. We’ll come back with a clear next step.
            </p>
          </Reveal>

          <Reveal delay={0.18} y={16}>
            <Link href="/contact" className="button buttonLight creativeButton">
              <span>Start a Project</span>
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
