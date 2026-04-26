import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { validateEmail, cn } from "../lib/utils";
import { SubmissionFlowProps } from "../types";

/**
 * Hero Section
 * Main entry point for user conversion via the waitlist form.
 */
export function Hero({ onSuccess }: SubmissionFlowProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("required");
      return;
    }
    setError("");
    onSuccess();
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />

      {/* Dynamic Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: [1, 1.02, 1],
          boxShadow: ["0 0 0px rgba(45, 212, 191, 0)", "0 0 20px rgba(45, 212, 191, 0.3)", "0 0 0px rgba(45, 212, 191, 0)"]
        }}
        transition={{ 
          opacity: { duration: 0.6 },
          y: { duration: 0.6 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="mb-12 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] relative overflow-hidden"
      >
        <Rocket className="w-3 h-3 relative z-10" />
        <span className="relative z-10">Launching Soon - Join the Waitlist</span>
        <motion.div 
          className="absolute inset-x-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          animate={{ x: ['-100%', '350%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        />
      </motion.div>

      <div className="text-center max-w-4xl mx-auto z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
        >
          Master the Market’s Future with <span className="relative inline-block">
            <span className="text-secondary">Trikal</span>
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/30 rounded-full blur-[2px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Our proprietary machine learning models analyze billions of data points in milliseconds to forecast market movements before they happen.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: error ? [-5, 5, -5, 5, 0] : 0,
            borderColor: error ? "rgba(244, 63, 94, 0.5)" : "rgba(255, 255, 255, 0.5)",
            boxShadow: error 
              ? ["0 0 20px rgba(244, 63, 94, 0)", "0 0 25px rgba(244, 63, 94, 0.4)", "0 0 20px rgba(244, 63, 94, 0)"] 
              : "0 25px 50px -12px rgb(0 0 0 / 0.15)"
          }}
          transition={{ 
            duration: 0.6,
            x: { duration: 0.4, ease: "easeInOut" },
            boxShadow: error ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6 }
          }}
          onSubmit={handleSubmit}
          className={cn(
            "glass p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto w-full transition-all border",
            error ? "bg-rose-50/10 shadow-[0_0_30px_rgba(244, 63, 94, 0.2)]" : "border-white/50"
          )}
        >
          <div className="flex-1 w-full relative">
            <input 
              type="text" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your email address" 
              className="w-full bg-transparent border-none focus:ring-0 px-6 py-4 text-sm font-medium placeholder:text-slate-400 text-slate-800 text-center md:text-left selection:bg-primary/20"
            />
          </div>
          <button 
            type="submit"
            className={cn(
              "w-full md:w-auto font-bold px-8 py-4 rounded-xl md:rounded-full text-xs uppercase tracking-widest transition-all shadow-lg whitespace-nowrap",
              error 
                ? "bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20" 
                : "bg-primary hover:bg-emerald-400 text-slate-900 shadow-primary/20"
            )}
          >
            {error ? "Email Required" : "Get Early Access"}
          </button>
        </motion.form>
      </div>

      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 md:left-20 top-1/3 opacity-20 hidden lg:block"
      >
        <div className="w-24 h-24 rounded-3xl border border-primary/30 rotate-12" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 md:right-20 top-1/4 opacity-20 hidden lg:block"
      >
        <div className="w-32 h-32 rounded-full border border-secondary/30" />
      </motion.div>
    </section>
  );
}
