import { ReactNode } from "react";

export interface Post {
  id: number;
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
}

export interface BoardState {
  posts: Post[];
  settings: Settings;
  isSearching: boolean;
  isPanning: boolean;
  activePostId: number | null;
  addPost: (post: Post) => void;
  updatePost: (id: number, updatedData: Partial<Post>) => void;
  removePost: (id: number) => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
  setIsSearching: (val: boolean) => void;
  setIsPanning: (val: boolean) => void;
  setActivePostId: (id: number | null) => void;
  setImageVisibility: (
    postId: number,
    imageIndex: number,
    isHidden: boolean,
  ) => void;
  setImageUrl: (postId: number, imgIdx: number, url: string) => void;
  updatePostText: (postId: number, textIdx: number, newValue: string) => void;
  updatePostExtra: (postId: number, extraIdx: number, newValue: number) => void;
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
  info?: string;
  isHidden: boolean;
  size: "small" | "large";
  url: string;
  input?: inputForImg;
}

export interface textType {
  type: "text" | "choice" | "number";
  info?: string;
  currentValue: string | number;
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

export type TypeDataDetail = {
  type: string;
  images: imageInputType[];
  text?: textType[];
  extra: extraNumeric[];
};

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
  types: TypeDataDetail[];
}[];
