import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Shield, ChevronRight, Star, X } from "lucide-react";

export function Home() {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-12 text-[#A1A1AA]"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>AI-Powered Career Intelligence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold mb-10 tracking-tighter max-w-5xl mx-auto leading-[0.9]"
          >
            Don't leave your <br /> <span className="gradient-text italic font-light">next 10 years</span> to chance.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Traditional aptitude tests are broken. C3 Compass uses behavioral scenarios and AI analysis to find where you actually belong.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/assessment" 
              className="gradient-button w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center space-x-2 group"
            >
              <span>Get My Career Report</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/institutions" 
              className="glass w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition-colors"
            >
              For Institutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why traditional tests <span className="text-accent underline decoration-accent/40">fail</span> you.</h2>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <X className="text-red-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Theoretical bias</h3>
                <p className="text-secondary text-sm">Quizzes ask what you "like", not how you "act". Real life doesn't happen in multiple choice.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <X className="text-red-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Outdated data</h3>
                <p className="text-secondary text-sm">Most systems recommend careers that won't exist in 5 years. Our AI stays ahead of the curve.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="text-6xl font-display font-black text-white/5 uppercase">Broken</span>
          </div>
          <p className="text-lg italic text-secondary border-l-2 border-accent pl-6 mb-8">
            "I took a career test in 2020. It told me to be a 'Librarian' or a 'Postal Clerk'. I'm now a Lead Product Designer. The gap is real."
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-muted rounded-full" />
            <div>
              <p className="font-bold text-sm">Anish Gupta</p>
              <p className="text-xs text-secondary">UX Lead at FinTech</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">The 3-Step Clarity Protocol</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Behavioral Deck", desc: "Navigate 12 real-world high-stake scenarios.", icon: Zap },
            { step: "02", title: "AI Diagnostics", desc: "Our engine maps your micro-decisions to market roles.", icon: Target },
            { step: "03", title: "Growth Roadmap", desc: "Receive a tactical 12-week plan to land your fit.", icon: Shield },
          ].map((item, idx) => (
            <div key={idx} className="glass p-10 rounded-3xl text-left hover:border-accent/40 transition-all group">
              <div className="text-4xl font-display font-black text-accent/20 group-hover:text-accent/40 transition-colors mb-4">{item.step}</div>
              <item.icon className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-muted/50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Join 12,000+ Seekers</h2>
              <p className="text-secondary">Used in IITs, Bits Pilani, and top Global Tech Hubs.</p>
            </div>
            <div className="flex space-x-1 mt-4 md:mt-0">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 text-yellow-500 fill-current" />)}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Rahul Deshmukh", role: "Graduating Student", text: "Finally an assessment that doesn't ask me what my favorite color is. The scenarios felt real." },
              { name: "Sarah Jenkins", role: "Career Switcher", text: "The 'Anti-fit' section was the biggest eye-opener. I was chasing roles I'd actually hate." },
              { name: "Kushal Kumar", role: "HR Strategist", text: "We use C3 Compass to help students find their true north before they even start applying." },
            ].map((t, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl">
                <p className="text-sm text-secondary mb-4">"{t.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20" />
                  <div>
                    <p className="font-bold text-xs">{t.name}</p>
                    <p className="text-[10px] text-secondary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="relative glass p-12 md:p-20 rounded-[3rem] text-center overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to find your <br /> <span className="gradient-text">True North?</span></h2>
          <Link 
            to="/assessment" 
            className="gradient-button inline-flex items-center space-x-3 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl shadow-accent/40"
          >
            <span>Start Free Assessment</span>
            <ChevronRight className="w-6 h-6" />
          </Link>
          <p className="text-secondary text-sm mt-8">Takes less than 5 minutes. No signup required.</p>
        </div>
      </section>
    </div>
  );
}
