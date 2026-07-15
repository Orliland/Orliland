import "./projects.css";

const projects = [
  // {
  //   title: "project titile",
  //   description: "project description",
  //   route: "project route",
  //   coverImage: "project url",
  // },
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
