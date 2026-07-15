import "./App.css";

import Hero from "./layout/Hero";
import Experience from "./layout/Experience";

function App() {
  return (
    <main className="app">
      <div className="app--wrapper">
        <Hero />
        <Experience />
      </div>
    </main>
  );
}

export default App;
