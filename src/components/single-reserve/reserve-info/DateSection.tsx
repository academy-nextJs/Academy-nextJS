"use client";
import CustomInputs from "@/components/common/CustomInputs";
import { NegativeIcon, PositiveIcon } from "@/core/icon/icons";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import CustomDatePicker from "./CustomDatePicker";

const DateSection = () => {
  const passengersButtonStyle =
    "w-6 h-6 bg-green rounded-[4px] flex items-center justify-center";
  // State
  const [startDate, setStartDate] = useState<DateObject | null>(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const [endDate, setEndDate] = useState<DateObject | null>(
    new DateObject({ calendar: persian, locale: persian_fa }).add(1, "day")
  );
  const [duration, setDuration] = useState<number>(0);
  const [passengers, setPassengers] = useState<number>(1);

  const handlePassengers = (section: "negative" | "positive") => {
    if (section == "positive") setPassengers((prev) => ++prev);
    else if (section == "negative" && passengers > 1)
      setPassengers((prev) => --prev);
  };

  // Calculate Difference date
  useEffect(() => {
    if (startDate && endDate) {
      setDuration(endDate.dayOfYear - startDate.dayOfYear);
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
          section="start"
          date={startDate}
          value={startDate}
          onChange={setStartDate}
        />
        <DurationSection />
      </CustomInputs>
      <CustomInputs tag="تاریخ برگشت">
        <CustomDatePicker
          section="end"
          date={endDate}
          value={endDate}
          onChange={setEndDate}
        />
      </CustomInputs>
      <CustomInputs tag="تعدا مسافران" className="h-[59px]">
        <div className="font-Peyda-Numeric w-full h-full flex justify-between items-center pr-[6px]">
          <span className="text-[#B3B3B3]">{passengers} نفر</span>
          <div className="flex gap-6 items-center">
            <button
              className={passengersButtonStyle}
              onClick={() => {
                handlePassengers("negative");
              }}
            >
              <NegativeIcon />
            </button>
            <span className="text-white">{passengers}</span>
            <button
              className={passengersButtonStyle}
              onClick={() => {
                handlePassengers("positive");
              }}
            >
              <PositiveIcon />
            </button>
          </div>
        </div>
      </CustomInputs>
    </div>
  );
};

export default DateSection;
