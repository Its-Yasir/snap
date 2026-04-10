import { DataType } from "@/types";

export const pinterest: DataType[number] = {
  platform: "pinterest",
  types: [
    {
      type: "vertical post",
      images: [
        {
          name: "Post Content",
          url: "/vertical.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Post URL:",
            placeholder: "URL to the post",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Video", min: 0, max: 1, current: 1 },
      ],
    },
    {
      type: "square post",
      images: [
        {
          name: "Post Content",
          url: "/zohaib.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Post URL:",
            placeholder: "URL to the post",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Video", min: 0, max: 1, current: 1 },
      ],
    },
  ],
};
