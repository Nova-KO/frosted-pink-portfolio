
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

const GlassCard = ({ 
  children, 
  className,
  hoverEffect = false,
  glowEffect = false
}: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card transition-all duration-300",
        hoverEffect && "hover:bg-white/10 hover:translate-y-[-5px]",
        glowEffect && "animate-pulse-glow",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
