import { DataType } from "@/types";

export const discord: DataType[number] = {
  platform: "discord",
  types: [
    //profile bar
    {
      type: "profile bar",
      images: [
        {
          name: "Profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter profile ID:",
            placeholder: "0123456789012345678",
          },
          info: "Go to Discord Settings > Advanced > Turn on Developer Mode. Right-click a profile and click Copy User ID. Paste that 18-19 digit number into the app.",
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
            label: `Enter discord username:`,
            placeholder: "user_name",
          },
        },
        {
          type: "choice",
          currentValue: "Online",
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
        { name: "Padding", min: 0, max: 20, current: 6, default: 6 },
        { name: "Roundness", min: 0, max: 21, current: 6, default: 6 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show online", min: 0, max: 1, current: 1 },
        { name: "Show username", min: 0, max: 1, current: 1 },
      ],
    },
    //profile details
    {
      type: "profile details",
      images: [
        {
          name: "Profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter profile ID:",
            placeholder: "0123456789012345678",
          },
          info: "Go to Discord Settings > Advanced > Turn on Developer Mode. Right-click a profile and click Copy User ID. Paste that 18-19 digit number into the app.",
        },
        {
          name: "Background Image",
          url: "/bg.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter banner ID:",
            placeholder: "0123456789012345678",
          },
          info: "Go to Discord Settings > Advanced > Turn on Developer Mode. Right-click a profile and click Copy User ID. Paste that 18-19 digit number into the app.",
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
            label: `Enter discord username:`,
            placeholder: "user_name",
          },
        },
        {
          type: "text",
          currentValue: "Oct 3, 2025",
          input: {
            title: "Member Since",
            label: "Enter Date:",
            placeholder: "Mon DD, YYYY",
          },
        },
        {
          type: "text",
          currentValue: "1",
          input: {
            title: "Mutual friends",
            label: "Enter number of friends:",
            placeholder: "0000",
          },
        },
        {
          type: "text",
          currentValue: "1",
          input: {
            title: "Mutual servers",
            label: "Enter number of servers:",
            placeholder: "0000",
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
        { name: "Padding", min: 0, max: 50, current: 16, default: 16 },
        { name: "Roundness", min: 0, max: 40, current: 12, default: 12 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Friend", min: 0, max: 1, current: 1 },
      ],
    },
    //profile card
    {
      type: "profile card",
      images: [
        {
          name: "Profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter profile ID:",
            placeholder: "0123456789012345678",
          },
          info: "Go to Discord Settings > Advanced > Turn on Developer Mode. Right-click a profile and click Copy User ID. Paste that 18-19 digit number into the app.",
        },
        {
          name: "Background Image",
          url: "/bg.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter banner ID:",
            placeholder: "0123456789012345678",
          },
          info: "Go to Discord Settings > Advanced > Turn on Developer Mode. Right-click a profile and click Copy User ID. Paste that 18-19 digit number into the app.",
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
            label: `Enter discord username:`,
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
        { name: "Padding", min: 0, max: 50, current: 16, default: 16 },
        { name: "Roundness", min: 0, max: 40, current: 12, default: 12 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Friend", min: 0, max: 1, current: 1 },
      ],
    },
  ],
};
