import { CopyIcon, LocationIcon, ShareIcon, StarIcon } from "@/core/icon/icons";
import { FC, Fragment } from "react";
import { GalleryWrapperProps } from ".";
import Button from "@/components/common/Button/Button";

const Navbar: FC<Omit<GalleryWrapperProps, "pictures">> = ({ address, star, title }) => {
  return (
    <Fragment>
      <h1 className="w-full text-4xl font-Peyda-600">{title}</h1>
      <div className="flex justify-between items-center w-full font-Peyda-500">
        <div className="flex gap-2">
          <LocationIcon />
          <p className="text-white">
            <span className="text-gray">آدرس : </span>
            {address}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="py-[6px] px-3 flex bg-[#7367FF] shadow-[0px_8px_16px_rgba(115,103,255,0.2)] rounded-[10px]">
            <StarIcon fill="#fff" />
            <span className="font-Peyda-Numeric mr-[6px]">{star}</span>
            ستاره
          </div>
          |
          <Button className="!w-10 !h-10 !p-0 bg-gray rounded-xl flex justify-center items-center">
            <CopyIcon />
          </Button>
          <Button className="!w-10 !h-10 !p-0 bg-green rounded-xl flex justify-center items-center">
            <ShareIcon />
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
