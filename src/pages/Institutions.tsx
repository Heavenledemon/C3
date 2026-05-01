import { motion } from "motion/react";
import { Building2, GraduationCap, Users, ShieldCheck, Mail, Send } from "lucide-react";
import React, { useState } from "react";

export function Institutions() {
  const [formState, setFormState] = useState({ name: "", email: "", institution: "", size: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-bold mb-8"
        >
          Institutional Grade <span className="gradient-text">Counseling AI</span>
        </motion.h1>
        <p className="text-lg text-secondary mb-12">
          Help your students find high-affinity career paths based on objective behavioral data rather than flawed self-reporting.
        </p>
      </section>

      {/* Benefits */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { 
            icon: GraduationCap, 
            title: "Student Success", 
            desc: "Improve graduation-to-job conversion rates by aligning students with roles they'll actually sustain." 
          },
          { 
            icon: Users, 
            title: "Detailed Cohort Analytics", 
            desc: "Get dashboard views of your entire cohort's behavioral archetypes to tailor your placement strategy." 
          },
          { 
            icon: ShieldCheck, 
            title: "Objective Metrics", 
            desc: "Move away from subjective counseling. Use AI-driven diagnostics for data-backed career steering." 
          },
        ].map((item, idx) => (
          <div key={idx} className="glass p-10 rounded-3xl group hover:border-accent/40 transition-all">
            <item.icon className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Lead Form Section */}
      <section className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Scale your counseling impact.</h2>
          <p className="text-secondary mb-10 leading-relaxed">
            One human counselor can't spend 5 hours with every student. Our AI can. Get a pilot running in your institution in less than 48 hours.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 border-b border-white/5 pb-4">
              <Building2 className="text-accent w-6 h-6" />
              <span className="font-bold">Supports K12, Colleges, and Bootcamps</span>
            </div>
            <div className="flex items-center space-x-4 border-b border-white/5 pb-4">
              <Mail className="text-accent w-6 h-6" />
              <span className="font-bold">White-label reports available</span>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[2.5rem] border-accent/20 relative">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Request Received</h3>
              <p className="text-secondary">Our partnership lead will contact you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-bold text-secondary uppercase tracking-widest pl-1">Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-secondary uppercase tracking-widest pl-1">Work Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="you@institution.edu"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-secondary uppercase tracking-widest pl-1">Institution</label>
                  <input 
                    required
                    type="text" 
                    placeholder="College Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors"
                    value={formState.institution}
                    onChange={(e) => setFormState({...formState, institution: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-secondary uppercase tracking-widest pl-1">Cohort Size</label>
                  <select 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors appearance-none"
                    value={formState.size}
                    onChange={(e) => setFormState({...formState, size: e.target.value})}
                  >
                    <option value="" disabled className="bg-background">Select size</option>
                    <option value="100-500" className="bg-background">100-500 students</option>
                    <option value="500-2000" className="bg-background">500-2000 students</option>
                    <option value="2000+" className="bg-background">2000+ students</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="gradient-button w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 shadow-2xl shadow-accent/20 mt-4"
              >
                <span>Request Demo Packet</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
