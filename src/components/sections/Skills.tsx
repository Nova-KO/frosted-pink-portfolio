
import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3/Sass", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 88 },
    ]
  },
  {
    id: 2,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 70 },
    ]
  },
  {
    id: 3,
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 88 },
      { name: "Webpack", level: 75 },
      { name: "Docker", level: 65 },
      { name: "Jest", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 90 },
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
