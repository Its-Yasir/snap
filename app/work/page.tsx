"use client";

import React, { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PlatformSelector } from "@/components/PlatformSelector";
import { PlatformNavbar } from "@/components/PlatformNavbar";
import { isValidPlatform } from "@/lib/platforms";
import { isValidElementType } from "@/utils";
import TypeSelector from "@/components/TypeSelector";

function WorkPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const platform = searchParams.get("p");
  const elementType = searchParams.get("t");

  useEffect(() => {
    if (platform && !isValidPlatform(platform)) {
      router.replace("/work");
    }
  }, [platform, router]);

  useEffect(() => {
    if (
      platform &&
      elementType &&
      !isValidElementType({ platform, elementType })
    ) {
      router.replace(`/work?p=${platform}`);
    }
  }, [elementType, platform, router]);

  if (!platform || !isValidPlatform(platform)) {
    return <PlatformSelector />;
  }

  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="w-full border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <PlatformNavbar />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl font-medium tracking-tight text-zinc-800 dark:text-zinc-200 mb-8 text-center px-4">
          Select an element from{" "}
          <span className="text-emerald-500">{platform}</span>
        </h2>
        {platform && isValidPlatform(platform) ? <TypeSelector /> : null}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px]">
      <Suspense fallback={<div className="min-h-screen w-full" />}>
        <WorkPageContent />
      </Suspense>
    </div>
  );
}
