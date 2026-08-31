import ProjectCard from '../components/ProjectCard';
import { projectSlots } from '@/data/site';

export const metadata = {
  title: 'Selected Work',
  description: 'Selected graphic design, video editing and web development work by Omni Fusions.',
  alternates: { canonical: '/work' }
};

export default function WorkPage() {
  return (
    <>
      <section className="pageHero sectionLight"><div className="shell pageHeroInner"><p className="eyebrow">SELECTED WORK</p><h1>A portfolio should prove range without looking random.</h1><p>This V1 intentionally uses structured placeholders instead of stock imagery. Replace each slot with a real project chosen for quality, commercial relevance and range.</p></div></section>
      <section className="section sectionDark"><div className="shell projectGrid workPageGrid">{projectSlots.map((project, index) => <ProjectCard key={project.id} project={project} large={index % 3 === 0} />)}</div></section>
      <section className="section sectionLight"><div className="shell editorialNote"><p className="eyebrow">CASE STUDY RULE</p><h2>Do not turn this into a gallery of everything you have ever made.</h2><p>Launch with roughly 15–20 curated projects, then turn the best 6–8 into deeper case studies: client context, challenge, work, outcome, testimonial and related service CTA.</p></div></section>
    </>
  );
}
