import { cn } from "@/src/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Report", href: "/results" },
    { name: "Scenarios", href: "/assessment" },
    { name: "Institutions", href: "/institutions" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#7C3AED] to-purple-400 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-[#0B0B0B] rounded-sm transform rotate-45 group-hover:rotate-0 transition-transform duration-500"></div>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase font-display">C3 COMPASS</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "nav-link relative pb-1",
                  location.pathname === link.href && "text-white border-b-2 border-[#7C3AED]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              AI Engine Ready
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 glass border-b border-white/10 p-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-lg font-medium py-2",
                  location.pathname === link.href ? "text-accent" : "text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/assessment"
              onClick={() => setIsOpen(false)}
              className="block gradient-button w-full text-center py-3 rounded-xl font-semibold"
            >
              Get My Report
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
