
import React from 'react';
import { FloatNode, floatAstData } from '@/lib/floatAstData';
import { FloatingNode, SubFloatingNode } from '@/components/FloatingNode';
import { useMawStore } from '@/lib/state/useMawStore';

interface MawOrbitProps {
  className?: string;
}

export const MawOrbit: React.FC<MawOrbitProps> = ({ className }) => {
  const { setSelectedNode, isDrifting } = useMawStore();
  
  const handleNodeClick = (node: FloatNode) => {
    setSelectedNode(node);
  };

  return (
    <div className={`relative z-10 px-4 py-8 flex flex-wrap justify-center gap-6 ${isDrifting ? 'animate-rotate-slow' : ''} ${className}`} 
         style={{transformOrigin: 'center', height: '60vh'}}>
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
  );
};
