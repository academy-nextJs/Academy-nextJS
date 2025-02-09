import Breadcrumb, { BreadcrumbItem } from "../common/BreadCrumb";
import TitleSection from "../common/title-text/TitleSection";

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
      <div></div>
    </>
  );
};

export default ContactUsWrapper;
