import ContactCard from "./layout/ContactCard";
import NavBar from "./layout/Navbar";

function App() {
  return (
    <div className="bg-light-cream">
      <NavBar className="header" />
      <ContactCard />
      <NavBar className="footer" />
    </div>
  );
}

export default App;
