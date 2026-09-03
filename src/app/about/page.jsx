import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import TestimonialShowcase from '../components/TestimonialShowcase';
import Reveal from '../components/Reveal';


export const metadata = {
  title: 'About',
  description:
    'Meet Omni Fusions, a creative and technology team delivering graphic design, video editing and web development for businesses worldwide.',
  alternates: {
    canonical: '/about'
  }
};


const principles = [
  {
    title: 'Understand before executing.',
    text:
      'Good work starts with understanding the business, the audience and what the project actually needs—not simply following instructions at surface level.'
  },
  {
    title: 'Make feedback useful.',
    text:
      'Every review cycle should improve the current deliverable while helping the team understand your standards better for the next one.'
  },
  {
    title: 'Build relationships that compound.',
    text:
      'The longer we work together, the less time should be spent explaining the basics and the more time should go into making better work.'
  }
];


export default function AboutPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pageHero sectionLight aboutPageHero">

        <div className="shell aboutHeroGrid">

          <div className="aboutHeroHeading">

            <Reveal y={18}>
              <p className="eyebrow">
                ABOUT OMNI FUSIONS
              </p>
            </Reveal>

            <Reveal delay={0.05} y={28}>
              <h1>
                One team.
                <br />

                <em className="serifAccent redText">
                  More ways to make things happen.
                </em>
              </h1>
            </Reveal>

          </div>


          <Reveal delay={0.12} y={22}>
            <div className="aboutHeroSide">

              <p>
                Omni Fusions brings design, video and web
                development together for businesses that want
                dependable execution without managing a different
                team for every discipline.
              </p>

              <div className="aboutHeroProof">
                <span>250+ clients served</span>
                <span>5+ years industry experience</span>
                <span>Worldwide delivery</span>
              </div>

              <Link
                href="/work"
                className="textLink"
              >
                See our work

                <ArrowUpRight size={15} />
              </Link>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          POSITIONING
      ===================================================== */}

      <section className="aboutManifesto sectionDark">

        <div className="shell aboutManifestoGrid">

          <Reveal y={24}>
            <div>

              <div className="sectionKicker sectionKickerDark">
                <p className="eyebrow eyebrowLight">
                  BUILT AROUND THE WORK
                </p>
              </div>

              <h2>
                Creative thinking.
                <br />

                <em className="serifAccent">
                  Technical capability.
                </em>
              </h2>

            </div>
          </Reveal>


          <Reveal delay={0.1} y={22}>
            <div className="aboutManifestoSide">

              <p>
                Some projects need design. Some need editing.
                Others need development—or all three working
                together. Our structure lets clients start with
                the capability they need and expand from there
                without rebuilding the relationship from scratch.
              </p>

              <div className="aboutManifestoList">

                <span>Graphic Design</span>
                <span>Video Editing</span>
                <span>Web Development</span>
                <span>Ongoing Creative Support</span>

              </div>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="section sectionLight aboutStorySection">

        <div className="shell aboutStoryPremiumGrid">

          <Reveal y={24}>
            <div className="aboutStoryHeading">

              <div className="sectionKicker">
                <p className="eyebrow">
                  OUR STORY
                </p>
              </div>

              <h2>
                Built through
                <br />

                <em className="serifAccent redText">
                  real client work.
                </em>
              </h2>

            </div>
          </Reveal>


          <Reveal delay={0.08} y={22}>
            <div className="aboutStoryCopy">

              <p className="aboutStoryLead">
                Omni Fusions grew from hands-on client work into
                a multidisciplinary creative and technology team
                serving businesses across international markets.
              </p>

              <p>
                Our founders bring more than five years of industry
                experience, and over the course of building the agency
                the team has worked with more than 250 clients across
                the United States, United Kingdom, Canada, Australia
                and other markets worldwide.
              </p>

              <p>
                Much of that growth came through repeat work and
                long-term relationships. A client might first come
                to us for a website, a campaign or a video—and stay
                because having a team that already understands the
                business makes the next project easier.
              </p>

              <p>
                Today, designers, video editors and developers work
                across focused projects and ongoing accounts. The goal
                is simple: stay responsive, keep standards high and
                build enough capacity to support clients as their
                workload grows.
              </p>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section className="numbersSection sectionDark aboutNumbersSection">

        <div className="shell numberGrid aboutNumberGrid">

          <div>
            <strong>250+</strong>
            <span>
              Clients served worldwide
            </span>
          </div>

          <div>
            <strong>5+</strong>
            <span>
              Years of industry experience
            </span>
          </div>

          <div>
            <strong>10+</strong>
            <span>
              Creative & technical specialists
            </span>
          </div>

          <div>
            <strong>Global</strong>
            <span>
              Remote delivery across major markets
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
    CLIENT FEEDBACK
===================================================== */}

      <section className="section sectionLight aboutTestimonialsSection">

        <div className="shell">

          <Reveal y={24}>
            <div className="aboutTestimonialsHead">

              <div>

                <div className="sectionKicker">
                  <p className="eyebrow">
                    CLIENT FEEDBACK
                  </p>
                </div>

                <h2>
                  Built through relationships.
                  <br />

                  <em className="serifAccent redText">
                    Proven by the people we work with.
                  </em>
                </h2>

              </div>


              <p>
                Different disciplines, same expectation:
                understand the brief, communicate clearly
                and deliver work clients want to come back for.
              </p>

            </div>
          </Reveal>


          <Reveal
            delay={0.08}
            y={28}
          >
            <TestimonialShowcase variant="about" />
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          HOW WE THINK
      ===================================================== */}

      <section className="section sectionLight aboutPrinciplesSection">

        <div className="shell aboutPrinciplesGrid">

          <Reveal y={24}>
            <div className="aboutPrinciplesHeading">

              <div className="sectionKicker">
                <p className="eyebrow">
                  HOW WE THINK
                </p>
              </div>

              <h2>
                Good work matters.
                <br />

                <em className="serifAccent redText">
                  So does how it gets made.
                </em>
              </h2>

            </div>
          </Reveal>


          <div className="aboutPrinciplesList">

            {principles.map((principle, index) => (

              <Reveal
                key={principle.title}
                delay={index * 0.06}
                y={18}
              >
                <article>

                  <h3>
                    {principle.title}
                  </h3>

                  <p>
                    {principle.text}
                  </p>

                </article>
              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TEAM / WAY OF WORKING
      ===================================================== */}

      <section className="section sectionDark aboutTeamSection">

        <div className="shell aboutTeamGrid">

          <Reveal y={24}>
            <div>

              <div className="sectionKicker sectionKickerDark">
                <p className="eyebrow eyebrowLight">
                  THE TEAM
                </p>
              </div>

              <h2>
                Small enough to stay close.
                <br />

                <em className="serifAccent">
                  Built to scale when needed.
                </em>
              </h2>

            </div>
          </Reveal>


          <Reveal delay={0.1} y={22}>
            <div className="aboutTeamCopy">

              <p>
                Our team combines dedicated designers and video editors
                with experienced developers, giving clients access to
                multiple disciplines without the overhead of managing
                separate vendors.
              </p>

              <p>
                For ongoing accounts, that structure becomes even more
                useful. The same people learn the brand, understand the
                feedback and build a production rhythm around the
                business.
              </p>

              <Link
                href="/services"
                className="aboutTeamLink"
              >
                Explore our services

                <ArrowUpRight size={16} />
              </Link>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="finalCta sectionRed creativeFinalCta aboutFinalCta">

        <div className="shell finalCtaInner">

          <Reveal y={14}>
            <p className="eyebrow eyebrowLight">
              WORK WITH OMNI FUSIONS
            </p>
          </Reveal>


          <Reveal delay={0.05} y={24}>
            <h2>
              Start with what
              <br />

              <em className="serifAccent">
                needs to move now.
              </em>
            </h2>
          </Reveal>


          <Reveal delay={0.1} y={18}>
            <p>
              One project or an ongoing relationship—tell us
              what you’re working on and we’ll recommend the
              most practical way to get started.
            </p>
          </Reveal>


          <Reveal delay={0.15} y={14}>
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
    </>
  );
}