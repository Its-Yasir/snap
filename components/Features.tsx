"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, Layout, Gift } from "lucide-react";

const features = [
  {
    icon: ImageIcon,
    title: "Instant Transparent PNGs",
    description:
      "Export your customized social mockups instantly with pristine transparency. No background removal needed.",
  },
  {
    icon: Layout,
    title: "Pixel-Perfect Platform UI",
    description:
      "Exact replicas of Twitter (X), YouTube, and Instagram. Delight your clients with 1:1 accurate mockups.",
  },
  {
    icon: Gift,
    title: "100% Free to Use",
    description:
      "Snap is a completely free tool. No hidden paywalls, watermarks, or sign-ups required. Just design and export.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-background relative w-full">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Everything you need
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A simple, focused toolset designed specifically for video editors,
            thumbmakers, and designers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface border border-surface/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
