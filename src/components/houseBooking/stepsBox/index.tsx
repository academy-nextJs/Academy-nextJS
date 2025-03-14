"use client";
import { HouseBookingStepsTitle } from "@/core/constants/Booking";
import StepTitle from "./stepTitle";

const BookingStepsBox = () => {
  return (
    <div className="p-4 w-full bg-graySecondary rounded-3xl md:flex max-md:grid sm:grid-cols-2 sm:gap-2 gap-4">
      {HouseBookingStepsTitle?.map((item) => (
        <StepTitle key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BookingStepsBox;
