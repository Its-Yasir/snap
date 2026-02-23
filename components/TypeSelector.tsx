"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { TYPES } from "@/lib/platforms";
import { LayoutTemplate, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TypeSelector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const platform = searchParams.get("p");

  if (!platform) return null;

  const typeConfig = TYPES.find(
    (t) =>
      t.platform.toLowerCase() === platform.toLowerCase() ||
      platform.toLowerCase().includes(t.platform.toLowerCase()),
  );

  const elements = typeConfig?.types || [];

  if (elements.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 mt-8 w-full max-w-md px-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 border-dashed dark:border-zinc-800">
        <LayoutTemplate className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mb-4" />
        <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          No elements found
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400">
          We haven&apos;t added any mockups for {platform} yet.
        </p>
      </div>
    );
  }

  const handleSelect = (elementKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("t", elementKey);
    router.push(`/work?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-md mt-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-14 w-full items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-2 text-base font-medium shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:focus-visible:ring-emerald-500 transition-all text-zinc-700 dark:text-zinc-300">
          <span className="flex items-center gap-3">
            <LayoutTemplate className="w-5 h-5 text-emerald-500" />
            Select an element type...
          </span>
          <ChevronDown className="h-5 w-5 opacity-50" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="center"
          className="w-(--radix-dropdown-menu-trigger-width) max-h-[300px] overflow-y-auto scrollbar-modern rounded-xl p-2"
        >
          {elements.map((element) => (
            <DropdownMenuItem
              key={element.key}
              className="cursor-pointer py-3 px-3 flex items-center gap-3 focus:bg-emerald-50 dark:focus:bg-emerald-500/10 focus:text-emerald-600 dark:focus:text-emerald-400 transition-colors rounded-lg my-1"
              onClick={() => handleSelect(element.key)}
            >
              <div className="shrink-0 p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-500 dark:text-zinc-400">
                <LayoutTemplate className="w-4 h-4" />
              </div>
              <span className="font-medium text-base">{element.title}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
