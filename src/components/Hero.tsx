
import { ArrowDown, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Kolluri <span className="text-blue-600">Aditya</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Computer Science Engineering Student
          </p>
          <p className="text-lg md:text-xl text-blue-600 mb-8 font-medium">
            Aspiring AI/ML Developer
          </p>
        </div>
        
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={18} />
            <span>adityaweasly169@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={18} />
            <span>8247743556</span>
          </div>
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Learn More About Me
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
          >
            Get In Touch
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
