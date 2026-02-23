export interface PlatformConfig {
  id: number;
  platform: string;
  types: Type[];
}

export interface Type {
  key: string;
  title: string;
}
