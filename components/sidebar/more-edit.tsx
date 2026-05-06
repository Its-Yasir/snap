import React from "react";
import { useBoardStore } from "@/store/useStore";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RotateCcw, Minus, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ElasticSlider from "@/components/ui/elastic-slider";

interface MoreEditProps {
  id: number;
}

const MoreEdit = ({ id }: MoreEditProps) => {
  const { posts, updatePostExtra, settings } = useBoardStore((state) => state);
  const currentSnip = posts.find((p) => p.id === id);
  const extra = currentSnip?.extra;
  const isDark = settings.boardColor !== "white";

  if (!extra) return null;

  const hasAnyModifiedDefaults = extra.some(
    (ex) => ex.default !== undefined && ex.current !== ex.default,
  );

  const resetAllDefaults = () => {
    extra.forEach((ex, idx) => {
      if (ex.default !== undefined) {
        updatePostExtra(id, idx, ex.default);
      }
    });
  };

  return (
    <ScrollArea className="h-[75vh] w-[320px]">
      <div className="p-4 flex flex-col gap-8">
        <AnimatePresence mode="popLayout">
          <div className="flex flex-col gap-6" key="controls-container">
            <motion.div
              key="reset-all-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-1"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={resetAllDefaults}
                disabled={!hasAnyModifiedDefaults}
                className={`w-full flex items-center justify-center gap-2 h-10 border-dashed transition-all duration-300 ${
                  !hasAnyModifiedDefaults
                    ? "opacity-50 grayscale cursor-not-allowed"
                    : isDark
                      ? "border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-500/5 shadow-[0_0_15px_-5px_rgba(16,185,129,0.1)]"
                      : "border-emerald-500/30 text-emerald-600 hover:text-emerald-700 hover:border-emerald-500/60 hover:bg-emerald-50"
                } ${
                  isDark && hasAnyModifiedDefaults
                    ? "border-emerald-500/40"
                    : isDark
                      ? "border-neutral-700 text-neutral-500"
                      : "border-neutral-300 text-neutral-400"
                }`}
              >
                <RotateCcw
                  size={14}
                  className={
                    hasAnyModifiedDefaults
                      ? "animate-in spin-in-180 duration-500"
                      : ""
                  }
                />
                <span className="text-xs font-bold tracking-tight">
                  Reset all to default
                </span>
              </Button>
            </motion.div>

            {extra.map((ex, idx) => {
              const isBoolean = ex.min === 0 && ex.max === 1;
              const hasDefault = ex.default !== undefined;
              const isModified = hasDefault && ex.current !== ex.default;
              const itemKey = `extra-${ex.name}-${idx}`;

              return (
                <motion.div
                  key={itemKey}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-neutral-500" : "text-neutral-400"}`}
                      >
                        {ex.name}
                      </span>
                      {hasDefault && isModified && (
                        <motion.button
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          onClick={() => updatePostExtra(id, idx, ex.default!)}
                          className={`p-1 rounded-full hover:bg-emerald-500/10 transition-colors ${isDark ? "text-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.2)]" : "text-emerald-600"}`}
                          title="Reset to default"
                        >
                          <RotateCcw size={10} />
                        </motion.button>
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-sm border ${
                        isDark
                          ? "bg-neutral-900 text-emerald-400 border-neutral-800"
                          : "bg-white text-emerald-600 border-neutral-100"
                      }`}
                    >
                      {isBoolean
                        ? ex.current === 1
                          ? "ON"
                          : "OFF"
                        : Math.round(ex.current)}
                    </span>
                  </div>

                  <div className="px-1">
                    {isBoolean ? (
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            updatePostExtra(id, idx, ex.current === 1 ? 0 : 1)
                          }
                          className={`relative w-11 h-6 rounded-full transition-all duration-300 outline-none shadow-inner ${
                            ex.current === 1
                              ? "bg-linear-to-r from-emerald-500 to-emerald-400 shadow-emerald-500/20"
                              : isDark
                                ? "bg-neutral-800"
                                : "bg-neutral-200"
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 transform ${
                              ex.current === 1
                                ? "translate-x-5"
                                : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    ) : (
                      <div className="relative group">
                        <ElasticSlider
                          value={Math.round(ex.current)}
                          min={ex.min}
                          max={ex.max}
                          isStepped={true}
                          stepSize={1}
                          onChange={(val) =>
                            updatePostExtra(id, idx, Math.round(val))
                          }
                          isDark={isDark}
                          leftIcon={<Minus size={12} />}
                          rightIcon={<Plus size={12} />}
                        />
                      </div>
                    )}
                  </div>

                  {idx < extra.length - 1 && (
                    <div
                      className={`w-full h-px mt-4 opacity-50 ${isDark ? "bg-neutral-800" : "bg-neutral-100"}`}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            key="remove-post-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: extra.length * 0.05 + 0.1 }}
            className="pt-4 border-t border-neutral-800/50"
          ></motion.div>
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
};

export default MoreEdit;
