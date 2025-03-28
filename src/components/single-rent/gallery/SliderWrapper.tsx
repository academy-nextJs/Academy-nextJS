"use client";
import { FC, useState } from "react";
import { GalleryWrapperProps } from ".";
import Slider from "./Slider";

const SliderWrapper: FC<Pick<GalleryWrapperProps, "photos">> = ({ photos }) => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="w-full h-[368px] grid grid-cols-10 grid-rows-4 max-md:grid-rows-6 gap-5">
      <Slider photos={photos} setActive={setActive} />
      {/* <Image
        width={445}
        height={172}
        className="max-md:hidden col-span-4 row-span-2 rounded-[32px]"
        alt=""
        src={photos[1]}
      /> */}
      <img
        className="w-full h-[172px] max-md:hidden col-span-4 row-span-2 rounded-[32px] overflow-hidden"
        src={photos[active]}
        alt=""
      />
      <div className="max-md:col-span-10 max-md:row-span-1 cursor-pointer text-white col-span-4 row-span-2 rounded-[32px] bg-gray brightness-100 overflow-hidden">
        <div className="w-full h-full text-center flex justify-center items-center text-2xl max-lg:text-lg font-Peyda-Numeric">
          +12 عکس دیگر
        </div>
      </div>
    </div>
  );
};

export default SliderWrapper;
