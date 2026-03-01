import { useBoardStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { choice } from "@/types";
import { useId } from "react";

export interface CustomInputProps {
  placeholer: string;
  label: string;
  type: "text" | "choice";
  currentValue: string;
  choices?: choice[];
  onChange?: (val: string) => void;
}

const Inputt = ({
  placeholer,
  label,
  type,
  currentValue,
  choices,
  onChange,
}: CustomInputProps) => {
  const { settings } = useBoardStore((state) => state);
  const { boardColor } = settings;
  const dark: boolean = boardColor !== "white";
  const id = useId();

  const options = choices || [];

  const boardColorMap: Record<string, string> = {
    green: "border-green-500 focus-visible:ring-green-500",
    blue: "border-blue-500 focus-visible:ring-blue-500",
    gray: "border-gray-500 focus-visible:ring-gray-500",
    black: dark
      ? "border-neutral-500 focus-visible:ring-neutral-500"
      : "border-black focus-visible:ring-black",
    white: "border-gray-300 focus-visible:ring-gray-300",
  };

  const activeRing = boardColorMap[boardColor] || "";

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={id}
        className={cn(
          "text-sm font-medium",
          dark ? "text-neutral-200" : "text-neutral-700",
        )}
      >
        {label}
      </label>
      {type === "text" ? (
        <input
          id={id}
          type="text"
          value={currentValue || ""}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholer}
          className={cn(
            "flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            dark
              ? "border-neutral-800 bg-neutral-900 text-neutral-100 placeholder:text-neutral-500"
              : "border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-500",
            currentValue
              ? activeRing
              : dark
                ? "focus-visible:ring-1 focus-visible:ring-neutral-700"
                : "focus-visible:ring-1 focus-visible:ring-neutral-300",
          )}
        />
      ) : (
        <select
          id={id}
          value={currentValue || ""}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn(
            "flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            dark
              ? "border-neutral-800 bg-neutral-900 text-neutral-100 placeholder:text-neutral-500"
              : "border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-500",
            currentValue
              ? activeRing
              : dark
                ? "focus-visible:ring-1 focus-visible:ring-neutral-700"
                : "focus-visible:ring-1 focus-visible:ring-neutral-300",
          )}
        >
          <option value="" disabled>
            {placeholer}
          </option>
          {options.map((c) => (
            <option key={c.key} value={c.value}>
              {c.value}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Inputt;
