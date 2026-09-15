import "./projects.css";

const projects = [
  {
    title: "TaskFlow",
    description:
      "A modern project management platform that helps teams organize tasks, track progress, and collaborate in real time with an intuitive dashboard.",
    route: "/projects/taskflow",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },


];

const Project = ({ title, description, route, coverImage }) => {
  return (
    <div className="project">
      <h3 className="project__title heading2">
        <a href={route}>{title}</a>
      </h3>
      <p className="project__description body">{description}</p>
      <a href={route}>
        <img className="project__cover" src={coverImage} alt={title} />
      </a>
      <a href={route} className="body project__link">
        View Project
      </a>
    </div>
  );
};

function Projects() {
  if (projects.length > 0) {
    return (
      <section className="projects section">
        <h2 className="subtitle">FREELANCE PROJECTS</h2>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    );
  }
}

export default Projects;
