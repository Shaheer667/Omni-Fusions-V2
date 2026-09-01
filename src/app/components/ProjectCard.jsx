import Link from 'next/link';

export default function ProjectCard({ project, large = false }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={large ? 'projectCard projectCardLarge' : 'projectCard'}
      aria-label={`View ${project.title} case study`}
    >
      <div className={`projectVisual projectVisual${project.accent}`}>
        <div className="visualGrid" />
        <span className="projectType">{project.heroLabel}</span>
        <div className="projectMonogram" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</div>
        <div className="projectPreviewCopy">
          <span>{project.industry}</span>
          <p>{project.visualPlan?.[0] || 'Project imagery to be added'}</p>
        </div>
      </div>
      <div className="projectMeta">
        <div>
          <p>{project.discipline}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="roundArrow">↗</span>
      </div>
    </Link>
  );
}
