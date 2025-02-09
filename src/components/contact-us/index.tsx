import { ContactUsWays } from "@/core/constants/ContactUs";
import Breadcrumb, { BreadcrumbItem } from "../common/BreadCrumb";
import TitleSection from "../common/title-text/TitleSection";
import ContactUsWaysItem from "./ContactUsWays";
import Form from "../common/Footer/Form";

const ContactUsWrapper = () => {
  // BreadCrumb
  const breadcrumb: BreadcrumbItem[] = [{ label: "ارتباط با ما" }];

  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <TitleSection
        className="text-green mt-3"
        iconHeight="28"
        colorIcon="#8cff45"
        text="ارتباط با ما"
      />
      <div className="lg:flex gap-4 justify-between items-center">
        {/* Right side */}
        <div className="flex flex-col gap-6 text-white max-lg:text-center">
          <h1 className="text-4xl max-sm:text-center">
            هر ساعت از شبانه روز که باشه،
            <span className="font-Peyda-600 "> ما کنارتیم !</span>
          </h1>
          <p>
            هر ساعت از شبانه روز که باشه تیم پیشتیبانی دلتا پاسخگوی سوالات و
            انتقادات شما هستند تا در اسرع وقت مشکلتان را حل کنیم !
          </p>
          <div className="flex flex-col gap-4 mt-2">
            {ContactUsWays?.map((item, index) => (
              <ContactUsWaysItem
                key={index}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        {/* Left side */}
        <div className="lg:w-[575px] md:h-96 h-[500px] relative lg:-mt-8 max-lg:my-16">
          <div className="bg-[#3B3B3B] h-full w-4/5 rounded-2xl mx-auto absolute top-0 md:right-14 right-12 z-30"></div>
          <div className="bg-[#2D2D2D] h-[90%] w-11/12 rounded-2xl mx-auto my-auto absolute top-4 md:right-6 right-4 z-40"></div>
          <div className="bg-black absolute z-50 h-4/5 w-full rounded-2xl top-9 p-3">
            <Form variant="contactUs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsWrapper;
