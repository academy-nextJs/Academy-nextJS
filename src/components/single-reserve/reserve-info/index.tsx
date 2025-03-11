"use client";
import PanelChip from "@/components/common/Chip/PanelChip";
import { HouseIcon } from "@/core/icon/icons";
import { SeparationPrice } from "@/utils/SeparationPrice";
import { useCreateBooking } from "@/utils/service/api/post/CreateBooking";
import { FC, useState } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { DateObject } from "react-multi-date-picker";
import Button from "../../common/Button/Button";
import DiscountGenerator from "../../common/DiscountGenerator";
import BookingPrices from "./BookingPrices";
import DateSection from "./DateSection";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

interface ReserveInfoProps {
  price: string;
  house_id: string;
}

const ReserveInfo: FC<ReserveInfoProps> = ({ price, house_id }) => {
  const [reserveDate, setReserveDate] = useState<
    null | [DateObject, DateObject]
  >(null);
  const [duration, setDuration] = useState<number>(0);
  const { mutate } = useCreateBooking();

  const HandleReserve = () => {
    if (!reserveDate) return;

    mutate({
      house_id: house_id,
      reserved_dates: [
        new DateObject(reserveDate[0])
          .convert(gregorian, gregorian_en)
          .format("YYYY-MM-DD"),
        new DateObject(reserveDate[1])
          .convert(gregorian, gregorian_en)
          .format("YYYY-MM-DD"),
      ],
    });
  };

  return (
    <div className="relative flex flex-wrap gap-y-6 h-fit w-[329px] px-6 pb-4 pt-12 bg-gray rounded-[32px] border border-[#565656]">
      <PanelChip
        icon={<HouseIcon />}
        text="رزرو خونه برای :"
        className="w-[233px] h-12 top-0 left-[50%] translate-x-[-50%] flex items-center justify-center gap-x-2 rounded-b-[32px]"
      />
      <DateSection setReserveDate={setReserveDate} duration={duration} setDuration={setDuration} />
      <BookingPrices night={duration} price={parseInt(price)} />
      <div className="w-full flex flex-col items-end gap-3">
        <DiscountGenerator price="25000000" view="both" percent={15} />
        <span className="text-green font-Peyda-Numeric text-2xl">
          {SeparationPrice(parseInt(price) * duration)} ت
        </span>
      </div>
      <Button
        color="green"
        size="full"
        className="font-Peyda-600 !shadow-[0px_8px_16px_rgba(140,255,69,0.08)] !rounded-[14px]"
        onClick={HandleReserve}
      >
        همین الان رزرو کن
        <RiArrowDropLeftLine size={25} className="text-black" />
      </Button>
    </div>
  );
};

export default ReserveInfo;
