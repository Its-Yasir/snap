import { useBoardStore } from "@/store/useStore";
import Inputt from "@/components/shared/custom-input";
import { motion, AnimatePresence } from "framer-motion";

interface textEditProps {
  id: number;
}

const TextEdit = ({ id }: textEditProps) => {
  const { posts, updatePostText, settings } = useBoardStore((state) => state);
  const currentSnip = posts.find((p) => p.id === id);
  const text = currentSnip?.text;
  const isDark = settings.boardColor !== "white";

  if (!text) return null;

  return (
    <div className="p-3 flex flex-col gap-6 w-[320px] max-h-[70vh] overflow-y-auto scrollbar-modern">
      <AnimatePresence mode="popLayout">
        {text.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="relative flex flex-col gap-3"
          >
            {t.input.title && (
              <div className="flex items-center gap-2">
                <div
                  className={`h-px flex-1 ${isDark ? "bg-neutral-800" : "bg-neutral-100"}`}
                />
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-2 ${isDark ? "text-neutral-500" : "text-neutral-400"}`}
                >
                  {t.input.title}
                </span>
                <div
                  className={`h-px flex-1 ${isDark ? "bg-neutral-800" : "bg-neutral-100"}`}
                />
              </div>
            )}

            <div className="px-1">
              <Inputt
                type={t.type}
                placeholer={t.input.placeholder}
                choices={t.choices}
                currentValue={t.currentValue}
                label={t.input.label}
                onChange={(val) => updatePostText(id, i, val)}
              />
            </div>

            {i === text.length - 1 && (
              <div
                className={`w-full h-px mt-2 ${isDark ? "bg-neutral-800" : "bg-neutral-100"}`}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextEdit;
