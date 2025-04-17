"use client";
import { Button, Input, Textarea } from "@heroui/react";
import { useFormik } from "formik";

export default function Form() {
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneOrEmail: "",
      describe: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[618px] flex flex-wrap gap-x-6 gap-y-[42px] xl:mt-[66px] mt-6"
    >
      <Input
        className="w-[297px] max-md:w-full font-Peyda-400 !text-xl"
        label="نام و نام خانوادگی :"
        labelPlacement="outside"
        placeholder="وارد کنید ...."
        variant="bordered"
        classNames={{
          label: "label-input",
          input: "input",
          inputWrapper: "inputWrapper-input h-[59px]",
        }}
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <Input
        className="w-[297px] max-md:w-full font-Peyda-400 !text-xl"
        label="شماره یا ایمیل :"
        labelPlacement="outside"
        placeholder="وارد کنید ...."
        variant="bordered"
        classNames={{
          label: "label-input",
          input: "input",
          inputWrapper: "inputWrapper-input h-[59px]",
        }}
        id="phoneOrEmail"
        name="phoneOrEmail"
        value={formik.values.phoneOrEmail}
        onChange={formik.handleChange}
      />
      <Textarea
        className="w-full font-Peyda-400 !text-xl -mt-6"
        label="پیام شما :"
        labelPlacement="outside"
        placeholder="..."
        variant="bordered"
        classNames={{
          base: "h-[156px]",
          label: "label-input w-fit !top-[16px]",
          input: "input",
          inputWrapper: "inputWrapper-input py-[22px] px-6",
        }}
        id="describe"
        name="describe"
        value={formik.values.describe}
        onChange={formik.handleChange}
      />
      <Button type="submit" className="w-full">
        ارسال پیام
      </Button>
    </form>
  );
}
