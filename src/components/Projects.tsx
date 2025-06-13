import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'An interactive weather dashboard with data visualization, forecasting, and location-based weather tracking. Integrated with multiple weather APIs for accurate data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Express', 'Redis', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              UI/UX design, and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-500 ${
                  project.featured ? 'lg:grid lg:grid-cols-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900/80 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900/80 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm text-slate-300 rounded-full text-sm border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Live Demo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-full hover:border-slate-500 hover:text-white transition-all duration-300"
                    >
                      <Github className="mr-2 w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;