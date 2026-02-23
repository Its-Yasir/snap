import { PlatformConfig } from "@/types";

export const PLATFORMS: string[] = [
  "Discord",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Pinterest",
  "Reddit",
  "Snapchat",
  "Telegram",
  "TikTok",
  "WhatsApp",
  "X (Twitter)",
  "YouTube",
];

export const TYPES: PlatformConfig[] = [
  {
    id: 1,
    platform: "discord",
    types: [
      "profile-bar", //Add nitro effects on profile
      "mini-profile-bar",
      "profile-details",
      "profile-card",
    ],
  },
  {
    id: 2,
    platform: "pinterest",
    types: ["vertical-post", "square-post"],
  },
  {
    id: 3,
    platform: "linkedin",
    types: [
      "post",
      "mini-profile",
      "connect-profile",
      "main-profile",
      "jobs",
      "comments",
      "connect-request",
    ],
  },
  {
    id: 3,
    platform: "reddit",
    types: ["community", "post", "mini-post", "profile-card"],
  },
  {
    id: 4,
    platform: "whatsapp",
    types: [
      "channel-card",
      "channel-bar",
      "voice-messsage",
      "text-message",
      "group-card",
      "in-message-profile-card",
      "profile-card",
    ],
  },
  {
    id: 5,
    platform: "X",
    types: [
      "post",
      "quote",
      "comment",
      "mini-profile",
      "detailed-profile",
      "profile-bar",
      "creator-bar",
      "notification",
      "commentandreply",
    ],
  },
  {
    id: 6,
    platform: "youtube",
    types: [
      "thumbnail-video",
      "playing-video",
      "video-card",
      "comment",
      "channel-card",
      "mini-channel-card",
      "playlist-card",
      "short-video",
      "short-video-thumbnail",
    ],
  },
];

export function isValidPlatform(p: string | null): boolean {
  if (!p) return false;
  return PLATFORMS.includes(p);
}
