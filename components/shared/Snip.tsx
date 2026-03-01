import { Data } from "@/data/data";

interface SnipProps {
  platform: string;
  type: string;
}

const Snip = ({ platform, type }: SnipProps) => {
  //Getting matching Data for platform and type
  const matchedPlatforms = Data.filter(
    (d) => d.platform.toLowerCase() === platform.toLowerCase(),
  );
  let matchedType;
  if (matchedPlatforms.length > 0) {
    matchedType = matchedPlatforms.find(
      (p) => p.type.toLowerCase() === type.toLowerCase(),
    );
  } else {
    return <div>No Data for {platform}</div>;
  }
  if (matchedType) {
    return (
      <div>
        Found {type} for {platform}
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
