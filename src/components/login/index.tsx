import React from "react";
import Breadcrumb, { BreadcrumbItem } from "../common/BreadCrumb";
import TitleSection from "../common/title-text/TitleSection";
import AuthContainer from "../authContainer/AuthContainer";
import LoginForm from "./LoginForm";

const LoginWrapper = () => {
  // Breadcrumb
  const breadcrumb: BreadcrumbItem[] = [{ label: "ورود به حساب کاربری" }];
  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <TitleSection
        className="text-green"
        iconHeight="28"
        colorIcon="#8cff45"
        text="خوش برگشتی!"
      />
      <AuthContainer
        title="به خانواده دلتا،"
        titleBold="خوش برگشتی!"
        desc="با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون خبر بگیرید !"
      >
        <LoginForm />
      </AuthContainer>
    </>
  );
};

export default LoginWrapper;
