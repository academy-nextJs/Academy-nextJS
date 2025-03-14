"use client";
import React, { FC, memo } from "react";
import DatePicker, { CalendarProps, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface CustomDatePickerProps {
  date: DateObject | null;
  section: "start" | "end";
}

const CustomDatePicker: FC<CustomDatePickerProps & CalendarProps> = ({
  onChange,
  date,
  section,
}) => {
//   console.log("re-render");
  return (
    <DatePicker
      value={date}
      onChange={onChange}
      className="bg-dark"
      inputClass="custom-input-date"
      containerClassName="custom-container-input-date"
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      format="YYYY-M-D"
      maxDate={new DateObject({ calendar: persian }).toLastOfMonth()}
      minDate={
        section == "end"
          ? new DateObject({ calendar: persian }).set(
              "day",
              date && date.day + 1
            )
          : new DateObject({ calendar: persian }).toFirstOfMonth()
      }
    />
  );
};

export default memo(CustomDatePicker);
