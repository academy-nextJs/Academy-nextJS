import { TitleIcon } from "@/core/icon/icons";
import React, { FC } from "react";

interface IProp {
  text: string;
  iconHeight?: string;
  colorIcon?: string;
  className?: string;
}

const TitleSection: FC<IProp> = ({
  text,
  colorIcon,
  iconHeight,
  className,
}) => {
  return (
    <div className={`flex gap-x-4 py-2 ${className}`}>
      <h5 className={`max-lg:w-full max-lg:text-center`}>{text}</h5>
      <TitleIcon fill={colorIcon} height={iconHeight} />
    </div>
  );
};

export default TitleSection;
