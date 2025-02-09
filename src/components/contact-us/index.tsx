"use client";
import { ContactUsWays } from "@/core/constants/ContactUs";
import Breadcrumb, { BreadcrumbItem } from "../common/BreadCrumb";
import TitleSection from "../common/title-text/TitleSection";
import ContactUsWaysItem from "./ContactUsWays";

const ContactUsWrapper = () => {
  // BreadCrumb
  const breadcrumb: BreadcrumbItem[] = [{ label: "ارتباط با ما" }];
  console.log(ContactUsWays);

  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <TitleSection
        className="text-green mt-3"
        iconHeight="28"
        colorIcon="#8cff45"
        text="ارتباط با ما"
      />
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
            <ContactUsWaysItem key={index} text={item.text} icon={item.icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactUsWrapper;
