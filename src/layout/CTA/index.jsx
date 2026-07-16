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
      {/* TODO: Become social links into components and pass as list items */}
      <ul className="cta__socials">
        <li className="cta__social">
          <a
            href="https://github.com/orliland/"
            target="_blank"
            className="cta__link body"
          >
            Github
          </a>
        </li>
        <li className="cta__social">
          <a
            href="https://linkedin.com/in/orliland/"
            target="_blank"
            className="cta__link body"
          >
            Linkedin
          </a>
        </li>
        <li className="cta__social">
          <a
            href="https://threads.com/orliland/"
            target="_blank"
            className="cta__link body"
          >
            Threads
          </a>
        </li>

        <li className="cta__social">
          <a
            href="https://orli.land/Orlando_Verdin_Resume.pdf"
            target="_blank"
            className="cta__link body"
          >
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
}

export default CTA;
