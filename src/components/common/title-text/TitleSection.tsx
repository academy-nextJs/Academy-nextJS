import { TitleIcon } from "@/core/icon/icons";
import React, { FC } from "react";

interface IProp {
  text: string;
  colorIcon?: string;
}

const TitleSection: FC<IProp> = ({ text, colorIcon }) => {
  return (
    <div className="flex gap-x-4">
      <h5 className="max-lg:w-full max-lg:text-center">{text}</h5>
      <TitleIcon fill={colorIcon} />
    </div>
  );
};

export default TitleSection;
