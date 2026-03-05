import { DataType } from "@/types";
import {
  commonExtra,
  profileImage,
  backgroundImage,
  fullNameText,
  usernameText,
  statusChoice,
} from "../helpers";

export const discord: DataType[number] = {
  platform: "discord",
  types: [
    //profile bar
    {
      type: "profile bar",
      images: [profileImage()],
      text: [fullNameText(), usernameText(), statusChoice()],
      extra: commonExtra(),
    },
    //mini profile bar
    {
      type: "mini profile bar",
      images: [profileImage()],
      text: [fullNameText(), statusChoice()],
      extra: commonExtra(),
    },
    //profile details
    {
      type: "profile details",
      images: [profileImage(), backgroundImage()],
      text: [
        fullNameText(),
        usernameText("zohaib_yousaf"),
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
        statusChoice(),
      ],
      extra: commonExtra([{ name: "Friend", min: 0, max: 1, current: 1 }]),
    },
    //profile card
    {
      type: "profile card",
      images: [profileImage(), backgroundImage()],
      text: [fullNameText(), usernameText(), statusChoice()],
      extra: commonExtra([{ name: "Friend", min: 0, max: 1, current: 1 }]),
    },
  ],
};
