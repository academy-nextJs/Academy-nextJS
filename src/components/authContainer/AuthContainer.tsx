import { FC } from "react";
import { AuthTab } from "@/core/constants/Auth";
import CustomTab from "../login/Tab";
import Button from "../common/Button/Button";
import { FcGoogle } from "react-icons/fc";
import WinnerBox from "./WinnerBox";

interface IProps {
  title: string;
  titleBold: string;
  desc: string;
  children: React.ReactNode;
}

const AuthContainer: FC<IProps> = ({ title, titleBold, desc, children }) => {
  return (
    <div className="lg:flex gap-3 justify-between items-center sm:px-10 px-4 font-Peyda-400 lg:mb-60 mb-20">
      {/* title page */}
      <div className="flex flex-col gap-6 lg:w-2/5 text-white max-lg:text-center">
        <h1 className="text-4xl max-sm:text-center ">
          {title}
          <span className="font-Peyda-700 ">{titleBold}</span>
        </h1>
        <p className="mb-2">{desc}</p>
        <CustomTab buttonArray={AuthTab} color="success" />
        <Button
          color="green"
          size="full"
          height="26px"
          className="!py-5 gap-3 mt-2 !text-black !rounded-xl"
          startContent={<FcGoogle size={25} />}
        >
          ورود با حساب گوگل
        </Button>
        <div className="bgGradient_title w-full h-[2px] my-4">
          <p className=" w-fit px-3 bg-base -mt-3 mx-auto text-gray">
            یا میتوانید
          </p>
        </div>
        {/* form box */}
        <div>{children}</div>
      </div>
      <WinnerBox />
    </div>
  );
};

export default AuthContainer;
