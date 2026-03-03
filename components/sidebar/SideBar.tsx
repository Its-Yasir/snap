import React, { useState } from "react";
import { useBoardStore } from "@/store/useStore";
import { ImageIcon, Type as TypeIcon, MoreHorizontal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ImageEdit from "@/components/sidebar/iamge-edit";
import TextEdit from "@/components/sidebar/text-edit";
import MoreEdit from "@/components/sidebar/more-edit";
import { AnimatePresence, motion } from "framer-motion";

export default function SideBar() {
  const { settings, activePostId, posts } = useBoardStore((state) => state);
  const { Layout, boardColor, sidebarPosition } = settings;
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const activePost = posts.find((p) => p.id === activePostId);
  const isEnabled = activePost && activePost.type !== "empty";

  const toolbarPadding = {
    compact: "p-1",
    standard: "p-2",
    comfortable: "p-3",
  }[Layout];

  const sidebarColor =
    boardColor === "white"
      ? "bg-white/70 backdrop-blur-md text-black border-neutral-200"
      : "bg-black/70 backdrop-blur-md text-white border-white/10";

  const getButtonStyles = (toolName: string) => {
    const isActive = activeTool === toolName;
    if (boardColor === "white") {
      return isActive
        ? "bg-[#00b958] text-white shadow-sm scale-110"
        : "hover:bg-neutral-100 text-neutral-600 hover:text-black";
    }
    return isActive
      ? "bg-[#00b958] text-white shadow-sm scale-110"
      : "text-neutral-400 hover:bg-white/5 hover:text-white";
  };

  const handleToolClick = (toolName: string) => {
    setActiveTool(toolName === activeTool ? null : toolName);
    console.log(activePostId);
  };

  return (
    <div
      className={`absolute ${sidebarPosition === "left" ? "left-8" : "right-8"} top-1/2 -translate-y-1/2 z-50 flex items-center gap-2`}
    >
      {/* Side Bar for Options */}
      <div
        className={`${toolbarPadding} ${sidebarColor} rounded-2xl border text-sm font-medium transition-all duration-300 sidebar-container ${
          !isEnabled ? "opacity-30 pointer-events-none grayscale" : ""
        }`}
      >
        {isEnabled && (
          <div className="w-full text-center pb-2 border-b border-white/5 mb-1 max-w-[80px] overflow-hidden">
            <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-500 truncate block px-1">
              Tools
            </span>
          </div>
        )}

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleToolClick("images")}
                className={`flex items-center justify-center p-2 mb-2 rounded-md transition-colors ${getButtonStyles("images")}`}
              >
                <ImageIcon className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>edit images</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleToolClick("text")}
                className={`flex items-center justify-center p-2 mb-2 rounded-md transition-colors ${getButtonStyles("text")}`}
              >
                <TypeIcon className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>edit text</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleToolClick("more")}
                className={`flex items-center justify-center p-2 rounded-md transition-colors ${getButtonStyles("more")}`}
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>edit more</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {/* Side Bar for Editing */}
      <div
        className={`${toolbarPadding} ${sidebarColor} rounded-2xl border text-sm font-medium transition-all duration-300 sidebar-container ${
          !isEnabled ? "opacity-30 pointer-events-none grayscale" : ""
        }`}
      >
        <AnimatePresence mode="wait">
          {activeTool === "images" && activePostId && (
            <motion.div
              key={`images-${activePostId}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ImageEdit id={activePostId} />
            </motion.div>
          )}
          {activeTool === "text" && activePostId && (
            <motion.div
              key={`text-${activePostId}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <TextEdit id={activePostId} />
            </motion.div>
          )}
          {activeTool === "more" && activePostId && (
            <motion.div
              key={`more-${activePostId}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <MoreEdit id={activePostId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
