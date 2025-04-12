"use client";
import { Checkbox, Input, Radio } from "@heroui/react";
import { useFormik } from "formik";
import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import Button from "../common/Button/Button";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

const RegisterForm = () => {
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  // visible password
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-wrap gap-8 items-center">
        <Input
          className="max-md:w-full w-[calc(50%_-_16px)]"
          type="email"
          label="ایمیل شما:"
          // labelPlacement="outside"
          placeholder="مثال : dakjsbd@email.com"
          variant="bordered"
          classNames={{
            label: `label-input px-2 !top-0 !bg-base`,
          }}
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Input
          className="max-md:w-full w-[calc(50%_-_16px)]"
          label="کلمه عبور:"
          endContent={
            <button
              aria-label=""
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? <PiEyeLight size={27} /> : <PiEyeSlash size={27} />}
            </button>
          }
          classNames={{
            label: `label-input px-2 !-top-2 !bg-base`,
          }}
          // labelPlacement="outside"
          type={isVisible ? "text" : "password"}
          variant="bordered"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <Input
          className="max-md:w-full w-[calc(50%_-_16px)]"
          label="نام شما:"
          // labelPlacement="outside"
          placeholder="بنیامین"
          variant="bordered"
          classNames={{
            label: `label-input px-2 !top-0 !bg-base`,
          }}
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <Input
          className="max-md:w-full w-[calc(50%_-_16px)]"
          label="نام خانوادگی شما:"
          // labelPlacement="outside"
          placeholder="حسین زاده"
          variant="bordered"
          classNames={{
            label: `label-input px-2 !top-0 !bg-base`,
          }}
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>
      <Button
        color="green"
        size="full"
        height="26px"
        className="!py-5 gap-3 !text-[#232323] mt-[100px] !rounded-xl"
        endContent={<MdKeyboardArrowLeft size={18} />}
      >
        ورود به حساب کاربری
      </Button>
    </form>
  );
};

export default RegisterForm;
