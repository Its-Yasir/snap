import { DataType } from "@/types";

export const linkedIn: DataType[number] = {
  platform: "linkedIn",
  types: [
    {
      type: "post",
      images: [
        {
          name: "Post Content",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Post URL:",
            placeholder: "URL to the post",
          },
        },
        {
          name: "User Profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "https://linkedin.com/in/username",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter Linkedin user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "Full time web developer",
          input: {
            title: "Headline",
            label: "Enter Linkedin user's headline:",
            placeholder: "What you are good at?",
          },
        },
        {
          type: "text",
          currentValue: "3d",
          input: {
            title: "Post age",
            label: "Enter Linkedin post's age:",
            placeholder: "00d or 00h",
          },
        },
        {
          type: "text",
          currentValue:
            "I am very happy to share that i have started my new job at a Pakistani tech company, Whythings",
          input: {
            title: "Post Title",
            label: "Enter Linkedin post's title:",
            placeholder: "What is this post about?",
          },
        },
        {
          type: "text",
          currentValue: "101",
          input: {
            title: "Reactions",
            label: "Enter number of reactions:",
            placeholder: "How many people reacted?",
          },
        },
        {
          type: "text",
          currentValue: "10",
          input: {
            title: "Comments",
            label: "Enter number of commetns:",
            placeholder: "How many people commented?",
          },
        },
        {
          type: "text",
          currentValue: "2",
          input: {
            title: "Reposts",
            label: "Enter number of reposts:",
            placeholder: "How many people reposted?",
          },
        },
        {
          type: "text",
          currentValue: "1:13",
          input: {
            title: "Video Duration",
            label: "Enter video duration, if it is video, otherwise, skip it:",
            placeholder: "00:00",
          },
        },
        {
          type: "choice",
          currentValue: "1st",
          choices: [
            { key: "1st", value: "1st" },
            { key: "2nd", value: "2nd" },
            { key: "3rd", value: "3rd" },
          ],
          input: {
            title: "User's connection degree",
            label: "Chose connection degree:",
            placeholder: "1st, 2nd or 3rd",
          },
        },
        {
          type: "choice",
          currentValue: "Connect",
          choices: [
            { key: "connect", value: "Connect" },
            { key: "follow", value: "Follow" },
            { key: "nothing", value: "Nothing" },
          ],
          input: {
            title: "Extra button",
            label: "Chose Extra buttton:",
            placeholder: "Follow, connect or nothing",
          },
        },
        {
          type: "choice",
          currentValue: "1",
          choices: [
            { key: "1", value: "1" },
            { key: "2", value: "2" },
            { key: "3", value: "3" },
          ],
          input: {
            title: "Types of reactions",
            label: "Chose types of reactions:",
            placeholder: "1, 2 or 3",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Video", min: 0, max: 1, current: 1 },
      ],
    },
  ],
};
