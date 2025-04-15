
import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading the frontend development team, implementing modern web applications using React, TypeScript and Next.js. Optimizing performance and ensuring accessibility compliance.",
    highlights: [
      "Reduced page load time by 40% through code splitting and lazy loading",
      "Implemented CI/CD pipeline for frontend projects",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "WebSolutions Ltd.",
    period: "2019 - 2022",
    location: "Boston, MA",
    description: "Developed responsive web interfaces and implemented user experience improvements. Worked closely with designers and backend developers to deliver high-quality products.",
    highlights: [
      "Built interactive dashboards using React and D3.js",
      "Implemented responsive designs for 15+ client websites",
      "Integrated RESTful APIs with frontend applications"
    ]
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartupHub",
    period: "2017 - 2019",
    location: "Seattle, WA",
    description: "Assisted in developing website features and maintaining existing web applications. Learned modern web development practices and frameworks on the job.",
    highlights: [
      "Created landing pages for marketing campaigns",
      "Implemented pixel-perfect designs from Figma mockups",
      "Collaborated in an agile development environment"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-black/20">
      <div className="container mx-auto">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey and positions I've held"
        />
        
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500/80 to-pink-500/20 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <GlassCard className="relative md:ml-16" hoverEffect>
                {/* Timeline dot */}
                <div className="absolute left-[-38px] top-1/4 w-5 h-5 rounded-full bg-pink-500 hidden md:block"></div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-2 text-gradient">{exp.title}</h3>
                    <p className="text-white/80 font-medium">{exp.company}</p>
                    <div className="flex items-center text-white/60 mt-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-white/60 mt-1">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-white/80 mb-4">{exp.description}</p>
                    <h4 className="text-pink-400 font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/70">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
