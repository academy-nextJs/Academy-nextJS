import { SeparationPrice } from "@/utils/SeparationPrice";
import { FC } from "react";

interface DiscountGenerator {
  price: string;
  className?: string;
  percent?: number;
  view: "both" | "percent" | "numeric";
}

const DiscountGenerator: FC<DiscountGenerator> = ({
  price,
  className,
  percent,
  view,
}) => {
  const Percent = () => {
    return (
      <span className="w-[54px] h-8 font-Peyda-Numeric shadow-[0px_6px_12px_rgba(255,85,85,0.16)] text-white bg-red rounded-xl flex items-center justify-center">
        %{percent}
      </span>
    );
  };

  const Numeric = () => {
    return (
      <div
        className={`relative text-[#9A9A9A] w-fit h-[14px] flex items-center ${className}`}
      >
        <span className="font-Peyda-Numeric">{SeparationPrice(price)} ت</span>
        <span className="absolute w-4/5 h-[1px] bg-[#AAAAAA] rotate-[166.84deg]"></span>
      </div>
    );
  };

  if (view == "numeric") return <Numeric />;
  else if (view == "percent") return <Percent />;
  else
    return (
      <div className="flex gap-x-2 items-center">
        <Numeric />
        <Percent />
      </div>
    );
};

export default DiscountGenerator;
