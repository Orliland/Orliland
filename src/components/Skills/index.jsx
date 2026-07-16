import "./skills.css";

function Skills({ skills }) {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <span className="skill body--small" key={index}>
          {skill}
        </span>
      ))}
    </div>
  );
}

export default Skills;
