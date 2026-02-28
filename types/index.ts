import { ReactNode } from "react";

export interface Post {
  id: string;
  platform: string; // e.g., 'youtube', 'x'
  type: string;
  content: Record<string, unknown> | string;
}

export interface BoardState {
  posts: Post[];
  settings: Settings;
  isSearching: boolean;
  addPost: (post: Post) => void;
  updatePost: (id: string, updatedData: Partial<Post>) => void;
  removePost: (id: string) => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
  setIsSearching: (val: boolean) => void;
}

export interface Settings {
  Layout: "comfortable" | "standard" | "compact";
  bg: "green" | "blue" | "gray" | "black" | "white";
  boardColor: "green" | "blue" | "gray" | "black" | "white";
  position: "horizontal" | "vertical";
  workspaceName: string;
}

export interface Platform {
  name: string;
  code: string;
  icon: ReactNode;
}

export interface Type {
  name: string;
  code: string;
  platform: Platform;
  imageUrl?: string;
}

export type PlatformTypes = {
  platform: Platform;
  types: Type[];
}[];
