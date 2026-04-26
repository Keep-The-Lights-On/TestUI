import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  up: boolean;
}

const FALLBACK_ITEMS: TickerItem[] = [
  { symbol: "RELIANCE", price: "₹2,950.00", change: "+1.2%", up: true },
  { symbol: "TCS", price: "₹4,120.50", change: "+0.5%", up: true },
  { symbol: "HDFCBANK", price: "₹1,530.20", change: "-0.8%", up: false },
  { symbol: "INFY", price: "₹1,620.00", change: "+1.5%", up: true },
  { symbol: "SBIN", price: "₹760.40", change: "+0.3%", up: true },
  { symbol: "BHARTIARTL", price: "₹1,210.00", change: "+2.1%", up: true },
];

/**
 * Animated Stock/Crypto Ticker
 * Uses a marquee effect and real-time data from Indian stock market.
 */
export function Ticker() {
  const [stocks, setStocks] = useState<TickerItem[]>(FALLBACK_ITEMS);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("/api/stocks");
        if (response.ok) {
          const result = await response.json();
          if (result.status === "success" && Array.isArray(result.data)) {
            setStocks(result.data);
            setIsLive(true);
          } else {
            setIsLive(false);
          }
        } else {
          setIsLive(false);
        }
      } catch (error) {
        setIsLive(false);
      }
    };

    fetchStocks();
    const interval = setInterval(fetchStocks, 45000); 
    return () => clearInterval(interval);
  }, []);

  const marqueeItems = [...stocks, ...stocks, ...stocks];

  return (
    <div className="w-full bg-white border-b border-slate-200/60 py-2.5 overflow-hidden select-none relative">
      <div className="absolute left-0 top-0 bottom-0 px-3 bg-white z-20 flex items-center shadow-[10px_0_15px_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-1.5">
          <div className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            isLive ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-300"
          )} />
          <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400">
            {isLive ? "Live" : "Delayed"}
          </span>
        </div>
      </div>
      <div className="flex whitespace-nowrap pl-16">
        <motion.div 
          className="flex gap-10 md:gap-16 pr-10 md:pr-16"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={`${item.symbol}-${idx}`} className="flex items-center gap-2 group cursor-default">
              <span className="text-slate-950 font-bold text-[10px] md:text-xs tracking-widest uppercase">
                {item.symbol}
              </span>
              <span className={cn(
                "font-mono text-[10px] md:text-xs font-semibold",
                item.up ? "text-emerald-500" : "text-rose-500"
              )}>
                {item.up ? "▲" : "▼"} {item.price}
              </span>
              <span className={cn(
                "text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded",
                item.up ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              )}>
                {item.change}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
