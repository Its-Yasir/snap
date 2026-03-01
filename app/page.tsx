"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { SnipProvider } from "@/context/SnipContext";

export default function Home() {
  return (
    <SnipProvider>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </SnipProvider>
  );
}
