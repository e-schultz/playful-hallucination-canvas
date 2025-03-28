
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Terminal } from 'lucide-react';

interface CosmicPromptInputProps {
  onSendPrompt: (prompt: string) => void;
}

export const CosmicPromptInput: React.FC<CosmicPromptInputProps> = ({ onSendPrompt }) => {
  const [prompt, setPrompt] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSendPrompt(prompt);
      setPrompt('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto mt-6">
      <div className="relative flex items-center">
        <Terminal className="absolute left-3 text-cosmic-accent/70" size={18} />
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt or thought..."
          className="pl-10 pr-16 py-6 bg-cosmic/10 backdrop-blur-md border-cosmic-accent/30 
                     text-cosmic-foreground placeholder:text-cosmic-foreground/50 rounded-full
                     focus-visible:ring-cosmic-accent/50"
        />
        <Button 
          type="submit" 
          size="sm"
          className="absolute right-2 bg-cosmic-accent/70 hover:bg-cosmic-accent border-none"
        >
          <Send size={18} />
        </Button>
      </div>
    </form>
  );
};
