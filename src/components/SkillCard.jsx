export function SkillCard({ skill }) {
  return (
    <div className="col-12 col-md-4">
      <article className="skill-card" tabIndex="0">
        <div>
          <h3>{skill.name}</h3>{skill.sub && <p>{skill.sub}</p>}
          
        </div>
        <p className="skill-category">{skill.category}</p>
      </article>
    </div>
  );
}
