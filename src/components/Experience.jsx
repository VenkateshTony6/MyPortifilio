import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((item) => (
        <article key={`${item.company}-${item.period}`}>
          <h3>{item.role}</h3>
          <p><strong>{item.company}</strong> · {item.location}</p>
          <p>{item.period}</p>
          <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </article>
      ))}
    </section>
  );
}
