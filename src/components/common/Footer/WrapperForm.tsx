import Image from "next/image";
import Form from "./Form";

export default function WrapperForm() {
  return (
    <div
      dir="rtl"
      className="font-Peyda-500 max-lg:col-span-2 max-lg:flex flex-wrap justify-center mb-12"
    >
      <div className="flex gap-x-4">
        <h5 className="max-lg:w-full max-lg:text-center">همیشه کنارتیم</h5>
        <Image width={48} height={16} alt="" src="/three-triangles.svg" />
      </div>
      <h1 className="text-4xl my-6 max-sm:text-center text-nowrap">
        24 ساعت روز و 7 روز هفته در اختیار شماییم !
      </h1>
      <p className="text-xl font-Peyda-400 xl:text-nowrap max-lg:text-center">
        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا
        بتواند در تمام لحظات کنار شما باشد .
      </p>
      <Form />
    </div>
  );
}
