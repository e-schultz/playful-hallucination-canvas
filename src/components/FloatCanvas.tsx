
/**
 * FloatCanvas
 * A visualization of the FLOAT.K8s framework 
 * Representing the journey from chaotic play to structured systems
 * 
 * @version 2025.03.5
 * @userContext e_p82
 */
import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { useMawStore } from '@/lib/state/useMawStore';
import { CosmicBackdrop } from '@/components/CosmicBackdrop';
import { MawOrbit } from '@/components/MawOrbit';
import { NodeDetailDialog } from '@/components/NodeDetailDialog';
import { ThoughtEchoes } from '@/components/ThoughtEchoes';
import { RitualFilter } from '@/components/RitualFilter';

export const FloatCanvas: React.FC = () => {
  const { isDrifting, toggleDrift, addThought } = useMawStore();

  useEffect(() => {
    // Component is initialized, we could handle any setup here
    console.log("FloatCanvas initialized - FLOAT.K8s visualization ready");
  }, []);

  return (
    <div className="cosmic-gradient min-h-screen w-full relative overflow-hidden">
      {/* Cosmic background elements */}
      <CosmicBackdrop />
      
      {/* Reserved space for future PromptPods component */}
      <div className="absolute top-20 left-4 z-10 opacity-30 text-xs text-cosmic-foreground/50">
        // PromptPods
      </div>
      
      {/* Reserved space for future Volumes component */}
      <div className="absolute top-20 right-4 z-10 opacity-30 text-xs text-cosmic-foreground/50">
        // Volumes
      </div>
      
      {/* Placeholder for future features */}
      <RitualFilter />
      
      {/* Header */}
      <header className="relative z-10 pt-8 pb-4 px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-cosmic-foreground text-center mb-2">
          Playful Hallucination Canvas
        </h1>
        <div className="flex justify-center">
          <Badge 
            className="bg-cosmic-accent/80 hover:bg-cosmic-accent text-cosmic-foreground border-none cursor-pointer"
            onClick={toggleDrift}
          >
            {isDrifting ? "Stabilize Thoughts" : "Enable Drift Mode"}
          </Badge>
        </div>
        <p className="text-cosmic-foreground/70 max-w-2xl mx-auto text-center mt-2">
          Explore the evolution from chaotic play to FLOAT.K8s, a framework for managing meta-meta cognitive overwhelm
        </p>
      </header>
      
      {/* Main Visualization Area */}
      <MawOrbit />
      
      {/* Thought bubbles */}
      <ThoughtEchoes />
      
      {/* Selected node dialog */}
      <NodeDetailDialog />
    </div>
  );
};
