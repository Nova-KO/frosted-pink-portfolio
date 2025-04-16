
import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Feel free to reach out to me"
        />
        
        <div className="flex justify-center items-center space-x-6">
          <a 
            href="mailto:anjali@bshtechnologies.in" 
            className="group"
          >
            <GlassCard 
              className="p-4 flex items-center justify-center hover:scale-105 transition-transform"
              hoverEffect
            >
              <Mail 
                className="text-pink-400 group-hover:text-pink-500 transition-colors light-theme:text-indigo-500 light-theme:group-hover:text-indigo-600" 
                size={32} 
              />
            </GlassCard>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/anjali-jayadevan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <GlassCard 
              className="p-4 flex items-center justify-center hover:scale-105 transition-transform"
              hoverEffect
            >
              <Linkedin 
                className="text-pink-400 group-hover:text-pink-500 transition-colors light-theme:text-indigo-500 light-theme:group-hover:text-indigo-600" 
                size={32} 
              />
            </GlassCard>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
