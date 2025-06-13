import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-40 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <ThreeScene />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Prabha <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Kuniti</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            <div className="inline-block">
              <span className="text-blue-400 font-medium">Full Stack Developer</span>
              <span className="text-slate-400 mx-2">•</span>
              <span className="text-purple-400 font-medium">Creative Problem Solver</span>
            </div>
          </div>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting beautiful, scalable web applications with modern technologies. 
            Passionate about creating intuitive user experiences and robust backend systems.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a
            href="https://github.com/PrabhaKuniti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-400 hover:bg-slate-700/50 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="www.linkedin.com/in/prabhavathi-kuniti-1a8559259"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-400 hover:bg-slate-700/50 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:prabhakuniti@gmail.com"
            className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-400 hover:bg-slate-700/50 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            Explore My Work
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;