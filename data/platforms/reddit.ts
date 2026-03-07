import { DataType } from "@/types";

export const reddit: DataType[number] = {
  platform: "reddit",
  types: [
    //Community:
    {
      type: "community post",
      images: [
        {
          name: "Communtiy Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Community URL:",
            placeholder: "URL to the community",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Developers",
          input: {
            title: "Community name",
            label: "Enter community name:",
            placeholder: "My community",
          },
        },
        {
          type: "text",
          currentValue: "A community for developers",
          input: {
            title: "Description",
            label: "Enter community description:",
            placeholder: "Decription",
          },
        },
        {
          type: "text",
          currentValue: "6.4M",
          input: {
            title: "Number of visitors",
            label: "Enter number of visitors:",
            placeholder: "0.0M or 0.0K",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
      ],
    },
    //Post:
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
          name: "User Profile images",
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
          currentValue: "r/Devs",
          input: {
            title: "Subreddit name",
            label: "Enter subreddit name:",
            placeholder: "r/name",
          },
        },
        {
          type: "text",
          currentValue: "New tool for devs",
          input: {
            title: "Post Title",
            label: "Enter post title:",
            placeholder: "Post title",
          },
        },
        {
          type: "text",
          currentValue: "2 days ago",
          input: {
            title: "Post age",
            label: "Enter post age:",
            placeholder: "hr. ago or days ago or mon. ago",
          },
        },
        {
          type: "number",
          currentValue: 23,
          input: {
            title: "Up votes",
            label: "Enter number of upvotes:",
            placeholder: "User's name",
          },
        },
        {
          type: "choice",
          currentValue: "nothing",
          choices: [
            { key: "nothing", value: "Nothing" },
            { key: "upvote", value: "Upvote" },
            { key: "downvote", value: "Down Vote" },
          ],
          input: {
            title: "Post Type",
            label: "Chose Post type",
            placeholder: "Suggested, or popular",
          },
        },
        {
          type: "choice",
          currentValue: "suggested",
          choices: [
            { key: "suggested", value: "Suggested for you" },
            { key: "popuplar near", value: "People near you" },
            { key: "popular country", value: "Popular in your country" },
          ],
          input: {
            title: "Post Type",
            label: "Chose Post type",
            placeholder: "Suggested, or popular",
          },
        },
        {
          type: "number",
          currentValue: 12,
          input: {
            title: "Comments",
            label: "Enter number of comments:",
            placeholder: "0000",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
      ],
    },
  ],
};
