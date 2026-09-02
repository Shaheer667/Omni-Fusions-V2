import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project, large = false }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={large ? 'projectCard projectCardLarge' : 'projectCard'}
      aria-label={`View ${project.title} case study`}
    >
      <div
        className={
          project.image
            ? 'projectVisual projectImageVisual'
            : `projectVisual projectVisual${project.accent}`
        }
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — ${project.discipline || project.type || 'project'}`}
            fill
            className="projectWorkImage"
            sizes={
              large
                ? '(max-width: 768px) 100vw, 90vw'
                : '(max-width: 768px) 100vw, 50vw'
            }
          />
        ) : (
          <>
            <div className="visualGrid" />

            <span className="projectType">
              {project.heroLabel}
            </span>

            <div
              className="projectMonogram"
              aria-hidden="true"
            >
              {project.title.slice(0, 2).toUpperCase()}
            </div>

            <div className="projectPreviewCopy">
              <span>{project.industry}</span>

              <p>
                {project.visualPlan?.[0] ||
                  'Project imagery to be added'}
              </p>
            </div>
          </>
        )}
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