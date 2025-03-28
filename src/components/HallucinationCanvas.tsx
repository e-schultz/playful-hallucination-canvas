
import React, { useState, useEffect } from 'react';
import { FloatNode, floatAstData } from '@/lib/floatAstData';
import { FloatingNode, SubFloatingNode } from '@/components/FloatingNode';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const HallucinationCanvas: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<FloatNode | null>(null);
  const [thoughtBubbles, setThoughtBubbles] = useState<string[]>([]);
  const [isDrifting, setIsDrifting] = useState(false);
  
  const handleNodeClick = (node: FloatNode) => {
    setSelectedNode(node);
    
    // Add a thought bubble when a node is clicked
    if (node.attributes?.post || node.attributes?.keyMoment) {
      const thought = node.attributes.post || node.attributes.keyMoment;
      setThoughtBubbles(prev => [...prev.slice(-4), thought]);
    }
  };
  
  const renderAttributes = (attributes?: Record<string, any>) => {
    if (!attributes) return null;
    
    return (
      <div className="mt-4 space-y-2">
        {Object.entries(attributes).map(([key, value]) => {
          // Skip rendering certain attributes
          if (['keyMoment', 'post'].includes(key)) return null;
          
          // Handle different value types
          if (Array.isArray(value)) {
            return (
              <div key={key} className="flex flex-wrap gap-2">
                <span className="text-cosmic-accent font-semibold">{key}:</span>
                <div className="flex flex-wrap gap-1">
                  {value.map((item, i) => (
                    <Badge key={i} variant="outline" className="bg-cosmic-muted/20 text-cosmic-foreground">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          }
          
          return (
            <div key={key} className="flex gap-2">
              <span className="text-cosmic-accent font-semibold">{key}:</span>
              <span className="text-cosmic-foreground/90">{value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const toggleDrift = () => {
    setIsDrifting(!isDrifting);
  };
  
  useEffect(() => {
    // Add initial thought bubble
    setThoughtBubbles(["what if i am eating my own hallucinations?"]);
  }, []);

  return (
    <div className="cosmic-gradient min-h-screen w-full relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-cosmic-accent/20 animate-pulse-glow"></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 rounded-full bg-cosmic-highlight/10 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-16 h-16 rounded-full bg-cosmic-muted/15 animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 pt-8 pb-4 px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-cosmic-foreground text-center mb-2">
          Playful Hallucination Canvas
        </h1>
        <div className="flex justify-center">
          <Badge 
            className="bg-cosmic-accent/80 hover:bg-cosmic-accent text-cosmic-foreground border-none"
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
      <div className={`relative z-10 px-4 py-8 flex flex-wrap justify-center gap-6 ${isDrifting ? 'animate-rotate-slow' : ''}`} style={{transformOrigin: 'center', height: '60vh'}}>
        {/* Position nodes in a circular pattern */}
        {floatAstData.map((node, index) => {
          const angle = (index / floatAstData.length) * Math.PI * 2;
          const radius = 150;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div 
              key={node.id} 
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                left: 'calc(50% - 60px)',
                top: 'calc(50% - 60px)',
              }}
            >
              <FloatingNode 
                node={node} 
                delay={index * 0.5} 
                onClick={handleNodeClick} 
                className="w-[120px]"
              />
              
              {/* Sub nodes */}
              {node.subNodes && node.subNodes.map((subNode, subIndex) => {
                const subAngle = angle + ((subIndex + 1) / (node.subNodes!.length + 1)) * 0.8 - 0.4;
                const subRadius = 80;
                const subX = Math.cos(subAngle) * subRadius;
                const subY = Math.sin(subAngle) * subRadius;
                
                return (
                  <div
                    key={subNode.id}
                    className="absolute"
                    style={{
                      transform: `translate(${subX}px, ${subY}px)`,
                      width: '80px',
                    }}
                  >
                    <SubFloatingNode
                      node={subNode}
                      delay={(index + subIndex) * 0.3}
                      onClick={handleNodeClick}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        
        {/* Center element */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="hexagon w-20 h-20 bg-cosmic-accent animate-pulse-glow flex items-center justify-center">
            <span className="text-cosmic-foreground font-bold">FLOAT.K8s</span>
          </div>
        </div>
      </div>
      
      {/* Thought bubbles */}
      <div className="mt-8 relative z-10 px-4 max-w-3xl mx-auto space-y-4">
        {thoughtBubbles.map((thought, index) => (
          <div 
            key={index} 
            className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl w-fit max-w-md mx-auto relative thought-bubble ${
              index === thoughtBubbles.length - 1 ? 'animate-pulse-glow' : ''
            }`}
          >
            <p className="text-cosmic-foreground italic">"{thought}"</p>
          </div>
        ))}
      </div>
      
      {/* Selected node dialog */}
      <Dialog open={!!selectedNode} onOpenChange={(open) => !open && setSelectedNode(null)}>
        <DialogContent className="bg-void-light text-cosmic-foreground border-cosmic-accent/30 max-w-lg">
          {selectedNode && (
            <>
              <DialogHeader>
                <DialogTitle className="text-cosmic-accent">{selectedNode.name}</DialogTitle>
                <Badge variant="outline" className="w-fit mt-1 bg-cosmic-muted/20">
                  {selectedNode.type}
                </Badge>
              </DialogHeader>
              
              <DialogDescription className="text-cosmic-foreground/90">
                {selectedNode.description}
              </DialogDescription>
              
              {(selectedNode.attributes?.post || selectedNode.attributes?.keyMoment) && (
                <div className="mt-2 p-3 bg-cosmic-accent/10 rounded-md border border-cosmic-accent/30">
                  <p className="text-cosmic-foreground italic">
                    "{selectedNode.attributes?.post || selectedNode.attributes?.keyMoment}"
                  </p>
                </div>
              )}
              
              <Separator className="bg-cosmic-accent/30 my-2" />
              
              {renderAttributes(selectedNode.attributes)}
              
              <div className="flex justify-end mt-4">
                <Button 
                  variant="outline" 
                  className="bg-cosmic-accent/20 hover:bg-cosmic-accent/40 text-cosmic-foreground border-cosmic-accent/30"
                  onClick={() => setSelectedNode(null)}
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
