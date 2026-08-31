import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from './components/ProjectCard';
import TestimonialCard from './components/TestimonialCard';
import { projectSlots, services, testimonials } from '@/data/site';

export const metadata = {
  title: 'Creative Agency for Design, Video & Web Development',
  description:
    'Omni Fusions helps ambitious businesses with premium graphic design, video editing and web development. Pakistan-based team serving clients across the US, UK, Canada, Australia and worldwide.',
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <>
      <section className="hero sectionLight">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">CREATIVE + TECHNOLOGY PARTNER</p>
            <h1>Design. Video. Web.<br /><span>One team built to move your business forward.</span></h1>
            <p className="heroLead">Omni Fusions brings graphic design, video editing and web development under one reliable team—so ambitious businesses can launch, grow and stay consistent without managing multiple freelancers.</p>
            <div className="buttonRow">
              <Link className="button buttonDark" href="/contact">Start a Project <span>↗</span></Link>
              <Link className="textLink" href="/work">Explore Our Work <span>→</span></Link>
            </div>
            <div className="heroTrust">
              <span><strong>250+</strong> clients served</span>
              <span><strong>5+</strong> years industry experience</span>
              <span><strong>Global</strong> client base</span>
            </div>
          </div>
          <div className="heroStage">
            <div className="heroOrb heroOrbOne" />
            <div className="heroOrb heroOrbTwo" />
            <div className="heroFrame heroFramePrimary">
              <span className="frameTag">WEB / PRODUCT</span>
              <div className="browserChrome"><span /><span /><span /></div>
              <div className="browserLayout">
                <div className="browserSide" />
                <div className="browserContent">
                  <div className="browserLine browserLineWide" />
                  <div className="browserLine" />
                  <div className="browserCards"><i /><i /><i /></div>
                </div>
              </div>
            </div>
            <div className="heroFrame heroFrameSmall">
              <span className="frameTag">DESIGN</span>
              <div className="posterShape"><Image src="/brand/mark.png" alt="" width={140} height={140} /></div>
            </div>
            <div className="heroFrame heroFrameVideo">
              <span className="frameTag">VIDEO</span>
              <div className="videoTimeline"><i /><i /><i /><i /></div>
              <span className="playMark">▶</span>
            </div>
            <p className="heroAssetNote">V1 visual system — replace these abstract frames with 3–5 of your strongest real projects.</p>
          </div>
        </div>
      </section>

      <section className="trustBand">
        <div className="shell trustBandInner">
          <p>Based in Pakistan. Trusted by businesses across</p>
          <div className="countryList"><span>United States</span><span>United Kingdom</span><span>Canada</span><span>Australia</span><span>Worldwide</span></div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell">
          <div className="sectionHead sectionHeadWide">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>One team. Three disciplines.<br />Built around the work your business actually needs.</h2>
            <p>We are not trying to be a 40-service agency. Our core is simple: make the brand look better, make the content perform better, and build digital experiences that support growth.</p>
          </div>
          <div className="serviceGrid">
            {services.slice(0, 3).map((service, index) => (
              <Link className="serviceCard" href={`/services/${service.slug}`} key={service.slug}>
                <div className="serviceTop"><span>0{index + 1}</span><span className="roundArrow">↗</span></div>
                <h3>{service.shortTitle}</h3>
                <p>{service.summary}</p>
                <div className="serviceTags">{service.capabilities.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionDark workSection">
        <div className="shell">
          <div className="sectionHead sectionHeadSplit darkHead">
            <div><p className="eyebrow eyebrowLight">SELECTED WORK</p><h2>Proof before promises.</h2></div>
            <p>The final launch should feature only your strongest work. These slots are intentionally stock-free and include exact guidance for the assets your designer should prepare.</p>
          </div>
          <div className="projectGrid">
            {projectSlots.slice(0, 4).map((project, index) => <ProjectCard key={project.id} project={project} large={index === 0 || index === 3} />)}
          </div>
          <div className="sectionAction"><Link href="/work" className="button buttonLight">View Work Structure <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section sectionRed partnershipSection">
        <div className="shell partnershipGrid">
          <div>
            <p className="eyebrow eyebrowLight">ONGOING PARTNERSHIP</p>
            <h2>Your extended creative team—without building one from scratch.</h2>
          </div>
          <div className="partnershipCopy">
            <p>For businesses with recurring creative needs, Omni Fusions can stay close to your brand and handle a steady flow of design, video and digital production through one team.</p>
            <div className="partnershipList">
              <span>Graphic design requests</span><span>Ongoing video editing</span><span>Campaign support</span><span>Web production</span><span>Flexible capacity</span><span>Scale as demand grows</span>
            </div>
            <Link href="/services/dedicated-creative-support" className="button buttonLight">Explore Ongoing Support <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell whyGrid">
          <div className="stickyCopy">
            <p className="eyebrow">WHY OMNI FUSIONS</p>
            <h2>Less managing.<br />More progress.</h2>
            <p>High-value clients do not only pay for execution. They pay for reliability, judgment and a team that reduces the amount they need to manage.</p>
          </div>
          <div className="reasonList">
            <article><span>01</span><div><h3>An actual team behind the work.</h3><p>Designers, editors and developers collaborate around the project instead of operating as disconnected freelancers.</p></div></article>
            <article><span>02</span><div><h3>Built around your brand.</h3><p>Your current testimonials already prove a useful strength: the team adapts to brand guidelines and feedback instead of forcing one house style.</p></div></article>
            <article><span>03</span><div><h3>Strong communication, fewer hand-holding cycles.</h3><p>Clients repeatedly mention responsiveness, professionalism, revisions and the ability to understand what is needed quickly.</p></div></article>
            <article><span>04</span><div><h3>Flexible enough to scale.</h3><p>Start with one project, continue monthly, or expand production capacity as the relationship and workload grow.</p></div></article>
          </div>
        </div>
      </section>

      <section className="numbersSection sectionDark">
        <div className="shell numberGrid">
          <div><strong>250+</strong><span>Clients served worldwide</span></div>
          <div><strong>5+</strong><span>Years of industry experience</span></div>
          <div><strong>10+</strong><span>Creative & technical specialists</span></div>
          <div><strong>4</strong><span>Core global markets + worldwide delivery</span></div>
        </div>
      </section>

      <section className="section sectionLight testimonialsSection">
        <div className="shell">
          <div className="sectionHead sectionHeadSplit">
            <div><p className="eyebrow">CLIENT FEEDBACK</p><h2>Don’t take our word for it.</h2></div>
            <p>These are curated excerpts from the verified Upwork feedback you supplied. Names are intentionally omitted here; no testimonial text is rewritten to say “Omni Fusions.”</p>
          </div>
          <div className="testimonialGrid">
            {testimonials.slice(0, 3).map((item) => <TestimonialCard key={item.category + item.quote} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section processSection">
        <div className="shell">
          <div className="sectionHead sectionHeadWide">
            <p className="eyebrow">HOW WE WORK</p>
            <h2>Straightforward from day one.</h2>
          </div>
          <div className="processGrid">
            {[
              ['01', 'Tell us what you’re building', 'Share the goal, scope, timeline and what has already been done.'],
              ['02', 'We shape the right approach', 'We clarify deliverables, team needs, milestones and the best way to execute.'],
              ['03', 'Our team gets to work', 'Production moves through the right designers, editors or developers with centralized communication.'],
              ['04', 'Review, refine and launch', 'Feedback is handled cleanly, then final files or production builds are delivered.'],
              ['05', 'Keep us around if it works', 'Move into ongoing support when recurring work makes a longer partnership more useful.']
            ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="finalCta sectionDark">
        <div className="shell finalCtaInner">
          <p className="eyebrow eyebrowLight">START A CONVERSATION</p>
          <h2>Have something worth building?</h2>
          <p>Tell us what you need, what success looks like and the budget you have in mind. We’ll quickly know whether we are a good fit.</p>
          <div className="buttonRow"><Link href="/contact" className="button buttonLight">Start a Project <span>↗</span></Link><a href="mailto:info@omnifusions.com" className="textLink textLinkLight">info@omnifusions.com <span>→</span></a></div>
        </div>
      </section>
    </>
  );
}
