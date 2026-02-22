"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const PLATFORMS = [
  "Discord",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Pinterest",
  "Reddit",
  "Snapchat",
  "Telegram",
  "Threads",
  "TikTok",
  "Twitch",
  "WeChat",
  "WhatsApp",
  "X (Twitter)",
  "YouTube",
];

const WorkPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const platform = searchParams.get("p");

  if (!platform) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px]">
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
            <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) max-h-[300px] overflow-y-auto">
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
    <div className="min-h-screen w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px]">
      <div className="flex h-full min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
          Working on: <span className="text-emerald-500">{platform}</span>
        </h1>
      </div>
    </div>
  );
};

export default function WorkPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px]" />
      }
    >
      <WorkPageContent />
    </Suspense>
  );
}
