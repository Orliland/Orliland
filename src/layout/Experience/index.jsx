import "./experience.css";

const positions = [];

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
