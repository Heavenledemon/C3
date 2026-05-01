import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QUESTIONS } from "../constants/mockData";
import { useAssessment, Choice } from "../contexts/AssessmentContext";
import { useNavigate } from "react-router-dom";
import { Check, ArrowLeft, ArrowRight, CornerUpRight } from "lucide-react";
import { cn } from "../lib/utils";

export function Assessment() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { addAnswer } = useAssessment();
  const navigate = useNavigate();
  const progress = ((currentIdx + 1) / QUESTIONS.length) * 100;

  const handleSelect = (choice: Choice) => {
    addAnswer(QUESTIONS[currentIdx].id, choice);
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Small delay to feel the "AI Processing"
      setTimeout(() => {
        navigate("/results");
      }, 800);
    }
  };

  const question = QUESTIONS[currentIdx];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-10 pb-20">
      {/* Header & Progress */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="card-title text-accent">Phase 01: Behavioral</span>
            <h1 className="text-3xl font-bold tracking-tighter mt-2 uppercase font-display">Decision Deck</h1>
          </div>
          <div className="text-right">
            <span className="text-[#A1A1AA] text-[10px] font-mono font-bold tracking-widest">STEP {currentIdx + 1} / {QUESTIONS.length}</span>
          </div>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-accent shadow-[0_0_15px_rgba(124,58,237,0.4)]"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Card */}
          <div className="glass p-8 md:p-12 rounded-[2rem] border-accent/20 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 blur-3xl rounded-full" />
            
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                <span className="text-accent font-bold">{currentIdx + 1}</span>
              </div>
              <p className="text-xl md:text-3xl font-display font-medium leading-tight">
                {question.scenario}
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="grid gap-4">
            {question.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id as Choice)}
                className="group relative text-left p-6 glass rounded-2xl hover:border-accent hover:bg-accent/5 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-white transition-colors">
                    <span className="font-bold text-sm">{opt.id}</span>
                  </div>
                  <span className="text-lg font-medium pr-8">{opt.text}</span>
                </div>
                <CornerUpRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Footer */}
      <div className="mt-12 flex justify-between items-center text-secondary">
        <button 
          onClick={() => currentIdx > 0 && setCurrentIdx(currentIdx - 1)}
          className="flex items-center space-x-2 hover:text-primary transition-colors disabled:opacity-30"
          disabled={currentIdx === 0}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">Previous</span>
        </button>
        <span className="text-[10px] uppercase font-mono tracking-tighter opacity-40">Auto-saves on decision</span>
      </div>
    </div>
  );
}
