"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type SnipContextType = {
  selectedSnip: number;
  setSelectedSnip: (val: number) => void;
};

const SnipContext = createContext<SnipContextType | undefined>(undefined);

export function SnipProvider({ children }: { children: ReactNode }) {
  const [selectedSnip, setSelectedSnip] = useState(0);
  return (
    <SnipContext.Provider value={{ selectedSnip, setSelectedSnip }}>
      {children}
    </SnipContext.Provider>
  );
}

// Custom hook for easy access
export function useSnipContext() {
  const context = useContext(SnipContext);
  if (!context) {
    throw new Error("useSnipContext must be used within a SnipProvider");
  }
  return context;
}
