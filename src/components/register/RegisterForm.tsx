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
            PhoneNumber: "",
            Email: "",
        },
        onSubmit: (value) => {
            console.log(value);
        },

    });
    console.log(formik.values);
    const [isRegisterWithNumber, setIsRegisterWithNumber] = useState<boolean>(true);
    console.log(isRegisterWithNumber);
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex gap-2 justify-between items-center">
                <Input
                    className="max-md:w-full w-[47%]"
                    label="شماره تماس:"
                    placeholder="مثال : 09116918744"
                    variant="bordered"
                    classNames={{
                        label: `label-input px-2 !top-0 !bg-base`,
                    }}
                    id="Email"
                    name="PhoneNumber"
                    value={formik.values.PhoneNumber}
                    onChange={formik.handleChange}
                    disabled={!isRegisterWithNumber}
                    endContent={
                        <>
                            <input className="hidden peer" id="isRegisterwithNumberRadio" type="radio" radioGroup="zz" onChange={() => setIsRegisterWithNumber(!isRegisterWithNumber)} checked={isRegisterWithNumber} />
                            <label className="cursor-pointer border border-gray size-5 rounded-[4px] peer-checked:bg-purple" htmlFor="isRegisterwithNumberRadio">{isRegisterWithNumber && <BiCheck />}</label>
                        </>
                    }
                />
                یا
                <Input
                    className="max-md:w-full w-[47%]"
                    type="email"
                    label="ایمیل شما:"
                    placeholder="مثال : dakjsbd@email.com"
                    variant="bordered"
                    classNames={{
                        label: `label-input px-2 !top-0 !bg-base`,
                    }}
                    id="Email"
                    name="Email"
                    value={formik.values.Email}
                    onChange={formik.handleChange}
                    disabled={isRegisterWithNumber}
                    endContent={
                        <>
                            <input className="hidden peer" id="isRegisterwithEmailRadio" type="radio" radioGroup="zz" onChange={() => setIsRegisterWithNumber(!isRegisterWithNumber)} checked={!isRegisterWithNumber} />
                            <label className=" cursor-pointer size-5 border border-gray rounded-[4px] peer-checked:bg-purple " htmlFor="isRegisterwithEmailRadio">{!isRegisterWithNumber && <BiCheck />}</label>
                        </>

                    }
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
