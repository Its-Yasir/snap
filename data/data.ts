import { DataType } from "@/types";

export const Data: DataType = [
  {
    platform: "discord",
    type: "profile bar",
    images: [
      {
        name: "Profile Image",
        url: "/zohaib.png",
        isHidden: false,
        input: {
          label: "Enter profile URL or username:",
          placeholder: "https://discord.com/zohiab_yousaf or user_name",
        },
      },
    ],
    text: [
      {
        type: "text",
        currentValue: "Zohaib Yousaf",
        input: {
          title: "Full Name",
          label: "Enter full name:",
          placeholder: "Your name",
        },
      },
      {
        type: "text",
        currentValue: "zohaib_yousaf",
        input: {
          title: "Username",
          label: "Enter discord username:",
          placeholder: "user_name",
        },
      },
      {
        type: "choice",
        currentValue: "online",
        choices: [
          { key: "online", value: "Online" },
          { key: "dnd", value: "Do Not Disturb" },
          { key: "idle", value: "Idle" },
          { key: "offline", value: "Offline" },
        ],
        input: {
          title: "User Status",
          label: "Enter user status:",
          placeholder: "Choose user status",
        },
      },
    ],
    extra: [
      { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
      { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
      { name: "Theme", min: 0, max: 1, current: 1 },
    ],
  },
  {
    platform: "youTube",
    type: "thumbnail video",
    images: [
      {
        name: "Thumbnail",
        isHidden: true,
        url: "/thumbnail1.png",
        input: {
          label: "Enter a video URL:",
          placeholder: "https://youtube.com/watch?v=123...",
        },
      },
      {
        name: "Channel Logo",
        isHidden: true,
        url: "/zohaib.png",
        input: {
          label: "Enter a channel URL:",
          placeholder: "https://www.youtube.com/@abc123",
        },
      },
    ],
    text: [
      {
        type: "text",
        currentValue: "The Video",
        input: {
          title: "Video Title",
          label: "Enter video title:",
          placeholder: "e.g., The video...",
        },
      },
      {
        type: "text",
        currentValue: "The Channel",
        input: {
          title: "Channel Name",
          label: "Enter channel name:",
          placeholder: "The channel",
        },
      },
      {
        type: "text",
        currentValue: "100m",
        input: {
          title: "Video Views",
          label: "Enter video views:",
          placeholder: "e.g., 10m or 18k",
        },
      },
      {
        type: "text",
        currentValue: "1:14:54",
        input: {
          title: "Video Duration",
          label: "Enter video duration:",
          placeholder: "00:00:00",
        },
      },
      {
        type: "text",
        currentValue: "2d ago",
        input: {
          title: "Video Age",
          label: "Enter video age:",
          placeholder: "e.g., 2 days ago",
        },
      },
    ],
    extra: [
      { name: "Padding", min: 1, max: 5, current: 2 },
      { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
      { name: "Theme", min: 0, max: 1, current: 1 },
      { name: "Show Views", min: 0, max: 1, current: 1 },
      { name: "Show Video Age", min: 0, max: 1, current: 1 },
      { name: "Show Subscribers", min: 0, max: 1, current: 1 },
      { name: "Show Duration", min: 0, max: 1, current: 1 },
      { name: "Show Timeline", min: 0, max: 1, current: 1 },
      { name: "Video played", min: 1, max: 100, current: 34 },
    ],
  },
];
