import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Meet Omni Fusions, a Pakistan-based creative and technology agency serving businesses worldwide.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <>
      <section className="pageHero sectionLight"><div className="shell pageHeroInner"><p className="eyebrow">ABOUT OMNI FUSIONS</p><h1>A growing team built around doing the work well.</h1><p>Omni Fusions has been operating for around 1.5 years, led by founders with more than five years of hands-on industry experience.</p></div></section>
      <section className="aboutVisual sectionDark"><div className="shell aboutVisualInner"><p>TEAM / OFFICE ASSET PLACEHOLDER</p><h2>Use a real photo or short cinematic clip from the Omni Fusions office—not stock people in a meeting room.</h2><span>Recommended: 16:9 landscape, natural lighting, team actually working.</span></div></section>
      <section className="section sectionLight"><div className="shell aboutStoryGrid"><div><p className="eyebrow">THE STORY</p><h2>Started on Upwork. Built to become bigger than a profile.</h2></div><div><p>In its first 1.5 years, Omni Fusions has mainly grown through Upwork, serving roughly 250+ clients—many in the United States, plus clients across the UK, Canada, Australia and other markets.</p><p>The next stage is different: build a direct agency brand, attract higher-value engagements and develop longer relationships with businesses that need dependable creative and technical support.</p><p>Today the team includes designers, video editors and developers, with room and operational capacity to expand as workload grows.</p></div></div></section>
      <section className="numbersSection sectionDark"><div className="shell numberGrid"><div><strong>3</strong><span>Graphic designers</span></div><div><strong>5</strong><span>Video editors</span></div><div><strong>3</strong><span>Developers</span></div><div><strong>250+</strong><span>Clients served</span></div></div></section>
      <section className="finalCta sectionRed"><div className="shell finalCtaInner"><p className="eyebrow eyebrowLight">WORK WITH US</p><h2>Need a team that can grow with the workload?</h2><p>Start with the project in front of you. If the fit is right, we can build from there.</p><Link href="/contact" className="button buttonLight">Start a Project <span>↗</span></Link></div></section>
    </>
  );
}
