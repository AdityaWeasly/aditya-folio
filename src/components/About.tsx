const About = () => {
  return <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-zinc-400">
              I'm a passionate Computer Science Engineering student at Bharath Institute of Higher Education and Research, 
              graduating in 2025 with a CGPA of 8.3. My journey in technology is driven by an insatiable curiosity 
              about artificial intelligence and machine learning.
            </p>
            
            <p className="text-lg leading-relaxed text-zinc-400">
              I love solving real-world problems using a creative blend of technology and innovation. 
              Whether it's building intelligent systems, developing web applications, or exploring computer vision, 
              I approach each project with enthusiasm and dedication.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Current CGPA</h3>
                <p className="text-2xl font-bold text-blue-600">8.3</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Graduation</h3>
                <p className="text-2xl font-bold text-blue-600">2025</p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Strengths</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Positive Attitude</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Hardworking Nature</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Strong Social Skills</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Creative Problem Solving</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Hobbies & Interests</h3>
            <div className="flex flex-wrap gap-2">
              {["Chess", "Badminton", "Video Games"].map(hobby => <span key={hobby} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {hobby}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;