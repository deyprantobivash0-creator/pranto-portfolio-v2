import Navbar from "./components/layout/Navbar";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Services from "./components/section/Services";
import Projects from "./components/section/Projects";
import TechStack from "./components/section/TechStack";
import Contact from "./components/section/Contact";
import Footer from "./components/layout/Footer";
import MouseGlow from "./components/ui/MouseGlow";
import BackgroundEffects from "./components/ui/BackgroundEffects";



function App() {
  return (
    <>
      <Navbar />
      <MouseGlow />
 <BackgroundEffects />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;