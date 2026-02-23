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
      { key: "profile-bar", title: "Profile Bar" }, // Add nitro effects on profile
      { key: "mini-profile-bar", title: "Mini Profile Bar" },
      { key: "profile-details", title: "Profile Details" },
      { key: "profile-card", title: "Profile Card" },
    ],
  },
  {
    id: 2,
    platform: "pinterest",
    types: [
      { key: "vertical-post", title: "Vertical Post" },
      { key: "square-post", title: "Square Post" },
    ],
  },
  {
    id: 3,
    platform: "linkedin",
    types: [
      { key: "post", title: "Post" },
      { key: "mini-profile", title: "Mini Profile" },
      { key: "connect-profile", title: "Connect Profile" },
      { key: "main-profile", title: "Main Profile" },
      { key: "jobs", title: "Jobs" },
      { key: "comments", title: "Comments" },
      { key: "connect-request", title: "Connect Request" },
    ],
  },
  {
    id: 4,
    platform: "reddit",
    types: [
      { key: "community", title: "Community" },
      { key: "post", title: "Post" },
      { key: "mini-post", title: "Mini Post" },
      { key: "profile-card", title: "Profile Card" },
    ],
  },
  {
    id: 5,
    platform: "whatsapp",
    types: [
      { key: "channel-card", title: "Channel Card" },
      { key: "channel-bar", title: "Channel Bar" },
      { key: "voice-message", title: "Voice Message" },
      { key: "text-message", title: "Text Message" },
      { key: "group-card", title: "Group Card" },
      { key: "in-message-profile-card", title: "In-Message Profile Card" },
      { key: "profile-card", title: "Profile Card" },
    ],
  },
  {
    id: 6,
    platform: "X",
    types: [
      { key: "post", title: "Post" },
      { key: "quote", title: "Quote" },
      { key: "comment", title: "Comment" },
      { key: "mini-profile", title: "Mini Profile" },
      { key: "detailed-profile", title: "Detailed Profile" },
      { key: "profile-bar", title: "Profile Bar" },
      { key: "creator-bar", title: "Creator Bar" },
      { key: "notification", title: "Notification" },
      { key: "commentandreply", title: "Comment and Reply" },
    ],
  },
  {
    id: 7,
    platform: "youtube",
    types: [
      { key: "thumbnail-video", title: "Thumbnail Video" },
      { key: "playing-video", title: "Playing Video" },
      { key: "video-card", title: "Video Card" },
      { key: "comment", title: "Comment" },
      { key: "channel-card", title: "Channel Card" },
      { key: "mini-channel-card", title: "Mini Channel Card" },
      { key: "playlist-card", title: "Playlist Card" },
      { key: "short-video", title: "Short Video" },
      { key: "short-video-thumbnail", title: "Short Video Thumbnail" },
    ],
  },
  {
    id: 8,
    platform: "instagram",
    types: [
      { key: "post", title: "Post" },
      { key: "comment", title: "Comment" },
      { key: "ama", title: "AMA" },
    ],
  },
];

export function isValidPlatform(p: string | null): boolean {
  if (!p) return false;
  return PLATFORMS.includes(p);
}
