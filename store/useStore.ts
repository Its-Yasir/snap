import { BoardState } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBoardStore = create<BoardState>()(
  persist(
    (set) => ({
      posts: [],
      isSearching: false,
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
    }),
    {
      name: "board-storage",
    },
  ),
);
