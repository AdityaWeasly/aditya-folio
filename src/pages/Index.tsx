
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 scroll-smooth">
      {/* Unicorn Studio Animation */}
      <iframe 
        src="https://embed.unicorn.studio/fScayMr8Ekpd9bSLyxgl" 
        width="100%" 
        height="600" 
        frameBorder="0" 
        allowFullScreen
        className="absolute top-0 left-0 z-0"
      ></iframe>
      
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
