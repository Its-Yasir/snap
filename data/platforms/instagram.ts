import { DataType } from "@/types";

export const instagram: DataType[number] = {
  platform: "instagram",
  types: [
    // Profile
    {
      type: "profile",
      images: [
        {
          name: "Profile Picture",
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
          currentValue: "Zohaib_Yousaf",
          input: {
            title: "Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "User's full name",
            label: "Enter user's full name:",
            placeholder: "User's full name",
          },
        },
        {
          type: "text",
          currentValue: "246",
          input: {
            title: "Posts Count",
            label: "Enter posts count:",
            placeholder: "Posts count ",
          },
        },
        {
          type: "text",
          currentValue: "48.7k",
          input: {
            title: "Followers Count",
            label: "Enter followers count:",
            placeholder: "Followers count ",
          },
        },
        {
          type: "text",
          currentValue: "234",
          input: {
            title: "Following Count",
            label: "Enter following count:",
            placeholder: "Following count ",
          },
        },
        {
          type: "text",
          currentValue:
            "I am Zohaib Yousaf, a passionate software developer with expertise in web development and a love for creating innovative solutions.",
          input: {
            title: "Bio",
            label: "Enter user's bio:",
            placeholder: "User's bio",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show story", min: 0, max: 1, current: 1 },
        { name: "Verified User", min: 0, max: 1, current: 0 },
      ],
    },

    //Post:
    {
      type: "post",
      images: [
        {
          name: "Post content",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
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
            label: "Enter User's Profile URL:",
            placeholder: "URL to user's profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Check out this amazing post!",
          input: {
            title: "Post Caption",
            label: "Enter post caption:",
            placeholder: "Post caption",
          },
        },
        {
          type: "text",
          currentValue: "zohaib_yousaf!",
          input: {
            title: "Username",
            label: "Enter username:",
            placeholder: "Username",
          },
        },
        {
          type: "text",
          currentValue: "23,345",
          input: {
            title: "Likes Count",
            label: "Enter likes count:",
            placeholder: "Likes count",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Follow", min: 0, max: 1, current: 1 },
        { name: "Sound icon", min: 0, max: 1, current: 1 },
        { name: "Mute", min: 0, max: 1, current: 0 },
        { name: "Verified User", min: 0, max: 1, current: 0 },
      ],
    },
    //Follow Reqeust:
    {
      type: "follow request",
      images: [
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter User's Profile URL:",
            placeholder: "URL to user's profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "zohaib_yousaf",
          input: {
            title: "Username",
            label: "Enter username:",
            placeholder: "Username",
          },
        },
        {
          type: "number",
          currentValue: 6,
          info: "You can turn off the mutuals in extra settings'",
          input: {
            title: "Mutuals count",
            label: "Enter mutuals count:",
            placeholder: "Mutuals count",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Verified User", min: 0, max: 1, current: 1 },
      ],
    },
    //Comment:
    {
      type: "comment",
      images: [
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter User's Profile URL:",
            placeholder: "URL to user's profile",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "zohaib_yousaf",
          input: {
            title: "Username",
            label: "Enter username:",
            placeholder: "Username",
          },
        },
        {
          type: "text",
          currentValue: "This is a great post!",
          input: {
            title: "Comment",
            label: "Enter comment:",
            placeholder: "Comment",
          },
        },
        {
          type: "text",
          currentValue: "10K",
          input: {
            title: "Likes Count",
            label: "Enter likes count:",
            placeholder: "Likes count",
          },
        },
        {
          type: "text",
          currentValue: "35",
          input: {
            title: "Replies Count",
            label: "Enter replies count:",
            placeholder: "Replies count",
          },
        },
        {
          type: "text",
          currentValue: "5d ",
          info: "How old is comment? (e.g., 5d, 3h, 15m)",
          input: {
            title: "Comment time",
            label: "Enter comment age:",
            placeholder: "Comment time",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Verified User", min: 0, max: 1, current: 1 },
      ],
    },
    //Reel:
    {
      type: "reel",
      images: [
        {
          name: "Reel content",
          url: "/vertical.png",
          size: "large",
          input: {
            label: "Enter Reel URL:",
            placeholder: "URL to the reel",
          },
          isHidden: true,
        },
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          size: "small",
          input: {
            label: "Enter User's Profile URL:",
            placeholder: "URL to user's profile",
          },
          isHidden: true,
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Check out my new reel!",
          input: {
            title: "Reel Caption",
            label: "Enter reel caption:",
            placeholder: "Reel caption",
          },
        },
        {
          type: "text",
          currentValue: "zohaib_yousaf",
          input: {
            title: "Username",
            label: "Enter username:",
            placeholder: "Username",
          },
        },
        {
          type: "text",
          currentValue: "23K",
          input: {
            title: "Likes Count",
            label: "Enter likes count:",
            placeholder: "Likes count",
          },        
        },
        {
          type: "text",
          currentValue: "3,459",
          input: {
            title: "Comments Count",
            label: "Enter comments count:",
            placeholder: "Comments count",
          },        
        },
        {
          type: "text",
          currentValue: "34.5K",
          input: {
            title: "Reposts Count",
            label: "Enter reposts count:",
            placeholder: "Reposts count",
          },        
        },
        {
          type: "text",
          currentValue: "71.5K",
          input: {
            title: "Shares Count",
            label: "Enter shares count:",
            placeholder: "Shares count",
          },        
        },
        {
          type: "text",
          currentValue: "171.5K",
          input: {
            title: "Saves Count",
            label: "Enter saves count:",
            placeholder: "Saves count",
          },        
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Follow", min: 0, max: 1, current: 1 },
        { name: "Verified User", min: 0, max: 1, current: 1 },
      ],
    },
    //Message:
    {
      type: "message",
      images: [
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          size: "small",
          input: {
            label: "Enter User's Profile URL:",
            placeholder: "URL to user's profile",
          },
          isHidden: true,
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Hey, how are you doing?",
          input: {
            title: "Message Content",
            label: "Enter message content:",
            placeholder: "Message content",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Transparent Background", min: 0, max: 1, current: 0 },
      ],
    },
    //Message Request:
    {
      type: "message request",
      images: [
        {
          name: "User's Profile Picture",
          url: "/zohaib.png",
          size: "small",
          input: {
            label: "Enter User's Profile URL:",
            placeholder: "URL to user's profile",
          },
          isHidden: true,
        },
      ],
      
      text: [
        {
          type: "text",
          currentValue: "Zohaib_Yousaf",
          input: {
            title: "Username",
            label: "Enter user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "User's full name",
            label: "Enter user's full name:",
            placeholder: "User's full name",
          },
        },
        {
          type: "text",
          currentValue: "246",
          input: {
            title: "Posts Count",
            label: "Enter posts count:",
            placeholder: "Posts count ",
          },
        },
        {
          type: "text",
          currentValue: "48.7k",
          input: {
            title: "Followers Count",
            label: "Enter followers count:",
            placeholder: "Followers count ",
          },
        },
        {
          type: "text",
          currentValue: "28 Mar, 3:28 am",
          input: {
            title: "Message request time",
            label: "Enter message request time:",
            placeholder: "Message request time",
          },
        },
        {
          type: "text",
          currentValue: "How are you?",
          input: {
            title: "Message request content",
            label: "Enter message request content:",
            placeholder: "Message request content",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Verified User", min: 0, max: 1, current: 1 },
        { name: "Follow", min: 0, max: 1, current: 1 },
      ],
    }
  ],
};
