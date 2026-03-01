import Image from "next/image";

interface ProfileImgProps {
  url: string;
}

const ProfileImg = ({ url }: ProfileImgProps) => {
  return (
    <div className="w-max h-max rounded-full p-0.5 bg-primary">
      <div className="w-max h-max rounded-full overflow-hidden bg-accent">
        <Image alt="Profile image" src={url} width={50} height={50} />
      </div>
    </div>
  );
};

export default ProfileImg;
