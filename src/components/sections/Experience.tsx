
import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Senior Assistant Helpdesk Technician",
    company: "DXC Technology",
    period: "Sep 2023 - Present",
    location: "Remote",
    description: "Providing technical support and troubleshooting for IT systems.",
    highlights: [
      "Assisting end-users with hardware and software issues, ensuring timely resolution",
      "Maintaining and troubleshooting network connectivity issues",
      "Installing and configuring software applications and updates",
      "Collaborating with cross-functional teams to resolve complex technical issues"
    ]
  },
  {
    id: 2,
    title: "Co-Founder",
    company: "BSH Technologies",
    period: "Oct 2021 - Present",
    location: "Remote",
    description: "Co-founded BSH Technologies, an initiative aimed at bridging the gap between academia and industry.",
    highlights: [
      "Providing students with exposure to corporate and business working environments",
      "Led the development of the company's vision, strategy, and operations",
      "Managing a team with 5+ members and 100+ students"
    ]
  },
  {
    id: 3,
    title: "Campus Community Manager",
    company: "Google DSC Kerala",
    period: "Jun 2022 - Jul 2023",
    location: "Kerala, India",
    description: "Co-Lead the GDSC-IES chapter as the GDSC (Google Developer Student Clubs) community manager.",
    highlights: [
      "Organizer and speaker for the IES GDSC compose camp on android development",
      "Organized and executed various technical and non-technical events, workshops, and hackathons",
      "Mentored and trained students in various technical skills",
      "Achieved Tier 1 Position in Google's Leaderboard"
    ]
  },
  {
    id: 4,
    title: "Chief Resource Officer",
    company: "IES IEDC/IIC",
    period: "Jun 2022 - Jul 2023",
    location: "Kerala, India",
    description: "Led the Innovation and Entrepreneurship Development Cell (IEDC) as the CRO, managing a team of 200+ members and 10+ executives.",
    highlights: [
      "Developed and executed various programs to promote innovation and entrepreneurship",
      "Implemented strategic plan resulting in 25% increase in membership and 30% increase in funding",
      "Managed budget of 350,000 INR and ensured efficient utilization of resources"
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
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500/80 to-pink-500/20 light-theme:from-indigo-500/80 light-theme:to-indigo-500/20 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <GlassCard className="relative md:ml-16" hoverEffect>
                {/* Timeline dot */}
                <div className="absolute left-[-38px] top-1/4 w-5 h-5 rounded-full bg-pink-500 light-theme:bg-indigo-500 hidden md:block"></div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-2 text-gradient">{exp.title}</h3>
                    <p className="text-white/80 font-medium light-theme:text-gray-800">{exp.company}</p>
                    <div className="flex items-center text-white/60 light-theme:text-gray-600 mt-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-white/60 light-theme:text-gray-600 mt-1">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-white/80 light-theme:text-gray-800 mb-4">{exp.description}</p>
                    <h4 className="text-pink-400 light-theme:text-indigo-600 font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/70 light-theme:text-gray-700">
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
