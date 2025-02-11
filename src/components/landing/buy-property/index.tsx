import Button from "@/components/common/Button/Button";
import SliderSection from "./SliderSection";
import Chip from "@/components/common/Chip";

const BuyProperty = () => {
  return (
    <div className="w-full max-w-[1376px] h-fit mt-[200px] flex flex-wrap justify-center gap-y-6 p-8 text-white">
      <Chip side="One-way" className="font-Peyda-500 w-full max-sm:text-center">
        خونه از خودت میخوای !
      </Chip>
      <div className="w-full flex justify-between max-sm:items-center max-sm:flex-col gap-y-8 font-Peyda-500">
        <h1 className="text-4xl max-sm:text-3xl">خرید و فروش ملک در دلتا</h1>
        <Button variant="bordered" size="md" color="light" isMagnetic>
          مشاهده همه
        </Button>
      </div>
      <SliderSection />
    </div>
  );
};

export default BuyProperty;
