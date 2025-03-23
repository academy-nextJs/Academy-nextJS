"use client";
import { Input } from "@heroui/react";
import { useFormik } from "formik";
import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import Button from "../common/Button/Button";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import { useLoginUser } from "@/utils/service/api/post/LoginUser";
import { loginValidations } from "@/core/validations/Auth.Validations";

const LoginForm = () => {
  const { mutate } = useLoginUser();
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidations,
    onSubmit: (value) => {
      // console.log(value);
      mutate(value);
    },
  });
  // visible password
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form onSubmit={formik.handleSubmit} >
      <div className="flex max-sm:flex-col gap-y-8 gap-2 justify-between items-center">
        <div className="flex flex-col max-md:w-full sm:w-[47%] relative">
          <Input
            type="email"
            label="ایمیل شما:"
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
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red block absolute right-0 -bottom-7">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="max-md:w-full  sm:w-[47%] relative">
          <Input
            label="کلمه عبور:"
            placeholder="کلمه عبور را وارد کنید"
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <PiEyeLight size={27} />
                ) : (
                  <PiEyeSlash size={27} />
                )}
              </button>
            }
            classNames={{
              label: `label-input px-2 !top-0 !bg-base`,
            }}
            type={isVisible ? "text" : "password"}
            variant="bordered"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red block absolute right-0 -bottom-7">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
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
