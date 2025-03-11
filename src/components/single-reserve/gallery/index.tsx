import { FC } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";

export interface GalleryWrapperProps {
  title: string;
  star: number | string;
  address: string;
  pictures: string[]
}

const GalleryWrapper: FC<GalleryWrapperProps> = ({ title, star, address, pictures }) => {
  return (
    <div className="w-full text-white mt-6 flex flex-wrap gap-y-6">
      <Navbar address={address} star={star} title={title} />
      <Gallery pictures={pictures} />
    </div>
  );
};

export default GalleryWrapper;
