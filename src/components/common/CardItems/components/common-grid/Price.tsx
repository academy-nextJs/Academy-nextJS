import { SeparationPrice } from "@/utils/SeparationPrice";
import { FC } from "react";

interface PriceProps {
  price: string;
  discount?: string;
  isRent: boolean;
  time?: string;
}

const Price: FC<PriceProps> = ({ price, discount, isRent, time }) => {
  return (
    <div
      dir="rtl"
      className={`w-full h-9 mt-4 rounded-xl text-[15px] bg-[#444444] group-hover:bg-green 
        flex items-center ${
          !discount ? "px-4 justify-between" : "px-2 justify-center"
        }`}
    >
      {discount ? (
        <div className="relative text-[#9A9A9A] border-l-2 pl-4 w-fit h-[14px] flex items-center">
          <span className="font-Peyda-Numeric">
            {SeparationPrice(discount)} ت
          </span>
          <span className="absolute w-3/4 h-[1px] bg-[#AAAAAA] rotate-[166.84deg]"></span>
        </div>
      ) : (
        <div className="font-Peyda-500 text-[#AAAAAA]">
          {isRent ? "اجاره ماهیانه" : "قیمت خرید"} :
        </div>
      )}
      <div className="font-Peyda-Numeric w-fit h-5 pr-4">
        <span className="text-white group-hover:text-[#363636]">
          {SeparationPrice(price)} ت{" "}
        </span>
        {time && (
          <span className="text-[#AAAAAA] group-hover:text-[#363636] font-Peyda-500">
            / {time}
          </span>
        )}
      </div>
    </div>
  );
};

export default Price;
