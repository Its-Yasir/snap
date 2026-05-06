import { useState, useRef } from "react";
import { useBoardStore } from "@/store/useStore";
import { Post } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { TiUpload } from "react-icons/ti";
import { TbArrowsRandom, TbLoader2 } from "react-icons/tb";
import ProfileImg from "./profile-img";
import Inputt from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

interface imageEditProps {
  id: number;
}

const ImageEdit = ({ id }: imageEditProps) => {
  const [loadingMap, setLoadingMap] = useState<Record<number, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<Record<number, string>>({});
  const [activeUploadIdx, setActiveUploadIdx] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { posts, setImageVisibility, setImageUrl, settings } = useBoardStore(
    (state) => state,
  );

  const isDark = settings.boardColor !== "white";

  const reandomImgChanger = (idx: number) => {
    if (loadingMap[idx]) return;

    setLoadingMap((prev) => ({ ...prev, [idx]: true }));

    const min = 1;
    const max = 70;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const newAvatarUrl = `https://i.pravatar.cc/250?img=${randomNumber}`;
    setImageUrl(id, idx, newAvatarUrl);

    setTimeout(() => {
      setLoadingMap((prev) => ({ ...prev, [idx]: false }));
    }, 2000);
  };

  const handleSearch = async (idx: number, imgName: string) => {
    const userId = searchQuery[idx];
    if (!userId) return;

    setLoadingMap((prev) => ({ ...prev, [idx]: true }));

    const type =
      imgName.toLowerCase().includes("banner") ||
      imgName.toLowerCase().includes("background")
        ? "banner"
        : "avatar";

    try {
      const response = await fetch(
        `/api/images/discord/${type}?userId=${userId}`,
      );
      const data = await response.json();

      if (data.url) {
        setImageUrl(id, idx, data.url);
      } else if (data.error) {
        if (
          data.error.toLowerCase().includes("no avatar found") ||
          data.error.toLowerCase().includes("no banner found")
        ) {
          toast.info("This user has no image, using discord default image");
          setImageUrl(id, idx, "/discord-default.png");
        } else {
          console.error("Discord Search Error:", data.error);
        }
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoadingMap((prev) => ({ ...prev, [idx]: false }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeUploadIdx !== null) {
      const url = URL.createObjectURL(file);
      setImageUrl(id, activeUploadIdx, url);
      setActiveUploadIdx(null);
      // Reset input value so the same file can be selected again if needed
      e.target.value = "";
    }
  };

  const currentSnip: Post | undefined = posts.find((p) => p.id === id);

  if (!currentSnip) return null;

  return (
    <div className="p-3 flex flex-col gap-8 w-85 max-h-[75vh] overflow-y-auto scrollbar-modern">
      <AnimatePresence mode="popLayout">
        {currentSnip.images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Conditional Layout Logic */}
            {img.size === "large" ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-sm font-semibold ${isDark ? "text-neutral-300" : "text-neutral-700"}`}
                  >
                    {img.name}
                  </h3>
                  <button
                    onClick={() => setImageVisibility(id, idx, !img.isHidden)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      img.isHidden
                        ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                        : "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                    }`}
                  >
                    {img.isHidden ? (
                      <>
                        <IoEyeOutline /> Show
                      </>
                    ) : (
                      <>
                        <IoEyeOffOutline /> Hide
                      </>
                    )}
                  </button>
                </div>

                {!img.isHidden && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="aspect-video w-full rounded-lg overflow-hidden relative border border-neutral-800 bg-neutral-900"
                  >
                    <Image
                      src={img.url}
                      alt={img.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}
              </div>
            ) : (
              // Small size logic
              <div className="flex flex-col gap-3">
                <div
                  className={`flex items-center justify-between p-2 rounded-lg ${!img.isHidden ? (isDark ? "bg-neutral-900" : "bg-neutral-100") : ""}`}
                >
                  {img.isHidden ? (
                    <>
                      <h3
                        className={`text-sm font-semibold ${isDark ? "text-neutral-300" : "text-neutral-700"}`}
                      >
                        {img.name}
                      </h3>
                      <button
                        onClick={() => setImageVisibility(id, idx, false)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                      >
                        <IoEyeOutline /> Show
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <ProfileImg url={img.url} />
                        <h3
                          className={`text-sm font-semibold ${isDark ? "text-neutral-300" : "text-neutral-700"}`}
                        >
                          {img.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => setImageVisibility(id, idx, true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                      >
                        <IoEyeOffOutline /> Hide
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Common Image Controls (Search/Upload/Random) */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-end">
                <div className="flex-1">
                  <Inputt
                    type="text"
                    label={`${img.input?.label as string}`}
                    placeholer={img.input?.placeholder as string}
                    currentValue={searchQuery[idx] || ""}
                    onChange={(val) =>
                      setSearchQuery((prev) => ({ ...prev, [idx]: val }))
                    }
                    info={img.info}
                  />
                </div>
                <button
                  onClick={() => handleSearch(idx, img.name)}
                  disabled={loadingMap[idx]}
                  className={`h-9 w-9 flex items-center justify-center rounded-md transition-colors ${
                    isDark
                      ? "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-600"
                  }`}
                >
                  {loadingMap[idx] ? (
                    <TbLoader2 className="animate-spin text-xl" />
                  ) : (
                    <MdOutlineSearch className="text-xl" />
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <Button
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setActiveUploadIdx(idx);
                    fileInputRef.current?.click();
                  }}
                >
                  Upload <TiUpload />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => reandomImgChanger(idx)}
                  className="w-full cursor-pointer h-10 relative overflow-hidden"
                  disabled={loadingMap[idx]}
                >
                  <div
                    className={`flex items-center gap-2 transition-opacity duration-200 ${
                      loadingMap[idx] ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    Random <TbArrowsRandom />
                  </div>

                  {loadingMap[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="flex items-center justify-center"
                      >
                        <TbLoader2 className="text-xl text-neutral-400" />
                      </motion.div>
                    </div>
                  )}
                </Button>
              </div>
            </div>

            <div
              className={`w-full h-px ${isDark ? "bg-neutral-800" : "bg-neutral-100"}`}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageEdit;
