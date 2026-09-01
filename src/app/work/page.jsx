import ProjectCard from '../components/ProjectCard';
import { projects } from '@/data/site';

export const metadata = {
  title: 'Selected Work',
  description: 'Selected graphic design, video editing and web development work by Omni Fusions.',
  alternates: { canonical: '/work' }
};

export default function WorkPage() {
  const web = projects.filter((project) => project.service === 'Web Development');
  const design = projects.filter((project) => project.service === 'Graphic Design');
  const video = projects.filter((project) => project.service === 'Video Editing');

  return (
    <>
      <section className="pageHero sectionLight">
        <div className="shell pageHeroInner">
          <p className="eyebrow">SELECTED WORK</p>
          <h1>Work that shows what we can actually handle.</h1>
          <p>We keep this portfolio curated around commercial relevance and range: real web products, brand systems, UI/UX and the video formats our team produces repeatedly.</p>
        </div>
      </section>

      <WorkGroup eyebrow="WEB DEVELOPMENT" title="Websites and products" projects={web} />
      <WorkGroup eyebrow="GRAPHIC DESIGN" title="Brand and design systems" projects={design} light />
      <WorkGroup eyebrow="VIDEO EDITING" title="Content built for the platform" projects={video} />
    </>
  );
}

function WorkGroup({ eyebrow, title, projects, light = false }) {
  return (
    <section className={`section ${light ? 'sectionLight' : 'sectionDark'}`}>
      <div className="shell">
        <div className={`sectionHead sectionHeadSplit ${light ? '' : 'darkHead'}`}>
          <div><p className={`eyebrow ${light ? '' : 'eyebrowLight'}`}>{eyebrow}</p><h2>{title}</h2></div>
          <p>{light ? 'Selected design engagements spanning identity, UI/UX and recurring brand production.' : 'Each project page explains the context, our role and the work delivered—so the portfolio shows how the team thinks, not only what the final screen looked like.'}</p>
        </div>
        <div className="projectGrid workPageGrid">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} large={index % 4 === 0} />)}
        </div>
      </div>
    </section>
  );
}
