import { FaCarSide } from "react-icons/fa6";
import { MdOutlineBathroom, MdOutlineYard } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import { FC } from "react";
import { DescribeProps, InformationType } from "./types";

const TPipe: FC<Partial<DescribeProps>> = (props) => {
  const info: InformationType[] = [
    { name: "خوابه", value: props.room, icon: RiHotelBedLine },
    { name: "پارکینگ", value: props.garage, icon: FaCarSide },
    { name: "حمام", value: props.bathroom, icon: MdOutlineBathroom },
  ];

  return (
    <ul dir="rtl" className="font-Peyda-400 flex max-w-[316px] text-[13px]">
      {info.map((item, index) => (
        <li
          key={index}
          className="px-2 first:pr-0 h-4 flex items-center gap-x-2 border-[#AAAAAA] border-l-2"
        >
          {item.icon && <item.icon size={18} />}
          <div>
            <span className="font-Peyda-Numeric">{item.value}</span>
            <span>{item.name}</span>
          </div>
        </li>
      ))}
      {props.yard && (
        <li className="px-2 h-4 flex items-center gap-x-2">
          <MdOutlineYard size={18} />
          <span>حیاط</span>
        </li>
      )}
    </ul>
  );
};

export default TPipe;
