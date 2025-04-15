
import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Here you'll find more information about me, what I do, and my current skills"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4 text-gradient">Get to know me</h3>
              <div className="space-y-4 text-white/80">
                <p>
                  I'm a <strong className="text-pink-400">Frontend Web Developer</strong> building the front-end of websites and web applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                </p>
                <p>
                  I also like sharing content related to the stuff that I have learned over the years in web development so it can help other people of the dev community. Feel free to connect with me on my social platforms.
                </p>
                <p>
                  I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to contact me.
                </p>
              </div>
              
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </GlassCard>
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4 text-gradient">Education & Certificates</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-pink-500 pl-4 py-1">
                  <h4 className="text-lg font-medium">Computer Science, BS</h4>
                  <p className="text-white/60">University of Technology</p>
                  <p className="text-white/60">2016 - 2020</p>
                </div>
                
                <div className="border-l-2 border-pink-500 pl-4 py-1">
                  <h4 className="text-lg font-medium">Web Development Bootcamp</h4>
                  <p className="text-white/60">Code Academy</p>
                  <p className="text-white/60">2021</p>
                </div>
                
                <div className="border-l-2 border-pink-500 pl-4 py-1">
                  <h4 className="text-lg font-medium">React Advanced Certification</h4>
                  <p className="text-white/60">React Training</p>
                  <p className="text-white/60">2022</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
