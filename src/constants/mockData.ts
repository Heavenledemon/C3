export const QUESTIONS = [
  {
    id: "q1",
    scenario: "You're lead a critical project and your team is stuck between two equally valid technical directions. Time is running out. What's your move?",
    options: [
      { id: "A", text: "Pick the one that aligns with my intuition and take full responsibility." },
      { id: "B", text: "Facilitate a high-speed debate and let the group choose democratically." },
      { id: "C", text: "Analyze the long-term maintenance costs of both before deciding." }
    ]
  },
  {
    id: "q2",
    scenario: "A client asks for a feature that is profitable but goes against the core product vision. How do you handle it?",
    options: [
      { id: "A", text: "Reject it firmly; the vision is non-negotiable." },
      { id: "B", text: "Find a middle ground where the client is happy and the vision mostly intact." },
      { id: "C", text: "Implement it as a separate module to test the market demand first." }
    ]
  },
  {
    id: "q3",
    scenario: "It's Saturday night and you find a major bug in a feature you didn't even build. You're the only one online.",
    options: [
      { id: "A", text: "Open your laptop and fix it immediately. You can't sleep with a broken system." },
      { id: "B", text: "Message the owner and offer to hop on a call to help them debug." },
      { id: "C", text: "Document the bug in detail and flag it as 'Critical' for Monday morning." }
    ]
  },
  {
    id: "q4",
    scenario: "A competitor launches a feature that's better than yours. Your team feels defeated.",
    options: [
      { id: "A", text: "Double down on our unique USP that they don't have." },
      { id: "B", text: "Call an all-hands meeting to boost morale and pivot our roadmap." },
      { id: "C", text: "Reverse engineer their feature to understand how they beat us." }
    ]
  }
];

export const MOCK_RESULTS = {
  clarityScore: 78,
  archetype: "The Systems Architect",
  description: "You see the world as a series of interconnected nodes and flows. You prioritize scalability and long-term stability over short-term gains.",
  matches: [
    { career: "Software Architecture", fit: 94 },
    { career: "Venture Capitalist", fit: 82 },
    { career: "Urban Planner", fit: 75 }
  ],
  antiFit: ["Sales Representative", "Public Relations", "Data Entry"],
  plan: [
    { week: 1, task: "Master System Design Fundamentals", status: "TODO" },
    { week: 4, task: "Build a distributed microservice", status: "TODO" },
    { week: 8, task: "Contribute to a major Open Source engine", status: "TODO" },
    { week: 12, task: "Apply for Lead Engineering roles", status: "TODO" }
  ]
};
