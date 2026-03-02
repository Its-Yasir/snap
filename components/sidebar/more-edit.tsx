import React from "react";
import { useBoardStore } from "@/store/useStore";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trash2, RotateCcw } from "lucide-react";

interface MoreEditProps {
  id: number;
}

const MoreEdit = ({ id }: MoreEditProps) => {
  const { posts, updatePostExtra, removePost, settings, setActivePostId } =
    useBoardStore((state) => state);
  const currentSnip = posts.find((p) => p.id === id);
  const extra = currentSnip?.extra;
  const isDark = settings.boardColor !== "white";

  if (!extra) return null;

  const handleRemove = () => {
    removePost(id);
    setActivePostId(null);
  };

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
    <div className="p-4 flex flex-col gap-8 w-[320px] max-h-[75vh] overflow-y-auto scrollbar-modern">
      <AnimatePresence mode="popLayout">
        <div className="flex flex-col gap-6">
          {hasAnyModifiedDefaults && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-1"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={resetAllDefaults}
                className={`w-full flex items-center justify-center gap-2 h-9 border-dashed ${
                  isDark
                    ? "border-neutral-700 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50"
                    : "border-neutral-300 text-neutral-500 hover:text-emerald-600 hover:border-emerald-500/50"
                }`}
              >
                <RotateCcw size={14} />
                <span className="text-xs font-semibold">
                  Reset all to default
                </span>
              </Button>
            </motion.div>
          )}

          {extra.map((ex, idx) => {
            const isBoolean = ex.min === 0 && ex.max === 1;
            const hasDefault = ex.default !== undefined;
            const isModified = hasDefault && ex.current !== ex.default;

            return (
              <motion.div
                key={idx}
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
                      <button
                        onClick={() => updatePostExtra(id, idx, ex.default!)}
                        className={`p-1 rounded-full hover:bg-neutral-800 transition-colors ${isDark ? "text-emerald-500" : "text-emerald-600"}`}
                        title="Reset to default"
                      >
                        <RotateCcw size={10} />
                      </button>
                    )}
                  </div>
                  <span
                    className={`text-xs font-mono font-medium px-2 py-0.5 rounded ${
                      isDark
                        ? "bg-neutral-800 text-neutral-300"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {isBoolean ? (ex.current === 1 ? "ON" : "OFF") : ex.current}
                  </span>
                </div>

                <div className="px-1">
                  {isBoolean ? (
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updatePostExtra(id, idx, ex.current === 1 ? 0 : 1)
                        }
                        className={`relative w-10 h-5 rounded-full transition-colors duration-200 outline-none ${
                          ex.current === 1
                            ? "bg-[#00b958]"
                            : isDark
                              ? "bg-neutral-800"
                              : "bg-neutral-300"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                            ex.current === 1 ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  ) : (
                    <input
                      type="range"
                      min={ex.min}
                      max={ex.max}
                      value={ex.current}
                      onChange={(e) =>
                        updatePostExtra(id, idx, parseInt(e.target.value))
                      }
                      className={`w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#00b958] ${
                        isDark ? "bg-neutral-800" : "bg-neutral-200"
                      }`}
                    />
                  )}
                </div>

                {idx < extra.length - 1 && (
                  <div
                    className={`w-full h-px mt-4 ${isDark ? "bg-neutral-800" : "bg-neutral-100"}`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: extra.length * 0.05 + 0.1 }}
          className="pt-4 border-t border-neutral-800/50"
        >
          <Button
            variant="destructive"
            onClick={handleRemove}
            className="w-full flex items-center justify-center gap-2 h-11 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border-none transition-all duration-300"
          >
            <Trash2 size={16} />
            <span className="font-semibold">Remove Post</span>
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MoreEdit;
