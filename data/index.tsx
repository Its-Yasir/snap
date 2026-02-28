import { Platform } from "@/types";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const platforms: Platform[] = [
  { name: "discord", code: "discord", icon: <FaDiscord /> },
  { name: "facebook", code: "facebook", icon: <FaFacebook /> },
  { name: "instagram", code: "instagram", icon: <FaInstagram /> },
  { name: "linkedIn", code: "linkedin", icon: <FaLinkedin /> },
  { name: "pinterest", code: "pinterest", icon: <FaPinterest /> },
  { name: "reddit", code: "reddit", icon: <FaReddit /> },
  { name: "snapchat", code: "snapchat", icon: <FaSnapchat /> },
  { name: "telegram", code: "telegram", icon: <FaTelegram /> },
  { name: "tikTok", code: "tiktok", icon: <FaTiktok /> },
  { name: "whatsApp", code: "whatsapp", icon: <FaWhatsapp /> },
  { name: "xTwitter", code: "x", icon: <FaXTwitter /> },
  { name: "YouTube", code: "youtube", icon: <FaYoutube /> },
];
