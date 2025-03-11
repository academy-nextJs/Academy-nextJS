import PanelChip from "@/components/common/Chip/PanelChip";
import { NoteIcon } from "@/core/icon/icons";
import { SeparationPrice } from "@/utils/SeparationPrice";
import { FC } from "react";

interface BookingPricesProps {
  night: number,
  price: number
}

const BookingPrices:FC<BookingPricesProps> = ({ night, price }) => {
  const BookingPricesItems = ({duration}: {duration: number}) => {
    return (
      <li className="w-full flex justify-between font-Peyda-700">
        <div className="flex items-center text-[#AAAAAA]">
          <NoteIcon />
          <span className="mr-2 font-Peyda-Numeric">{duration}</span>
          شب*
          <span className="font-Peyda-Numeric">
            {SeparationPrice(price)} ت
          </span>
        </div>
        <span className="text-white font-Peyda-Numeric">
          {SeparationPrice(price * duration)} ت
        </span>
      </li>
    );
  };

  return (
    <div className="relative w-full border-y-2 pt-9 border-[#646464]">
      <PanelChip
        text="قیمت های رزرو"
        className="w-[178px] h-9 top-0 left-[50%] translate-x-[-50%] flex items-center justify-center gap-x-2 rounded-b-[32px]"
      />
      <ul className="py-6 flex flex-wrap gap-y-5">
        <BookingPricesItems duration={1} />
        <BookingPricesItems duration={night > 3 ? night : 5} />
        <BookingPricesItems duration={night > 3 ? night * 2 : 10} />
      </ul>
    </div>
  );
};

export default BookingPrices;
