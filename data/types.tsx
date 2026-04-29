import { PlatformTypes, Type } from "@/types";
import { platforms } from ".";

export const discordTypes: Type[] = [
  { name: "Profile Bar", code: "profile bar", platform: platforms[0] },
  { name: "Profile Details", code: "profile details", platform: platforms[0] },
  { name: "Profile Card", code: "profile card", platform: platforms[0] },
];

export const linkedInTypes: Type[] = [
  { name: "Post", code: "post", platform: platforms[3] },
  { name: "Mini Profile", code: "mini profile", platform: platforms[3] },
  { name: "Connect Profile", code: "connect profile", platform: platforms[3] },
  { name: "Main Profile", code: "main profile", platform: platforms[3] },
  { name: "Job", code: "job", platform: platforms[3] },
  { name: "Comment", code: "comment", platform: platforms[3] },
  {
    name: "Connection Request",
    code: "connection request",
    platform: platforms[3],
  },
];

export const pinterestTypes: Type[] = [
  {
    name: "Vertical Post",
    code: "vertical post",
    platform: platforms[4],
    imageUrl: "/vertical.png",
  },
  {
    name: "Square Post",
    code: "square post",
    platform: platforms[4],
    imageUrl: "/zohaib.png",
  },
];

export const redditTypes: Type[] = [
  { name: "Community Post", code: "community post", platform: platforms[5] },
  { name: "Mini Post", code: "mini post", platform: platforms[5] },
  { name: "Profile Card", code: "profile card", platform: platforms[5] },
];

export const whatsappTypes: Type[] = [
  { name: "Channel Card", code: "channel card", platform: platforms[9] },
  { name: "Channel Bar", code: "channel bar", platform: platforms[9] },
  { name: "Voice Message", code: "voice message", platform: platforms[9] },
  { name: "Text Message", code: "text message", platform: platforms[9] },
  { name: "Group Card", code: "group card", platform: platforms[9] },
  {
    name: "In Message Profile Card",
    code: "in message profile card",
    platform: platforms[9],
  },
  { name: "Profile Card", code: "profile card", platform: platforms[9] },
];

export const xTypes: Type[] = [
  { name: "Post", code: "post", platform: platforms[10] },
  { name: "Quote", code: "quote", platform: platforms[10] },
  { name: "Comment", code: "comment", platform: platforms[10] },
  { name: "Mini Profile", code: "mini profile", platform: platforms[10] },
  {
    name: "Detailed Profile",
    code: "detailed profile",
    platform: platforms[10],
  },
  { name: "Profile Bar", code: "profile bar", platform: platforms[10] },
  { name: "Creator Bar", code: "creator bar", platform: platforms[10] },
  { name: "Notification", code: "notification", platform: platforms[10] },
  { name: "Comments & Reply", code: "comments", platform: platforms[10] },
];

export const youtubeTypes: Type[] = [
  { name: "Thumbnail Video", code: "thumbnail video", platform: platforms[11] },
  { name: "Playing Video", code: "playing video", platform: platforms[11] },
  { name: "Video Card", code: "video card", platform: platforms[11] },
  { name: "Comment", code: "comment", platform: platforms[11] },
  { name: "Channel Card", code: "channel card", platform: platforms[11] },
  {
    name: "Mini Channel Card",
    code: "mini channel card",
    platform: platforms[11],
  },
  { name: "Playlist Card", code: "playlist card", platform: platforms[11] },
  { name: "Short Video", code: "short video", platform: platforms[11] },
  {
    name: "Short Video Thumbnail",
    code: "short video thumbnail",
    platform: platforms[11],
  },
];

export const facebookTypes: Type[] = [
  {
    name: "Friend Request Notification",
    code: "friend request notification",
    platform: platforms[1],
  },
  {
    name: "Friend Request",
    code: "friend request",
    platform: platforms[1],
  },
  { name: "Post", code: "post", platform: platforms[1] },
  { name: "Story", code: "story", platform: platforms[1] },
  { name: "Reel", code: "reel", platform: platforms[1] },
];

export const instagramTypes: Type[] = [
  { name: "Profile", code: "profile", platform: platforms[2] },
  { name: "Post", code: "post", platform: platforms[2] },
  { name: "Follow Request", code: "follow request", platform: platforms[2] },
  { name: "Comment", code: "comment", platform: platforms[2] },
  { name: "Reel", code: "reel", platform: platforms[2] },
  { name: "Message", code: "message", platform: platforms[2] },
  { name: "Message Request", code: "message request", platform: platforms[2] },
  { name: "Q & A", code: "q&a", platform: platforms[2] },
];

export const snapchatTypes: Type[] = [
  { name: "Post", code: "post", platform: platforms[6] },
  { name: "Comment", code: "comment", platform: platforms[6] },
  { name: "Profile", code: "profile", platform: platforms[6] },
];

export const telegramTypes: Type[] = [
  { name: "Post", code: "post", platform: platforms[7] },
  { name: "Comment", code: "comment", platform: platforms[7] },
  { name: "Profile", code: "profile", platform: platforms[7] },
];

export const tiktokTypes: Type[] = [
  { name: "Post", code: "post", platform: platforms[8] },
  { name: "Comment", code: "comment", platform: platforms[8] },
  { name: "Profile", code: "profile", platform: platforms[8] },
];

// Final combined array
export const platformTypesData: PlatformTypes = [
  { platform: platforms[0], types: discordTypes },
  { platform: platforms[1], types: facebookTypes },
  { platform: platforms[2], types: instagramTypes },
  { platform: platforms[3], types: linkedInTypes },
  { platform: platforms[4], types: pinterestTypes },
  { platform: platforms[5], types: redditTypes },
  { platform: platforms[6], types: snapchatTypes },
  { platform: platforms[7], types: telegramTypes },
  { platform: platforms[8], types: tiktokTypes },
  { platform: platforms[9], types: whatsappTypes },
  { platform: platforms[10], types: xTypes },
  { platform: platforms[11], types: youtubeTypes },
];
