import "./projects.css";

const projects = [
  {
    title: "Verdin Handyman Services",
    description:
      "Verdin Handyman Services is a website I designed and developed for a family-owned home improvement business in San Diego. The project focuses on presenting the company's services, showcasing completed work, and providing a simple way for potential clients to request a free quote.",
    route: "/projects/verdin-services",
    coverImage:
      "/project_verdin_services.webp",
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
