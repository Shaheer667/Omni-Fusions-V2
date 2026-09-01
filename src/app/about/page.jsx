import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Meet Omni Fusions, a Pakistan-based creative and technology agency serving businesses worldwide.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <>
      <section className="pageHero sectionLight">
        <div className="shell pageHeroInner">
          <p className="eyebrow">ABOUT OMNI FUSIONS</p>
          <h1>A growing team built around dependable creative and technical work.</h1>
          <p>Omni Fusions is a Pakistan-based agency serving businesses worldwide through graphic design, video editing and web development.</p>
        </div>
      </section>

      <section className="aboutVisual sectionDark">
        <div className="shell aboutVisualInner">
          <p>OMNI FUSIONS · PAKISTAN</p>
          <h2>Real team. Real workspace. Global delivery.</h2>
          <span>Team / studio visual</span>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell aboutStoryGrid">
          <div><p className="eyebrow">THE STORY</p><h2>Built through client work, not a pitch deck.</h2></div>
          <div>
            <p>Omni Fusions has been operating for around 1.5 years, led by founders with more than five years of hands-on industry experience. During that time, the team has served roughly 250+ clients, with much of the early growth coming through Upwork.</p>
            <p>Most of those relationships have been international—particularly clients in the United States, along with businesses in the UK, Canada, Australia and other markets. That experience shaped the way we work today: communicate clearly, understand the brief quickly and make it easy for clients to keep the same team when the first project goes well.</p>
            <p>Our current team includes designers, video editors and developers, with the operational room to expand as workload grows. The goal is not to look large for the sake of it. It is to stay responsive while building enough capacity to support serious, ongoing accounts.</p>
          </div>
        </div>
      </section>

      <section className="numbersSection sectionDark">
        <div className="shell numberGrid">
          <div><strong>3</strong><span>Graphic designers</span></div>
          <div><strong>5</strong><span>Video editors</span></div>
          <div><strong>3</strong><span>Developers</span></div>
          <div><strong>250+</strong><span>Clients served</span></div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell aboutValuesGrid">
          <div><p className="eyebrow">HOW WE THINK</p><h2>Quality matters. So does being easy to work with.</h2></div>
          <div className="reasonList compactReasons">
            <article><span>01</span><div><h3>Earn the next project.</h3><p>We treat the first engagement as the beginning of a relationship, not a transaction to rush through.</p></div></article>
            <article><span>02</span><div><h3>Make feedback useful.</h3><p>Every review cycle should improve the current deliverable and make the next one easier to execute.</p></div></article>
            <article><span>03</span><div><h3>Scale without losing control.</h3><p>As workload grows, we add the right capacity without making the client rebuild communication from scratch.</p></div></article>
          </div>
        </div>
      </section>

      <section className="finalCta sectionRed">
        <div className="shell finalCtaInner">
          <p className="eyebrow eyebrowLight">WORK WITH US</p>
          <h2>Need a team that can grow with the workload?</h2>
          <p>Start with the project in front of you. If the fit is right, we can build from there.</p>
          <Link href="/contact" className="button buttonLight">Start a Project <span>↗</span></Link>
        </div>
      </section>
    </>
  );
}
