
import React from 'react';
import { useMawStore } from '@/lib/state/useMawStore';
import { Badge } from '@/components/ui/badge';

/**
 * Displays thought echoes as floating bubbles with optional tags
 * Connects to the central Maw concept by visualizing recursive thought patterns
 */
export const ThoughtEchoes: React.FC = () => {
  const { thoughtBubbles } = useMawStore();
  
  // Simple algorithm to assign a theme tag based on content
  const getThoughtTag = (thought: string): { tag: string; color: string } | null => {
    const lowerThought = thought.toLowerCase();
    
    if (lowerThought.includes('want') || lowerThought.includes('held') || lowerThought.includes('hug')) {
      return { tag: 'longing', color: 'bg-cosmic-highlight/20' };
    }
    if (lowerThought.includes('myself') || lowerThought.includes('loop') || lowerThought.includes('hallucination')) {
      return { tag: 'recursion', color: 'bg-cosmic-muted/20' };
    }
    if (lowerThought.includes('what if') || lowerThought.includes('maybe') || lowerThought.includes('wonder')) {
      return { tag: 'doubt', color: 'bg-cosmic-accent/20' };
    }
    
    return null;
  };

  return (
    <div className="mt-8 relative z-10 px-4 max-w-3xl mx-auto space-y-4">
      {thoughtBubbles.map((thought, index) => {
        const tag = getThoughtTag(thought);
        
        return (
          <div 
            key={index} 
            className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl w-fit max-w-md mx-auto relative thought-bubble ${
              index === thoughtBubbles.length - 1 ? 'animate-pulse-glow' : ''
            }`}
          >
            <p className="text-cosmic-foreground italic">"{thought}"</p>
            
            {tag && (
              <Badge 
                className={`absolute -top-2 -right-2 ${tag.color} border border-cosmic-accent/30 text-cosmic-foreground text-xs`}
              >
                {tag.tag}
              </Badge>
            )}
          </div>
        );
      })}
    </div>
  );
};
