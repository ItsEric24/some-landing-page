import "./App.css";
import Brands from "./components/Brands";
import Collections from "./components/Collections";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <section className="relative">
      <NavBar />
      <section className="min-w-full">
        <Hero />
      </section>
      <section className="min-w-full pb-12">
        <Brands />
      </section>
      <section className="min-w-full bg-yellow-50">
        <Collections />
      </section>
    </section>
  );
}

export default App;
