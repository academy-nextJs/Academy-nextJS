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
    <div className={`flex gap-x-4 py-2 sm:px-10 w-fit max-lg:mx-auto ${className}`}>
      <h5>{text}</h5>
      <TitleIcon fill={colorIcon} height={iconHeight} />
    </div>
  );
};

export default TitleSection;
