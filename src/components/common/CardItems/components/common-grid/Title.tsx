import React, { FC } from "react";

interface TitleProps {
  title: string;
  describe?: string;
  discount?: number;
}

const Title: FC<TitleProps> = ({ title, describe, discount }) => {
  return (
    <div
      className={`font-Peyda-500 flex flex-row-reverse items-center gap-1 ${
        discount && "justify-between w-full"
      }`}
    >
      <h1 className="text-xl text-white">{title}</h1>
      {describe && (
        <span className="text-[#444444] text-sm">( {describe} )</span>
      )}
      {discount && (
        <span className="w-[54px] h-8 font-Peyda-Numeric text-white bg-red rounded-xl flex items-center justify-center">
          %{discount}
        </span>
      )}
    </div>
  );
};

export default Title;
