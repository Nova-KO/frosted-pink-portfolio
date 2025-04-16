
import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const projects = [
  {
    id: 1,
    title: "Healthify+",
    description: "An open healthcare platform to increase transparency and competition, preventing hospital monopolies and empowering patients with more choices.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&w=500&auto=format&fit=crop",
    tags: ["Final Year Project", "Jun 2022 - Aug 2023"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="My Projects" 
          subtitle="Here are some of my notable projects and initiatives"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <GlassCard className="h-full flex flex-col" hoverEffect>
                <div className="relative overflow-hidden rounded-xl mb-5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-gradient">{project.title}</h3>
                
                <p className="text-white/70 dark:text-white/70 light-theme:text-gray-700 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-pink-500/20 text-pink-300 light-theme:bg-indigo-500/20 light-theme:text-indigo-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
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

export default Projects;
