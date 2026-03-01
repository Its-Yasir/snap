import { useBoardStore } from "@/store/useStore";
import { Post } from "@/types";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { TiUpload } from "react-icons/ti";
import { TbArrowsRandom } from "react-icons/tb";

import ProfileImg from "./profile-img";
import Inputt from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";

interface imageEditProps {
  id: number;
}

const ImageEdit = ({ id }: imageEditProps) => {
  const { posts, setImageVisibility, setImageUrl } = useBoardStore(
    (state) => state,
  );

  const reandomImgChanger = (idx: number) => {
    const min = 1;
    const max = 70;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Construct the Pravatar URL
    const newAvatarUrl = `https://i.pravatar.cc/250?img=${randomNumber}`;

    // Update the image URL in your Zustand store
    setImageUrl(id, idx, newAvatarUrl);
  };

  const currentSnip: Post | undefined = posts.find((p) => p.id === id);
  return (
    <div className="w-auto h-auto p-2 flex-col gap-1">
      {currentSnip?.images.map((img, idx) => (
        <div className="w-[300px]" key={idx}>
          <h1 className="mt-1 text-lg mb-1 flex w-full justify-between">
            {img.name}
          </h1>
          <div
            className={`mt-2 ${!img.isHidden ? "bg-accent" : ""} p-1 rounded-md mb-1 flex justify-between items-center w-full`}
          >
            {!img.isHidden && <ProfileImg url={img.url} />}
            {img.isHidden ? (
              <div className="w-full">
                <button
                  onClick={() => setImageVisibility(id, idx, false)}
                  className="flex py-2 items-center gap-2 justify-center w-full cursor-pointer bg-emerald-500/30 rounded-md"
                >
                  Show
                  <IoEyeOutline />
                </button>
              </div>
            ) : (
              <div className="w-max">
                <button
                  onClick={() => setImageVisibility(id, idx, true)}
                  className="flex py-2 items-center gap-2 justify-center w-max px-4 cursor-pointer bg-yellow-500/30 rounded-md"
                >
                  Hide
                  <IoEyeOffOutline />
                </button>
              </div>
            )}
          </div>
          <div className="w-full h-0.5 mt-2 mb-2 bg-accent rounded-lg"></div>
          {/*Code for input and search button */}
          <div className="w-full mt-7 flex gap-2 mb-2 items-end">
            <div className="flex-1">
              <Inputt
                type="text"
                label="Enter Profile URL or username:"
                placeholer="e.g, your_name"
                currentValue=""
              />
            </div>
            <button className="h-9 w-9 flex items-center justify-center cursor-pointer bg-accent rounded-md shrink-0">
              <MdOutlineSearch className="text-xl" />
            </button>
          </div>
          {/*Code for Upload and random button */}
          <div className="flex w-full mt-7 justify-around">
            <Button className="cursor-pointer w-[45%]">
              Upload
              <TiUpload />
            </Button>
            <Button
              variant={"outline"}
              onClick={() => reandomImgChanger(idx)}
              className="cursor-pointer w-[45%]"
            >
              Random
              <TbArrowsRandom />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageEdit;
