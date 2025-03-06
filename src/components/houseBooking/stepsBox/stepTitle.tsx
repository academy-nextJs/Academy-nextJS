import { THouseBookingSteps } from "@/core/constants/Booking/type";
import { useBookingStepCount } from "@/zustand/store";
import { FC } from "react";

const StepTitle: FC<THouseBookingSteps> = ({ id, title, icon, last }) => {
  const { count, inc } = useBookingStepCount();
  //   Condition for ordering steps
  const selected = count == id;
  const completed = count > id;
  const handleReturnToStepBefore = () => {
    if (completed) inc(id);
  };

  return (
    <div
      onClick={handleReturnToStepBefore}
      className={`flex  !w-fit gap-3 items-center text-gray cursor-pointer ${
        selected && "text-white"
      } ${completed && "text-green"} ${last ? "" : "flex-grow"} `}
    >
      {/* Icon section */}
      <div
        className={`border-2  p-2 rounded-full ${
          completed
            ? "bg-green border-none"
            : selected
            ? "border-white"
            : "border-lightGray"
        }`}
      >
        <icon.prototype.constructor
          className=""
          size="15"
          color={selected ? "white" : completed ? "black" : "gray"}
        />
      </div>
      <h1 className="font-Peyda-600 text-xl ">{title}</h1>
      <hr
        className={`w-2/5 inline-flex border-2 border-dashed ${
          completed
            ? "border-green"
            : selected
            ? "border-white"
            : "border-[#999]"
        } ${last && "hidden"}`}
      />
    </div>
  );
};

export default StepTitle;
