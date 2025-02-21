"use client";
import { Input } from "@heroui/react";
import { useFormik } from "formik";
import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import Button from "../common/Button/Button";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

const LoginForm = () => {
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
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
      <div className="flex gap-2 justify-between items-center">
        <Input
          className="max-md:w-full w-[47%]"
          type="email"
          label="ایمیل شما:"
          // labelPlacement="outside"
          placeholder="مثال : dakjsbd@email.com"
          variant="bordered"
          classNames={{
            label: `label-input px-2 !top-0 !bg-base`,
          }}
          id="Email"
          name="Email"
          value={formik.values.Email}
          onChange={formik.handleChange}
        />
        <Input
          className="max-md:w-full  w-[47%]"
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
          id="Password"
          name="Password"
          value={formik.values.Password}
          onChange={formik.handleChange}
        />
      </div>
      {/* forget password button */}
      <Link
        href={"forget-password"}
        className="flex gap-3 items-center hover:opacity-70 duration-250 float-left mt-6"
      >
        <p>رمز عبور خود را فراموش کردم</p>
        <MdArrowBack />
      </Link>
      <Button
        color="green"
        size="full"
        height="26px"
        className="!py-5 gap-3 !text-[#232323] mt-12 !rounded-xl"
        endContent={<MdKeyboardArrowLeft size={18} />}
      >
        ورود به حساب کاربری
      </Button>
    </form>
  );
};

export default LoginForm;
