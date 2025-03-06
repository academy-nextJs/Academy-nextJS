"use client"
import { HouseBookingStepsTitle } from "@/core/constants/Booking";
import StepTitle from "./stepTitle";

const BookingStepsBox = () => {
  return (
    <div className="p-4 w-full bg-graySecondary rounded-3xl flex gap-2">
      {HouseBookingStepsTitle?.map((item) => (
        <StepTitle key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BookingStepsBox;
