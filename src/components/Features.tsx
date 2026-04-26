import { motion } from "motion/react";
import { Brain, Zap, ShieldCheck } from "lucide-react";
import { Feature } from "../types";
import { cn } from "../lib/utils";

const FEATURES: Feature[] = [
  {
    title: "Neural Net Predictions",
    description: "Advanced deep learning algorithms anticipating market shifts with unprecedented accuracy, processing terabytes of historical and real-time data.",
    icon: <Brain className="w-7 h-7 text-primary" />,
    color: "primary"
  },
  {
    title: "Real-Time Alerts",
    description: "Sub-millisecond latency notifications ensuring you never miss a critical trading window across global derivatives and spot markets.",
    icon: <Zap className="w-7 h-7 text-secondary" />,
    color: "secondary"
  },
  {
    title: "Risk Mitigation",
    description: "Automated portfolio defense mechanisms triggered by anomalous market behavior patterns before they cascade into volatility.",
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    color: "primary"
  }
];

export function Features() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Institutional-Grade Intelligence
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 rounded-[2.5rem] glass overflow-hidden shadow-xl shadow-slate-200/50"
            >
              {/* Hover gradient effect */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-10",
                feature.color === 'primary' ? 'from-primary' : 'from-secondary'
              )} />
              
              <div className="relative z-10">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110",
                  feature.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                )}>
                  {feature.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm lg:text-base font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
