import { DataType } from "@/types";
export const linkedIn: DataType[number] = {
  platform: "linkedIn",
  types: [
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
            label: "Choose connection degree:",
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
            label: "Choose Extra buttton:",
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
            label: "Choose types of reactions:",
            placeholder: "1, 2 or 3",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "User open to work?", min: 0, max: 1, current: 0 },
        { name: "Video", min: 0, max: 1, current: 1 },
      ],
    },
    //Mini Profile
    {
      type: "mini profile",
      images: [
        {
          name: "Profile Background",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Profile URL:",
            placeholder: "https://linkedin.com/in/user_name",
          },
        },
        {
          name: "User Profile Image",
          url: "/zohaib.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Profile URL:",
            placeholder: "https://linkedin.com/in/user_name",
          },
        },
        {
          name: "Current Company Image",
          info: "You can turn company off in more setings",
          url: "/linkedCompany.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Post URL:",
            placeholder: "https://linkedin.com/in/user_name",
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
          currentValue: "Full time web developer @ whythings.dev",
          input: {
            title: "HEadline",
            label: "Enter Linkedin user's headline:",
            placeholder: "A little more details of user",
          },
        },
        {
          type: "text",
          currentValue: "Lahore, Pakistan",
          input: {
            title: "Location",
            label: "Enter Linkedin user's location:",
            placeholder: "City, State or Country",
          },
        },
        {
          type: "text",
          currentValue: "whythings.dev",
          input: {
            title: "Current Company Name",
            label: "Enter Linkedin user's current company:",
            placeholder: "Company he is working on",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Is open to work?", min: 0, max: 1, current: 0 },
        { name: "Show Campany?", min: 0, max: 1, current: 1 },
      ],
    },
    //Main Profile:
    {
      type: "main profile",
      images: [
        {
          name: "Banner Image",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Profile URL:",
            placeholder: "URL to the profile",
          },
        },
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
          name: "Company Image",
          url: "/linkedin-company.png",
          info: "You can turn off company visibility in extra settings",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Company URL:",
            placeholder: "URL to the company",
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
          currentValue: "Fulltime web developer @ whythings.dev",
          input: {
            title: "Headline",
            label: "Enter Linkedin user's headline:",
            placeholder: "User's headline",
          },
        },
        {
          type: "text",
          currentValue: "Lahore, Pakistan",
          input: {
            title: "Location",
            label: "Enter user's location:",
            placeholder: "City, state or country",
          },
        },
        {
          type: "number",
          currentValue: 1012,
          input: {
            title: "Followers",
            label: "Enter Linkedin user's followers:",
            placeholder: "User's followers",
          },
        },
        {
          type: "number",
          currentValue: 501,
          input: {
            title: "Connections",
            label: "Enter Linkedin user's connections:",
            placeholder: "User's connections",
          },
        },
        {
          type: "choice",
          currentValue: "Connect",
          choices: [
            { key: "connect", value: "Connect" },
            { key: "follow", value: "Follow" },
            { key: "pending", value: "Pending" },
            { key: "nothing", value: "Nothing" },
          ],
          input: {
            title: "Follow-up button",
            label: "Choose button type:",
            placeholder: "Choose one of the following",
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
            label: "Choose connection degree:",
            placeholder: "1st, 2nd or 3rd",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Premium user", min: 0, max: 1, current: 0 },
        { name: "Open to work", min: 0, max: 1, current: 0 },
        { name: "Verified", min: 0, max: 1, current: 1 },
      ],
    },
    //Job:
    {
      type: "job",
      images: [
        {
          name: "Compnay Image",
          url: "/linkedin-company.png",
          isHidden: true,
          size: "small",
          input: {
            label: "Enter Company URL:",
            placeholder: "URL to the company",
          },
        },
      ],
      text: [
        {
          type: "text",
          currentValue: "Fulltime web developer @ whythings.dev",
          input: {
            title: "Job Title",
            label: "Enter Linkedin job's title:",
            placeholder: "Job's title",
          },
        },
        {
          type: "text",
          currentValue: "whythings.dev",
          input: {
            title: "Company Name",
            label: "Enter Linkedin job's company name:",
            placeholder: "Company name",
          },
        },
        {
          type: "text",
          currentValue: "Lahore, Pakistan (Remote)",
          input: {
            title: "Location",
            label: "Enter Linkedin job's location:",
            placeholder: "City, state or country",
          },
        },
        {
          type: "text",
          currentValue: "4 days ago",
          input: {
            title: "Posted Date",
            label: "Enter Linkedin job's posted date:",
            placeholder: "00 days ago or 00 months ago",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Verified company", min: 0, max: 1, current: 1 },
        { name: "Promoted job", min: 0, max: 1, current: 0 },
        { name: "Active job", min: 0, max: 1, current: 0 },
        { name: "Promoted job", min: 0, max: 1, current: 0 },
        { name: "Easy apply", min: 0, max: 1, current: 0 },
      ],
    },
    //comment:
    {
      type: "comment",
      images: [
        {
          name: "User profile image",
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
            label: "Enter Linkedin user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "Web developer @ whythings.dev",
          input: {
            title: "Headline",
            label: "Enter Linkedin user's headline:",
            placeholder: "User's headline",
          },
        },
        {
          type: "text",
          currentValue: "Good work!",
          input: {
            title: "Comment content",
            label: "Enter  user's comment:",
            placeholder: "User's text content",
          },
        },
        {
          type: "number",
          currentValue: 12,
          input: {
            title: "Reactions",
            label: "Enter number of reactions:",
            placeholder: "comment's reactions",
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
            label: "Choose connection degree:",
            placeholder: "1st, 2nd or 3rd",
          },
        },
        {
          type: "text",
          currentValue: "18h",
          input: {
            title: "Comment Age",
            label: "Enter comment post age:",
            placeholder: "00h or 00d or 00m",
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
            title: "Recation types",
            label: "Choose reaction types:",
            placeholder: "1, 2 or 3",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Author", min: 0, max: 1, current: 0 },
        { name: "Reacted", min: 0, max: 1, current: 0 },
        { name: "Open to work", min: 0, max: 1, current: 0 },
      ],
    },
    //Connection request:
    {
      type: "connection request",
      images: [
        {
          name: "User's Profile Image",
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
            label: "Enter Linkedin user's name:",
            placeholder: "User's name",
          },
        },
        {
          type: "text",
          currentValue: "Web developer @ whythings.dev",
          input: {
            title: "Headline",
            label: "Enter  user's headline:",
            placeholder: "User's headline",
          },
        },
        {
          type: "text",
          currentValue: "Yasir Ali",
          info: "You can turn off the mutual connection in extra settings",
          input: {
            title: "Mutual connection name",
            label: "Enter mututal connection name:",
            placeholder: "User's name",
          },
        },
        {
          type: "number",
          currentValue: 3,
          input: {
            title: "Number of mutuals",
            label: "Enter number of mutuals:",
            placeholder: "000",
          },
        },
      ],
      extra: [
        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Open to work", min: 0, max: 1, current: 0 },
        { name: "Show mutuals", min: 0, max: 1, current: 1 },
      ],
    },
  ],
};
