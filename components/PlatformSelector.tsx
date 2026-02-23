"use client";

import { useSearchParams, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Ghost,
  Send,
  Music2,
  Pin,
  MessageSquare,
  MessageCircle,
  LayoutTemplate,
  LucideIcon,
} from "lucide-react";
import { PLATFORMS } from "@/lib/platforms";

const PlatformIcons: Record<string, LucideIcon> = {
  Discord: MessageSquare,
  Facebook: Facebook,
  Instagram: Instagram,
  LinkedIn: Linkedin,
  Pinterest: Pin,
  Reddit: MessageCircle,
  Snapchat: Ghost,
  Telegram: Send,
  TikTok: Music2,
  WhatsApp: MessageCircle,
  "X (Twitter)": Twitter,
  YouTube: Youtube,
};

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
            <DropdownMenuTrigger className="flex h-14 w-full items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-2 text-base font-medium shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:focus-visible:ring-emerald-500 transition-all text-zinc-700 dark:text-zinc-300">
              <span className="flex items-center gap-3">
                <LayoutTemplate className="w-5 h-5 text-emerald-500" />
                Select a platform...
              </span>
              <ChevronDown className="h-5 w-5 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="center"
              sideOffset={8}
              collisionPadding={20}
              className="w-(--radix-dropdown-menu-trigger-width) max-h-[220px] overflow-y-auto scrollbar-modern rounded-xl p-2 z-50 bg-white dark:bg-zinc-950"
            >
              {PLATFORMS.map((p) => {
                const Icon = PlatformIcons[p] || LayoutTemplate;
                return (
                  <DropdownMenuItem
                    key={p}
                    className="cursor-pointer py-3 px-3 flex items-center gap-3 focus:bg-emerald-50 dark:focus:bg-emerald-500/10 focus:text-emerald-600 dark:focus:text-emerald-400 transition-colors rounded-lg my-1"
                    onClick={() => {
                      const params = new URLSearchParams(
                        searchParams.toString(),
                      );
                      params.set("p", p);
                      router.push(`/work?${params.toString()}`);
                    }}
                  >
                    <div className="shrink-0 p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-500 dark:text-zinc-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-base">{p}</span>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
        Search a mock up for{" "}
        <span className="text-emerald-500">{platform}</span>
      </h1>
    </div>
  );
}
