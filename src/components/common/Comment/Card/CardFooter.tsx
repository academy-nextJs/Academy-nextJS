import { DateIcon } from "@/core/icon/icons";
import { FC } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { CommentCardFooterProps } from "../types";

const CardFooter: FC<CommentCardFooterProps> = ({
  name,
  date,
  holderStyles,
  view,
}) => {
  return (
    <div
      className={`w-full flex gap-x-4 h-20 rounded-3xl bg-[#444444] p-3 ${holderStyles}`}
    >
      <div className="min-w-14 w-14 h-14 rounded-2xl bg-[#D9D9D9]"></div>
      <div className="w-full flex flex-col justify-between">
        <h1 className="w-full font-Peyda-400 max-sm:text-sm">{name}</h1>
        <div className="text-[#AAAAAA] flex justify-between items-end font-Peyda-Numeric">
          <div className="flex gap-x-2">
            <DateIcon width={16} height={16} />
            <span>{date}</span>
          </div>
          {view == "writeonly" && (
            <button className="text-white text-sm h-9 flex items-center font-Peyda-500 pr-4 pl-1.5 border-2 border-white rounded-xl">
              ثبت پاسخ
              <RiArrowDropLeftLine size={25} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
