import { FC } from "react";
import { LuCalendarSync } from "react-icons/lu";
import { TbCalendarStats } from "react-icons/tb";

interface IProps {
  date: string;
  variant: "startDate" | "endDate";
}

const ReservationDate: FC<IProps> = ({ variant, date }) => {
  return (
    <div className="text-gray flex gap-1 items-center mt-3">
      {variant === "startDate" ? (
        <TbCalendarStats className="size-4 ml-1" />
      ) : (
        <LuCalendarSync className="size-4 ml-1" />
      )}
      <span>{variant === "startDate" ? "تاریخ ورود :" : "تاریخ خروج :"}</span>
      <span className="text-green">{date} - ساعت 15:30 ب.ظ</span>
    </div>
  );
};

export default ReservationDate;
