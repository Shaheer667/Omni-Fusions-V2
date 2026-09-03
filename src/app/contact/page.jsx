import { ArrowUpRight } from 'lucide-react';

import StartProjectForm from '../components/StartProjectForm';
import Reveal from '../components/Reveal';


export const metadata = {
  title: 'Start a Project',
  description:
    'Tell Omni Fusions about your graphic design, video editing, web development or ongoing creative support project.',
  alternates: {
    canonical: '/contact'
  }
};


const nextSteps = [
  {
    title: 'Share the context',
    text:
      'Tell us what you need, where the project currently stands and anything useful we should know.'
  },
  {
    title: 'We review the fit',
    text:
      'We’ll look at the scope, requirements and the kind of support that makes the most sense.'
  },
  {
    title: 'Shape the next step',
    text:
      'If there’s a fit, we’ll align on scope, timing and how we should move the project forward.'
  }
];


export default function ContactPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pageHero contactHero sectionLight">

        <div className="shell contactPremiumHeroGrid">

          <div className="contactPremiumHeading">

            <Reveal y={18}>
              <p className="eyebrow">
                START A PROJECT
              </p>
            </Reveal>


            <Reveal
              delay={0.05}
              y={28}
            >
              <h1>
                Tell us what
                <br />
                you’re working on.
                <br />

                <em className="serifAccent redText">
                  We’ll take it from there.
                </em>
              </h1>
            </Reveal>

          </div>


          <Reveal
            delay={0.12}
            y={22}
          >
            <div className="contactPremiumHeroSide">

              <p>
                Have a project in mind? Share a little about
                what you’re working on and where you need
                support. One project or an ongoing partnership,
                we’ll review the details and recommend the most
                practical next step.
              </p>


              <div className="contactHeroTags">

                <span>
                  Graphic Design
                </span>

                <span>
                  Video Editing
                </span>

                <span>
                  Web Development
                </span>

                <span>
                  Ongoing Support
                </span>

              </div>


              <a
                className="contactEmailLink"
                href="mailto:info@omnifusions.com"
              >
                info@omnifusions.com

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                />
              </a>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FORM
      ===================================================== */}

      <section className="section sectionLight contactProjectSection">

        <div className="shell contactPremiumGrid">

          {/* LEFT */}

          <div className="contactProjectIntro">

            <Reveal y={22}>
              <div>

                <div className="sectionKicker">
                  <p className="eyebrow">
                    PROJECT DETAILS
                  </p>
                </div>

                <h2>
                  A little context
                  <br />

                  <em className="serifAccent redText">
                    goes a long way.
                  </em>
                </h2>


                <p className="contactIntroCopy">
                  You don’t need a polished brief.
                  Tell us what you know, what you need
                  help with and what a successful outcome
                  would look like. We can shape the rest
                  together.
                </p>

              </div>
            </Reveal>


            {/* WHAT HAPPENS NEXT */}

            <Reveal
              delay={0.08}
              y={20}
            >
              <div className="contactNextSteps">

                <p className="contactStepsLabel">
                  WHAT HAPPENS NEXT
                </p>

                {nextSteps.map((step, index) => (
                  <div
                    className="contactStep"
                    key={step.title}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    <div>
                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.text}
                      </p>
                    </div>

                  </div>
                ))}

              </div>
            </Reveal>

          </div>


          {/* FORM */}

          <Reveal
            delay={0.1}
            y={28}
          >
            <div className="contactFormPanel">

              <div className="contactFormPanelTop">

                <div>
                  <span>
                    PROJECT ENQUIRY
                  </span>

                  <strong>
                    Tell us about the work.
                  </strong>
                </div>

                <p>
                  Fields marked * are required.
                </p>

              </div>


              <StartProjectForm />

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          REASSURANCE
      ===================================================== */}

      <section className="contactClosing sectionDark">

        <div className="shell contactClosingGrid">

          <Reveal y={20}>
            <p className="eyebrow eyebrowLight">
              ONE TEAM, MULTIPLE DISCIPLINES
            </p>
          </Reveal>


          <Reveal
            delay={0.06}
            y={24}
          >
            <h2>
              Start with one need.
              <br />

              <em className="serifAccent">
                Build from there.
              </em>
            </h2>
          </Reveal>


          <Reveal
            delay={0.1}
            y={18}
          >
            <p>
              Many relationships start with one website,
              one campaign, one video or one design brief.
              When the fit works, the same team can stay
              close as the workload grows.
            </p>
          </Reveal>

        </div>

      </section>
    </>
  );
}