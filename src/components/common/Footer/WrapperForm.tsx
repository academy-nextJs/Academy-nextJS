import Form from "./Form";
import { TriangleIcon } from "@/core/icon/icons";

export default function WrapperForm() {
  return (
    <div
      dir="rtl"
      className="font-Peyda-500 max-lg:col-span-2 max-lg:flex flex-wrap justify-center mb-12"
    >
      <div className="flex gap-x-4">
        <h5 className="max-lg:w-full max-lg:text-center">همیشه کنارتیم</h5>
        <TriangleIcon width={48} height={16} fill="#363636" />
      </div>
      <h1 className="text-3xl sm:text-4xl max-lg:w-full max-lg:text-center my-6 max-sm:text-center sm:text-nowrap">
        24 ساعت روز و 7 روز هفته در اختیار شماییم !
      </h1>
      <p className="text-xl font-Peyda-400 xl:text-nowrap max-lg:text-center">
        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا
        بتواند در تمام لحظات کنار شما باشد .
      </p>
      <Form variant="footer" />
    </div>
  );
}
