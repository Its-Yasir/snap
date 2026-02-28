export interface Post {
  id: string;
  platform: string; // e.g., 'youtube', 'x'
  type: string;
  content: Record<string, unknown> | string;
}

export interface BoardState {
  posts: Post[];
  settings: Settings;
  addPost: (post: Post) => void;
  updatePost: (id: string, updatedData: Partial<Post>) => void;
  removePost: (id: string) => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

export interface Settings {
  Layout: "comfortable" | "standard" | "compact";
  bg: "green" | "blue" | "gray" | "black" | "white";
  boardColor: "green" | "blue" | "gray" | "black" | "white";
}
