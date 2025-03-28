
import React, { useState } from 'react';
import { HallucinationCanvas } from '@/components/HallucinationCanvas';
import { CosmicPromptInput } from '@/components/CosmicPromptInput';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [thoughts, setThoughts] = useState<string[]>([]);
  
  const handleSendPrompt = (prompt: string) => {
    // Add the prompt to the thoughts array
    setThoughts(prev => [...prev, prompt]);
    
    // Show a toast notification
    toast({
      title: "Prompt received",
      description: `Your cosmic thought has been added: "${prompt}"`,
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen overflow-hidden">
      <HallucinationCanvas />
      
      <div className="fixed bottom-8 w-full z-20">
        <CosmicPromptInput onSendPrompt={handleSendPrompt} />
      </div>
    </div>
  );
};

export default Index;
