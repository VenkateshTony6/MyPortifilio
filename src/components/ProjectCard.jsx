export function ProjectCard({ project }) {
  const initials = project.title.split(/\s+/).slice(0, 3).map((word) => word[0]).join("");

  return (
    <article>
      <details>
        <summary className="project-summary">
          <span className="project-title">{project.title}</span>
          {project.logoUrl ? (
            <img className="project-logo" src={project.logoUrl} alt="" />
          ) : (
            <span className="project-logo project-initials" aria-hidden="true">{initials}</span>
          )}
        </summary>
        <div className="project-details">
          <p>{project.description}</p>
          <ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
          {project.repositoryUrl && <a href={project.repositoryUrl}>Source code</a>}
          {project.liveUrl && <a href={project.liveUrl}>Live project</a>}
        </div>
      </details>
    </article>
  );
}
