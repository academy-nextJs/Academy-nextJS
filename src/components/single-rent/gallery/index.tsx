import { HeartIcon, Share2Icon, StarIcon } from "@/core/icon/icons";
import Panel from "./Panel";
import SliderWrapper from "./SliderWrapper";
import { FC } from "react";
import Button from "@/components/common/Button/Button";

export interface GalleryWrapperProps {
  title: string;
  address: string;
  photos: string[];
  rate: string;
  price: string;
  tags: string[];
}

const GalleryWrapper: FC<GalleryWrapperProps> = (props) => {
  const CreateTags = ({ item }: { item: string }) => {
    return (
      <div className="w-fit h-fit rounded-xl border-2 border-[#565656] bg-gray py-2 px-4">
        #{item}
      </div>
    );
  };

  return (
    <div className="w-full mt-6 flex flex-wrap gap-6">
      <div className="w-full flex max-sm:flex-wrap gap-5 max-sm:order-4">
        <SliderWrapper photos={props.photos} />
        <Panel />
      </div>
      <div className="max-sm:order-2 w-full font-Peyda-500 max-lg:text-sm flex flex-wrap gap-4 items-center text-[#AAAAAA] overflow-x-auto">
        {props.tags?.map((item, index) => (
          <CreateTags key={index} item={item} />
        ))}
        |
        <div className="py-2 px-4  text-white flex items-center bg-[#7367FF] shadow-[0px_8px_16px_rgba(115,103,255,0.2)] rounded-[12px]">
          <StarIcon fill="#fff" />
          <span className="font-Peyda-Numeric mr-[6px]">{props.rate}</span>
          ستاره
        </div>
      </div>
      <div className="w-full flex justify-between max-sm:flex-wrap items-center mt-2 max-sm:order-1">
        <h1 className="text-white font-Peyda-600 text-3xl max-lg:text-2xl">
          {props.title}
        </h1>
        <div className="flex gap-x-4 max-sm:hidden">
          <Button ClassName="!w-10 !h-10 !p-0 bg-gray rounded-xl flex justify-center items-center">
            <Share2Icon />
          </Button>
          <Button ClassName="!w-10 !h-10 !p-0 bg-gray rounded-xl flex justify-center items-center">
            <HeartIcon />
          </Button>
        </div>
      </div>
      <p className="text-white font-Peyda-400 max-sm:order-3">
        <span className="text-gray">آدرس : </span>
        {props.address}
      </p>
    </div>
  );
};

export default GalleryWrapper;
