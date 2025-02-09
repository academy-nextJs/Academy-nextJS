import SliderSection from "./SliderSection";

const Comment = () => {
  return (
    <div
      dir="rtl"
      className="w-full h-[510px] flex flex-col gap-6 items-center text-white px-8 mb-36"
    >
      <h6 className="font-Peyda-500 text-green">نظرا کاربران</h6>
      <h1 className="font-Peyda-300 text-4xl">
        رضایت شما اعتبار و ارزش دلتا را می سازد !
      </h1>
      <p className="font-Peyda-400">
        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا
        بتواند در تمام لحظات کنار شما باشد .
      </p>
      <SliderSection />
    </div>
  );
};

export default Comment;
