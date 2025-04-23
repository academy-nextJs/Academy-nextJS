import Button, { ButtonProps } from "@/components/common/Button/Button";
import PanelChip from "@/components/common/Chip/PanelChip";
import { CommentIcon, DateIcon, PhoneIcon, PriceIcon } from "@/core/icon/icons";
import { SeparationPrice } from "@/utils/helper/SeparationPrice";
import { FC, ReactNode } from "react";

interface PriceSectionProps {
  icon: ReactNode;
  price: string;
  name: string;
}

const Panel = () => {
  const PriceSection: FC<PriceSectionProps> = ({ icon, price, name }) => {
    return (
      <div className="!h-5 w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {icon}
          <span className="sm:text-[13px]">{name} :</span>
        </div>
        <span className="font-Peyda-Numeric text-green">
          {SeparationPrice(price)} ت
        </span>
      </div>
    );
  };

  const ButtonSimilarProps: Omit<ButtonProps, "children"> = {
    size: "full",
    ClassName:
      "sm:!h-8 font-Peyda-600 sm:text-[13px] !py-2 text-[#363636] shadow-none rounded-xl",
  };

  return (
    <div className="w-[213px] max-sm:w-full sm:min-w-[213px] relative p-3 max-sm:p-6 !pt-[55px] text-[#AAAAAA] font-Peyda-500 flex flex-col gap-y-4 items-center border-2 border-[#565656] bg-gray rounded-[32px] col-start-11 row-start-1">
      <PanelChip
        icon={<PhoneIcon width={16} height={16} />}
        text="اطلاعات تماس"
        className="w-[165px] h-9 top-0 left-[50%] translate-x-[-50%] flex items-center justify-center gap-x-2 rounded-b-[32px]"
      />
      <div className="w-full flex flex-wrap justify-center gap-y-2 mb-2">
        <div className="w-12 h-12 max-sm:w-16 max-sm:h-16 rounded-2xl bg-[#565656]"></div>
        <h1 className="w-full font-Peyda-500 text-white text-center max-sm:text-lg">
          محمد رضا ساداتی
        </h1>
        <div className="flex gap-x-2 items-center">
          <DateIcon width={16} height={16} />
          <span className="font-Peyda-Numeric text-[#AAAAAA] sm:text-[13px]">
            12 مرداد - 1401 / 12:33
          </span>
        </div>
      </div>
      <PriceSection icon={<PriceIcon />} name="قیمت رهن از" price="40000000" />
      <PriceSection
        icon={<PriceIcon />}
        name="قیمت اجاره از"
        price="40000000"
      />
      <Button color="green" {...ButtonSimilarProps}>
        <PhoneIcon fill="#363636" className="ml-2 w-[13px] h-[13px] max-sm:h-4 max-sm:w-4" />
        تماس با 0933****9
      </Button>
      <Button
        color="light"
        variant="bordered"
        {...ButtonSimilarProps}
      >
        <CommentIcon fill="#fff" className="ml-2 w-[13px] h-[13px] max-sm:h-4 max-sm:w-4" />
        گفتگو با فروشنده
      </Button>
    </div>
  );
};

export default Panel;
