"use client";

import React, { useRef, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PLATFORMS } from "@/lib/platforms";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PlatformNavbar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const platform = searchParams.get("p");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      // Use 20px threshold to account for px-4 (16px) padding when snapping to the first element
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 20);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [platform]);

  useEffect(() => {
    // Scroll to active element on mount or platform change
    if (scrollContainerRef.current && platform) {
      const activeButton =
        scrollContainerRef.current.querySelector<HTMLButtonElement>(
          `button[data-platform="${platform}"]`,
        );
      if (activeButton) {
        // Center the active button
        const container = scrollContainerRef.current;
        const scrollLeft =
          activeButton.offsetLeft -
          container.offsetLeft -
          container.clientWidth / 2 +
          activeButton.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        setTimeout(checkScroll, 300);
      }
    }
  }, [platform]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const amount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  const handleSelect = (p: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("p", p);
    router.push(`/work?${params.toString()}`);
  };

  return (
    <div className="relative flex items-center w-full max-w-4xl mx-auto py-3 px-10">
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-0 z-10 p-2 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all duration-200 ${
          canScrollLeft
            ? "opacity-100 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ChevronLeft className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
      </button>

      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex space-x-2 overflow-x-auto w-full scrollbar-none snap-x snap-mandatory px-4 py-1 -mx-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
        `,
          }}
        />
        {PLATFORMS.map((p) => {
          const isSelected = p === platform;
          return (
            <button
              key={p}
              data-platform={p}
              onClick={() => handleSelect(p)}
              className={`flex-none snap-start px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-0 z-10 p-2 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all duration-200 ${
          canScrollRight
            ? "opacity-100 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ChevronRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
      </button>
    </div>
  );
}
