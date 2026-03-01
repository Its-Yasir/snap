import Image from "next/image";

interface ProfileImgProps {
  url: string;
}

// A tiny 1x1 solid gray pixel in base64 format for the loading placeholder
const blurPixel =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0wR/GvkAAAAASUVORK5CYII=";

const ProfileImg = ({ url }: ProfileImgProps) => {
  return (
    <div className="w-max h-max rounded-full p-0.5 bg-primary">
      <div className="w-max h-max rounded-full overflow-hidden bg-accent">
        <Image
          alt="Profile image"
          src={url}
          width={50}
          height={50}
          className="object-cover w-[50px] h-[50px]"
          placeholder="blur"
          blurDataURL={blurPixel}
        />
      </div>
    </div>
  );
};

export default ProfileImg;
