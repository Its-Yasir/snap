import { useBoardStore } from "@/store/useStore";
import { cn } from "@/lib/utils";

export interface CustomInputProps {
  placeholer: string;
  label: string;
  type: string;
}

const Inputt = ({ placeholer, label, type }: CustomInputProps) => {
  const { settings } = useBoardStore((state) => state);
  const { boardColor } = settings;
  const dark: boolean = boardColor !== "white";
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        className={cn(
          "text-sm font-medium",
          dark ? "text-neutral-200" : "text-neutral-700",
        )}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholer}
        className={cn(
          "flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          dark
            ? "border-neutral-800 bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-neutral-700"
            : "border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-neutral-300",
        )}
      />
    </div>
  );
};

export default Inputt;
