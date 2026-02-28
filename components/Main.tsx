import React from "react";
import { useBoardStore } from "@/store/useStore";

const Main = () => {
  const { settings } = useBoardStore((state) => state);
  const { Layout, boardColor } = settings;
  const paddingMap = {
    compact: "p-2",
    standard: "p-4",
    comfortable: "p-6",
  };

  const boardColorMap = {
    green: "bg-green-900 border-green-800",
    blue: "bg-blue-900 border-blue-800",
    gray: "bg-gray-900 border-gray-800",
    black: "bg-black border-white/10",
    white: "bg-white text-black border-gray-200",
  };

  const activeColor = boardColorMap[boardColor] || boardColorMap.green;

  return (
    <div
      className={`${paddingMap[Layout]} ${activeColor} transition-colors rounded-md border`}
    >
      Main
    </div>
  );
};

export default Main;
