import { HouseReserveListType } from "@/core/constants/house-reserve/types";
import Button from "../Button/Button";
import File from "@/assets/File";
import { ClockIcon, LocationIcon, StarIcon } from "@/core/icon/icons";
import { SeparationPrice } from "@/utils/SeparationPrice";
import { FaHotel } from "react-icons/fa6";

const SelectedHouseReserveListItemMain = ({
  data,
  selectedItem,
}: {
  data: HouseReserveListType;
  selectedItem: HouseReserveListType | undefined;
}) => {
  return (
    <>
      <div className="flex gap-4 flex-nowrap items-center transition-all ">

          <File background="#393939" stroke={selectedItem === data ? "#8CFF45" : "#393939"} />

        <div className="h-full flex flex-col gap-4 items-start ">
          <Button
            color="purple"
            radius="lg"
            className="flex items-center gap-1 !py-1.5 !px-3"
          >
            <StarIcon className="fill-white size-4" />
            <span className="text-[13px]">{`${data.rate} ستاره`}</span>
          </Button>

          <span className="text-2xl font-Peyda-600 text-white">
            {data.title}
          </span>

          <div className="flex gap-2 items-center">
            <LocationIcon />
            <div className="flex gap-1">
              <span className="text-[#AAAAAA] font-Peyda-400 ">آدرس : </span>{" "}
              <span className="text-white font-Peyda-400">{data.address}</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <ClockIcon fill="#AAAAAA" />
            <div className="flex gap-1">
              <span className="text-[#AAAAAA] font-Peyda-400 ">
                مدت زمان :{" "}
              </span>{" "}
              <span className="text-white font-Peyda-400">
                {data.bathrooms} شب
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-end">
        <div className="flex flex-nowrap gap-3 justify-end ite ms-center">
          <span className="font-Peyda-600 text-gray relative">
            {SeparationPrice(`${Math.ceil((+data.price * 100) / 85)} ت`)}
            <div className="absolute rotate-[170deg] border border-[#AAAAAA] h-0 w-[100%] top-2"></div>
          </span>
          <Button
            color="red"
            radius="lg"
            className="!py-1 !px-3 text-white"
            isMagnetic
          >
            15%
          </Button>
        </div>

        <div className="text-3xl text-green font-Peyda-600">
          {SeparationPrice(`${data.price} ت`)}
        </div>

        <Button
          variant="solid"
          color="green"
          className=" mt-1 px-6 py-3 flex items-center gap-2.5 hover:shadow-inner-[2px_2px_10px_0px_#FFFFFF3D_inset] hover:shadow-inner-[-1px_-1px_6px_0px_#0000000A_inset] hover:drop-shadow-[0px_8px_20px_0px_#8CFF451F] "
          radius="xl"
        >
          <FaHotel />{" "}
          <span className="p-0 m-0 h-min leading-[20%] ">بررسی و رزرو هتل</span>
        </Button>
      </div>
    </>
  );
};
export default SelectedHouseReserveListItemMain;
