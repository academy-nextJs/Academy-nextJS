import { BathroomIcon, BedIcon, CarIcon, YardIcon } from "@/core/icon/icons";
import { FC } from "react";
import { DescribeProps, InformationType } from "./types";

const TPipe: FC<Partial<DescribeProps>> = (props) => {
  const info: InformationType[] = [
    { name: "خوابه", value: props.room, icon: BedIcon },
    { name: "پارکینگ", value: props.garage, icon: CarIcon },
    { name: "حمام", value: props.bathroom, icon: BathroomIcon },
  ];

  return (
    <ul dir="rtl" className="font-Peyda-400 flex max-w-[316px] text-[13px]">
      {info.map((item, index) => (
        <li
          key={index}
          className="px-2 first:pr-0 h-4 flex items-center gap-x-2 border-[#AAAAAA] border-l-2"
        >
          {item.icon && <item.icon width={16} height={16} />}
          <div>
            <span className="font-Peyda-Numeric">{item.value}</span>
            <span>{item.name}</span>
          </div>
        </li>
      ))}
      {props.yard && (
        <li className="px-2 h-4 flex items-center gap-x-2">
          <YardIcon width={16} height={16} />
          <span>حیاط</span>
        </li>
      )}
    </ul>
  );
};

export default TPipe;
