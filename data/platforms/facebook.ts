import { DataType } from "@/types";

export const facebook: DataType[number] = {
  platform: "facebook",
  types: [
    //Frined request notification
    {
      type: "friend request notification",
      images: [
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the user's profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "3d",
          input: {
            title: "Friend reqeust oldness",
            label: "Enter friend request age:",
            placeholder: "e.g., 3d for 3 days ago",
          },
        },
        {
          type: "number",
          currentValue: 5,
          info: "You can turn off the mututal friends in ' extra settings'",
          input: {
            title: "Number of mutual friends",
            label: "Enter number of mutual friends:",
            placeholder: "e.g., 5",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show mutual friends", min: 0, max: 1, current: 1 },
      ],
    },
    //Friend reqeust
    {
      type: "friend request",
      images: [
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the user's profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "number",
          currentValue: 5,
          info: "You can turn off the mututal friends in ' extra settings'",
          input: {
            title: "Number of mutual friends",
            label: "Enter number of mutual friends:",
            placeholder: "e.g., 5",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show mutual friends", min: 0, max: 1, current: 1 },
      ],
    },
    //Story:
    {
      type: "story",
      images: [
        {
          name: "Story content",
          url: "/vertical.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the user's profile",
          },
        },
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the user's profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show Story ring", min: 0, max: 1, current: 1 },
      ],
    },
    //Post:
    {
      type: "post",
      images: [
        {
          name: "Post content",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Post URL:",
            placeholder: "URL to the post",
          },
        },
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the user's profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "My 1st Post!",
          input: {
            title: "Post Content",
            label: "Enter post content:",
            placeholder: "What's on your mind?",
          },
        },
        {
          type: "text",
          currentValue: "May 5 at 3:45 PM",
          input: {
            title: "Post timestamp",
            label: "Enter post timestamp:",
            placeholder: "e.g., May 5 at 3:45 PM",
          },
        },
        {
          type: "text",
          currentValue: "23",
          input: {
            title: "Likes count",
            label: "Enter likes count:",
            placeholder: "e.g., 100",
          },
        },
        {
          type: "text",
          currentValue: "65",
          input: {
            title: "Comments count",
            label: "Enter comments count:",
            placeholder: "e.g., 100",
          },
        },
        {
          type: "text",
          currentValue: "2",
          input: {
            title: "Shares count",
            label: "Enter shares count:",
            placeholder: "e.g., 100",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
      ],
    },
    //Reel:
    {
      type: "reel",
      images: [
        {
          name: "Reel content",
          url: "/vertical.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Reel URL:",
            placeholder: "URL to the reel",
          },
        },
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the user's profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "My reel caption!",
          input: {
            title: "Reel Caption",
            label: "Enter reel caption:",
            placeholder: "Reel caption",
          },
        },
        {
          type: "text",
          currentValue: "23k",
          input: {
            title: "Likes count",
            label: "Enter likes count:",
            placeholder: "e.g., 100k",
          },
        },
        {
          type: "text",
          currentValue: "2k",
          input: {
            title: "Comments count",
            label: "Enter comments count:",
            placeholder: "e.g., 1000 or 12k",
          },
        },
        {
          type: "text",
          currentValue: "5k",
          input: {
            title: "Shares count",
            label: "Enter shares count:",
            placeholder: "e.g., 1000 or 12k",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Verified user", min: 0, max: 1, current: 1 },
      ],
    },
 
]};