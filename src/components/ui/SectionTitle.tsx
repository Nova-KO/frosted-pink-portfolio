
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  isAnimated?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  className,
  isAnimated = true 
}: SectionTitleProps) => {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 
        className={cn(
          "text-3xl md:text-4xl font-bold mb-3 pink-glow",
          isAnimated && "animate-fade-in"
        )}
      >
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p 
          className={cn(
            "text-lg text-white/60 max-w-2xl mx-auto",
            isAnimated && "animate-fade-in animate-delay-100"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
