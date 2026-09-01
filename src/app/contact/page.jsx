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
          <div><p className="eyebrow">START A PROJECT</p><h1>Tell us what you need.<br />We’ll know quickly if we’re a fit.</h1></div>
          <div>
            <p>One-time creative projects are generally a better fit from around $500. Web development projects typically start at $1,000. Ongoing partnerships are scoped around monthly volume and the level of support required.</p>
            <a className="textLink" href="mailto:info@omnifusions.com">info@omnifusions.com <span>→</span></a>
          </div>
        </div>
      </section>
      <section className="section sectionLight">
        <div className="shell contactFormGrid">
          <div className="contactFormIntro"><p className="eyebrow">PROJECT DETAILS</p><h2>A useful brief gets you a useful answer.</h2><p>Share the goal, scope, budget range and timeline. You do not need a perfect specification—we can help shape the next step once we understand what the project needs to achieve.</p></div>
          <StartProjectForm />
        </div>
      </section>
    </>
  );
}
