import React from "react";
import Breadcrumb, { BreadcrumbItem } from "../common/BreadCrumb";
import TitleSection from "../common/title-text/TitleSection";

const LoginWrapper = () => {
  // Breadcrumb
  const breadcrumb: BreadcrumbItem[] = [{ label: "ورود به حساب کاربری" }];
  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <TitleSection
        className="text-green mt-3"
        iconHeight="28"
        colorIcon="#8cff45"
        text="خوش برگشتی!"
      />
      <div>Login</div>
    </>
  );
};

export default LoginWrapper;
