import { FC } from "react";
import { AuthTab } from "@/core/constants/Auth";
import CustomTab from "../login/Tab";

interface IProps {
  title: string;
  titleBold: string;
  desc: string;
}

const AuthContainer: FC<IProps> = ({ title, titleBold, desc }) => {
  return (
    <div className="lg:flex gap-3 justify-between items-center mb-60">
      {/* title page */}
      <div className="flex flex-col gap-6 w-2/5 text-white max-lg:text-center">
        <h1 className="text-4xl max-sm:text-center">
          {title}
          <span className="font-Peyda-600 ">{titleBold}</span>
        </h1>
        <p>{desc}</p>
        <CustomTab buttonArray={AuthTab} />
      </div>
    </div>
  );
};

export default AuthContainer;
