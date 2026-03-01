import { BoardState } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBoardStore = create<BoardState>()(
  persist(
    (set) => ({
      posts: [],
      isSearching: false,
      isPanning: false,
      activePostId: null,
      settings: {
        Layout: "compact",
        bg: "black",
        boardColor: "black",
        position: "horizontal",
        workspaceName: "Your Workspace",
        sidebarPosition: "left",
        toolbarPosition: "bottom",
      },

      setIsSearching: (val) => set({ isSearching: val }),
      setIsPanning: (val) => set({ isPanning: val }),
      setActivePostId: (id) => set({ activePostId: id }),

      addPost: (post) =>
        set((state) => {
          if (state.posts.length >= 5) return state;
          return { posts: [...state.posts, post] };
        }),

      updatePost: (id, updatedData) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, ...updatedData } : p,
          ),
        })),

      removePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((p) => p.id !== id),
        })),

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      setImageVisibility: (postId, imageIndex, isHidden) =>
        set((state) => ({
          posts: state.posts.map((post) => {
            if (post.id === postId) {
              const newImages = [...post.images];
              if (newImages[imageIndex]) {
                newImages[imageIndex] = {
                  ...newImages[imageIndex],
                  isHidden,
                };
              }
              return { ...post, images: newImages };
            }
            return post;
          }),
        })),
      setImageUrl: (postId, imgIdx, url) =>
        set((state) => ({
          posts: state.posts.map((post) => {
            if (post.id === postId) {
              const newImg = [...post.images];
              if (newImg[imgIdx]) {
                newImg[imgIdx] = {
                  ...newImg[imgIdx],
                  url: url,
                };
              }
              return { ...post, images: newImg };
            }
            return post;
          }),
        })),
    }),
    {
      name: "board-storage",
    },
  ),
);
