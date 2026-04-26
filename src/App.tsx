/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Ticker } from "./components/Ticker";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { WaitlistModal } from "./components/WaitlistModal";
import { SuccessModal } from "./components/SuccessModal";
import { ModernLoader } from "./components/ModernLoader";
import { MOCK_SUBMISSION_DELAY } from "./lib/utils";

/**
 * Main Application Component
 * Manages the high-level application state including modals and loading flows.
 */
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Orchestrates the waitlist submission flow:
   * 1. Closes input modal
   * 2. Shows high-tech loader
   * 3. Shows success confirmation
   */
  const startSubmissionFlow = () => {
    setIsModalOpen(false);
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccessOpen(true);
    }, MOCK_SUBMISSION_DELAY);
  };

  return (
    <main className="min-h-screen mesh-gradient selection:bg-primary/30">
      <Ticker />
      <Navbar onJoinClick={() => setIsModalOpen(true)} />
      
      <Hero onSuccess={startSubmissionFlow} />
      
      <Features />
      
      <Footer />

      {/* Overlays */}
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={startSubmissionFlow}
      />
      
      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
      />
      
      <ModernLoader isLoading={isLoading} />
    </main>
  );
}
