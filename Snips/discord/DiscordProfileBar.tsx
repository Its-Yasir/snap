import DiscordStatusIcon, {
  StatusType,
} from "@/components/discord/DiscordStatusIcon";
import { TypeDataDetail } from "@/types";
import Image from "next/image";

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
  const padding = data?.extra?.find((e) => e.name === "Padding")?.current || 0;
  const roundness =
    data?.extra?.find((e) => e.name === "Roundness")?.current || 0;

  console.log("Data showing for", data);
  return (
    <div
      className={`w-[296px] min-h-[42px] flex items-center relative font-gg-sans`}
      style={{
        padding: `${padding}px`,
        borderRadius: `${roundness}px`,
        backgroundColor: isDark ? "#000" : "#fff",
        backgroundImage: `linear-gradient(color-mix(in srgb, rgba(151, 151, 159, 0.12) 100%, rgba(0, 0, 0, 0.12)), color-mix(in srgb, rgba(151, 151, 159, 0.12) 100%, rgba(0, 0, 0, 0.12)))`,
      }}
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
          className={`w-[12px] h-[12px] flex items-center rounded-full justify-center -bottom-0.5 -right-0.5 absolute`}
          style={{
            backgroundColor: isDark ? "#000" : "#fff",
            backgroundImage: `linear-gradient(color-mix(in srgb, rgba(151, 151, 159, 0.12) 100%, rgba(0, 0, 0, 0.12)), color-mix(in srgb, rgba(151, 151, 159, 0.12) 100%, rgba(0, 0, 0, 0.12)))`,
          }}
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
