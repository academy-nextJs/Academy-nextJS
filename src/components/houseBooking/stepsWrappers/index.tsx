"use client";
import { useBookingStepCount } from "@/zustand/store";
import ChooseHouse_Step from "./ChooseHouse_Step";

const BookingStepsWrappers = () => {
  // getting step count from Zustand
  const { count } = useBookingStepCount();

  const displayStep = () => {
    switch (count) {
      case 1:
        return <ChooseHouse_Step />;

      default:
        break;
    }
  };

  return <>
  {displayStep()}
  </>;
};

export default BookingStepsWrappers;
