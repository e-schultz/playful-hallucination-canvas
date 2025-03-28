
import React, { useState } from 'react';
import { useMawStore } from '@/lib/state/useMawStore';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * A modal dialog displaying details of a selected FloatNode
 * Supports both logical and ritual views of the node content
 */
export const NodeDetailDialog: React.FC = () => {
  const { selectedNode, setSelectedNode } = useMawStore();
  const [viewMode, setViewMode] = useState<'logic' | 'ritual'>('logic');
  
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

  return (
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
            
            <Tabs defaultValue="logic" className="mt-2">
              <TabsList className="bg-cosmic-accent/20 border border-cosmic-accent/30">
                <TabsTrigger value="logic" onClick={() => setViewMode('logic')}>Logic View</TabsTrigger>
                <TabsTrigger value="ritual" onClick={() => setViewMode('ritual')}>Ritual View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="logic">
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
              </TabsContent>
              
              <TabsContent value="ritual">
                <div className="p-4 bg-cosmic/10 rounded-lg border border-cosmic-accent/20">
                  <p className="text-cosmic-highlight font-mono">// Ritual interpretation</p>
                  <p className="font-serif text-cosmic-foreground/90 italic mt-2">
                    The {selectedNode.name} node represents {viewMode === 'ritual' ? 'a symbolic manifestation of' : ''} {selectedNode.description.toLowerCase()}
                  </p>
                  
                  {(selectedNode.attributes?.post || selectedNode.attributes?.keyMoment) && (
                    <div className="mt-4 p-3 bg-cosmic-accent/5 rounded-md border border-cosmic-accent/20">
                      <p className="text-cosmic-foreground/80 font-serif">
                        <span className="text-cosmic-highlight">∞</span> {selectedNode.attributes?.post || selectedNode.attributes?.keyMoment}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
            
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
  );
};
