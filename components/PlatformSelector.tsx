"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { PLATFORMS } from "@/lib/platforms";

export function PlatformSelector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const platform = searchParams.get("p");

  if (!platform) {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-screen">
        <div className="p-8 bg-white dark:bg-zinc-950 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 text-center space-y-6 max-w-sm w-full mx-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Select Platform
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Choose a platform to start creating your mockups.
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex h-12 w-full items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 transition-colors">
              <span>Select a platform...</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              className="w-(--radix-dropdown-menu-trigger-width) max-h-[165px] overflow-y-auto scrollbar-modern"
            >
              {PLATFORMS.map((p) => (
                <DropdownMenuItem
                  key={p}
                  className="cursor-pointer"
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("p", p);
                    router.push(`/work?${params.toString()}`);
                  }}
                >
                  {p}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
        Working on: <span className="text-emerald-500">{platform}</span>
      </h1>
    </div>
  );
}
