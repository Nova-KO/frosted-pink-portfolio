import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 lg:px-24"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in">
          <p className="text-pink-500 font-medium mb-2">Hi there, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/80 mb-6">
            I build things for the web
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-xl">
            I'm a web developer specializing in building exceptional digital experiences.
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          
          <div className="flex items-center space-x-4 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="p-2 text-white/70 hover:text-pink-500 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
              className="p-2 text-white/70 hover:text-pink-500 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
              className="p-2 text-white/70 hover:text-pink-500 transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors"
          >
            Learn more about me
          </a>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <GlassCard className="p-2 max-w-md" glowEffect>
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&w=500&auto=format&fit=crop" 
                alt="John Doe" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent opacity-60"></div>
            </div>
          </GlassCard>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-pink-500 transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
