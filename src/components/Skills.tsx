
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "Java", level: 65 },
        { name: "C", level: 65 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "IntelliJ", level: 80 },
        { name: "AI Tools", level: 85 },
      ],
    },
    {
      title: "3D & Creative Tools",
      skills: [
        { name: "Blender3D", level: 75 },
        { name: "Unity3D", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto shadow-lg shadow-cyan-400/50"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow duration-300 border border-purple-400/20"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-cyan-500/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
