import StartProjectForm from '../components/StartProjectForm';

export const metadata = {
  title: 'Start a Project',
  description: 'Tell Omni Fusions about your graphic design, video editing, web development or ongoing creative support project.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <section className="pageHero contactHero sectionLight"><div className="shell contactHeroGrid"><div><p className="eyebrow">START A PROJECT</p><h1>Tell us what you need.<br />We’ll know quickly if we’re a fit.</h1></div><div><p>For one-time creative projects, a budget of $500+ is usually the right starting point. Web development projects typically start at $1,000. Ongoing partnerships are scoped around monthly needs.</p><a className="textLink" href="mailto:info@omnifusions.com">info@omnifusions.com <span>→</span></a></div></div></section>
      <section className="section sectionLight"><div className="shell"><StartProjectForm /></div></section>
    </>
  );
}
