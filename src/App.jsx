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
    </main>
  );
}

export default App;
