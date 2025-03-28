
import React from 'react';
import { cn } from '@/lib/utils';
import { FloatNode } from '@/lib/floatAstData';
import { Card } from '@/components/ui/card';

interface FloatingNodeProps {
  node: FloatNode;
  className?: string;
  delay?: number;
  onClick?: (node: FloatNode) => void;
}

export const FloatingNode: React.FC<FloatingNodeProps> = ({ 
  node, 
  className,
  delay = 0,
  onClick 
}) => {
  const animationStyle = {
    animationDelay: `${delay}s`
  };

  const getNodeColor = () => {
    switch (node.type) {
      case 'userContext': return 'bg-cosmic-accent/80';
      case 'originPoint': return 'bg-cosmic-muted/80';
      case 'challenge': return 'bg-destructive/80';
      case 'solution': return 'bg-cosmic-highlight/80';
      case 'philosophy': return 'bg-cyan-700/80';
      default: return 'bg-cosmic-muted/60';
    }
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer p-3 border-2 border-cosmic-foreground/30 animate-float rounded-lg shadow-lg",
        getNodeColor(),
        className
      )} 
      style={animationStyle}
      onClick={() => onClick?.(node)}
    >
      <h3 className="text-cosmic-foreground font-bold text-sm md:text-base">{node.name}</h3>
      <p className="text-cosmic-foreground/80 text-xs md:text-sm truncate max-w-[20ch]">
        {node.description.slice(0, 50)}
        {node.description.length > 50 ? '...' : ''}
      </p>
    </Card>
  );
};

export const SubFloatingNode: React.FC<FloatingNodeProps> = ({ 
  node, 
  className,
  delay = 0,
  onClick 
}) => {
  const animationStyle = {
    animationDelay: `${delay}s`
  };

  return (
    <div 
      className={cn(
        "cursor-pointer p-2 border border-cosmic-foreground/30 animate-float bg-cosmic-muted/40 rounded-md text-center",
        className
      )} 
      style={animationStyle}
      onClick={() => onClick?.(node)}
    >
      <p className="text-cosmic-foreground text-xs font-medium">{node.name}</p>
    </div>
  );
};
