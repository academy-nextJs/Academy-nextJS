"use client";
import CustomInputs from "@/components/common/CustomInputs";
import CalculateDaysBetweenDates from "@/utils/calculate-difference";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import CustomDatePicker from "./CustomDatePicker";

interface DateSectionProps {
  setReserveDate: Dispatch<SetStateAction<[DateObject, DateObject] | null>>;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

const DateSection: FC<DateSectionProps> = ({
  setReserveDate,
  duration,
  setDuration,
}) => {
  // State
  const [startDate, setStartDate] = useState<DateObject | null>(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const [endDate, setEndDate] = useState<DateObject | null>(
    new DateObject({ calendar: persian, locale: persian_fa }).add(1, "day")
  );

  useEffect(() => {
    if (startDate && endDate) {
      setDuration(CalculateDaysBetweenDates(endDate, startDate));
      setReserveDate([startDate, endDate]);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (duration <= 0 && startDate)
      setEndDate(new DateObject(startDate).add(1, "day"));
  }, [duration, startDate]);

  // Show duration section
  const DurationSection = () => {
    return (
      <div className="absolute -bottom-10 left-10 z-20 shadow-[0px_8px_16px_rgba(117,105,255,0.2)] flex flex-col bg-[#7569FF] w-14 h-12 rounded-2xl font-Peyda-Numeric text-white items-center justify-center">
        <MdKeyboardArrowUp size={20} color="#fff" className="absolute top-0" />
        {duration} شب
        <MdKeyboardArrowDown
          size={20}
          color="#fff"
          className="absolute bottom-0"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-y-8 w-full mt-6">
      <CustomInputs tag="تاریخ رفت">
        <CustomDatePicker
          date={startDate}
          value={startDate}
          onChange={setStartDate}
        />
        <DurationSection />
      </CustomInputs>
      <CustomInputs tag="تاریخ برگشت">
        <CustomDatePicker
          date={endDate}
          value={endDate}
          onChange={setEndDate}
        />
      </CustomInputs>
    </div>
  );
};

export default DateSection;
