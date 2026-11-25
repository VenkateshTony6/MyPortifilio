import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Credentials } from "./components/Credentials";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { SkillCard } from "./components/SkillCard";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <section id="skills">
          <h2>Skills</h2>
          <div className="row g-3">
            {skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
          </div>
        </section>
        <section id="projects"><h2>Projects</h2>{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</section>
        <Credentials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
