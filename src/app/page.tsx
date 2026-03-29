'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Database, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    // FIX 1: Removed overflow-hidden to restore natural scrolling.
    // Removed bg-black to let globals.css handle the true base layer smoothly.
    <div className="relative min-h-screen text-white selection:bg-zinc-800 selection:text-white flex flex-col">
      
      {/* FIX 2: Background elements are now 'fixed' instead of 'absolute'. 
          This ensures the grid and glow stay planted behind the content infinitely as you scroll. */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="fixed top-[-20%] left-1/2 w-[800px] h-[400px] -translate-x-1/2 rounded-[100%] bg-zinc-500/10 blur-[120px] pointer-events-none z-[-1]" />

      {/* Floating Glassmorphism Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-center pt-6 px-6 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded-sm" />
            <span className="text-sm font-semibold tracking-tight text-white">Optima Logic.</span>
          </div>
          <Link
            href="https://portal.optimalogic.studio"
            className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Client Login
          </Link>
        </div>
      </nav>

      {/* The Hero Sequence */}
      <main className="relative z-10 flex-1 flex flex-col items-center pt-40 px-6 pb-32 max-w-5xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium border rounded-full text-zinc-300 border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>Optima Engine v1.0 is live. Accepting 3 clients this week.</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tighter leading-[1.1] text-white mb-6">
            Bespoke Notion OS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
              Architected by AI.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-zinc-400 font-light leading-relaxed tracking-tight">
            Stop forcing your agency into generic, broken templates. We map your exact workflow and deploy a custom, fully-relational database architecture in 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative z-10 flex items-center gap-2">
                Initiate Architecture — $250 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </motion.div>

        {/* The App Window Visual Anchor */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full mt-24 relative max-w-4xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur-sm" />
          <div className="relative w-full h-[400px] bg-[#050505] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#0a0a0a]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-500 flex items-center gap-2">
                <Terminal className="w-3 h-3" /> optima-engine-v1.0
              </div>
            </div>
            <div className="flex-1 p-6 font-mono text-xs sm:text-sm text-zinc-400 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-emerald-500">→</span>
                <span>Extracting client operational logic...</span>
              </div>
              <div className="flex items-center gap-3 opacity-70">
                <span className="text-emerald-500">→</span>
                <span>Initializing multi-agent Planner...</span>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <span className="text-zinc-600">→</span>
                <span>Mapping relational vectors (Clients ↔ Projects)...</span>
              </div>
              <div className="mt-auto flex items-center gap-2 text-zinc-500 bg-white/5 w-fit px-3 py-1.5 rounded-md border border-white/5">
                <Database className="w-3.5 h-3.5" /> Awaiting payload
                <span className="w-1.5 h-3 bg-zinc-400 animate-pulse ml-1" />
              </div>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}