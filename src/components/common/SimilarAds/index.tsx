import { HouseIcon } from "@/core/icon/icons";
import Link from "next/link";
import { FC } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import SliderSection from "./SliderSection";

interface SimilarAdsProps {
  href: string;
}

const SimilarAds: FC<SimilarAdsProps> = ({ href }) => {
  return (
    <div className="w-full mt-10 mb-[156px] relative">
      <div className="w-full h-11 mb-12 px-4 py-3 rounded-xl bg-gray flex items-center justify-between text-white font-Peyda-500">
        <div className="flex gap-2">
          <HouseIcon />
          <h1>آگهی های مشابه</h1>
        </div>
        <Link href={href} className="text-green flex gap-[6px] items-center">
          <span>مشاهده همه</span>
          <RiArrowDropLeftLine size={25} className="text-green" />
        </Link>
      </div>
      <div className="h-[460px] w-full max-w-[1376px]">
        <SliderSection />
      </div>
    </div>
  );
};

export default SimilarAds;
