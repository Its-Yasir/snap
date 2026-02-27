"use client";

import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function CanvasBoard() {
  const [isPanMode, setIsPanMode] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  // Handle Spacebar for temporary panning
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault(); // Prevents page from jumping down
        setIsSpacePressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f4fdf7] dark:bg-[#0b140f]">
      <TransformWrapper
        initialScale={1}
        minScale={0.3}
        maxScale={4}
        centerOnInit={true}
        wheel={{ step: 0.1 }}
        // Dynamically disable/enable panning
        panning={{ disabled: !isPanningActive }}
      >
        {({ zoomIn, zoomOut, zoomToElement }) => (
          <>
            {/* Floating Toolbar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-white dark:bg-[#14241b] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 text-sm font-medium">
              {/* Select Tool */}
              <button
                onClick={() => setIsPanMode(false)}
                className={`px-2 py-2 rounded-md transition-colors ${!isPanMode ? "bg-[#00b958] text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
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
              </button>

              {/* Pan Tool */}
              <button
                onClick={() => setIsPanMode(true)}
                className={`px-2 py-2 rounded-md transition-colors ${isPanMode ? "bg-[#00b958] text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
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
              </button>

              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

              {/* Zoom Controls */}
              <button
                onClick={() => zoomToElement("mockup-container")}
                className="px-2 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
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
                      stroke-linejoin="round"
                      stroke-width="6"
                      rx="10"
                    />
                  </g>
                </svg>
              </button>
              <button
                onClick={() => zoomOut(0.5)}
                className="px-2 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
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
              </button>
              <button
                onClick={() => zoomIn(0.5)}
                className="px-2 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
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
                  className="w-[4000px] h-[4000px] flex items-center justify-center"
                  style={{
                    // Uses your primary color (#00b958) with low opacity (33) for subtle dots
                    backgroundImage:
                      "radial-gradient(circle, #00b95833 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px",
                  }}
                >
                  {/* Example Post */}
                  <div
                    id="mockup-container"
                    className="flex items-center gap-10 p-10"
                  >
                    <div className="w-[400px] h-[300px] bg-white border-2 border-dashed border-[#00b958] rounded-2xl flex items-center justify-center shadow-lg">
                      <p className="text-[#00b958] font-semibold text-xl">
                        Post 1
                      </p>
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
