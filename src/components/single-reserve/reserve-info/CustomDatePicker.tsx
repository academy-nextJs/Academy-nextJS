"use client";
import React, { FC, memo } from "react";
import DatePicker, { CalendarProps, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface CustomDatePickerProps {
  date: DateObject | null;
}

const CustomDatePicker: FC<CustomDatePickerProps & CalendarProps> = ({
  onChange,
  date,
}) => {
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
      minDate={new DateObject({ calendar: persian, locale: persian_fa }).add(
        1,
        "day"
      )}
    />
  );
};

export default memo(CustomDatePicker);
