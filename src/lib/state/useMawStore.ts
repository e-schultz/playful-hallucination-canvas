
import { create } from 'zustand';
import { FloatNode, floatAstData } from '@/lib/floatAstData';

interface MawState {
  selectedNode: FloatNode | null;
  isDrifting: boolean;
  thoughtBubbles: string[];
  
  // Actions
  setSelectedNode: (node: FloatNode | null) => void;
  toggleDrift: () => void;
  addThought: (thought: string) => void;
}

export const useMawStore = create<MawState>((set) => ({
  selectedNode: null,
  isDrifting: false,
  thoughtBubbles: ["what if i am eating my own hallucinations?"],
  
  setSelectedNode: (node) => set({ selectedNode: node }),
  toggleDrift: () => set((state) => ({ isDrifting: !state.isDrifting })),
  addThought: (thought) => set((state) => ({ 
    thoughtBubbles: [...state.thoughtBubbles.slice(-4), thought] 
  })),
}));
