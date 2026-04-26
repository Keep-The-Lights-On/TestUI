import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { validateEmail, cn } from "../lib/utils";
import { WaitlistModalProps } from "../types";

/**
 * Waitlist Invitation Modal
 * Captures user emails through a high-fidelity modal experience.
 */
export function WaitlistModal({ isOpen, onClose, onSuccess }: WaitlistModalProps) {
  const logoUrl = "https://lh3.googleusercontent.com/aida/ADBb0uiuUeYHL3h9kCvty1TZSZvqFF90r-9yRtOESffGe-pM0JU7mmJPFpYsRSYzxzgaoDnCtDGGbloLExOa1sSneO_RBktmwNxL9fu7wF3TI5Xp8EEmAoS5etKuFELkt3SJe2ZYWh0E2ydpeIKXfA4mgMghttb-gMa96puXKxXK-3ysfg78bTYRD1yFDXc5ub-NwZfMVhHIBbnyu1nckbXAsbkiooi-WCOHE9J-YMQQaLflnZd4i0WijB5V3tzXPN29KoHgUBETMKuIMiU";

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Clear state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    onSuccess();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] glass p-8 shadow-2xl shadow-indigo-500/20"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute right-6 top-6 p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-white/50"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Logo */}
              <div className="mb-8 flex items-center justify-center">
                <img src={logoUrl} alt="Trikal Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              </div>

              {/* Text Content */}
              <div className="mb-8 space-y-3">
                <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">Join the Inner Circle</h2>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Get early access to institutional-grade intelligence and shape the future of market analysis.
                </p>
              </div>

              {/* Form */}
              <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
                <motion.div 
                  animate={error ? { x: [-2, 2, -2, 2, 0] } : {}}
                  className={cn(
                    "relative glass border-slate-200/50 rounded-xl px-4 py-4 flex items-center justify-center group focus-within:bg-white/70 transition-all",
                    error ? "bg-rose-50/50 border-rose-200" : "bg-white/40"
                  )}
                >
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="you@company.com" 
                    className="w-full bg-transparent border-none p-0 focus:ring-0 font-medium text-slate-800 placeholder:text-slate-400 text-center outline-none"
                  />
                </motion.div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[11px] font-bold text-rose-500 uppercase tracking-wider text-center"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 hover:brightness-110 transition-all"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Footer Text */}
              <p className="mt-8 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                By joining, you agree to our terms and privacy policy.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
