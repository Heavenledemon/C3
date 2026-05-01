import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { motion } from "motion/react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7C3AED] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#7C3AED] opacity-5 rounded-full blur-[100px] pointer-events-none" />
      
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow z-10"
      >
        {children}
      </motion.main>
      
      <footer className="py-12 border-t border-white/5 bg-[#0B0B0B] z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#A1A1AA] text-[10px] uppercase tracking-[0.2em]">
            © 2026 C3 Compass. Precision career diagnostics.
          </p>
        </div>
      </footer>
    </div>
  );
}
