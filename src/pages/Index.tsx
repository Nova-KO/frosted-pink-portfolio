
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-fade-in');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for elements in viewport
    setTimeout(handleScroll, 100);
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
