import { DataType } from "@/types";

export const x: DataType[number] = {
  platform: "x",
  types: [
    //Post:
    {
      type: "post",
      images: [
        {
          name: "User profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter PRofile URL:",
            placeholder: "URL to the profile",
          },
        },
        {
          name: "Post Content",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Post URL:",
            placeholder: "URL to the post",
          },
          info: "You can turn it off in extra settings and make it text only post",
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
          currentValue: "zohaib_yousaf",
          input: {
            title: "User ID",
            label: "Enter user's ID:",
            placeholder: "User's user_id",
          },
        },
        {
          type: "text",
          currentValue: "My 1st post",
          input: {
            title: "Post Content",
            label: "Enter post content:",
            placeholder: "Post title or content",
          },
        },
        {
          type: "text",
          currentValue: "7h",
          input: {
            title: "Post Age",
            label: "Enter post age:",
            placeholder: "0m/0h/0d/0m/0y",
          },
        },
        {
          type: "text",
          currentValue: "03:34",
          input: {
            title: "Video Duration",
            label: "Enter video duration:",
            placeholder: "00:00",
          },
          info: "You can turn off video in extra settings",
        },
        {
          type: "text",
          currentValue: "Yasir Ali",
          input: {
            title: "Reposter",
            label: "Enter name of reposter:",
            placeholder: "Reposter name",
          },
          info: "You can turn off the repost visibility in extra settings",
        },
        {
          type: "number",
          currentValue: 4,
          input: {
            title: "Commetns",
            label: "Enter number of comments:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Likes",
            label: "Enter number of likes:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 12,
          input: {
            title: "Reposts",
            label: "Enter number of reposts:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Views",
            label: "Enter number of views:",
            placeholder: "00k/00M",
          },
        },
        {
          type: "choice",
          currentValue: "Verified",
          choices: [
            { key: "normal", value: "Normal" },
            { key: "verified", value: "Verified" },
            { key: "company", value: "Company" },
          ],
          input: {
            title: "Profile Type",
            label: "Choose Profile Type:",
            placeholder: "Normal , verified or company profile",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Video", min: 0, max: 1, current: 1 },
        { name: "Reposted", min: 0, max: 1, current: 1 },
        { name: "Created with Grok", min: 0, max: 1, current: 0 },
        { name: "Like Post", min: 0, max: 1, current: 0 },
        { name: "Repost it", min: 0, max: 1, current: 0 },
      ],
    },
    //Quote:
    {
      type: "quote",
      images: [
        {
          name: "Post owner profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the profile",
          },
        },
        {
          name: "Quote owner profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the profile",
          },
        },
        {
          name: "Post Content",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Post URL:",
            placeholder: "URL to the post",
          },
          info: "You can turn it off in extra settings and make it text only post",
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Post owner Username",
            label: "Enter Post owner user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter Quote owner user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "zohaib_yousaf",
          input: {
            title: "Post owner User ID",
            label: "Enter post owner user's ID:",
            placeholder: "User's user_id",
          },
        },
        {
          type: "text",
          currentValue: "zohaib_yousaf",
          input: {
            title: "Quote owner User ID",
            label: "Enter quote owner user's ID:",
            placeholder: "User's user_id",
          },
        },
        {
          type: "text",
          currentValue: "My 1st post",
          input: {
            title: "Post owner's  Content",
            label: "Enter Post owner's content:",
            placeholder: "Post title or content",
          },
        },
        {
          type: "text",
          currentValue: "My 2nd post",
          input: {
            title: "Quote owner's  Content",
            label: "Enter Quote owner's content:",
            placeholder: "Post title or content",
          },
        },
        {
          type: "text",
          currentValue: "7h",
          input: {
            title: "Post Age",
            label: "Enter post age:",
            placeholder: "0m/0h/0d/0m/0y",
          },
        },
        {
          type: "text",
          currentValue: "7h",
          input: {
            title: "Quote Age",
            label: "Enter quote age:",
            placeholder: "0m/0h/0d/0m/0y",
          },
        },
        {
          type: "text",
          currentValue: "03:34",
          input: {
            title: "Video Duration",
            label: "Enter video duration:",
            placeholder: "00:00",
          },
          info: "You can turn off video in extra settings",
        },
        {
          type: "text",
          currentValue: "Yasir Ali",
          input: {
            title: "Reposter",
            label: "Enter name of reposter:",
            placeholder: "Reposter name",
          },
          info: "You can turn off the repost visibility in extra settings",
        },
        {
          type: "number",
          currentValue: 4,
          input: {
            title: "Commetns",
            label: "Enter number of comments:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Likes",
            label: "Enter number of likes:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 12,
          input: {
            title: "Reposts",
            label: "Enter number of reposts:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Views",
            label: "Enter number of views:",
            placeholder: "00k/00M",
          },
        },
        {
          type: "choice",
          currentValue: "Verified",
          choices: [
            { key: "normal", value: "Normal" },
            { key: "verified", value: "Verified" },
            { key: "company", value: "Company" },
          ],
          input: {
            title: "Post owner Profile Type",
            label: "Choose Profile Type:",
            placeholder: "Normal , verified or company profile",
          },
        },
        {
          type: "choice",
          currentValue: "Verified",
          choices: [
            { key: "normal", value: "Normal" },
            { key: "verified", value: "Verified" },
            { key: "company", value: "Company" },
          ],
          input: {
            title: "Quote owner Profile Type",
            label: "Choose Profile Type:",
            placeholder: "Normal , verified or company profile",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Video", min: 0, max: 1, current: 1 },
        { name: "Repost", min: 0, max: 1, current: 1 },
        { name: "Like Quote", min: 0, max: 1, current: 0 },
        { name: "Repost it", min: 0, max: 1, current: 0 },
      ],
    },
    //Comment:
    {
      type: "comment",
      images: [
        {
          name: "User profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter PRofile URL:",
            placeholder: "URL to the profile",
          },
        },
        {
          name: "Post Content",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          info: "You can turn it off in extra settings and make it text only post",
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
          currentValue: "zohaib_yousaf",
          input: {
            title: "User ID",
            label: "Enter user's ID:",
            placeholder: "User's user_id",
          },
        },
        {
          type: "text",
          currentValue: "My 1st comment",
          input: {
            title: "Comment Content",
            label: "Enter Comment content:",
            placeholder: "Comment title or content",
          },
        },
        {
          type: "text",
          currentValue: "7h",
          input: {
            title: "Comment Age",
            label: "Enter Comment age:",
            placeholder: "0m/0h/0d/0m/0y",
          },
        },
        {
          type: "text",
          currentValue: "03:34",
          input: {
            title: "Video Duration",
            label: "Enter video duration:",
            placeholder: "00:00",
          },
          info: "You can turn off video in extra settings",
        },
        {
          type: "number",
          currentValue: 4,
          input: {
            title: "Commetns",
            label: "Enter number of comments:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Likes",
            label: "Enter number of likes:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 12,
          input: {
            title: "Reposts",
            label: "Enter number of reposts:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Views",
            label: "Enter number of views:",
            placeholder: "00k/00M",
          },
        },
        {
          type: "choice",
          currentValue: "Verified",
          choices: [
            { key: "normal", value: "Normal" },
            { key: "verified", value: "Verified" },
            { key: "company", value: "Company" },
          ],
          input: {
            title: "Profile Type",
            label: "Choose Profile Type:",
            placeholder: "Normal , verified or company profile",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Video", min: 0, max: 1, current: 1 },
        { name: "Like Comment", min: 0, max: 1, current: 0 },
        { name: "Repost it", min: 0, max: 1, current: 0 },
      ],
    },
    //Mini Profile:
    {
      type: "mini profile",
      images: [
        {
          name: "Profile Image",
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
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "zohaib_yousaf",
          input: {
            title: "User ID",
            label: "Enter user's id:",
            placeholder: "user_id",
          },
        },
        {
          type: "text",
          currentValue: "Fullstack web developer @whythings.dev",
          input: {
            title: "Bio",
            label: "Enter user's bio:",
            placeholder: "Anything about user",
          },
        },
        {
          type: "number",
          currentValue: 1256,
          input: {
            title: "Following",
            label: "Enter number of following:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 2312,
          input: {
            title: "Followers",
            label: "Enter number of Followers:",
            placeholder: "0000/0.0K/0.0M",
          },
        },
        {
          type: "choice",
          currentValue: "Verified",
          choices: [
            { key: "normal", value: "Normal" },
            { key: "verified", value: "Verified" },
            { key: "company", value: "Company" },
          ],
          input: {
            title: "User's Profile Type",
            label: "Choose Profile Type:",
            placeholder: "Verified, company or free",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Follow", min: 0, max: 1, current: 1 },
      ],
    },
    //Detailed Profile:
    {
      type: "detailed profile",
      images: [
        {
          name: "Profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the profile",
          },
        },
        {
          name: "Background image",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the profile",
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
          currentValue: "zohaib_yousaf",
          input: {
            title: "User ID",
            label: "Enter user's id:",
            placeholder: "user_id",
          },
        },
        {
          type: "text",
          currentValue: "Fullstack web developer @whythings.dev",
          input: {
            title: "Bio",
            label: "Enter user's bio:",
            placeholder: "Anything about user",
          },
        },
        {
          type: "number",
          currentValue: 1256,
          input: {
            title: "Following",
            label: "Enter number of following:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 2312,
          input: {
            title: "Followers",
            label: "Enter number of Followers:",
            placeholder: "0000/0.0K/0.0M",
          },
        },
        {
          type: "text",
          currentValue: "December 2019",
          input: {
            title: "Joining Date",
            label: "Enter Joining Date:",
            placeholder: "Month, YYYY",
          },
        },
        {
          type: "choice",
          currentValue: "Verified",
          choices: [
            { key: "normal", value: "Normal" },
            { key: "verified", value: "Verified" },
            { key: "company", value: "Company" },
          ],
          input: {
            title: "User's Profile Type",
            label: "Choose Profile Type:",
            placeholder: "Verified, company or free",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Follow", min: 0, max: 1, current: 1 },
        { name: "Notifications", min: 0, max: 1, current: 1 },
      ],
    },

    //TODO: Notifications

    //Comment & Reply:
    {
      type: "comments",
      images: [
        {
          name: "Comment profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the profile",
          },
        },
        {
          name: "Reply profile Image",
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
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Comment Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "zohaib_yousaf",
          input: {
            title: "Comment User ID",
            label: "Enter user's ID:",
            placeholder: "User's user_id",
          },
        },
        {
          type: "text",
          currentValue: "My 1st comment",
          input: {
            title: "Comment Content",
            label: "Enter Comment content:",
            placeholder: "Comment title or content",
          },
        },
        {
          type: "text",
          currentValue: "7h",
          input: {
            title: "Comment Age",
            label: "Enter Comment age:",
            placeholder: "0m/0h/0d/0m/0y",
          },
        },
        {
          type: "number",
          currentValue: 4,
          input: {
            title: "Replies on Comment",
            label: "Enter number of comments:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Comment Likes",
            label: "Enter number of likes:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 12,
          input: {
            title: "Comment Reposts",
            label: "Enter number of reposts:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Comment Views",
            label: "Enter number of views:",
            placeholder: "00k/00M",
          },
        },
        {
          type: "choice",
          currentValue: "Verified",
          choices: [
            { key: "normal", value: "Normal" },
            { key: "verified", value: "Verified" },
            { key: "company", value: "Company" },
          ],
          input: {
            title: "Comment Profile Type",
            label: "Choose Profile Type:",
            placeholder: "Normal , verified or company profile",
          },
        },
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Reply Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "zohaib_yousaf",
          input: {
            title: "Reply User ID",
            label: "Enter user's ID:",
            placeholder: "User's user_id",
          },
        },
        {
          type: "text",
          currentValue: "My 1st comment",
          input: {
            title: "Reply Content",
            label: "Enter Comment content:",
            placeholder: "Comment title or content",
          },
        },
        {
          type: "text",
          currentValue: "7h",
          input: {
            title: "Reply Age",
            label: "Enter Comment age:",
            placeholder: "0m/0h/0d/0m/0y",
          },
        },
        {
          type: "number",
          currentValue: 4,
          input: {
            title: "Commetns on Reply",
            label: "Enter number of comments:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Reply Likes",
            label: "Enter number of likes:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 12,
          input: {
            title: "Reply Reposts",
            label: "Enter number of reposts:",
            placeholder: "0000",
          },
        },
        {
          type: "number",
          currentValue: 124,
          input: {
            title: "Reply Views",
            label: "Enter number of views:",
            placeholder: "00k/00M",
          },
        },
        {
          type: "choice",
          currentValue: "Verified",
          choices: [
            { key: "normal", value: "Normal" },
            { key: "verified", value: "Verified" },
            { key: "company", value: "Company" },
          ],
          input: {
            title: "Reply Profile Type",
            label: "Choose Profile Type:",
            placeholder: "Normal , verified or company profile",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Video", min: 0, max: 1, current: 1 },
        { name: "Like Comment", min: 0, max: 1, current: 0 },
        { name: "Repost comment", min: 0, max: 1, current: 0 },
        { name: "Like Reply", min: 0, max: 1, current: 0 },
        { name: "Repost Reply", min: 0, max: 1, current: 0 },
      ],
    },
  ],
};
