import { TYPES } from "@/lib/platforms";

export interface ValidElementTypeProps {
  platform: string;
  elementType: string;
}

export const isValidElementType = ({
  platform,
  elementType,
}: ValidElementTypeProps) => {
  const typeConfig = TYPES.find(
    (t) => t.platform.toLowerCase() === platform.toLowerCase(),
  );

  return (
    typeConfig?.types.some(
      (t) => t.key.toLowerCase() === elementType.toLowerCase(),
    ) ?? false
  );
};
