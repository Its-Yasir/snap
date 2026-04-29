import React, { useEffect, useState, useRef } from "react";
import { toPng } from "html-to-image";
import Image from "next/image";
import { useBoardStore } from "@/store/useStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Search, Download, Star, Heart, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { platformTypesData } from "@/data/types";
import { Data } from "@/data/data";
import { Post, Type } from "@/types";
import Snip from "@/components/shared/Snip";
import { useSnipContext } from "@/context/SnipContext";

const Main = () => {
  const {
    settings,
    posts,
    addPost,
    removePost,
    updatePost,
    setIsSearching,
    activePostId,
    setActivePostId,
    isPanning,
  } = useBoardStore((state) => state);
  const { Layout, boardColor, position } = settings;
  const { setSelectedSnip } = useSnipContext();

  useEffect(() => {
    setSelectedSnip(activePostId || 0);
  }, [activePostId, setSelectedSnip]);

  const [focusedPostId, setFocusedPostId] = useState<number | null>(null);
  const [searchQueries, setSearchQueries] = useState<Record<number, string>>(
    {},
  );
  const [hoveredPreview, setHoveredPreview] = useState<{
    url: string;
    name: string;
    top: number;
  } | null>(null);
  const postsRef = useRef<(HTMLDivElement | null)[]>([]);
  const snipRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const downloadImage = async (postId: number, multiplier: number) => {
    const element = snipRefs.current[postId];
    if (!element) return;

    try {
      const dataUrl = await toPng(element, {
        pixelRatio: multiplier,
        skipAutoScale: true,
      });

      const link = document.createElement("a");
      link.download = `snip-${postId}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Failed to download image", error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (useBoardStore.getState().isPanning) return;

      const target = event.target as Element;
      if (target?.closest(".sidebar-container")) return;

      if (
        !postsRef.current.some(
          (ref) => ref && ref.contains(event.target as Node),
        )
      ) {
        setFocusedPostId(null);
        setIsSearching(false);
        setHoveredPreview(null);
        setActivePostId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsSearching, setActivePostId]);

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

  const headerColorMap = {
    green: "bg-green-800 text-green-100 hover:bg-green-800/90",
    blue: "bg-blue-800 text-blue-100 hover:bg-blue-800/90",
    gray: "bg-gray-800 text-gray-100 hover:bg-gray-800/90",
    black: "bg-white/10 text-white hover:bg-white/20",
    white: "bg-gray-100 text-black hover:bg-gray-200",
  };

  const activeHeaderColor = headerColorMap[boardColor] || headerColorMap.green;

  const dropDownBgMap: Record<string, string> = {
    green: "bg-green-950 border-green-800 text-green-50",
    blue: "bg-blue-950 border-blue-800 text-blue-50",
    gray: "bg-gray-950 border-gray-800 text-gray-50",
    black: "bg-zinc-950 border-white/10 text-white",
    white: "bg-white border-gray-200 text-black shadow-xl",
  };
  const dropdownBg = dropDownBgMap[boardColor] || dropDownBgMap.green;

  const dropDownHoverMap: Record<string, string> = {
    green: "hover:bg-green-900",
    blue: "hover:bg-blue-900",
    gray: "hover:bg-gray-900",
    black: "hover:bg-zinc-900",
    white: "hover:bg-gray-100",
  };
  const dropdownHover = dropDownHoverMap[boardColor] || dropDownHoverMap.green;

  const brandHoverColors: Record<string, string> = {
    discord: "group-hover:text-[#5865F2]",
    facebook: "group-hover:text-[#1877F2]",
    instagram: "group-hover:text-[#E4405F]",
    linkedin: "group-hover:text-[#0A66C2]",
    pinterest: "group-hover:text-[#BD081C]",
    reddit: "group-hover:text-[#FF4500]",
    snapchat: "group-hover:text-[#eebb00]",
    telegram: "group-hover:text-[#26A5E4]",
    tiktok: "group-hover:text-[#ff0050]",
    whatsapp: "group-hover:text-[#25D366]",
    x: "group-hover:text-black dark:group-hover:text-white",
    youtube: "group-hover:text-[#FF0000]",
  };

  useEffect(() => {
    if (posts.length === 0) {
      // Check the actual state to bypass Next.js SSR hydration closures
      // where `posts` might temporarily be [] before Zustand synchronizes
      const actualPosts = useBoardStore.getState().posts;
      if (actualPosts.length === 0) {
        addPost({
          id: Date.now(),
          platform: "discord",
          type: "empty",
          images: [],
          text: [],
          extra: [],
        });
      }
    }
  }, [posts.length, addPost]);

  const handleAddPost = () => {
    if (posts.length < 5) {
      addPost({
        id: Date.now(),
        platform: "discord",
        type: "empty",
        images: [],
        text: [],
        extra: [],
      });
    }
  };

  const getTypeObject = (
    platformCode: string,
    typeCode: string,
  ): Type | undefined => {
    const platformData = platformTypesData.find(
      (p) => p.platform.code === platformCode,
    );
    return platformData?.types.find((t) => t.code === typeCode);
  };

  const getSearchResults = (query: string): Type[] => {
    if (!query || typeof query !== "string" || !query.trim()) return [];
    const lowerQuery = query.toLowerCase().trim();
    const results: Type[] = [];

    platformTypesData.forEach((pt) => {
      const isPlatformMatch = pt.platform.name
        .toLowerCase()
        .includes(lowerQuery);

      pt.types.forEach((t) => {
        const isTypeMatch = t.name.toLowerCase().includes(lowerQuery);
        if (isPlatformMatch || isTypeMatch) {
          if (
            !results.some(
              (r) => r.name === t.name && r.platform.code === t.platform.code,
            )
          ) {
            results.push(t);
          }
        }
      });
    });

    results.sort((a, b) => a.platform.name.localeCompare(b.platform.name));
    return results;
  };

  const handleSelectSearchResult = (postId: number, type: Type) => {
    const matchedPlatform = Data.find(
      (d) => d.platform.toLowerCase() === type.platform.code.toLowerCase(),
    );
    const matchedData = matchedPlatform?.types.find(
      (t) => t.type.toLowerCase() === type.code.toLowerCase(),
    );

    updatePost(Number(postId), {
      platform: type.platform.code as Post["platform"],
      type: type.code,
      images: matchedData?.images || [],
      text: matchedData?.text || [],
      extra: matchedData?.extra || [],
    });
    setFocusedPostId(null);
    setIsSearching(false);
    setHoveredPreview(null);
    setActivePostId(Number(postId));
  };

  return (
    <div
      className={`${paddingMap[Layout]} ${activeColor} transition-colors rounded-md border border-dashed flex flex-col gap-4 min-h-[300px]`}
    >
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          className={`font-semibold cursor-default border-none ${activeHeaderColor}`}
        >
          Snips you are working on: {posts.length}/5
        </Button>
      </div>

      <div
        className={`flex gap-4 flex-wrap ${position === "vertical" ? "flex-col pb-32" : "flex-row w-full"}`}
      >
        {posts.map((post, index) => {
          const query = searchQueries[post.id] || "";
          const results = getSearchResults(query);
          const showDropdown = focusedPostId === post.id && query.length > 0;

          return (
            <div
              key={post.id}
              ref={(el) => {
                postsRef.current[index] = el;
              }}
              className={`flex flex-col gap-3 flex-1 min-h-fit min-w-[300px] ${post.type === "empty" ? "p-1" : "p-3"} rounded-xl border-2 transition-all cursor-pointer ${
                activePostId === post.id
                  ? boardColor === "white"
                    ? "border-black/30 bg-black/5"
                    : "border-white/30 bg-white/5"
                  : "border-transparent hover:border-white/10"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (isPanning) return;
                setActivePostId(post.id);
              }}
            >
              <div className="flex w-full items-center gap-2">
                <div className="relative flex-1">
                  {post.type !== "empty" ? (
                    <>
                      <div
                        className={`flex items-center w-full rounded-md border px-3 py-2 text-sm ${
                          boardColor === "white"
                            ? "bg-white border-gray-400 text-black"
                            : "bg-background border-input text-foreground"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isPanning) return;
                          setActivePostId(post.id);
                        }}
                      >
                        {(() => {
                          const typeObj = getTypeObject(
                            post.platform,
                            post.type,
                          );
                          if (typeObj) {
                            return (
                              <>
                                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                  {typeObj.platform.icon}
                                </div>
                                <span className="truncate ml-2">
                                  {typeObj.name}
                                </span>
                              </>
                            );
                          }
                          return null;
                        })()}
                      </div>
                    </>
                  ) : (
                    <>
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search anything like, Post, video or comment"
                        className={`pl-8 bg-background border-input ${
                          boardColor === "white" ? "border-gray-400" : ""
                        }`}
                        value={query}
                        onChange={(e) =>
                          setSearchQueries((prev) => ({
                            ...prev,
                            [post.id]: e.target.value,
                          }))
                        }
                        onFocus={() => {
                          if (isPanning) return;
                          setFocusedPostId(post.id);
                          setActivePostId(post.id);
                          setIsSearching(true);
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isPanning) return;
                          setFocusedPostId(post.id);
                          setActivePostId(post.id);
                          setIsSearching(true);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onPointerDownCapture={(e) => e.stopPropagation()}
                        onKeyDownCapture={(e) => e.stopPropagation()}
                      />
                    </>
                  )}

                  {showDropdown && (
                    <div
                      className={`absolute top-full left-0 right-0 mt-2 z-50 max-h-[300px] overflow-y-auto rounded-md border ${dropdownBg} [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full`}
                      onScroll={() => setHoveredPreview(null)}
                      onMouseLeave={() => setHoveredPreview(null)}
                    >
                      {results.length > 0 ? (
                        results.map((result, idx) => (
                          <div
                            key={idx}
                            className={`group relative flex items-center gap-3 p-3 cursor-pointer transition-colors ${dropdownHover}`}
                            onClick={() =>
                              handleSelectSearchResult(Number(post.id), result)
                            }
                            onMouseEnter={(e) => {
                              if (result.imageUrl) {
                                const container =
                                  e.currentTarget.closest(".relative.flex-1");
                                if (container) {
                                  const containerRect =
                                    container.getBoundingClientRect();
                                  const itemRect =
                                    e.currentTarget.getBoundingClientRect();
                                  setHoveredPreview({
                                    url: result.imageUrl,
                                    name: result.name,
                                    top: itemRect.top - containerRect.top,
                                  });
                                }
                              } else {
                                setHoveredPreview(null);
                              }
                            }}
                          >
                            <div
                              className={`text-muted-foreground transition-colors ${
                                brandHoverColors[result.platform.code] ||
                                "group-hover:text-foreground"
                              }`}
                            >
                              {result.platform.icon}
                            </div>
                            <span className="text-sm font-medium">
                              {result.name}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="p-3 text-sm text-center opacity-70">
                          No results found
                        </div>
                      )}
                    </div>
                  )}

                  {showDropdown && hoveredPreview && (
                    <div
                      className="absolute right-full mr-2 z-60 w-48 p-1 bg-background border rounded-md shadow-xl pointer-events-none"
                      style={{ top: hoveredPreview.top }}
                    >
                      <Image
                        src={hoveredPreview.url}
                        alt={hoveredPreview.name}
                        width={192}
                        height={192}
                        className="w-full h-auto object-cover rounded"
                      />
                    </div>
                  )}
                </div>
                <Button
                  onClick={handleAddPost}
                  disabled={posts.length >= 5}
                  size="icon"
                  className="shrink-0"
                  onPointerDownCapture={(e) => e.stopPropagation()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => removePost(post.id)}
                  variant="destructive"
                  size="icon"
                  className="dark:bg-red-600 dark:hover:bg-red-700 dark:text-white shrink-0"
                  onPointerDownCapture={(e) => e.stopPropagation()}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              {post.type !== "empty" && (
                <div className="w-full flex-1 overflow-visible">
                  <div
                    ref={(el) => {
                      snipRefs.current[post.id] = el;
                    }}
                    className="rounded-lg overflow-hidden w-max"
                  >
                    <Snip
                      platform={post.platform}
                      type={post.type}
                      data={post}
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 gap-2 border-dashed hover:border-solid transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Download className="h-4 w-4" />
                        Export Snip
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DropdownMenuLabel>Resolution Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {[1, 2, 3, 4, 5].map((m) => (
                        <DropdownMenuItem
                          key={m}
                          onClick={() => downloadImage(post.id, m)}
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <span>{m}x Resolution</span>
                          {m === 3 && (
                            <span className="flex items-center gap-1 text-[10px] bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded-full font-bold">
                              <Sparkles className="h-3 w-3" />
                              BEST
                            </span>
                          )}
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator />
                      <div className="p-2 text-[10px] text-muted-foreground text-center">
                        <p className="flex items-center justify-center gap-1">
                          If you like our service, support us{" "}
                          <Heart className="h-3 w-3 text-red-500 fill-red-500" />
                        </p>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
