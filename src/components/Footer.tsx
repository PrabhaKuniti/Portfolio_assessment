import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/PrabhaKuniti',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'www.linkedin.com/in/prabhavathi-kuniti-1a8559259',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:prabhakuniti@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Brand & Description */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200 mb-4"
              >
                Prabha<span className="text-blue-400">Kuniti</span>
              </button>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Crafting beautiful, scalable web applications with passion and precision. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-400 hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <span className="text-slate-400 group-hover:text-blue-400 transition-colors">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <div className="flex items-center text-sm">
              <span>© {currentYear} Prabha Kuniti. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>and lots of coffee.</span>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;