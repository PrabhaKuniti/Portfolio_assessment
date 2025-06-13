import React from 'react';
import { Code2, Palette, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, Next.js',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe Creative Suite, Design Systems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Best Practices',
      description: 'Testing, CI/CD, Code Review, Documentation',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
                <div className="absolute inset-2 bg-slate-200 rounded-full flex items-center justify-center">
                  <img
                    src="mee2edii.jpg"
                    alt="prabha Kuniti"
                    className="w-72 h-72 rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Passionate Developer & Creative Thinker
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
               I'm a passionate and results-driven Computer Science Engineering (CSE) student with hands-on experience in full-stack development, AI integration, and chatbot applications. I specialize in building responsive web apps using HTML, CSS, JavaScript, Bootstrap, Node.js, React.js, SQL, and Python.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
               <b>ZeroWaste</b> – AI-powered food donation system with real-time maps, quantity prediction, and logistics.<br></br>

               <b>Mental Health Chatbot </b>– Hackathon-winning AI chatbot supporting student mental wellness.<br></br>

             <b>Community Carpool System</b> – Smart ride-sharing platform with booking and database integration.<br></br>

               <b> Homessy</b> – E-commerce site delivering groceries to remote areas beyond Swiggy/Zomato reach.<br></br>

              <b>Quiz App</b> – Android app with dynamic quizzes and performance tracking.<br></br>


              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-slate-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-slate-600">Lines of code</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">300+</div>
                  <div className="text-slate-600">hrs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skill.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {skill.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;