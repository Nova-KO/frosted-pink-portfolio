
import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Healthify+",
    description: "An open healthcare platform to increase transparency and competition, preventing hospital monopolies and empowering patients with more choices.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&w=500&auto=format&fit=crop",
    tags: ["Final Year Project", "Jun 2022 - Aug 2023"],
    liveLink: "#",
    repoLink: "https://github.com"
  },
  {
    id: 2,
    title: "Google DSC Compose Camp",
    description: "Organized and spoke at the IES GDSC compose camp on Android development, providing hands-on training sessions for students.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&q=85&w=500&auto=format&fit=crop",
    tags: ["Android", "Compose", "Workshop"],
    liveLink: "#",
    repoLink: "https://github.com"
  },
  {
    id: 3,
    title: "IEDC Innovation Hub",
    description: "Led initiatives to promote innovation and entrepreneurship among students, resulting in increased membership and funding.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&q=85&w=500&auto=format&fit=crop",
    tags: ["Leadership", "Innovation", "Entrepreneurship"],
    liveLink: "#",
    repoLink: "https://github.com"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 mt-auto">
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-pink-500 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-pink-500 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
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
