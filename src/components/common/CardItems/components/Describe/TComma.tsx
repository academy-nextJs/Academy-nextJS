import { FC, Fragment } from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { DescribeProps } from "./types";

const TComma: FC<Partial<DescribeProps>> = (props) => {
  return (
    <Fragment>
      <MdOutlineMapsHomeWork size={18} />
      <ul dir="rtl" className="font-Peyda-500">
        <span className="font-Peyda-Numeric">{props.room}</span> خوابه ،{" "}
        <span className="font-Peyda-Numeric">{props.bathroom}</span> حمامه ،
        ظرفیت <span className="font-Peyda-Numeric">{props.capacity}</span> نفر
      </ul>
    </Fragment>
  );
};

export default TComma;
