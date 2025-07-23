
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen relative scroll-smooth">
      {/* Unicorn Studio Background Animation */}
      <div 
        data-us-project="fScayMr8Ekpd9bSLyxgl" 
        className="fixed inset-0 w-full h-full z-0"
        style={{width: '100vw', height: '100vh'}}
      ></div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <Navigation />
      <div className="snap-y snap-mandatory">
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-start">
          <Skills />
        </div>
        <div className="snap-start">
          <Projects />
        </div>
        <div className="snap-start">
          <Education />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;
