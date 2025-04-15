import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { ExternalLink, github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses, featuring real-time analytics, inventory management, and order processing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&w=500&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveLink: "https://project-demo.com",
    repoLink: "https://github.com/username/project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and customizable workflows.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&w=500&auto=format&fit=crop",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    liveLink: "https://project-demo.com",
    repoLink: "https://github.com/username/project"
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking application that allows users to log workouts, track progress, and set fitness goals.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&w=500&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "Victory Charts"],
    liveLink: "https://project-demo.com",
    repoLink: "https://github.com/username/project"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="My Projects" 
          subtitle="Here are some of my recent works and personal projects"
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
                    <github size={18} className="mr-1" />
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
