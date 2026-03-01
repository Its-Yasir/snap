"use client";

import Main from "@/components/Main";
import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Nav from "./Nav";
import SideBar from "./sidebar/SideBar";
import { useBoardStore } from "@/store/useStore";

export default function CanvasBoard() {
  const [isPanMode, setIsPanMode] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  // Handle Spacebar for temporary panning
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept Spacebar if focused inside an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault(); // Prevents page from jumping down
        setIsSpacePressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.code === "Space") {
        setIsSpacePressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Panning is active if the Hand tool is selected OR Spacebar is held
  const isPanningActive = isPanMode || isSpacePressed;

  const { settings, isSearching, setIsPanning } = useBoardStore(
    (state) => state,
  );

  useEffect(() => {
    setIsPanning(isPanningActive);
  }, [isPanningActive, setIsPanning]);

  const { Layout, bg, boardColor, toolbarPosition } = settings;

  const toolbarPadding = {
    compact: "p-1",
    standard: "p-2",
    comfortable: "p-3",
  }[Layout];

  const bgColorsMap = {
    green: { bg: "bg-[#f4fdf7] dark:bg-[#0b140f]", dots: "#00b95833" },
    blue: { bg: "bg-[#f0f8ff] dark:bg-[#0b1014]", dots: "#2563eb33" },
    gray: { bg: "bg-[#f3f4f6] dark:bg-[#111827]", dots: "#6b728033" },
    black: { bg: "bg-black", dots: "#ffffff33" },
    white: { bg: "bg-white", dots: "#00000033" },
  };

  const canvasBg = bgColorsMap[bg] || bgColorsMap.green;

  const boardColorMap = {
    green: "border-[#00b958] bg-black",
    blue: "border-[#2563eb] bg-black",
    gray: "border-gray-500 bg-black",
    black: "border-white/20 bg-black",
    white: "border-gray-200 bg-white text-black",
  };
  const activeBoardColor = boardColorMap[boardColor] || boardColorMap.green;

  const toolbarColorMap = {
    green:
      "bg-green-900 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.2)] text-white",
    blue: "bg-blue-900 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)] text-white",
    gray: "bg-gray-900 border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.2)] text-white",
    black:
      "bg-black border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white",
    white:
      "bg-white text-black border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.05)]",
  };
  const activeToolbarColor =
    toolbarColorMap[boardColor] || toolbarColorMap.green;

  return (
    <div
      className={`relative w-full h-screen overflow-hidden transition-colors ${canvasBg.bg}`}
    >
      <TransformWrapper
        initialScale={1}
        minScale={0.3}
        maxScale={4}
        centerOnInit={true}
        wheel={{ wheelDisabled: isSearching, step: 0.1 }}
        doubleClick={{ disabled: true }}
        // Dynamically disable/enable panning
        panning={{ disabled: !isPanningActive }}
      >
        {({ zoomIn, zoomOut, zoomToElement }) => (
          <>
            {/* Floating Toolbar */}
            <Nav />
            <SideBar />
            <div
              className={`absolute ${toolbarPosition === "top" ? "top-6" : "bottom-8"} left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 ${toolbarPadding} ${activeToolbarColor} rounded-lg shadow-2xl border text-sm font-medium transition-colors`}
            >
              {/* Select Tool */}
              <button
                onClick={() => setIsPanMode(false)}
                className={`flex items-center px-2 py-2 rounded-md transition-colors ${!isPanMode ? "bg-[#00b958] text-white" : boardColor === "white" ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 hover:bg-gray-800"}`}
                title="Select Tool (V)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                >
                  <path
                    fill="currentColor"
                    d="M6 3.604c0-1.346 1.56-2.09 2.607-1.243l16.88 13.669c1.018.824.435 2.47-.875 2.47h-9.377a2.25 2.25 0 0 0-1.749.835l-4.962 6.134C7.682 26.51 6 25.915 6 24.576z"
                  />
                </svg>
                {Layout === "comfortable" && (
                  <span className="ml-2 pr-1">Select</span>
                )}
              </button>

              {/* Pan Tool */}
              <button
                onClick={() => setIsPanMode(true)}
                className={`flex items-center px-2 py-2 rounded-md transition-colors ${isPanMode ? "bg-[#00b958] text-white" : boardColor === "white" ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 hover:bg-gray-800"}`}
                title="Pan Tool (Hold Space)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.14 6.32a1.8 1.8 0 0 0-1.61-.24a.25.25 0 0 0-.17.24v4.92a.5.5 0 1 1-1 0v-6.5a1.77 1.77 0 0 0-.72-1.42A1.8 1.8 0 0 0 16 3.08a.25.25 0 0 0-.17.24v6.42a.5.5 0 1 1-1 0v-7A1.75 1.75 0 0 0 13.11 1a1.7 1.7 0 0 0-.59.1a.25.25 0 0 0-.16.24v8.4a.5.5 0 1 1-1 0v-5a1.75 1.75 0 0 0-3.5 0v10a.26.26 0 0 1-.18.24a.25.25 0 0 1-.28-.1l-2.12-3a1.73 1.73 0 1 0-2.82 2l5.47 7.72a3.22 3.22 0 0 0 2.65 1.4h5a6.25 6.25 0 0 0 6.25-6.25v-9a1.77 1.77 0 0 0-.69-1.43"
                  />
                </svg>
                {Layout === "comfortable" && (
                  <span className="ml-2 pr-1">Hand</span>
                )}
              </button>

              <div
                className={`w-px h-6 mx-2 ${boardColor === "white" ? "bg-gray-300" : "bg-gray-700"}`}
              ></div>

              {/* Zoom Controls */}
              <button
                onClick={() => zoomToElement("mockup-container")}
                className={`flex items-center px-2 py-2 rounded-md ${boardColor === "white" ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 hover:bg-gray-800"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 80 80"
                >
                  <g fill="currentColor">
                    <path d="M30.496 15.5a3 3 0 1 0 0-6zm18.008-6a3 3 0 0 0 0 6zM63.5 30.496a3 3 0 0 0 6 0zm6 18.008a3 3 0 0 0-6 0zm-54 0a3 3 0 0 0-6 0zm-6-18.008a3 3 0 1 0 6 0zM48.504 63.5a3 3 0 0 0 0 6zm-18.008 6a3 3 0 0 0 0-6zm-9.996-54h9.996v-6H20.5zm28.004 0H58.5v-6h-9.996zm14.996 5v9.996h6V20.5zm0 28.004V58.5h6v-9.996zm-48 9.996v-9.996h-6V58.5zm0-28.004V20.5h-6v9.996zm43 33.004h-9.996v6H58.5zm-28.004 0H20.5v6h9.996zM9.5 58.5c0 6.075 4.925 11 11 11v-6a5 5 0 0 1-5-5zm54 0a5 5 0 0 1-5 5v6c6.075 0 11-4.925 11-11zm-5-43a5 5 0 0 1 5 5h6c0-6.075-4.925-11-11-11zm-38-6c-6.075 0-11 4.925-11 11h6a5 5 0 0 1 5-5z" />
                    <rect
                      width="20"
                      height="20"
                      x="29.5"
                      y="30"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                      rx="10"
                    />
                  </g>
                </svg>
                {Layout === "comfortable" && (
                  <span className="ml-2 pr-1">Fit View</span>
                )}
              </button>
              <button
                onClick={() => zoomOut(0.5)}
                className={`flex items-center px-2 py-2 rounded-md ${boardColor === "white" ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 hover:bg-gray-800"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M13.5 2C19.851 2 25 7.149 25 13.5c0 2.828-1.021 5.418-2.715 7.42l.024-.026l6.398 6.399a1 1 0 1 1-1.414 1.414l-6.398-6.398c-2 1.68-4.58 2.691-7.395 2.691C7.149 25 2 19.851 2 13.5S7.149 2 13.5 2M8 12.5a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2z"
                  />
                </svg>
                {Layout === "comfortable" && (
                  <span className="ml-2 pr-1">Zoom Out</span>
                )}
              </button>
              <button
                onClick={() => zoomIn(0.5)}
                className={`flex items-center px-2 py-2 rounded-md ${boardColor === "white" ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 hover:bg-gray-800"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m21.857 20.437l-5.23-5.22a8.27 8.27 0 1 0-1.41 1.41l5.22 5.23a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42m-7.72-9.29h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2"
                  />
                </svg>
                {Layout === "comfortable" && (
                  <span className="ml-2 pr-1">Zoom In</span>
                )}
              </button>
            </div>

            {/* Canvas Area */}
            {/* Change cursor dynamically based on active mode */}
            <div
              className={`w-full h-full ${isPanningActive ? "cursor-grab active:cursor-grabbing" : "cursor-default"}`}
            >
              <TransformComponent
                wrapperStyle={{ width: "100vw", height: "100vh" }} // <-- This forces it to fill the screen
              >
                <div
                  className="w-[4000px] h-[4000px] flex items-center justify-center transition-all"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${canvasBg.dots} 1.5px, transparent 1.5px)`,
                    backgroundSize: "24px 24px",
                  }}
                >
                  {/* Example Post */}
                  <div
                    id="mockup-container"
                    className="flex items-center gap-10 p-10"
                  >
                    <div
                      className={`w-auto h-auto rounded-md flex items-center justify-center shadow-lg transition-colors ${activeBoardColor}`}
                    >
                      <Main />
                    </div>
                  </div>
                </div>
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
