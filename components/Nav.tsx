"use client";

import React, { useState } from "react";
import { Pencil, Settings } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBoardStore } from "@/store/useStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

const Nav = () => {
  const { settings, updateSettings } = useBoardStore((state) => state);
  const { Layout, bg, boardColor, workspaceName } = settings;
  const [tempName, setTempName] = useState(workspaceName || "Your Workspace");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navPadding = {
    compact: "px-2 py-2",
    standard: "px-4 py-2",
    comfortable: "px-6 py-3",
  }[Layout];

  const handleSaveWorkspace = () => {
    if (tempName.trim()) {
      updateSettings({ workspaceName: tempName.trim() });
    }
    setIsDialogOpen(false);
  };

  const boardColorMap = {
    green:
      "bg-green-900 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.2)]",
    blue: "bg-blue-900 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)]",
    gray: "bg-gray-900 border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.2)]",
    black: "bg-black border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    white:
      "bg-white text-black border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.05)]",
  };

  return (
    <div
      className={`fixed top-4 left-4 z-50 flex items-center gap-4 ${boardColorMap[boardColor]} ${boardColor === "white" ? "text-black" : "text-white"} ${navPadding} rounded-md border shadow-2xl transition-colors`}
    >
      {/* Logo and Product Name */}
      <Link
        href="/"
        className="flex items-center gap-2 group transition-opacity hover:opacity-90"
      >
        <div
          className={`flex items-center justify-center w-8 h-8 ${boardColor === "white" ? "bg-black text-white" : "bg-linear-to-br from-white to-gray-200 text-black"} font-extrabold text-lg rounded shadow-sm`}
        >
          S
        </div>
        <span
          className={`font-bold text-xl tracking-tight transition-colors ${boardColor === "white" ? "group-hover:text-gray-600" : "group-hover:text-gray-200"}`}
        >
          snip
        </span>
      </Link>

      <div className="h-6 w-px bg-white/20" />

      {/* Workspace section */}
      <div
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md border ${boardColor === "white" ? "bg-black/5 border-black/10" : "bg-white/5 border-white/5"}`}
      >
        <span
          className={`text-sm font-medium max-w-[120px] truncate ${boardColor === "white" ? "text-gray-800" : "text-gray-100"}`}
          title={workspaceName}
        >
          {workspaceName}
        </span>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button
              onClick={() => setTempName(workspaceName)}
              className={`transition-colors p-1 ${boardColor === "white" ? "text-gray-600 hover:text-black" : "text-gray-400 hover:text-white"}`}
              aria-label="Edit workspace name"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Workspace</DialogTitle>
              <DialogDescription>
                Enter a new name for your workspace. Maximum 30 characters.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Input
                id="workspace-name"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                maxLength={30}
                className="col-span-3 bg-black text-white border-gray-800"
                placeholder="e.g. Acme Corp"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSaveWorkspace();
                }}
              />
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSaveWorkspace}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Settings Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`transition-colors p-1 ml-0.5 ${boardColor === "white" ? "text-gray-600 hover:text-black" : "text-gray-400 hover:text-white"}`}
              aria-label="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            <DropdownMenuLabel>Workspace Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Layout</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem
                    onClick={() => updateSettings({ Layout: "compact" })}
                  >
                    Compact {Layout === "compact" && "✓"}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => updateSettings({ Layout: "standard" })}
                  >
                    Standard {Layout === "standard" && "✓"}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => updateSettings({ Layout: "comfortable" })}
                  >
                    Comfortable {Layout === "comfortable" && "✓"}
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Background</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {["green", "blue", "gray", "black", "white"].map((color) => (
                    <DropdownMenuItem
                      key={color}
                      onClick={() =>
                        updateSettings({
                          bg: color as
                            | "green"
                            | "blue"
                            | "gray"
                            | "black"
                            | "white",
                        })
                      }
                    >
                      <span className="capitalize">{color}</span>{" "}
                      {bg === color && "✓"}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Board Color</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {["green", "blue", "gray", "black", "white"].map((color) => (
                    <DropdownMenuItem
                      key={color}
                      onClick={() =>
                        updateSettings({
                          boardColor: color as
                            | "green"
                            | "blue"
                            | "gray"
                            | "black"
                            | "white",
                        })
                      }
                    >
                      <span className="capitalize">{color}</span>{" "}
                      {boardColor === color && "✓"}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Position</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {["horizontal", "vertical"].map((pos) => (
                    <DropdownMenuItem
                      key={pos}
                      onClick={() =>
                        updateSettings({
                          position: pos as "horizontal" | "vertical",
                        })
                      }
                    >
                      <span className="capitalize">{pos}</span>{" "}
                      {settings.position === pos && "✓"}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSeparator />
            <Link href="/support">
              <DropdownMenuItem className="cursor-pointer">
                Support Us 💝
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Nav;
