
const Education = () => {
  const educationData = [
    {
      degree: "B.Tech – Computer Science",
      institution: "Bharath Institute of Higher Education and Research",
      period: "2021 – 2025",
      cgpa: "8.3",
      status: "Current"
    },
    {
      degree: "Intermediate – MPC",
      institution: "Narayana Junior College",
      period: "2019 – 2021",
      cgpa: "9.2",
      status: "Completed"
    },
    {
      degree: "SSC",
      institution: "Viswabharati EM High School",
      period: "2019",
      cgpa: "9.8",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-white/30 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === "Current" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {edu.status}
                      </span>
                      <span className="text-gray-500 font-medium">{edu.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 mb-4">{edu.institution}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">CGPA</span>
                      <span className="text-2xl font-bold text-blue-600">{edu.cgpa}</span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
