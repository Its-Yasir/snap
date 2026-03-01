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
      ? "bg-white text-black border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.05)]"
      : "bg-black text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]";

  const getButtonStyles = (toolName: string) => {
    const isActive = activeTool === toolName;
    if (boardColor === "white") {
      return isActive
        ? "bg-[#00b958] text-white"
        : "hover:bg-gray-100 text-black";
    }
    return isActive
      ? "bg-[#00b958] text-white"
      : "text-gray-300 hover:bg-gray-800 hover:text-white";
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
        className={`${toolbarPadding} ${sidebarColor} rounded-lg shadow-2xl border text-sm font-medium transition-colors sidebar-container ${
          !isEnabled ? "opacity-40 pointer-events-none grayscale" : ""
        }`}
      >
        {isEnabled && (
          <div className="w-full text-center pb-2 border-b border-gray-500/30 mb-1 max-w-[80px] overflow-hidden">
            <span className="text-xs font-semibold truncate block px-1"></span>
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
        className={`${toolbarPadding} ${sidebarColor} rounded-lg shadow-2xl border text-sm font-medium transition-colors sidebar-container ${
          !isEnabled ? "opacity-40 pointer-events-none grayscale" : ""
        }`}
      >
        <div>
          {activeTool === "images" && activePostId && (
            <ImageEdit id={activePostId} />
          )}
        </div>
        <div>{activeTool === "text" && activePostId && <TextEdit />}</div>
        <div>{activeTool === "more" && activePostId && <MoreEdit />}</div>
      </div>
    </div>
  );
}
