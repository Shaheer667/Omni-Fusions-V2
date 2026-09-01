import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import TestimonialCard from './components/TestimonialCard';
import Reveal from './components/Reveal';
import { featuredProjects, services, testimonials } from '@/data/site';

export const metadata = {
  title: 'Creative Agency for Design, Video & Web Development',
  description:
    'Omni Fusions helps ambitious businesses with graphic design, video editing and web development, serving clients across the US, UK, Canada, Australia and worldwide.',
  alternates: { canonical: '/' }
};

export default function HomePage() {
  const heroProjects = featuredProjects.slice(0, 3);

  return (
    <>
      <section className="hero sectionLight">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <Reveal y={14}>
              <p className="eyebrow">CREATIVE + TECHNOLOGY PARTNER</p>
            </Reveal>

            <Reveal delay={0.06} y={28}>
              <h1>
                <span className="heroMainLine">Design. Video. Web.</span>
                <span className="heroSubLine">
                  One team built to move your business forward.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14} y={22}>
              <p className="heroLead">
                Omni Fusions brings graphic design, video editing and web
                development under one reliable team for ambitious businesses
                that need quality work—consistently.
              </p>
            </Reveal>

            <Reveal delay={0.2} y={18}>
              <div className="buttonRow">
                <Link className="button buttonDark" href="/contact">
                  Start a Project <span>↗</span>
                </Link>
                <Link className="textLink" href="/work">
                  Explore Our Work <span>→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.28} y={14}>
              <div className="heroTrust">
                <span><strong>250+</strong> clients served</span>
                <span><strong>5+</strong> years industry experience</span>
                <span><strong>10+</strong> specialists</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="heroStageReveal" delay={0.12} y={34}>
            <div
              className="heroStage heroProjectStage"
              aria-label="Selected Omni Fusions work"
            >
              {heroProjects.map((project, index) => (
                <Link
                  href={`/work/${project.slug}`}
                  className={`heroProject heroProject${index + 1}`}
                  key={project.slug}
                >
                  <span className="frameTag">{project.heroLabel}</span>
                  <div className={`heroProjectArt projectVisual${project.accent}`}>
                    <div className="visualGrid" />
                    <b>{project.title.slice(0, 2).toUpperCase()}</b>
                  </div>
                  <div className="heroProjectMeta">
                    <strong>{project.title}</strong>
                    <span>{project.type}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal y={12}>
        <section className="trustBand">
          <div className="shell trustBandInner">
            <p>Trusted by businesses across</p>
            <div className="countryList">
              <span>United States</span>
              <span>United Kingdom</span>
              <span>Canada</span>
              <span>Australia</span>
              <span>Worldwide</span>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section sectionLight">
        <div className="shell">
          <Reveal y={24}>
            <div className="sectionHead sectionHeadWide">
              <p className="eyebrow">WHAT WE DO</p>
              <h2>
                Three core disciplines.<br />
                One team accountable for the work.
              </h2>
              <p>
                Design that builds credibility, video that holds attention, and
                web experiences built to perform. One team keeps the work
                connected from brief to delivery.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="serviceGrid">
              {services.slice(0, 3).map((service, index) => (
                <Link
                  className="serviceCard"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                >
                  <div className="serviceTop">
                    <span>0{index + 1}</span>
                    <span className="roundArrow">↗</span>
                  </div>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.summary}</p>
                  <div className="serviceTags">
                    {service.capabilities.slice(0, 3).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section sectionDark workSection">
        <div className="shell">
          <Reveal y={24}>
            <div className="sectionHead sectionHeadSplit darkHead">
              <div>
                <p className="eyebrow eyebrowLight">SELECTED WORK</p>
                <h2>Different disciplines. Same standard.</h2>
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
              <Link href="/work" className="button buttonLight">
                View Selected Work <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section sectionRed partnershipSection">
        <div className="shell partnershipGrid">
          <Reveal y={28}>
            <div>
              <p className="eyebrow eyebrowLight">ONGOING PARTNERSHIPS</p>
              <h2>Start with one project. Keep the team when it works.</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={28}>
            <div className="partnershipCopy">
              <p>
                A common pattern in our client relationships is simple: a
                focused first task proves the working style, then the scope
                grows. For businesses with recurring needs, we can stay close
                to the brand and handle a steady flow of design, video and
                digital production.
              </p>

              <div className="partnershipList">
                <span>Graphic design requests</span>
                <span>Ongoing video editing</span>
                <span>Campaign support</span>
                <span>Web production</span>
                <span>Flexible capacity</span>
                <span>Scale as demand grows</span>
              </div>

              <Link
                href="/services/dedicated-creative-support"
                className="button buttonLight"
              >
                Explore Ongoing Support <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell whyGrid">
          <Reveal y={26}>
            <div className="stickyCopy">
              <p className="eyebrow">WHY OMNI FUSIONS</p>
              <h2>
                Less managing.<br />
                More progress.
              </h2>
              <p>
                Good execution matters. So does having a team that understands
                the brief, communicates clearly and keeps work moving without
                constant supervision.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={32}>
            <div className="reasonList">
              <article>
                <span>01</span>
                <div>
                  <h3>An actual team behind the work.</h3>
                  <p>
                    Designers, editors and developers collaborate around
                    projects instead of operating as disconnected freelancers.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Built around your brand.</h3>
                  <p>
                    We adapt to existing guidelines, references and audience
                    expectations so new work feels like part of the same
                    business.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Feedback turns into a better workflow.</h3>
                  <p>
                    What we learn on the first task carries into the next one,
                    reducing repeated explanations and making ongoing
                    production smoother.
                  </p>
                </div>
              </article>

              <article>
                <span>04</span>
                <div>
                  <h3>Capacity that can grow with the account.</h3>
                  <p>
                    Start with a focused project, continue monthly, or expand
                    production capacity when the workload becomes larger.
                  </p>
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="numbersSection sectionDark">
        <Reveal y={24}>
          <div className="shell numberGrid">
            <div>
              <strong>250+</strong>
              <span>Clients served worldwide</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Years of industry experience</span>
            </div>
            <div>
              <strong>10+</strong>
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
            <div className="sectionHead sectionHeadSplit">
              <div>
                <p className="eyebrow">CLIENT FEEDBACK</p>
                <h2>Proof from the people who hired us.</h2>
              </div>
              <p>
                Verified feedback from client projects delivered across graphic
                design, video editing and web development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="testimonialGrid">
              {testimonials.slice(0, 3).map((item) => (
                <TestimonialCard
                  key={item.category + item.quote}
                  item={item}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section processSection">
        <div className="shell">
          <Reveal y={22}>
            <div className="sectionHead sectionHeadWide">
              <p className="eyebrow">HOW WE WORK</p>
              <h2>Straightforward from day one.</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="processGrid">
              {[
                [
                  '01',
                  'Share the brief',
                  'Tell us the goal, scope, timeline and what already exists.'
                ],
                [
                  '02',
                  'Align on the approach',
                  'We clarify deliverables, team needs, milestones and the best way to execute.'
                ],
                [
                  '03',
                  'Start with focused work',
                  'For many new relationships, a defined first task is the cleanest way to establish quality and working chemistry.'
                ],
                [
                  '04',
                  'Review, refine and deliver',
                  'Feedback is handled cleanly, then final files or production builds are delivered.'
                ],
                [
                  '05',
                  'Keep the team if it fits',
                  'When recurring work makes sense, we turn what we learned into an ongoing production workflow.'
                ]
              ].map(([num, title, text]) => (
                <article key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="finalCta sectionRed">
        <div className="shell finalCtaInner">
          <Reveal y={14}>
            <p className="eyebrow eyebrowLight">START A CONVERSATION</p>
          </Reveal>

          <Reveal delay={0.06} y={26}>
            <h2>Have something worth building?</h2>
          </Reveal>

          <Reveal delay={0.12} y={20}>
            <p>
              Tell us what you need, where the project stands and what a good
              outcome looks like. We’ll come back with a clear next step.
            </p>
          </Reveal>

          <Reveal delay={0.18} y={16}>
            <Link href="/contact" className="button buttonLight">
              Start a Project <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
