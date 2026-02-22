"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          100% Free & No Sign-up required
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
          Create Fake{" "}
          <span className="text-primary relative inline-block">
            Social Posts
            <svg
              className="absolute -bottom-2 w-full h-3 text-primary/30"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          <br className="hidden md:block" /> in Seconds.
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl px-4">
          The ultimate mockup generator for designers and social media managers.
          Generate pixel-perfect transparent PNGs for X, Instagram, and YouTube
          instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform active:scale-95 shadow-[0_4px_14px_0_rgba(0,185,88,0.39)] hover:shadow-[0_6px_20px_rgba(0,185,88,0.23)] hover:-translate-y-1">
            Start Creating for Free
          </button>
          <button className="bg-surface border border-surface/10 hover:bg-surface/50 text-foreground px-8 py-4 rounded-full font-bold text-lg transition-colors active:scale-95">
            View Templates
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto mt-20 relative px-4"
      >
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 aspect-[16/9]" />

        <div className="relative rounded-2xl overflow-hidden border border-surface/20 bg-surface shadow-[0_0_50px_rgba(0,185,88,0.3)] group">
          <div className="absolute top-0 w-full h-10 bg-surface border-b border-surface/20 flex items-center px-4 gap-2 z-10">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto aspect-[16/9] object-cover pt-10"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  );
}
