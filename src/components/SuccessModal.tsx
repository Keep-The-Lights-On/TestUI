import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle } from "lucide-react";
import { ModalProps } from "../types";
import confetti from "canvas-confetti";

/**
 * Success Modal
 * Displays a confirmation message after successful waitlist submission.
 */
export function SuccessModal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      const end = Date.now() + 3 * 1000; // 3 seconds
      const colors = ["#2dd4bf", "#a855f7", "#d2d9f4", "#ffffff"];

      const frame = () => {
        if (Date.now() > end) return;

        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: colors,
          zIndex: 120,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: colors,
          zIndex: 120,
        });

        requestAnimationFrame(frame);
      };

      frame();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] glass p-10 shadow-2xl shadow-indigo-500/20 flex flex-col items-center text-center"
          >
            <div className="mb-8 flex items-center justify-center">
              <div className="relative">
                <CheckCircle className="w-16 h-16 text-primary fill-primary/10" />
                <motion.div 
                   className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            <div className="mb-10 space-y-3">
              <h2 className="font-display text-4xl font-bold text-slate-900">Success!</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Your request has been received. Welcome to the future of market intelligence.
              </p>
            </div>

            <button 
              onClick={onClose}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95"
            >
              Go Back
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
