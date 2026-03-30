'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Database, Sparkles, Layers, Workflow, Clock, Zap, ClipboardPenLine, Cpu, CheckCircle2, Check, HelpCircle, MessageSquareQuote, Star } from 'lucide-react';
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
            {/* Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href=`${process.env.NEXT_PUBLIC_PAYSTACK_PAYPAGE_URL}` 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Architecture — $250 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
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

      {/* 5. The Bento Box Features Section */}
      <section className="relative z-10 flex flex-col items-center px-6 py-32 max-w-5xl mx-auto w-full border-t border-white/10 mt-20">
        
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Built for scale, not just looks.
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            Generic templates break the second your agency grows. We engineer relational databases that scale seamlessly with your operations.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          
          {/* Card 1: Relational Architecture (Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-50" />
            <div className="relative z-10 mb-12">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Deep Relational Mapping</h3>
              <p className="text-zinc-400 font-light leading-relaxed max-w-md">
                We don't just build pages; we build interconnected systems. Your Clients, Projects, Tasks, and Invoices all talk to each other automatically.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Automation Ready */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between relative group"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                <Zap className="w-5 h-5 text-zinc-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Automation Ready</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                Every database is architected with strict properties, meaning your new OS is instantly ready to connect to Make and Zapier workflows.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Rapid Deployment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 relative group"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                <Clock className="w-5 h-5 text-zinc-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">24-Hour Turnaround</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                Because our multi-agent AI engine handles the heavy lifting, you receive your complete, custom workspace within one business day.
              </p>
            </div>
          </motion.div>

          {/* Card 4: AI Process (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group"
          >
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent z-0" />
             <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                <Workflow className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">The AI Engineering Loop</h3>
              <p className="text-zinc-400 font-light leading-relaxed max-w-md mb-6 text-sm">
                You submit a natural language brief of your agency's bottlenecks. Our semantic cache checks for identical structures, bypassing slow build times, while our LangGraph planner drafts strict, error-free Notion JSON.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. The 3-Step Deployment Process */}
      <section className="relative z-10 flex flex-col items-center px-6 py-32 max-w-5xl mx-auto w-full border-t border-white/10 mt-10">
        
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            From bottleneck to bulletproof in 24 hours.
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            No endless onboarding calls. Our productized pipeline is designed for agency founders who value their time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

          {/* Step 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <ClipboardPenLine className="w-6 h-6 text-zinc-300" />
            </div>
            <div className="text-xs font-mono text-zinc-500 mb-2">STEP 01</div>
            <h3 className="text-xl font-medium text-white mb-2">The Operational Brief</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Complete a 5-minute intake form detailing your current tools, team size, and the exact data relationships your agency needs to track.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <Cpu className="w-6 h-6 text-zinc-300" />
            </div>
            <div className="text-xs font-mono text-zinc-500 mb-2">STEP 02</div>
            <h3 className="text-xl font-medium text-white mb-2">AI Architecture</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Optima Engine maps your workflow into a strict JSON schema, processing multi-relational vectors to ensure no dead-ends in your data.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white border border-white flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <CheckCircle2 className="w-6 h-6 text-black" />
            </div>
            <div className="text-xs font-mono text-zinc-500 mb-2">STEP 03</div>
            <h3 className="text-xl font-medium text-white mb-2">The Handover</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Within 24 hours, you receive a secure link to duplicate the fully functioning, relationally mapped OS directly into your Notion workspace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6.5. The Wall of Love (Social Proof) */}
      <section className="relative z-10 flex flex-col items-center px-6 py-24 max-w-5xl mx-auto w-full border-t border-white/10 mt-10">
        
        <div className="text-center mb-16 max-w-2xl">
          <div className="flex justify-center mb-4">
            <MessageSquareQuote className="w-8 h-8 text-zinc-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Trusted by operators.
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            Don't just take our word for it. Here is what happens when you stop fighting generic templates and let AI architect your system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            {
              quote: "We spent three weeks trying to link our client portals to our active project databases. Optima Engine mapped and delivered the exact architecture in 14 hours. Flawless.",
              name: "Sarah Jenkins",
              role: "Operations Director, Lumina Agency"
            },
            {
              quote: "The cleanest Notion workspace I've ever seen. It doesn't just look premium; the underlying data relations mean my team actually uses it instead of Slack.",
              name: "David Chen",
              role: "Founder, GrowthStack"
            },
            {
              quote: "I was skeptical about the 'AI architecture' claim, but the JSON schema it built handled our edge cases perfectly. Worth 10x the price for the time saved alone.",
              name: "Marcus Thorne",
              role: "Creative Lead, Studio Vue"
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between relative"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-xs font-medium text-zinc-400">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. The Objection Killer (FAQ) */}
      <section className="relative z-10 flex flex-col items-center px-6 py-24 max-w-5xl mx-auto w-full border-t border-white/10 mt-10">
        <div className="w-full max-w-4xl mb-12 flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-zinc-500" />
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
          {[
            {
              q: "Do I need a paid Notion subscription?",
              a: "No. The entire relational architecture we deploy works flawlessly on Notion's free tier. You only upgrade to Notion Plus if your team size requires it."
            },
            {
              q: "Can I modify the databases after delivery?",
              a: "100%. Once we transfer the workspace to you, you have full admin ownership. You can add properties, change views, and build new dashboards on top of our engine."
            },
            {
              q: "How does the AI know my specific workflow?",
              a: "After payment, you complete a structured 5-minute intake brief. Our engine translates your operational logic into strict relational vectors before building."
            },
            {
              q: "What if the AI hallucinates or breaks the database?",
              a: "It won't. Our LangGraph multi-agent system doesn't guess. It uses strict JSON structuring and semantic caching to guarantee mathematically perfect relations."
            }
          ].map((faq, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h4 className="text-white font-medium mb-2">{faq.q}</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. The Decoy Pricing Architecture */}
      <section className="relative z-10 flex flex-col items-center px-6 pb-32 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl items-center">
          
          {/* Tier 1: The Target (Optima Engine) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="w-full p-1 rounded-3xl bg-gradient-to-b from-white/20 to-white/5 shadow-[0_0_40px_rgba(255,255,255,0.05)] relative z-10"
          >
            <div className="bg-[#050505] rounded-[22px] p-8 flex flex-col h-full border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-white mb-1">Optima Engine</h3>
                <p className="text-zinc-400 text-sm">Automated AI architecture delivery.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$250</span>
                <span className="text-zinc-500 text-sm ml-2">/ one-time</span>
              </div>
              <ul className="flex flex-col gap-4 mb-10">
                {[
                  "Bespoke relational database architecture",
                  "Built by multi-agent AI engine",
                  "Delivered to your Notion in 24 hours",
                  "Pre-configured for Zapier & Make",
                  "Full admin ownership transfer"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href=`${process.env.NEXT_PUBLIC_PAYSTACK_PAYPAGE_URL}`
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-sm font-semibold text-center text-black bg-white rounded-xl hover:bg-zinc-200 transition-colors mt-auto block"
              >
                Initiate Build Sequence
              </Link>
            </div>
          </motion.div>

          {/* Tier 2: The Decoy (Studio Retainer) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 flex flex-col h-[90%] opacity-80 hover:opacity-100 transition-opacity"
          >
            <div className="mb-6">
              <h3 className="text-xl font-medium text-white mb-1">Studio Retainer</h3>
              <p className="text-zinc-500 text-sm">Manual consulting & custom design.</p>
            </div>
            <div className="mb-8">
              <span className="text-3xl font-medium text-white">$1,500</span>
              <span className="text-zinc-600 text-sm ml-2">/ one-time</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Everything in Optima Engine",
                "Two 60-min Zoom strategy calls",
                "Custom visual dashboard design",
                "Team onboarding documentation",
                "14-day delivery timeline"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                  <Check className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3.5 text-sm font-medium text-zinc-400 bg-transparent border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-colors mt-auto">
              Apply for Retainer
            </button>
          </motion.div>
        </div>
      </section>

      {/* 8. Minimalist Footer */}
      <footer className="relative z-10 w-full border-t border-white/10 py-8 text-center text-xs text-zinc-600 mt-10">
        <p>© 2026 Optima Logic Venture Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}