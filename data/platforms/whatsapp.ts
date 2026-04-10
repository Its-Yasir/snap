import { DataType } from "@/types";

export const whatsapp: DataType[number] = {
  platform: "whatsApp",
  types: [
    //Channel card:
    {
      type: "channel card",
      images: [
        {
          name: "Channel Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Channel name",
            label: "Enter channel name:",
            placeholder: "Channel name",
          },
        },
        {
          type: "number",
          currentValue: 2341,
          input: {
            title: "Followers",
            label: "Enter number of followerz:",
            placeholder: "0000",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Verified", min: 0, max: 1, current: 1 },
        { name: "Following", min: 0, max: 1, current: 0 },
      ],
    },
    //Channel Bar:
    {
      type: "channel bar",
      images: [
        {
          name: "Channel Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Channel name",
            label: "Enter channel name:",
            placeholder: "Channel name",
          },
        },
        {
          type: "text",
          currentValue: "24K",
          input: {
            title: "Followers",
            label: "Enter number of followerz:",
            placeholder: "000K or 00M",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Verified", min: 0, max: 1, current: 1 },
        { name: "Following", min: 0, max: 1, current: 0 },
      ],
    },
    //Voice message:
    {
      type: "voice message",
      images: [
        {
          name: "Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          info: "You can Choose to have image or name letters in extra settings! If the users name is not good the profile icon will be shown",
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
          info: "It wont be shown if you are the sender",
        },
        {
          type: "text",
          currentValue: "+92 000 0000000",
          input: {
            title: "User mobile number",
            label: "Enter user's number:",
            placeholder: "User's number",
          },
          info: "It wont be shown if you are the sender",
        },
        {
          type: "text",
          currentValue: "1:31 pm",
          input: {
            title: "Message Delivery time",
            label: "Enter Message Delivery time:",
            placeholder: "00:00 am/pm",
          },
        },
        {
          type: "text",
          currentValue: "0:25",
          input: {
            title: "Message duration",
            label: "Enter Message duration:",
            placeholder: "0:00",
          },
        },
        {
          type: "choice",
          currentValue: "Sent",
          choices: [
            { key: "sending", value: "Sending" },
            { key: "sent", value: "Sent" },
            { key: "delivered", value: "Delivered" },
            { key: "read", value: "Read" },
          ],
          input: {
            title: "Message status",
            label: "Choose message status:",
            placeholder: "Sent, delivered or ....",
          },
        },
        {
          type: "choice",
          currentValue: "Green",
          choices: [
            { key: "green", value: "Green" },
            { key: "blue", value: "Blue" },
            { key: "gray", value: "Gray" },
          ],
          input: {
            title: "Message Color",
            label: "Choose message color:",
            placeholder: "Green, blue or gray",
          },
        },
        {
          type: "choice",
          currentValue: "Sender",
          choices: [
            { key: "sender", value: "Sender" },
            { key: "receiver", value: "Receiver" },
          ],
          input: {
            title: "Your role",
            label: "Choose your role:",
            placeholder: "Sender or receiver",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Show corner", min: 0, max: 1, current: 0 },
        { name: "Show image", min: 0, max: 1, current: 1 },
        { name: "Two letter Name", min: 0, max: 1, current: 1 },
      ],
    },
    //Text Message:
    {
      type: "text message",
      images: [
        {
          name: "Profile Picture",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          info: "You can Choose to have image or name letters in extra settings! If the users name is not good the profile icon will be shown",
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
          info: "It wont be shown if you are the sender",
        },
        {
          type: "text",
          currentValue: "+92 000 0000000",
          input: {
            title: "User mobile number",
            label: "Enter user's number:",
            placeholder: "User's number",
          },
          info: "It wont be shown if you are the sender",
        },
        {
          type: "text",
          currentValue: "Hi there!",
          input: {
            title: "Message content",
            label: "Enter Message content:",
            placeholder: "Message content",
          },
        },
        {
          type: "text",
          currentValue: "1:31 pm",
          input: {
            title: "Message Delivery time",
            label: "Enter Message Delivery time:",
            placeholder: "00:00 am/pm",
          },
        },
        {
          type: "choice",
          currentValue: "Sent",
          choices: [
            { key: "sending", value: "Sending" },
            { key: "sent", value: "Sent" },
            { key: "delivered", value: "Delivered" },
            { key: "read", value: "Read" },
          ],
          input: {
            title: "Message status",
            label: "Choose message status:",
            placeholder: "Sent, delivered or ....",
          },
        },
        {
          type: "choice",
          currentValue: "Green",
          choices: [
            { key: "green", value: "Green" },
            { key: "blue", value: "Blue" },
            { key: "gray", value: "Gray" },
          ],
          input: {
            title: "Message Color",
            label: "Choose message color:",
            placeholder: "Green, blue or gray",
          },
        },
        {
          type: "choice",
          currentValue: "Sender",
          choices: [
            { key: "sender", value: "Sender" },
            { key: "receiver", value: "Receiver" },
          ],
          input: {
            title: "Your role",
            label: "Choose your role:",
            placeholder: "Sender or receiver",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Show corner", min: 0, max: 1, current: 0 },
        { name: "Show image", min: 0, max: 1, current: 1 },
        { name: "Two letter Name", min: 0, max: 1, current: 1 },
      ],
    },
    //Group card:
    {
      type: "group card",
      images: [
        {
          name: "Group Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Zohaib's Group",
          input: {
            title: "Group name",
            label: "Enter Group name:",
            placeholder: "Group name",
          },
        },
        {
          type: "number",
          currentValue: 2341,
          input: {
            title: "Members",
            label: "Enter number of Members:",
            placeholder: "0000",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show QR", min: 0, max: 1, current: 1 },
      ],
    },
    //Profile Card:
    {
      type: "profile card",
      images: [
        {
          name: "Profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          info: "You can Choose to show image or name letters from extra settings!",
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
          currentValue: "+92 000 0000000",
          input: {
            title: "Mobile Phone Number",
            label: "Enter user's number:",
            placeholder: "User's number",
          },
        },
        {
          type: "text",
          currentValue: "Bio",
          input: {
            title: "User's Bio",
            label: "Enter user's bio:",
            placeholder: "User's bio",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Dark Theme", min: 0, max: 1, current: 1 },
        { name: "Show Profile Image", min: 0, max: 1, current: 1 },
      ],
    },
  ],
};
