import "./cta.css";

import Button from "../../components/Button";

function CTA() {
  return (
    <section className="section cta">
      <div className="person">
        <img
          className="person__image"
          src="https://placehold.co/400"
          alt="Orlando Verdin Photo"
        />
        <div className="person__info">
          <span className="person__name body">Orlando Verdin</span>
          <h2 className="person__title heading1">Let's work together!</h2>
        </div>
      </div>
      <Button href="mailto:hello@orli.land">Get in Touch</Button>
    </section>
  );
}

export default CTA;
