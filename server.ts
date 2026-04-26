import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import YahooFinance from 'yahoo-finance2';

const yahooFinance = new YahooFinance();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route for Stock Data
  app.get("/api/stocks", async (req, res) => {
    try {
      const symbols = [
        'RELIANCE.NS', 'TCS.NS', 'HDFCBANK.NS', 'INFY.NS', 'ICICIBANK.NS', 
        'SBIN.NS', 'BHARTIARTL.NS', 'TATAMOTORS.NS', 'HINDUNILVR.NS', 'ITC.NS', 'LT.NS'
      ];
      
      const results = await Promise.all(
        symbols.map(async (symbol) => {
          try {
            const quote = await yahooFinance.quote(symbol) as any;
            if (!quote || quote.regularMarketPrice === undefined) return null;
            
            return {
              symbol: symbol.split('.')[0],
              price: `₹${quote.regularMarketPrice.toLocaleString('en-IN', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}`,
              change: `${quote.regularMarketChangePercent?.toFixed(2)}%`,
              up: (quote.regularMarketChangePercent || 0) >= 0
            };
          } catch (e) {
            return null;
          }
        })
      );
      
      const filteredResults = results.filter(Boolean);
      
      if (filteredResults.length > 0) {
        res.json({
          status: "success",
          source: "live",
          timestamp: new Date().toISOString(),
          data: filteredResults
        });
      } else {
        res.status(503).json({ status: "error", message: "No data available" });
      }
    } catch (error) {
      res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use((vite as any).middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
