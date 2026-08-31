export default function ProjectCard({ project, large = false }) {
  return (
    <article className={large ? 'projectCard projectCardLarge' : 'projectCard'}>
      <div className="projectVisual" aria-label={`Placeholder for ${project.title}`}>
        <div className="visualGrid" />
        <span className="projectNumber">{project.id}</span>
        <div className="assetInstruction">
          <span>ASSET PLACEHOLDER</span>
          <p>{project.note}</p>
        </div>
      </div>
      <div className="projectMeta">
        <div>
          <p>{project.service}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="roundArrow">↗</span>
      </div>
    </article>
  );
}
