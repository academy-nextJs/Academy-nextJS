import NextBreadcrumb from "@/components/common/BreadCrumb";
import ContactUsWrapper from "@/components/contact-us";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <NextBreadcrumb pageElement={"ارتباط با ما"} />
      <ContactUsWrapper />
    </>
  );
};

export default ContactUs;
