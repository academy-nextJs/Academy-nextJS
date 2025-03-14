import MainBox from "@/components/common/MainBox";
import Image from "next/image";
import testImage from "../../../../../public/man.png";
import { Chip } from "@heroui/react";
import { LocationIcon, StarIcon } from "@/core/icon/icons";
import ReservationDate from "./ReservationDate";
import Button from "@/components/common/Button/Button";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const HouseBooking_Details = () => {
  return (
    <MainBox
      isTopSection={false}
      mainClassName="flex max-lg:flex-wrap gap-3 lg:h-32 font-Peyda-500 lg:text-[1.1vw]"
    >
      {/* house Details Box */}
      <div
        className="flex max-md:flex-col  max-md:items-center max-md:text-center h-full text-white gap-4 max-lg:justify-around 
      !lg:w-[570px] md:pl-7 max-lg:pb-5 max-lg:w-full lg:border-l-2 max-lg:border-b-2 border-zinc-500/70"
      >
        <Image
          src={testImage}
          alt="house image"
          className="lg:w-44 sm:w-1/3 w-4/5 max-lg:h-36  rounded-2xl"
        />
        {/* left side */}
        <div className="flex flex-col justify-center w-fit lg:gap-y-3.5 gap-y-5 ">
          <Chip
            className="bg-purple max-md:mx-auto"
            radius="sm"
            startContent={<StarIcon className="fill-white size-3" />}
          >
            5 ستاره
          </Chip>
          <h1 className="font-Peyda-600  lg:text-[1.6vw] text-2xl line-clamp-1">
            هتل سراوان رانین رشت
          </h1>
          {/* house location  */}
          <div className="text-gray flex gap-1 items-center ">
            <LocationIcon className="fill-white size-4 ml-1" />
            <span>آدرس:</span>
            <span className="line-clamp-1 text-white">
              گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....
            </span>
          </div>
        </div>
      </div>
      {/* Reservation date */}
      <div className="pt-6 lg:w-[450px] w-1/2 lg:px-12 md:pl-7 max-lg:pb-5 max-lg:w-full lg:border-l-2 max-lg:border-b-2 border-zinc-500/70">
        <ReservationDate variant="startDate" date="12 / 05 / 1403 " />
        <ReservationDate variant="endDate" date="5 / 05 / 1403 " />
      </div>
      {/* prices Box */}
      <div
        dir="ltr"
        className="pt-6 pr-12 w-[365px] text-green flex flex-col gap-y-6 "
      >
        <div> 15.000.000 ت </div>
        <Button
          className="text-green border-green !rounded-2xl"
          endContent={<HiOutlineOfficeBuilding className="text-green" />}
          variant="bordered"
          isMagnetic
        >
          تغییر هتل
        </Button>
      </div>
    </MainBox>
  );
};

export default HouseBooking_Details;
