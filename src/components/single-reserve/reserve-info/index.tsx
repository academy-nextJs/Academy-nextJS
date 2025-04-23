import { HouseIcon } from "@/core/icon/icons";
import Button from "../../common/Button/Button";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { SeparationPrice } from "@/utils/helper/SeparationPrice";
import DiscountGenerator from "../../common/DiscountGenerator";
import BookingPrices from "./BookingPrices";
import DateSection from "./DateSection";
import PanelChip from "@/components/common/Chip/PanelChip";

const ReserveInfo = () => {
  return (
    <div className="relative flex flex-wrap gap-y-6 h-fit w-[329px] px-6 pb-4 pt-12 bg-gray rounded-[32px] border border-[#565656]">
      <PanelChip
        icon={<HouseIcon />}
        text="رزرو خونه برای :"
        className="w-[233px] h-12 top-0 left-[50%] translate-x-[-50%] flex items-center justify-center gap-x-2 rounded-b-[32px]"
      />
      <DateSection />
      <BookingPrices night={5} />
      <div className="w-full flex flex-col items-end gap-3">
        <DiscountGenerator price="25000000" view="both" percent={15} />
        <span className="text-green font-Peyda-Numeric text-2xl">
          {SeparationPrice("15000000")} ت
        </span>
      </div>
      <Button
        color="green"
        size="full"
        ClassName="font-Peyda-600 !shadow-[0px_8px_16px_rgba(140,255,69,0.08)]"
      >
        همین الان رزرو کن
        <RiArrowDropLeftLine size={25} className="text-black" />
      </Button>
    </div>
  );
};

export default ReserveInfo;
