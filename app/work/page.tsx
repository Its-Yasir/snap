"use client";

import React, { Suspense } from "react";
import { PlatformSelector } from "@/components/PlatformSelector";

export default function WorkPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px]">
      <Suspense fallback={<div className="min-h-screen w-full" />}>
        <PlatformSelector />
      </Suspense>
    </div>
  );
}
