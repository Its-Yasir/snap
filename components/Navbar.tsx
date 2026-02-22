"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-surface/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-lg leading-none">
            S
          </div>
          <span className="font-bold text-xl tracking-tight">Snap</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )
            ) : (
              <div className="w-5 h-5" /> /* Placeholder matching icon size */
            )}
          </button>
          <a
            href="#"
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Go to App
          </a>
        </div>
      </div>
    </nav>
  );
}
