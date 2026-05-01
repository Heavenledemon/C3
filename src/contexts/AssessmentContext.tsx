import { createContext, useContext, useState, ReactNode } from "react";

export type Choice = "A" | "B" | "C";

export interface Question {
  id: string;
  scenario: string;
  options: {
    id: Choice;
    text: string;
  }[];
}

interface AssessmentState {
  answers: Record<string, Choice>;
  currentStep: number;
  isComplete: boolean;
  addAnswer: (questionId: string, choice: Choice) => void;
  reset: () => void;
}

const AssessmentContext = createContext<AssessmentState | undefined>(undefined);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<string, Choice>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const addAnswer = (questionId: string, choice: Choice) => {
    setAnswers((prev) => ({ ...prev, [questionId]: choice }));
    // In a real app we'd have a fixed length questions array
  };

  const reset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsComplete(false);
  };

  return (
    <AssessmentContext.Provider value={{ answers, currentStep, isComplete, addAnswer, reset }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) throw new Error("useAssessment must be used within AssessmentProvider");
  return context;
}
