import StartProjectForm from '../components/StartProjectForm';

export const metadata = {
  title: 'Start a Project',
  description: 'Tell Omni Fusions about your graphic design, video editing, web development or ongoing creative support project.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <section className="pageHero contactHero sectionLight">
        <div className="shell contactHeroGrid">
          <div><p className="eyebrow">START A PROJECT</p><h1>
            Tell us what you’re building.<br />
            We’ll take it from there.
          </h1></div>
          <div>
            <p>Have a project in mind? Share a little about what you’re working on and where you need support. Whether it’s a one-time project or an ongoing partnership, we’ll review the details and recommend the best next step.</p>
            <a className="textLink" href="mailto:info@omnifusions.com">info@omnifusions.com <span>→</span></a>
          </div>
        </div>
      </section>
      <section className="section sectionLight">
        <div className="shell contactFormGrid">
          <div className="contactFormIntro"><p className="eyebrow">PROJECT DETAILS</p><h2>A little context goes a long way.</h2><p>
            Tell us what you’re working on, where you need support, and what a successful outcome looks like. A rough brief is more than enough, we’ll help shape the next step from there.
          </p></div>
          <StartProjectForm />
        </div>
      </section>
    </>
  );
}
