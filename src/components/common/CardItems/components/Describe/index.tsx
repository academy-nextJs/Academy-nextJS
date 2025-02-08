import { FC } from "react";
import TPipe from "./TPipe";
import { DescribeProps } from "./types";
import TComma from "./TComma";

const Describe: FC<Partial<DescribeProps>> = (props) => {
  return (
    <div className="w-full flex flex-row-reverse gap-x-3 text-[#AAAAAA]">
      {props.type == "comma" ? <TComma {...props} /> : <TPipe {...props} />}
    </div>
  );
};

export default Describe;
