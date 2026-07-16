import "./experience.css";

const positions = [
  {
    year: "2024 – Present",
    company: "TechNova Solutions",
    position: "Software Engineer",
    description:
      "Developed scalable web applications using React, Node.js, and TypeScript. Designed REST APIs, optimized database performance, and collaborated with cross-functional teams to deliver high-quality software.",
  },
  {
    year: "2022 – 2024",
    company: "CloudPeak Technologies",
    position: "Full Stack Developer",
    description:
      "Built and maintained full-stack applications with React, Express, and PostgreSQL. Implemented authentication, improved application performance, and participated in code reviews and Agile development.",
  },
  {
    year: "2021 – 2022",
    company: "ByteWorks Inc.",
    position: "Frontend Developer",
    description:
      "Created responsive and accessible user interfaces using React, JavaScript, and Tailwind CSS. Worked closely with designers to deliver intuitive user experiences and reusable UI components.",
  },
  {
    year: "2020 – 2021",
    company: "NextGen Software",
    position: "Junior Software Engineer",
    description:
      "Contributed to the development of internal business applications using JavaScript and Node.js. Fixed bugs, implemented new features, wrote unit tests, and collaborated with senior engineers to improve code quality.",
  },
];

const Position = ({ year, company, position, description }) => {
  return (
    <div className="position">
      <span className="position__year body">{year}</span>
      <div className="position__header">
        <h3 className="position__company heading2--small">{company}</h3>
        <span className="position__position body">{position}</span>
        <p className="position__description body">{description}</p>
      </div>
    </div>
  );
};

function Experience() {
  if (positions.length > 0) {
    return (
      <section className="experience section">
        <h2 className="subtitle">EXPERIENCE</h2>
        {positions.map((position, index) => (
          <Position key={index} {...position} />
        ))}
      </section>
    );
  }
}

export default Experience;
