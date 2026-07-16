import "./App.css";

import Hero from "./layout/Hero";
import Projects from "./layout/Projects";
import Experience from "./layout/Experience";
import CTA from "./layout/CTA";

function App() {
  return (
    <main className="app">
      <div className="app--wrapper">
        <Hero />
        <Projects />
        <Experience />
        <CTA />
      </div>
      <footer className="footer">
        <p className="footer__text body">
          UI inspired by{" "}
          <a href="https://joyfolio.framer.website/" target="_blank">
            Unroot.design
          </a>
          . Designed and coded by Orlando Verdin.
        </p>
      </footer>
    </main>
  );
}

export default App;
