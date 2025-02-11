"use client";
import { Button, Input, Textarea } from "@heroui/react";
import { useFormik } from "formik";

interface IProp {
  variant: string;
}

export default function Form({ variant }: IProp) {
  const formVariant: boolean = variant === "contactUs";

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
      className={` flex flex-wrap justify-between   z-50 ${
        formVariant
          ? "w-full gap-y-[22px] gap-x-2"
          : "w-[618px] xl:mt-[66px] mt-6 gap-y-[42px] gap-x-6"
      }  `}
    >
      <Input
        className={` max-md:w-full font-Peyda-400 !text-xl ${
          formVariant ? "w-[47%]" : "w-[297px]"
        } `}
        label="نام و نام خانوادگی :"
        labelPlacement="outside"
        placeholder="وارد کنید ...."
        variant="bordered"
        classNames={{
          label: `label-input ${
            formVariant ? "!bg-black !text-gray" : "!bg-green !text-black"
          }`,
          input: "input",
          inputWrapper: `inputWrapper-input ${
            formVariant ? "!text-gray !h-12" : "!text-black  h-[59px]"
          } `,
        }}
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <Input
        className={` max-md:w-full font-Peyda-400 !text-xl ${
          formVariant ? "w-[47%]" : "w-[297px]"
        }`}
        label="شماره یا ایمیل :"
        labelPlacement="outside"
        placeholder="وارد کنید ...."
        variant="bordered"
        classNames={{
          label: `label-input ${
            formVariant ? "!bg-black !text-gray" : "!bg-green !text-black"
          }`,
          input: "input",
          inputWrapper: `inputWrapper-input ${
            formVariant ? "!text-gray !h-12" : "!text-black  h-[59px]"
          } `,
        }}
        id="phoneOrEmail"
        name="phoneOrEmail"
        value={formik.values.phoneOrEmail}
        onChange={formik.handleChange}
      />
      <Textarea
        className="w-full font-Peyda-400 !text-xl md:-mt-6"
        label="پیام شما :"
        labelPlacement="outside"
        placeholder="..."
        variant="bordered"
        classNames={{
          base: "h-[156px]",
          label: `label-input w-fit !top-[16px] ${
            formVariant ? "!bg-black !text-gray" : "!bg-green !text-black"
          }`,
          input: "input",
          inputWrapper: `inputWrapper-input py-[22px] px-6 ${
            formVariant ? "!text-gray" : "!text-black"
          } `,
        }}
        id="describe"
        name="describe"
        value={formik.values.describe}
        onChange={formik.handleChange}
      />
      <Button
        type="submit"
        className={`w-full ${formVariant ? "!bg-green text-black" : ""} `}
      >
        {formVariant ? "ارسال درخواست" : "ارسال پیام"}
      </Button>
    </form>
  );
}
