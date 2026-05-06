import { useBoardStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { choice } from "@/types";
import { useId } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface CustomInputProps {
  placeholer: string;
  label: string;
  type: "text" | "choice" | "number";
  currentValue: string | number;
  choices?: choice[];
  onChange?: (val: string) => void;
  info?: string;
}

const Inputt = ({
  placeholer,
  label,
  type,
  currentValue,
  choices,
  onChange,
  info,
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
      <div className="flex items-center gap-2">
        <label
          htmlFor={id}
          className={cn(
            "text-lg font-normal",
            dark ? "text-neutral-200" : "text-neutral-700",
          )}
        >
          {label}
        </label>
        {info && (
          <div className="mt-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="text-neutral-500 hover:text-neutral-400 transition-colors cursor-help"
                  >
                    <IoInformationCircleOutline className="text-lg" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-[250px]">
                  <p className="text-xs leading-relaxed">{info}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
      {type === "text" || type === "number" ? (
        <input
          id={id}
          type={type}
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
        <div className="flex flex-wrap gap-2">
          {options.map((c) => {
            const isActive = currentValue === c.value;
            return (
              <button
                key={c.key}
                onClick={() => onChange?.(c.value)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200",
                  isActive
                    ? "bg-[#00b958] text-white border-[#00b958] shadow-sm"
                    : dark
                      ? "border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                      : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50",
                )}
              >
                {c.value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Inputt;
