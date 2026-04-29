export function Footer() {
  const logoUrl = "/trikal_logo.png";

  return (
    <footer className="relative py-16 px-4 overflow-hidden border-t border-slate-100">
      {/* Background subtle gradient */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 text-center relative z-10">
        <div className="flex items-center">
           <img src={logoUrl} alt="Trikal Logo" className="h-14 md:h-16 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>

        <div className="space-y-2">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
            © 2024 <span className="text-primary">TRIKAL</span> TECHNOLOGIES
          </p>
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium italic opacity-60">
            All Rights Reserved • Intelligence Redefined
          </p>
        </div>

        <div className="flex gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse delay-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/40 animate-pulse delay-500" />
        </div>
      </div>
    </footer>
  );
}
