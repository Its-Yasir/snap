import { DataType } from "@/types";

export const Data: DataType = [
  // 😎Discord:
  {
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
      //mini profile bar
      {
        type: "mini profile bar",
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
              label: "Enter username:",
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
          { name: "Theme", min: 0, max: 1, current: 1 },
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
              label: "Enter username:",
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
          { name: "Friend", min: 0, max: 1, current: 1 },
        ],
      },
    ],
  },

  // 🅿️Pinterest:
  {
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
              placeholder: "https://pinterest.com/zohiab_yousaf or user_name",
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
              placeholder: "https://pinterest.com/zohiab_yousaf or user_name",
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
  },

  // 🔗LinkedIn:
  {
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
              placeholder: "https://linkedin.com/activity-123",
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
              label:
                "Enter video duration, if it is video, otherwise, skip it:",
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
  },

  // ▶️Youtube:
  {
    platform: "youTube",
    types: [
      {
        type: "thumbnail video",
        images: [
          {
            name: "Thumbnail",
            isHidden: true,
            url: "/thumbnail1.png",
            size: "large",
            input: {
              label: "Enter a video URL:",
              placeholder: "https://youtube.com/watch?v=123...",
            },
          },
          {
            name: "Channel Logo",
            isHidden: true,
            size: "large",
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
    ],
  },
];
