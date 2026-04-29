import { motion } from "motion/react";

interface NavbarProps {
  onJoinClick: () => void;
}

export function Navbar({ onJoinClick }: NavbarProps) {
  const logoUrl = "/trikal_logo.png";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoUrl} alt="Trikal Logo" className="h-16 md:h-20 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase opacity-70">
          <a href="#" className="hover:text-primary transition-colors">Technology</a>
          <a href="#" className="hover:text-primary transition-colors">Vision</a>
          <a href="#" className="hover:text-primary transition-colors">Security</a>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onJoinClick}
            className="bg-primary text-slate-900 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all cursor-pointer"
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
