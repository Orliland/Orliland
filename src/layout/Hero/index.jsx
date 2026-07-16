import "./hero.css";

import Skills from "../../components/Skills";

function Hero() {
  const skills = [
    "Full-Stack Development",
    "Data Structures & Algorithms",
    "System Design",
    "Product Design",
    "React Development",
    "Computer Science",
  ];
  return (
    <section className="hero section">
      <div className="hero__profile">
        <img
          src="https://placehold.co/400"
          alt="Orlando Verdin Photo"
          className="hero__image"
        />
        <div className="hero__text">
          <h2 className="hero__name heading2--small">Orlando Verdin</h2>
          <span className="hero__title body--small">Software Engineer</span>
        </div>
      </div>
      <div className="hero__description">
        <h2 className="subtitle">ABOUT</h2>
        <h1 className="hero__description-title heading1">
          Software Engineer & Systems Innovator
        </h1>
        <p className="hero__description-text body">
          I'm a passionate Software Engineer building experience in full-stack
          development, system design, and building scalable web applications.
        </p>
      </div>
      <Skills skills={skills} />
    </section>
  );
}

export default Hero;
