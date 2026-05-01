import { motion } from "motion/react";
import { MOCK_RESULTS } from "../constants/mockData";
import { 
  Trophy, 
  AlertTriangle, 
  TrendingUp, 
  Download, 
  Share2, 
  ArrowRight,
  CircleCheck,
  Circle
} from "lucide-react";
import { cn } from "../lib/utils";

export function Results() {
  const { clarityScore, archetype, description, matches, antiFit, plan } = MOCK_RESULTS;

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-8">
      {/* Main Analysis Grid */}
      <div className="grid grid-cols-12 gap-6 min-h-[600px]">
        {/* Left Col: Archetype */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-7 glass rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 p-10 text-right">
            <span className="card-title block mb-1">Clarity Score</span>
            <span className="text-6xl font-light tracking-tighter italic">
              {clarityScore}<span className="text-2xl text-accent font-bold not-italic ml-1">%</span>
            </span>
          </div>

          <div className="mt-8">
            <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Primary Archetype
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mt-6 mb-8 leading-[0.9]">
              THE <br /> 
              <span className="gradient-text uppercase font-display">{archetype.split(' ').pop()}</span>
            </h1>
            <p className="text-[#A1A1AA] text-xl max-w-md leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { label: "Systematic", val: "92%" },
              { label: "Pragmatic", val: "85%" },
              { label: "Analytical", val: "70%" },
            ].map((stat) => (
              <div key={stat.label} className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <span className="card-title text-[10px]">{stat.label}</span>
                <div className="h-1.5 w-full bg-white/10 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: stat.val }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Col: Matches & Warnings */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-[2.5rem] p-8 flex-grow"
          >
            <h3 className="card-title mb-8 flex justify-between items-center">
              <span>Top Career Matches</span>
              <span className="text-accent cursor-pointer hover:underline">→ View All</span>
            </h3>
            <div className="space-y-4">
              {matches.map((m, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">
                      {m.career.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-base">{m.career}</h4>
                      <span className="text-xs text-[#A1A1AA]">{m.fit}% Match Score</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-green-400 font-bold uppercase tracking-widest border border-green-500/20 px-2 py-1 rounded bg-green-500/5">High Fit</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-[2.5rem] p-8 border-red-500/10"
          >
            <h3 className="card-title mb-4 flex items-center gap-2">
              <span className="text-red-500 text-lg font-black">!</span> Anti-Fit Warnings
            </h3>
            <p className="text-xs text-[#A1A1AA] mb-6 leading-relaxed">
              These paths may lead to rapid burnout based on your core behavioral triggers and stress-response patterns.
            </p>
            <div className="flex flex-wrap gap-2">
              {antiFit.map((a, idx) => (
                <span key={idx} className="px-4 py-2 bg-red-500/10 text-red-300 border border-red-500/20 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                  {a}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 12-Week Action Roadmap */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-[2.5rem] p-10 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h3 className="card-title">Phase 1: Your 12-Week Action Roadmap</h3>
          <button className="bg-white text-black text-[10px] font-black px-6 py-3 rounded-xl uppercase tracking-widest hover:bg-white/90 transition-colors">
            Export Full Plan
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-[22px] left-0 w-full h-[1px] bg-white/10 -z-10" />
          
          {plan.map((step, idx) => (
            <div key={idx} className="relative z-10 space-y-4">
              <div className={cn(
                "w-11 h-11 rounded-full border-4 border-[#0B0B0B] flex items-center justify-center text-xs font-black",
                idx === 0 ? "bg-accent text-white" : "bg-white/10 text-white/50"
              )}>
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h5 className={cn(
                  "text-xs font-black uppercase tracking-wider mb-2",
                  idx === 0 ? "text-white" : "text-white/40"
                )}>
                  {step.task.split(' ').slice(0, 2).join(' ')}
                </h5>
                <p className={cn(
                  "text-[11px] leading-relaxed",
                  idx === 0 ? "text-[#A1A1AA]" : "text-[#A1A1AA]/40"
                )}>
                  {step.task}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
