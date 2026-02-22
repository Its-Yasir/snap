export const PLATFORMS = [
  "Discord",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Pinterest",
  "Reddit",
  "Snapchat",
  "Telegram",
  "Threads",
  "TikTok",
  "Twitch",
  "WeChat",
  "WhatsApp",
  "X (Twitter)",
  "YouTube",
];

export function isValidPlatform(p: string | null): boolean {
  if (!p) return false;
  return PLATFORMS.includes(p);
}
