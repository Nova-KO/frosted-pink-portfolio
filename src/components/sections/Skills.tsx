
import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const skillCategories = [
  {
    id: 1,
    title: "Technical Skills",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "Bootstrap", level: 82 },
      { name: "MySQL", level: 70 },
      { name: "Troubleshooting", level: 90 },
      { name: "Manual Testing", level: 85 },
    ]
  },
  {
    id: 2,
    title: "Soft Skills",
    skills: [
      { name: "Professional Communication", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Collaboration", level: 88 },
      { name: "Problem Solving", level: 92 },
      { name: "Adaptability", level: 88 },
      { name: "Talent Acquisition", level: 85 },
    ]
  },
  {
    id: 3,
    title: "Tools & Software",
    skills: [
      { name: "Git", level: 80 },
      { name: "Jira", level: 85 },
      { name: "VS Studio", level: 82 },
      { name: "Postman", level: 75 },
      { name: "Office 365", level: 90 },
      { name: "Canva", level: 88 },
      { name: "ServiceNow", level: 85 },
      { name: "Citrix Workspace", level: 80 },
      { name: "Workday", level: 75 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-black/20">
      <div className="container mx-auto">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and tools I work with"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <GlassCard className="h-full" hoverEffect>
                <h3 className="text-xl font-semibold mb-6 text-gradient">{category.title}</h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="text-pink-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-pink-600 to-pink-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
