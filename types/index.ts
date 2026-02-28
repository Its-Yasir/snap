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
  activePostId: string | null;
  addPost: (post: Post) => void;
  updatePost: (id: string, updatedData: Partial<Post>) => void;
  removePost: (id: string) => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
  setIsSearching: (val: boolean) => void;
  setActivePostId: (id: string | null) => void;
}

export interface Settings {
  Layout: "comfortable" | "standard" | "compact";
  bg: "green" | "blue" | "gray" | "black" | "white";
  boardColor: "green" | "blue" | "gray" | "black" | "white";
  position: "horizontal" | "vertical";
  workspaceName: string;
  sidebarPosition: "left" | "right";
  toolbarPosition: "top" | "bottom";
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

export interface inputForImg {
  label: string;
  placeholder: string;
}

export interface inputForText {
  title: string;
  label: string;
  placeholder: string;
}

export interface choice {
  key: string;
  value: string;
}

export interface imageInputType {
  name: string;
  isHidden: boolean;
  url: string;
  input?: inputForImg;
}

export interface textType {
  type: "text" | "choice";
  currentValue: string;
  choices?: choice[];
  input: inputForText;
}

export interface extraNumeric {
  name: string;
  min: number;
  max: number;
  current: number;
  default?: number;
}

export type DataType = {
  platform:
    | "discord"
    | "facebook"
    | "instagram"
    | "linkedIn"
    | "pinterest"
    | "reddit"
    | "snapchat"
    | "telegram"
    | "tikTok"
    | "whatsApp"
    | "x"
    | "youTube";
  type: string;
  images: imageInputType[];
  text: textType[];
  extra: extraNumeric[];
}[];
