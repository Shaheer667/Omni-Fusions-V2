import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';

export const metadata = {
  title: 'Careers',
  description: 'Explore creative and technology career opportunities and collaboration with Omni Fusions.',
  alternates: { canonical: '/careers' }
};

const disciplines = [
  ['Graphic Design', 'Brand systems, marketing creative, social, presentations and editorial work.'],
  ['Video Editing & Motion', 'Long-form, short-form, branded content, post-production and motion graphics.'],
  ['Web Development', 'Next.js, React, WordPress and custom web production.'],
  ['Project & Account Support', 'Clear communication, coordination and keeping client work moving.']
];

export default function CareersPage() {
  return (
    <>
      <section className="pageHero sectionLight careersHero">
        <div className="shell careersHeroGrid">
          <div>
            <Reveal y={18}>
              <p className="eyebrow">CAREERS</p>
            </Reveal>

            <Reveal delay={0.05} y={28}>
              <h1>
                Build good work.
                <br />
                <em className="serifAccent redText">With good people.</em>
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={22}>
            <div className="careersHeroSide">
              <p>
                Omni Fusions works across design, video and web. We build teams around real client needs, and we value people who communicate clearly, care about the details and can take ownership of their craft.
              </p>

              <a
                className="textLink"
                href="mailto:info@omnifusions.com?subject=Careers%20at%20Omni%20Fusions"
              >
                Introduce yourself
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="careersVisualSection sectionDark">
        <div className="shell careersVisual">
          <Image
            src="/images/agency/partnership-team-review.webp"
            alt="Creative team collaborating around a table"
            fill
            className="careersVisualImage"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          <div className="careersVisualOverlay">
            <span>REMOTE COLLABORATION · INTERNATIONAL CLIENTS</span>
            <strong>Different disciplines. One standard.</strong>
          </div>
        </div>
      </section>

      <section className="section sectionLight careersDisciplines">
        <div className="shell careersGrid">
          <Reveal y={22}>
            <div className="careersSticky">
              <p className="eyebrow">WHERE YOU COULD FIT</p>
              <h2>
                Bring your craft.
                <br />
                <em className="serifAccent redText">Keep raising the bar.</em>
              </h2>
              <p>
                Hiring depends on current project needs and capacity. Even when a specific role is not publicly listed, strong portfolios are welcome for future full-time, part-time, freelance or contract collaboration.
              </p>
            </div>
          </Reveal>

          <div className="careersRoleList">
            {disciplines.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.05} y={18}>
                <article>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionDark careersApplySection">
        <div className="shell careersApplyGrid">
          <Reveal y={22}>
            <div>
              <p className="eyebrow eyebrowLight">HOW TO REACH US</p>
              <h2>
                Show us the work
                <br />
                <em className="serifAccent">you care about.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08} y={22}>
            <div className="careersApplyCopy">
              <p>
                Send a short introduction, your portfolio or relevant work samples, your main discipline, availability, timezone and expected rate or salary range. Keep it simple—we care more about the quality of the work than a polished application deck.
              </p>
              <a
                className="button buttonLight creativeButton"
                href="mailto:info@omnifusions.com?subject=Careers%20at%20Omni%20Fusions"
              >
                <span>Send Your Portfolio</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
