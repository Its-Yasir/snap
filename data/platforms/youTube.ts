import { DataType } from "@/types";

export const youTube: DataType[number] = {
  platform: "youTube",
  types: [
    //Thumbnail video:
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
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show Views", min: 0, max: 1, current: 1 },
        { name: "Show Video Age", min: 0, max: 1, current: 1 },
        { name: "Show Subscribers", min: 0, max: 1, current: 1 },
        { name: "Show Duration", min: 0, max: 1, current: 1 },
        { name: "Show Timeline", min: 0, max: 1, current: 1 },
        { name: "Video played", min: 1, max: 100, current: 34 },
      ],
    },
    //Playing Video:
    {
      type: "playing video",
      images: [
        {
          name: "Video Content",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Video URL:",
            placeholder: "URL to the Video",
          },
        },
        {
          name: "Channel Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Channel URL:",
            placeholder: "URL to the channel",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "My video",
          input: {
            title: "Video Title",
            label: "Edit video title:",
            placeholder: "Video Title",
          },
        },
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Channel Name",
            label: "Enter chsnnel name:",
            placeholder: "Channel name",
          },
        },
        {
          type: "text",
          currentValue: "847k",
          input: {
            title: "Subscribers",
            label: "Enter no. of subscribers:",
            placeholder: "000/0k/0m",
          },
        },
        {
          type: "text",
          currentValue: "12k",
          input: {
            title: "Number of Likes",
            label: "Enter number of likes:",
            placeholder: "000/0k/0m",
          },
        },
        {
          type: "text",
          currentValue: "20:22",
          input: {
            title: "Video Duration",
            label: "Enter video duration:",
            placeholder: "00:00:00",
          },
        },
        {
          type: "text",
          currentValue: "00:00",
          input: {
            title: "Video played Duration",
            label: "Enter video played duration:",
            placeholder: "00:00:00",
          },
        },
        {
          type: "choice",
          currentValue: "Subscribed",
          choices: [
            { key: "subscribed", value: "Subscribed" },
            { key: "unsubscribed", value: "UnSubscribed" },
            { key: "notification", value: "Notification" },
          ],
          input: {
            title: "User's connection degree",
            label: "Choose connection degree:",
            placeholder: "1st, 2nd or 3rd",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Verified", min: 0, max: 1, current: 1 },
        { name: "Show Video Controls", min: 0, max: 1, current: 1 },
        { name: "Show Bottom Menu", min: 0, max: 1, current: 1 },
        { name: "Pause video", min: 0, max: 1, current: 1 },
      ],
    },
    //Video Card:
    {
      type: "video card",
      images: [
        {
          name: "Thumbnail",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Video URL:",
            placeholder: "URL to the Video",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "My 1st video",
          input: {
            title: "Video Title",
            label: "Enter Video title:",
            placeholder: "Video Title",
          },
        },
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Channel Name",
            label: "Enter Channel Name:",
            placeholder: "Channel name",
          },
        },
        {
          type: "text",
          currentValue: "5.4k",
          input: {
            title: "Views",
            label: "Enter Views:",
            placeholder: "000/0.0k/0.0m",
          },
        },
        {
          type: "text",
          currentValue: "19 hours ago",
          input: {
            title: "Vidoe Age",
            label: "Enter Vidoe Age:",
            placeholder: "00 hours/days/months/years ago",
          },
        },
        {
          type: "text",
          currentValue: "49:15",
          input: {
            title: "Video duration",
            label: "Enter video duration:",
            placeholder: "00:00",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Video played", min: 1, max: 100, current: 23, default: 27 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Verified", min: 0, max: 1, current: 1 },
        { name: "Show video duration", min: 0, max: 1, current: 1 },
        { name: "Show new", min: 0, max: 1, current: 0 },
        { name: "Show timeline", min: 0, max: 1, current: 1 },
      ],
    },
    //Comment:
    {
      type: "comment",
      images: [
        {
          name: "Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "@ZohaibYousaf",
          input: {
            title: "Username",
            label: "Enter username:",
            placeholder: "User_name",
          },
        },
        {
          type: "text",
          currentValue: "My comment",
          input: {
            title: "Comment content",
            label: "Enter comment content:",
            placeholder: "Comment content",
          },
        },
        {
          type: "text",
          currentValue: "18 hours ago",
          input: {
            title: "Comment age",
            label: "Enter Comment age:",
            placeholder: "00 hours/days/months/years ago",
          },
        },
        {
          type: "text",
          currentValue: "14k",
          input: {
            title: "Number of likes",
            label: "Enter number of likes:",
            placeholder: "000/0.0 k/m",
          },
        },
        {
          type: "text",
          currentValue: "124",
          input: {
            title: "Number of replies",
            label: "Enter number of replies:",
            placeholder: "000/0.0 k/m",
          },
          info: "You can turn off the replies from extra settings",
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show replies", min: 0, max: 1, current: 1 },
      ],
    },
    //Channel Card:
    {
      type: "channel card",
      images: [
        {
          name: "Channel logo",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Channel URL:",
            placeholder: "https://youtube.com/channel_handler",
          },
        },
        {
          name: "Channel Banner",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          info: 'You can turn off the banner from "More Settings" ',
          input: {
            label: "Enter Channel URL:",
            placeholder: "https://youtube.com/channel_handler",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Channel Name",
            label: "Enter channel name name:",
            placeholder: "My Channel",
          },
        },
        {
          type: "text",
          currentValue: "zohaib_yosaf",
          input: {
            title: "Channel Handler",
            label: "Enter Channel Handler:",
            placeholder: "My_channel",
          },
        },
        {
          type: "text",
          currentValue: "847k",
          input: {
            title: "Subscribers count",
            label: "Enter Subscribers count",
            placeholder: "000 / 000k / 000m",
          },
        },
        {
          type: "text",
          currentValue: "761",
          input: {
            title: "Videos count",
            label: "Enter Videos count",
            placeholder: "000 / 0.00k / 0.00m",
          },
        },
        {
          type: "text",
          currentValue: "Welcome to my channel",
          input: {
            title: "Channel's bio",
            label: "Enter Channel's bio",
            placeholder: "Channel description maybe",
          },
        },
        {
          type: "text",
          currentValue: "whythings.dev",
          info: "You can turn off extra links in 'more settings'",
          input: {
            title: "Extra Link",
            label: "Enter Extra Link",
            placeholder: "Instagram or other socials",
          },
        },
        {
          type: "number",
          currentValue: 1,
          info: "You can turn off extra links in 'more settings'",
          input: {
            title: "Extra Link count",
            label: "Enter Extra Link count",
            placeholder: "Total number of extra links - 1",
          },
        },
        {
          type: "choice",
          currentValue: "Subscribed",
          choices: [
            { key: "Subscribed", value: "Subscribed" },
            { key: "Not Subscribed", value: "Not Subscribed" },
            { key: "Notification ON", value: "Notification ON" },
          ],
          input: {
            title: "Subscription status",
            label: "Choose subscription status:",
            placeholder: "Subscribed, Not Subscribed or Notification ON",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Extra Links", min: 0, max: 1, current: 1 },
        { name: "Verified channel", min: 0, max: 1, current: 1 },
      ],
    },
    //Mini Channel Card:
    {
      type: "mini channel card",
      images: [
        {
          name: "Channel logo",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Channel URL:",
            placeholder: "https://youtube.com/channel_handler",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Channel Name",
            label: "Enter channel name name:",
            placeholder: "My Channel",
          },
        },
        {
          type: "text",
          currentValue: "1.03m",
          input: {
            title: "Subscribers count",
            label: "Enter Subscribers count",
            placeholder: "000 / 000k / 000m",
          },
        },
        {
          type: "choice",
          currentValue: "Subscribed",
          choices: [
            { key: "Subscribed", value: "Subscribed" },
            { key: "Not Subscribed", value: "Not Subscribed" },
            { key: "Notification ON", value: "Notification ON" },
          ],
          input: {
            title: "Subscription status",
            label: "Choose subscription status:",
            placeholder: "Subscribed, Not Subscribed or Notification ON",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
      ],
    },
    //Playlist Card:
    {
      type: "playlist card",
      images: [
        {
          name: "Playlist thumbnail",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Playlist Link:",
            placeholder: "https://youtube.com/playlist",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "My Playlist",
          input: {
            title: "Playlist Name",
            label: "Enter playlist name:",
            placeholder: "My Playlist",
          },
        },
        {
          type: "text",
          currentValue: "10 videos",
          input: {
            title: "Video count",
            label: "Enter video count:",
            placeholder: "Total videos in playlist",
          },
        },
        {
          type: "text",
          currentValue: "5 days ago",
          input: {
            title: "Last updated",
            label: "Enter last updated date:",
            placeholder: "Date of last update e.g., 5 days ago",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
      ],
    },
    //Short Video:
    {
      type: "short video",
      images: [
        {
          name: "Video thumbnail",
          url: "/vertical.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Video Link:",
            placeholder: "https://youtube.com/watch?v=...",
          },
        },
        {
          name: "Channel logo",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Channel Link:",
            placeholder: "https://youtube.com/channel...",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "My Short Video",
          input: {
            title: "Video Title",
            label: "Enter video title:",
            placeholder: "My Short Video",
          },
        },
        {
          type: "text",
          currentValue: "TheRealCarvs",
          input: {
            title: "Channel Handler",
            label: "Enter channel Handler:",
            placeholder: "channel_handler",
          },
        },
        {
          type: "text",
          currentValue: "123k",
          input: {
            title: "Likes count",
            label: "Enter likes count:",
            placeholder: "Total likes",
          },
        },
        {
          type: "text",
          currentValue: "3k",
          input: {
            title: "Comments count",
            label: "Enter comments count:",
            placeholder: "Total comments",
          },
        },
        {
          type: "choice",
          currentValue: "Subscribed",
          choices: [
            { key: "Subscribed", value: "Subscribed" },
            { key: "Not Subscribed", value: "Not Subscribed" },
            { key: "Notification ON", value: "Notification ON" },
          ],
          input: {
            title: "Subscription status",
            label: "Choose subscription status:",
            placeholder: "Subscribed, Not Subscribed or Notification ON",
          },
        },
        {
          type: "number",
          currentValue: 47,
          info: "You can turn it off in 'extra settings'.",
          input: {
            title: "Video played percentage",
            label: "Enter video played percentage:",
            placeholder: "Percentage of video played",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show timeline", min: 0, max: 1, current: 1 },
        { name: "Show Controls", min: 0, max: 1, current: 0 },
      ],
    },
  ],
};
