import { Data } from "@/data/data";
import { TypeDataDetail } from "@/types";

import DiscordProfileBar from "@/Snips/discord/DiscordProfileBar";

const componentMap: Record<
  string,
  React.ComponentType<{ data: TypeDataDetail }>
> = {
  "discord-profile bar": DiscordProfileBar,
};

interface SnipProps {
  platform: string;
  type: string;
  data: TypeDataDetail;
}

const Snip = ({ platform, type, data }: SnipProps) => {
  //Getting matching Data for platform and type
  const matchedPlatform = Data.find(
    (d) => d.platform.toLowerCase() === platform.toLowerCase(),
  );

  let matchedType;
  if (matchedPlatform) {
    matchedType = matchedPlatform.types.find(
      (t) => t.type.toLowerCase() === type.toLowerCase(),
    );
  } else {
    return <div>No Data for {platform}</div>;
  }
  if (matchedType) {
    const lookupKey = `${platform.toLowerCase()}-${type.toLowerCase()}`;
    const DynamicComponent = componentMap[lookupKey];

    if (!DynamicComponent) {
      return (
        <div>
          Component for {platform} {type} not implemented yet.
        </div>
      );
    }

    return (
      <div>
        <DynamicComponent data={data} />
      </div>
    );
  } else {
    return (
      <div>
        No Type {type} for {platform}
      </div>
    );
  }
};

export default Snip;
