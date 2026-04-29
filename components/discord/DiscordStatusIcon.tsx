import React from "react";

export type StatusType = "online" | "idle" | "dnd" | "offline";

interface DiscordStatusIconProps {
  status: StatusType;
  /** * Tailwind classes to control size.
   * Default is w-4 h-4 (16px), which is Discord's standard avatar badge size.
   */
  className?: string;
}

const DiscordStatusIcon = ({
  status,
  className = "w-4 h-4",
}: DiscordStatusIconProps) => {
  // Discord's exact official hex colors
  const colors: Record<StatusType, string> = {
    online: "#23A559",
    idle: "#F0B232",
    dnd: "#F23F43",
    offline: "#80848E",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={colors[status]}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The Mask defines which parts of the icon are solid and which are transparent */}
      <mask id={`discord-status-mask-${status}`}>
        {/* White means "keep this part visible" */}
        <circle cx="12" cy="12" r="12" fill="white" />

        {/* Black means "cut a transparent hole here" */}
        {status === "idle" && (
          // Cuts out the top-left to create the yellow crescent moon
          <circle cx="6" cy="6" r="10" fill="black" />
        )}

        {status === "dnd" && (
          // Cuts out the horizontal line
          <rect x="6" y="10" width="12" height="4" rx="2" fill="black" />
        )}

        {status === "offline" && (
          // Cuts out the center to create the hollow gray donut
          <circle cx="12" cy="12" r="5" fill="black" />
        )}
      </mask>

      {/* The actual colored circle that the mask is applied to */}
      <circle
        cx="12"
        cy="12"
        r="12"
        mask={`url(#discord-status-mask-${status})`}
      />
    </svg>
  );
};

export default DiscordStatusIcon;
