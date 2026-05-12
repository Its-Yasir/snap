import DiscordStatusIcon, {
  StatusType,
} from "@/components/discord/DiscordStatusIcon";
import { TypeDataDetail } from "@/types";
import Image from "next/image";
import { RiMoreFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Icon } from "@iconify/react";

const DiscordProfileDetails = ({ data }: { data: TypeDataDetail }) => {
  const isDark =
    data?.extra?.find((e) => e.name === "Dark Theme")?.current === 1;
  const roundness =
    data?.extra?.find((e) => e.name === "Roundness")?.current ?? 12;

  const name = data?.text?.[0]?.currentValue || "Rachel";
  const username = data?.text?.[1]?.currentValue || "rachel_25665";
  const memberSince = data?.text?.[2]?.currentValue || "Oct 3, 2025";
  const mutualFriends = data?.text?.[3]?.currentValue || "2";
  const mutualServers = data?.text?.[4]?.currentValue || "2";

  const statusItem = data?.text?.[5];
  const status = (statusItem?.choices?.find(
    (c) => c.value === statusItem.currentValue,
  )?.key ||
    statusItem?.currentValue ||
    "online") as StatusType;

  const profileImage = data?.images?.[0]?.url || "/zohaib.png";
  const bannerImage = data?.images?.[1]?.url || "/bg.png";

  const themeColors = {
    bg: isDark ? "#111214" : "#ffffff",
    leftBg: isDark ? "#111214" : "#ffffff",
    rightBg: isDark ? "#111214" : "#ffffff",
    textPrimary: isDark ? "#ffffff" : "#060607",
    textSecondary: isDark ? "#b5bac1" : "#4f5660",
    textMuted: isDark ? "#949ba4" : "#5c6370",
    buttonPrimary: "#5865f2",
    buttonSecondary: isDark ? "#4e5058" : "#e3e5e8",
    bannerDefault: "#4e5d65",
  };

  return (
    <div
      className="flex w-[800px] h-[500px] overflow-hidden font-gg-sans shadow-2xl relative"
      style={{
        borderRadius: `${roundness}px`,
        backgroundColor: themeColors.bg,
      }}
    >
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50">
        <IoClose size={24} />
      </button>

      {/* Left Section */}
      <div
        className="w-[340px] h-full border-r border-white/5 relative flex flex-col"
        style={{ backgroundColor: themeColors.leftBg }}
      >
        {/* Banner */}
        <div
          className="w-full h-[120px] relative shrink-0"
          style={{ backgroundColor: themeColors.bannerDefault }}
        >
          {bannerImage && bannerImage !== "/bg.png" && (
            <Image
              src={bannerImage}
              alt="Banner"
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Avatar Container */}
        <div className="absolute top-[76px] left-[16px] z-10">
          <div className="relative">
            <div
              className="rounded-full overflow-hidden border-[6px]"
              style={{ borderColor: themeColors.leftBg }}
            >
              <Image
                src={profileImage}
                alt={name as string}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            {/* Status Indicator */}
            <div
              className="absolute bottom-1 right-1 rounded-full border-[5px]"
              style={{
                borderColor: themeColors.leftBg,
                backgroundColor: themeColors.leftBg,
              }}
            >
              <div className="bg-[#111214] rounded-full p-0.5">
                <DiscordStatusIcon status={status} className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-16 px-4 flex flex-col gap-4">
          <div>
            <h2
              className="text-xl font-semibold"
              style={{ color: themeColors.textPrimary }}
            >
              {name}
            </h2>
            <p className="text-sm" style={{ color: themeColors.textSecondary }}>
              {username}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded text-white font-semibold text-sm font-gg-sans hover:bg-[#4752c4] transition-colors"
              style={{ backgroundColor: themeColors.buttonPrimary }}
            >
              <Icon
                icon="boxicons:message-circle-filled"
                width="20"
                height="20"
              />
              Message
            </button>
            <button
              className="p-2 rounded hover:bg-white/10 transition-colors"
              style={{
                backgroundColor: themeColors.buttonSecondary,
                color: themeColors.textPrimary,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
                  fill="currentColor"
                />
                <path
                  d="M16.83 12.93c.26-.27.26-.75-.08-.92A9.5 9.5 0 0 0 12.47 11h-.94A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h7.64c.12 0 .17-.31.06-.36C12.82 21.14 12 20.22 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.8.31-1.53.83-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              className="p-2 rounded hover:bg-white/10 transition-colors"
              style={{
                backgroundColor: themeColors.buttonSecondary,
                color: themeColors.textPrimary,
              }}
            >
              <RiMoreFill size={18} />
            </button>
          </div>

          {/* Member Since */}
          <div className="mt-2">
            <h3
              className="text-[10px] font-bold uppercase mb-1"
              style={{ color: themeColors.textSecondary }}
            >
              Member Since
            </h3>
            <p className="text-sm" style={{ color: themeColors.textPrimary }}>
              {memberSince}
            </p>
          </div>

          {/* Note */}
          <div>
            <h3
              className="text-[10px] font-bold uppercase mb-1"
              style={{ color: themeColors.textSecondary }}
            >
              Note (only visible to you)
            </h3>
            <p
              className="text-[12px] cursor-pointer hover:underline"
              style={{ color: themeColors.textMuted }}
            >
              Click to add a note
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="flex-1 flex flex-col"
        style={{ backgroundColor: themeColors.rightBg }}
      >
        {/* Tabs */}
        <div className="px-4 pt-4 border-b border-white/5">
          <div className="flex gap-6 text-sm font-medium">
            <div className="relative pb-3 cursor-pointer group">
              <span style={{ color: themeColors.textPrimary }}>Activity</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-t-full" />
            </div>
            <div className="pb-3 cursor-pointer group text-white/60 hover:text-white transition-colors">
              <span style={{ color: themeColors.textSecondary }}>
                {mutualFriends} Mutual Friends
              </span>
            </div>
            <div className="pb-3 cursor-pointer group text-white/60 hover:text-white transition-colors">
              <span style={{ color: themeColors.textSecondary }}>
                {mutualServers} Mutual Servers
              </span>
            </div>
          </div>
        </div>

        {/* Empty State Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: themeColors.textPrimary }}
          >
            {name} doesn&apos;t have any activity to share here
          </h3>
          <p
            className="text-[15px] max-w-[340px] leading-relaxed"
            style={{ color: themeColors.textSecondary }}
          >
            They appear to be practicing the art of digital zen 🙏
            <br />
            take a deep breath and say hey/namaste
          </p>

          <button
            className="mt-6 flex items-center gap-2 px-6 py-2 rounded text-white font-semibold text-sm font-gg-sans hover:bg-white/10 transition-colors"
            style={{ backgroundColor: themeColors.buttonSecondary }}
          >
            <Icon
              icon="boxicons:message-circle-filled"
              width="20"
              height="20"
            />
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscordProfileDetails;
