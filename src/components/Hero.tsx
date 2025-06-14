import { Mail, Phone } from "lucide-react";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile Image and Name Side by Side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8">
            {/* Profile Image - Larger */}
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/50 hover:shadow-cyan-400/80 transition-all duration-300 flex-shrink-0">
              <img src="/lovable-uploads/d56d9f2e-d3ef-4fcc-842f-601705afe09a.png" alt="Kolluri Aditya" className="w-full h-full object-cover" />
            </div>
            
            {/* Name and Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Kolluri <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Aditya</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Computer Science Engineering Student
              </p>
              <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-8 font-medium">Aspiring Software Developer</p>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={18} className="text-cyan-400" />
            <span>adityaweasly169@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={18} className="text-purple-400" />
            <span>8247743556</span>
          </div>
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50">
            Learn More About Me
          </a>
          <a href="#contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200 font-medium shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50">
            Get In Touch
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;