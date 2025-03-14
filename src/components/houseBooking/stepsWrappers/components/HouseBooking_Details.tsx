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
    <MainBox isTopSection={false} mainClassName="flex gap-3 h-32 font-Peyda-500">
      {/* house Details Box */}
      <div className="flex h-full text-white gap-4 !w-[570px] pl-7  border-l-2 border-zinc-500/70">
        <Image src={testImage} alt="house image" className="w-44 rounded-2xl" />
        {/* left side */}
        <div className="flex flex-col gap-3">
          <Chip
            className="bg-purple"
            radius="sm"
            startContent={<StarIcon className="fill-white size-3" />}
          >
            5 ستاره
          </Chip>
          <h1 className="font-Peyda-600 text-2xl">هتل سراوان رانین رشت</h1>
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
      <div className="pt-6 w-[450px] px-12 border-l-2 border-zinc-500/70">
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
