import DiscordStatusIcon, {
  StatusType,
} from "@/components/discord/DiscordStatusIcon";
import { TypeDataDetail } from "@/types";
import Image from "next/image";
import React from "react";

const DiscordProfileBar = ({ data }: { data: TypeDataDetail }) => {
  const statusItem = data?.text?.[2];
  const status = (statusItem?.choices?.find(
    (c) => c.value === statusItem.currentValue,
  )?.key || statusItem?.currentValue) as StatusType;
  const isDark =
    data?.extra?.find((e) => e.name === "Dark Theme")?.current === 1;
  const showOnline =
    data?.extra?.find((e) => e.name === "Show online")?.current === 1;
  const showUsername =
    data?.extra?.find((e) => e.name === "Show username")?.current === 1;
  const name = data?.text?.[0]?.currentValue || "";
  const username = data?.text?.[1]?.currentValue || "";

  console.log("Data showing for", data);
  return (
    <div
      className={`w-[296px] h-[42px] ${
        isDark ? "bg-[#1d1d1e]" : "bg-[#e7e7e9]"
      } rounded-[8px] flex items-center relative pl-[8px] font-gg-sans`}
    >
      <div className="relative w-[32px] h-[32px]">
        <Image
          alt="User image"
          height={32}
          width={32}
          src={data?.images?.[0]?.url || "/window.svg"}
          className="rounded-full relative"
        />
        <div
          className={`w-[12px] h-[12px] flex items-center ${
            isDark ? "bg-[#1d1d1e]" : "bg-[#e7e7e9]"
          } rounded-full justify-center -bottom-0.5 -right-0.5 absolute`}
        >
          <DiscordStatusIcon
            status={status || "offline"}
            className="w-[8px] h-[8px]"
          />
        </div>
      </div>
      <div className="ml-2 flex flex-col justify-center leading-tight">
        <div className="flex items-baseline gap-1">
          <span
            className={`${isDark ? "text-white" : "text-[#060607]"} ${
              showOnline ? "text-[11px]" : "text-[13px] font-semibold"
            }`}
          >
            {name}
          </span>
          {showUsername && (
            <span
              className={`${
                isDark ? "text-white/70" : "text-[#4f5660]"
              } font-light ${showOnline ? "text-[9px]" : "text-[11px]"}`}
            >
              {username}
            </span>
          )}
        </div>
        {showOnline && status === "online" && (
          <div
            className={`text-[10px] ${
              isDark ? "text-[#949ba4]" : "text-[#5c6370]"
            }`}
          >
            Online
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscordProfileBar;
