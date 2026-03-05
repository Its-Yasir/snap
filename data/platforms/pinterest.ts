import { DataType } from "@/types";
import { commonExtra, postContentImage } from "../helpers";

export const pinterest: DataType[number] = {
  platform: "pinterest",
  types: [
    {
      type: "vertical post",
      images: [postContentImage("/vertical.png")],
      extra: commonExtra([{ name: "Video", min: 0, max: 1, current: 1 }]),
    },
    {
      type: "square post",
      images: [postContentImage("/zohaib.png")],
      extra: commonExtra([{ name: "Video", min: 0, max: 1, current: 1 }]),
    },
  ],
};
