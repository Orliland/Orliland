import Carousel from "./layout/Carousel";
import ContactCard from "./layout/ContactCard";
import Hero from "./layout/Hero";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="bg-light-cream">
      <NavBar className="header" />
      <main className="flex flex-col gap-[100px] md:gap-[120px] lg:gap-[88px]">
        <Hero />
        <Carousel />
        <ContactCard />
      </main>
      <NavBar className="footer" />
    </div>
  );
}

export default App;
