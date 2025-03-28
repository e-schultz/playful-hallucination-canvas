
import React from 'react';
import { FloatCanvas } from '@/components/FloatCanvas';
import { CosmicPromptInput } from '@/components/CosmicPromptInput';
import { useToast } from '@/hooks/use-toast';
import { useMawStore } from '@/lib/state/useMawStore';

const Index = () => {
  const { toast } = useToast();
  const { addThought } = useMawStore();
  
  const handleSendPrompt = (prompt: string) => {
    // Add the prompt to the thoughts in our centralized store
    addThought(prompt);
    
    // Show a toast notification
    toast({
      title: "Prompt received",
      description: `Your cosmic thought has been added: "${prompt}"`,
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen overflow-hidden">
      <FloatCanvas />
      
      <div className="fixed bottom-8 w-full z-20">
        <CosmicPromptInput onSendPrompt={handleSendPrompt} />
      </div>
    </div>
  );
};

export default Index;
