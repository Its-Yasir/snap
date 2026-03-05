import { extraNumeric, imageInputType, textType } from "@/types";

export const commonExtra = (
  overrides: Partial<extraNumeric>[] = [],
): extraNumeric[] => {
  const base: extraNumeric[] = [
    { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
    { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
    { name: "Theme", min: 0, max: 1, current: 1 },
  ];

  return base
    .map((item) => {
      const override = overrides.find((o) => o.name === item.name);
      return override ? { ...item, ...override } : item;
    })
    .concat(
      overrides.filter(
        (o) => !base.find((b) => b.name === o.name),
      ) as extraNumeric[],
    );
};

export const profileImage = (url = "/zohaib.png"): imageInputType => ({
  name: "Profile Image",
  url,
  isHidden: true,
  size: "small",
  input: {
    label: "Enter profile URL or username:",
    placeholder: "https://discord.com/zohiab_yousaf or user_name",
  },
});

export const backgroundImage = (url = "/bg.png"): imageInputType => ({
  name: "Background Image",
  url,
  isHidden: true,
  size: "small",
  input: {
    label: "Enter profile URL or username:",
    placeholder: "https://discord.com/zohiab_yousaf or user_name",
  },
});

export const postContentImage = (
  url = "/horizontal.png",
  size: "small" | "large" = "large",
): imageInputType => ({
  name: "Post Content",
  url,
  isHidden: true,
  size,
  input: {
    label: "Enter Post URL:",
    placeholder: "URL to the post",
  },
});

export const fullNameText = (value = "Zohaib Yousaf"): textType => ({
  type: "text",
  currentValue: value,
  input: {
    title: "Full Name",
    label: "Enter full name:",
    placeholder: "Your name",
  },
});

export const usernameText = (
  value = "zohaib_yousaf",
  platform = "discord",
): textType => ({
  type: "text",
  currentValue: value,
  input: {
    title: "Username",
    label: `Enter ${platform} username:`,
    placeholder: "user_name",
  },
});

export const statusChoice = (value = "online"): textType => ({
  type: "choice",
  currentValue: value,
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
});
