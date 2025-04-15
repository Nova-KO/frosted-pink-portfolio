
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
                  I'm a <strong className="text-pink-400">Customer Success & Technical Support Specialist</strong> with experience in providing technical support, troubleshooting, and maintaining IT systems. Currently working as a Senior Assistant Helpdesk Technician at DXC Technology.
                </p>
                <p>
                  I'm also the <strong className="text-pink-400">Co-Founder of BSH Technologies</strong>, an initiative aimed at bridging the gap between academia and industry. We help students gain exposure to corporate and business working environments.
                </p>
                <p>
                  With certifications in Google Project Management, Digital Marketing, and IT Support, I'm equipped with the skills to drive customer success through effective communication, problem-solving, and strategic collaboration.
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
                  <h4 className="text-lg font-medium">B.Tech</h4>
                  <p className="text-white/60">IES College of Engineering, Kerala, India</p>
                  <p className="text-white/60">Graduated: July 2023 (8.2 CGP)</p>
                </div>
                
                <div className="border-l-2 border-pink-500 pl-4 py-1">
                  <h4 className="text-lg font-medium">Senior Secondary</h4>
                  <p className="text-white/60">H.F.C.G.H.S.S, Kerala, India</p>
                  <p className="text-white/60">Graduated: May 2018</p>
                </div>
                
                <div className="border-l-2 border-pink-500 pl-4 py-1">
                  <h4 className="text-lg font-medium">Higher Secondary (SSLC)</h4>
                  <p className="text-white/60">S.H.C.G.H.S.S, Kerala, India</p>
                  <p className="text-white/60">Graduated: May 2016</p>
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
