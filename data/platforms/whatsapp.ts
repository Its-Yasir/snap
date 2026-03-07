import { DataType } from "@/types";

export const whatsapp: DataType[number] = {
  platform: "whatsApp",
  types: [
    //Channel card:
    {
      type: "channel card",
      images: [
        {
          name: "Channel Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Channel name",
            label: "Enter channel name:",
            placeholder: "Channel name",
          },
        },
        {
          type: "number",
          currentValue: 2341,
          input: {
            title: "Followers",
            label: "Enter number of followerz:",
            placeholder: "0000",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Verified", min: 0, max: 1, current: 1 },
        { name: "Following", min: 0, max: 1, current: 0 },
      ],
    },
    //Channel Bar
    {
      type: "channel bar",
      images: [
        {
          name: "Channel Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Channel name",
            label: "Enter channel name:",
            placeholder: "Channel name",
          },
        },
        {
          type: "text",
          currentValue: "24K",
          input: {
            title: "Followers",
            label: "Enter number of followerz:",
            placeholder: "000K or 00M",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Verified", min: 0, max: 1, current: 1 },
        { name: "Following", min: 0, max: 1, current: 0 },
      ],
    },
  ],
};
