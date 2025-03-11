import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { DateObject } from "react-multi-date-picker";

const CalculateDaysBetweenDates = (
  endTime: DateObject,
  startTime: DateObject
): number => {
  const start: Date = new Date(
    new DateObject(startTime)
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD")
  );
  const end: Date = new Date(
    new DateObject(endTime)
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD")
  );

  // Calculate the time difference in milliseconds
  const differenceInTime: number = end.getTime() - start.getTime();

  // Convert milliseconds to days
  const differenceInDays: number = differenceInTime / (1000 * 3600 * 24);

  // To avoid a negative result
  return Math.abs(differenceInDays);
};

export default CalculateDaysBetweenDates;
