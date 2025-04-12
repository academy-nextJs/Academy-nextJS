import Chip from "@/components/common/Chip/SectionChip";
import SliderSection from "./SliderSection";

const Comment = () => {
  return (
    <div className="w-full h-[510px] flex flex-col gap-6 items-center text-white px-8 mb-36">
      <Chip side="Two-way" className="font-Peyda-500">
        نظرا کاربران
      </Chip>
      <h1 className="font-Peyda-300 text-4xl text-center">
        رضایت شما اعتبار و ارزش دلتا را می سازد !
      </h1>
      <p className="font-Peyda-400 text-center">
        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا
        بتواند در تمام لحظات کنار شما باشد .
      </p>
      <SliderSection />
    </div>
  );
};

export default Comment;
