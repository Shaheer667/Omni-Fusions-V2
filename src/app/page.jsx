import Link from 'next/link';
import {
  ArrowUpRight,
  BadgeCheck,
  Clapperboard,
  Code2,
  Layers3,
  MessageSquareText,
  Palette,
  Rocket,
  Sparkles,
  Workflow,
  Zap
} from 'lucide-react';

import Image from 'next/image';
import CountUp from './components/CountUp';
import ProjectCard from './components/ProjectCard';
import TestimonialShowcase from './components/TestimonialShowcase';
import Reveal from './components/Reveal';
import { featuredProjects, services } from '@/data/site';

export const metadata = {
  title: 'Creative Agency for Design, Video & Web Development',
  description:
    'Omni Fusions helps ambitious businesses with graphic design, video editing and web development, serving clients across the US, UK, Canada, Australia and worldwide.',
  alternates: { canonical: '/' }
};

const serviceIcons = [Palette, Clapperboard, Code2];

const agencyVisuals = {
  heroMain: '/images/agency/why-team-workflow.webp',
  heroDetail: '/images/agency/hero-creative-review.webp',
  heroSecondary: '/images/agency/reel-brand-review.webp',
  reelOne: '/images/agency/reel-brand-review.webp',
  reelTwo: '/images/agency/reel-video-edit.webp',
  reelThree: '/images/agency/reel-web-collaboration.webp',
  partnership: '/images/agency/partnership-team-review.webp',
  why: '/images/agency/reel-web-collaboration.webp'
};

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
  return (
    <>
    
      <section className="hero sectionLight creativeHero heroV3">
  <div className="shell heroGrid heroGridV3">
          {/* LEFT SIDE */}
          {/* LEFT SIDE */}
<div className="heroCopy heroCopyV3">

  <Reveal delay={0.05} y={26}>
    <h1 className="heroTitleV3">

      <span className="heroTitleMain">
        We design, edit and build.
      </span>

      <em className="heroTitleAccent serifAccent">
        for brands that <br/> expect more.
      </em>

    </h1>
  </Reveal>


  <Reveal delay={0.1} y={20}>
    <p className="heroLead heroLeadV3">
      Omni Fusions is a full-service creative and technology agency helping ambitious brands turn ideas into design, content and digital experiences that actually move the business forward.
    </p>
  </Reveal>


  <Reveal delay={0.16} y={16}>
    <div className="heroActionsV3">

      <Link
        className="button buttonDark creativeButton"
        href="/contact"
      >
        <span>Start a Project</span>

        <ArrowUpRight
          size={17}
          strokeWidth={1.8}
        />
      </Link>


      <Link
        className="heroWorkLink"
        href="/work"
      >
        View Selected Work

        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
        />
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
        <span>client feedback</span>
      </div>

    </div>
  </Reveal>

</div>

          {/* RIGHT SIDE — KINETIC AGENCY VISUAL */}
          <Reveal className="heroStageReveal" delay={0.1} y={32}>
            <div
              className="agencyHeroStage"
              aria-label="Creative agency workflow"
            >
              <div className="agencyHeroFrame agencyHeroFrameMain">
                <Image
                  src={agencyVisuals.heroMain}
                  alt="Creative team collaborating around digital work"
                  fill
                  priority
                  className="agencyMotionImage"
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
                <span className="agencyImageLabel">Creative direction</span>
              </div>

              <div className="agencyHeroFrame agencyHeroFrameDetail">
                <Image
                  src={agencyVisuals.heroDetail}
                  alt="Professional video editing workflow on screen"
                  fill
                  className="agencyMotionImage"
                  sizes="(max-width: 900px) 45vw, 19vw"
                />
                <span className="agencyImageLabel">Post-production</span>
              </div>

              <div className="agencyHeroFrame agencyHeroFrameSecondary">
                <Image
                  src={agencyVisuals.heroSecondary}
                  alt="Designer reviewing a visual identity system"
                  fill
                  className="agencyMotionImage"
                  sizes="(max-width: 900px) 44vw, 18vw"
                />
              </div>

              <div className="agencyHeroTicker" aria-hidden="true">
                <span>DESIGN</span>
                <i>✦</i>
                <span>VIDEO</span>
                <i>✦</i>
                <span>WEB</span>
              </div>

              <div className="agencyHeroNote" aria-hidden="true">
                <strong>One team.</strong>
                <span>Multiple disciplines.</span>
              </div>
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

      <section className="agencyReel" aria-label="Inside the creative workflow">
        <div className="agencyReelTrack">
          {[0, 1].map((loop) => (
            <div className="agencyReelGroup" key={loop} aria-hidden={loop === 1}>
              <figure className="agencyReelCard agencyReelCardWide">
                <Image
                  src={agencyVisuals.reelOne}
                  alt={loop === 0 ? 'Creative team reviewing brand work' : ''}
                  fill
                  className="agencyMotionImage"
                  sizes="(max-width: 720px) 80vw, 38vw"
                />
                <figcaption>Brand & design</figcaption>
              </figure>

              <figure className="agencyReelCard agencyReelCardTall">
                <Image
                  src={agencyVisuals.reelTwo}
                  alt={loop === 0 ? 'Video editor shaping a production timeline' : ''}
                  fill
                  className="agencyMotionImage"
                  sizes="(max-width: 720px) 58vw, 24vw"
                />
                <figcaption>Video & motion</figcaption>
              </figure>

              <figure className="agencyReelCard agencyReelCardWide">
                <Image
                  src={agencyVisuals.reelThree}
                  alt={loop === 0 ? 'Web team collaborating on a digital product' : ''}
                  fill
                  className="agencyMotionImage"
                  sizes="(max-width: 720px) 80vw, 38vw"
                />
                <figcaption>Web & product</figcaption>
              </figure>

              <div className="agencyReelStatement">
                <span>BUILT TOGETHER</span>
                <strong>
                  Different disciplines.
                  <em className="serifAccent"> One standard.</em>
                </strong>
              </div>
            </div>
          ))}
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

              <div className="partnershipMotionVisual">
                <Image
                  src={agencyVisuals.partnership}
                  alt="Creative team reviewing ongoing client work"
                  fill
                  className="agencyMotionImage"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="partnershipVisualOverlay">
                  <span>ONGOING CREATIVE PARTNER</span>
                  <strong>Built to stay close to the work.</strong>
                </div>
              </div>

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

              <div className="whyMotionVisual">
                <Image
                  src={agencyVisuals.why}
                  alt="Collaborative creative workflow inside a design studio"
                  fill
                  className="agencyMotionImage"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />
                <span className="whyVisualBadge">DESIGN · VIDEO · WEB</span>
              </div>
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
                Feedback from client projects delivered across graphic design,
                video editing and web development.
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
