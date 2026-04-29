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
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
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
            label: "Enter profile URL or username:",
            placeholder: "https://discord.com/zohiab_yousaf or user_name",
          },
        },
        {
          name: "Background Image",
          url: "/bg.png",
          isHidden: true,
          size: "small",
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
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
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
            label: "Enter profile URL or username:",
            placeholder: "https://discord.com/zohiab_yousaf or user_name",
          },
        },
        {
          name: "Background Image",
          url: "/bg.png",
          isHidden: true,
          size: "small",
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
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Friend", min: 0, max: 1, current: 1 },
      ],
    },
  ],
};
