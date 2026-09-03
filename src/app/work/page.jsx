import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

import { projects } from '@/data/site';


export const metadata = {
  title: 'Selected Work',
  description:
    'Selected graphic design, video editing and web development work by Omni Fusions.',
  alternates: {
    canonical: '/work'
  }
};


const workGroups = [
  {
    id: 'web-development',
    eyebrow: 'WEB DEVELOPMENT',
    title: 'Digital products built',
    accent: 'to work beautifully.',
    description:
      'Custom websites, SaaS products and digital experiences shaped around usability, performance and the business behind them.',
    service: 'Web Development',
    dark: true
  },

  {
    id: 'graphic-design',
    eyebrow: 'GRAPHIC DESIGN',
    title: 'Design people',
    accent: 'actually remember.',
    description:
      'Brand identity, campaigns, social creative and marketing design built to make the business feel more considered and consistent.',
    service: 'Graphic Design',
    dark: false
  },

  {
    id: 'video-editing',
    eyebrow: 'VIDEO EDITING',
    title: 'Content built to earn',
    accent: 'the next second.',
    description:
      'Long-form, short-form, branded and social video editing shaped around pacing, retention and platform behaviour.',
    service: 'Video Editing',
    dark: true
  }
];


export default function WorkPage() {
  const groupedWork = workGroups.map((group) => ({
    ...group,
    projects: projects.filter(
      (project) => project.service === group.service
    )
  }));

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pageHero sectionLight workPageHero">

        <div className="shell workHeroGrid">

          <div className="workHeroHeading">

            <Reveal y={18}>
              <p className="eyebrow">
                SELECTED WORK
              </p>
            </Reveal>

            <Reveal delay={0.05} y={28}>
              <h1>
                Built across disciplines.
                <br />

                <em className="serifAccent redText">
                  Judged by the work.
                </em>
              </h1>
            </Reveal>

          </div>


          <Reveal delay={0.12} y={22}>
            <div className="workHeroSide">

              <p>
                A curated look at the websites,
                brand systems and video content
                our team has helped bring to life
                for businesses around the world.
              </p>

              <div className="workHeroNav">

                {workGroups.map((group) => (
                  <Link
                    key={group.id}
                    href={`#${group.id}`}
                  >
                    {group.eyebrow
                      .toLowerCase()
                      .replace(/\b\w/g, (letter) =>
                        letter.toUpperCase()
                      )}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.6}
                    />
                  </Link>
                ))}

              </div>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          WORK GROUPS
      ===================================================== */}

      {groupedWork.map((group) => (
        <WorkGroup
          key={group.id}
          {...group}
        />
      ))}


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="finalCta sectionRed creativeFinalCta workFinalCta">

        <div className="shell finalCtaInner">

          <Reveal y={14}>
            <p className="eyebrow eyebrowLight">
              YOUR PROJECT COULD BE NEXT
            </p>
          </Reveal>


          <Reveal delay={0.05} y={25}>
            <h2>
              Have something
              <br />

              <em className="serifAccent">
                worth making well?
              </em>
            </h2>
          </Reveal>


          <Reveal delay={0.1} y={18}>
            <p>
              Tell us what you’re building,
              creating or trying to improve.
              We’ll help shape the right way
              to move it forward.
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


function WorkGroup({
  id,
  eyebrow,
  title,
  accent,
  description,
  projects,
  dark
}) {
  if (!projects.length) {
    return null;
  }

  return (
    <section
      id={id}
      className={`section workDisciplineSection ${
        dark
          ? 'sectionDark workDisciplineDark'
          : 'sectionLight workDisciplineLight'
      }`}
    >

      <div className="shell">

        <Reveal y={24}>
          <div className="workDisciplineHead">

            <div className="workDisciplineTitle">

              <div
                className={`sectionKicker ${
                  dark
                    ? 'sectionKickerDark'
                    : ''
                }`}
              >
                <p
                  className={`eyebrow ${
                    dark
                      ? 'eyebrowLight'
                      : ''
                  }`}
                >
                  {eyebrow}
                </p>
              </div>


              <h2>
                {title}
                <br />

                <em
                  className={`serifAccent ${
                    dark
                      ? 'workLightAccent'
                      : 'redText'
                  }`}
                >
                  {accent}
                </em>
              </h2>

            </div>


            <div className="workDisciplineIntro">

              <p>
                {description}
              </p>

              <span className="workProjectCount">
                {String(projects.length).padStart(2, '0')}{' '}
                {projects.length === 1
                  ? 'project'
                  : 'projects'}
              </span>

            </div>

          </div>
        </Reveal>


        <div className="projectGrid workPageGrid">

          {projects.map((project, index) => (

            <ProjectCard
              key={project.slug}
              project={project}
              large={
                index === 0 ||
                (projects.length > 4 &&
                  index === 3)
              }
            />

          ))}

        </div>

      </div>

    </section>
  );
}