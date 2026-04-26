import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface ModernLoaderProps {
  isLoading: boolean;
}

/**
 * Modern High-Tech Loader
 * Full-screen overlay used during "processing" sequences.
 */
export function ModernLoader({ isLoading }: ModernLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center glass backdrop-blur-[30px] bg-white/20"
        >
          <div className="relative">
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border-t-2 border-r-2 border-primary/40 border-b-2 border-l-2 border-transparent"
            />
            
            {/* Inner pulsing logo-like shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [0.8, 1.1, 0.8],
                  rotate: [0, 90, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-10 h-10 border-4 border-secondary rounded-xl bg-secondary/10 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              />
            </div>

            {/* Glowing background */}
            <div className="absolute inset-x-[-40px] inset-y-[-40px] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 mb-2 uppercase tracking-[0.2em] text-sm lg:text-base">Almost there!</h3>
            <div className="flex gap-1 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
