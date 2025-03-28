
export type FloatNode = {
  id: string;
  type: string;
  name: string;
  description: string;
  attributes?: Record<string, any>;
  subNodes?: FloatNode[];
};

export const floatAstData: FloatNode[] = [
  {
    id: "user-context",
    type: "userContext",
    name: "e_p82",
    description: "A hyperverbal autistic individual with ADHD, exploring meta-meta cognition through chaotic play and structured systems.",
    attributes: {
      neurodivergence: ["Autistic", "ADHD", "hyperverbal"],
      challenges: ["meta-meta cognition", "rapid thought generation", "cognitive overload"],
      post: "what if i am eating my own hallucinations?"
    },
    subNodes: [
      {
        id: "meta-meta",
        type: "metaMetaCognition",
        name: "Meta-Meta Cognition",
        description: "Awareness of the mechanisms of metacognitive processes, leading to cognitive noise.",
        attributes: {
          definition: "Thinking about how you think about thinking about how you think."
        }
      }
    ]
  },
  {
    id: "origin",
    type: "originPoint",
    name: "ChaoticPlay",
    description: "The genesis of FLOAT.K8s through playful, chaotic chat exploration.",
    attributes: {
      chatName: "autocorect fail analysis"
    },
    subNodes: [
      {
        id: "cats-dicks",
        type: "initialExploration",
        name: "CatsAndDicks",
        description: "Playful wordplay and humor analysis starting with 'cats and dicks'."
      },
      {
        id: "cosmic-horror",
        type: "cosmicHorrorEmergence",
        name: "EldritchConnections",
        description: "Evolution into cosmic horror themes through surreal tangents.",
        attributes: {
          keyMoment: "I don't want to consume, I just want to be held."
        }
      }
    ]
  },
  {
    id: "challenge",
    type: "challenge",
    name: "AIReinforcedBias",
    description: "LLMs amplifying cognitive overload and reinforcing existing thought patterns."
  },
  {
    id: "solution",
    type: "solution",
    name: "FLOAT.K8s",
    description: "A Kubernetes-inspired framework for structured prompt management.",
    subNodes: [
      {
        id: "core",
        type: "coreConcept",
        name: "Core",
        description: "A lightweight, modular framework for structured prompt execution and output management.",
        attributes: {
          mode: "boring"
        }
      },
      {
        id: "ritual",
        type: "extensionLayer",
        name: "RitualisticShowcase",
        description: "An optional, expressive layer for creative exploration.",
        attributes: {
          mode: "otherness"
        }
      }
    ]
  },
  {
    id: "philosophy",
    type: "philosophy",
    name: "PersonalPhilosophy",
    description: "Guiding principles shaping FLOAT.K8s's design.",
    attributes: {
      principles: ["personal notes are personal", "systems can be personal", "permeable boundaries"]
    }
  }
];
