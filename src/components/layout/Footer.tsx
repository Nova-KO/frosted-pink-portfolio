
import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 px-6 md:px-12 bg-black/40 backdrop-blur-md light-theme:bg-white/40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold pink-glow">
              <span className="text-gradient">Anjali Jayadevan</span>
            </a>
            <p className="text-white/60 light-theme:text-gray-600 mt-2 text-sm">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
            <p className="text-white/60 light-theme:text-gray-600 mt-1 text-sm">
              India | <a href="mailto:anjali@bshtechnologies.in" className="hover:text-pink-400 light-theme:hover:text-indigo-600 transition-colors">anjali@bshtechnologies.in</a>
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-pink-500 light-theme:text-gray-600 light-theme:hover:text-indigo-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-pink-500 light-theme:text-gray-600 light-theme:hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-pink-500 light-theme:text-gray-600 light-theme:hover:text-indigo-600 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={cn(
              "flex items-center justify-center w-10 h-10 bg-pink-600 light-theme:bg-indigo-600 rounded-full text-white",
              "hover:bg-pink-700 light-theme:hover:bg-indigo-700 transition-colors focus:outline-none"
            )}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
