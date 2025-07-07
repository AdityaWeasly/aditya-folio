
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [{
    title: "Enhancing Grayscale Image Colorization Using Hybrid Vision Transformer & DNN",
    description: "A cutting-edge deep learning model that transforms grayscale images into vibrant colored versions using the power of Vision Transformers combined with Deep Neural Networks. This project demonstrates advanced AI techniques in computer vision.",
    technologies: ["Python", "OpenCV", "PyTorch", "Transformers", "Computer Vision"],
    image: "/lovable-uploads/34dbe501-015a-4f24-b396-60a7e7cf9743.png",
    category: "AI/ML"
  }, {
    title: "Blog Website",
    description: "A fully responsive and modern blog website designed for seamless content publishing and enhanced user engagement. Features clean design, responsive layout, and intuitive user interface for both readers and content creators.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    category: "Web Development"
  }, {
    title: "CNN-Based Drowsiness Detection System",
    description: "A real-time safety system that uses Convolutional Neural Networks and Haar Cascades to detect driver drowsiness. This system provides immediate alerts for safety-critical applications, potentially preventing accidents.",
    technologies: ["Python", "OpenCV", "CNN", "Haar Cascades", "Real-time Processing"],
    image: "/lovable-uploads/84d62fb9-0b21-4eb3-907b-c4bd2cae19ae.png",
    category: "AI/ML",
    githubUrl: "https://github.com/AdityaWeasly/mini_porject.git"
  }];

  const handleGithubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  return <section id="projects" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-zinc-100">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Here are some of my notable projects that showcase my skills in AI/ML, web development, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>)}
                  {project.technologies.length > 3 && <span className="text-gray-500 text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button 
                    className={`flex items-center gap-2 font-medium text-sm transition-colors ${
                      project.githubUrl 
                        ? 'text-gray-600 hover:text-gray-700 cursor-pointer' 
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={() => project.githubUrl && handleGithubClick(project.githubUrl)}
                    disabled={!project.githubUrl}
                  >
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};

export default Projects;
