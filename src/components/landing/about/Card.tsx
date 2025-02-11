import FileContainer from "@/components/common/FileContainer";
import Image from "next/image";
import { FC } from "react";

interface CardProps {
  classNames: Partial<ClassNames>;
  height?: number;
  width?: number;
  color: string;
  icon?: string;
  title?: string;
  statistics?: string;
  describe: string;
}

interface ClassNames {
  base: string;
  icon: string;
  innerWrapper: string;
}

const Card: FC<CardProps> = ({
  classNames,
  height,
  width,
  color,
  icon,
  title,
  statistics,
  describe,
}) => {
  return (
    <FileContainer
      background="#393939"
      radius="md"
      size="lg"
      labelHeight="30px"
      labelWidth="124px"
      tagHeight="30px"
      width={width + "px"}
      height={height + "px"}
      classNames={{
        base: `!h-fit px-4 ${classNames.base}`,
      }}
    >
      <FileContainer
        background={color}
        radius="md"
        size="lg"
        labelHeight="30px"
        labelWidth="100px"
        tagHeight="30px"
        width={width ? width - 24 + "px" : "auto"}
        height={height ? height - 24 + "px" : "auto"}
        classNames={{
          base: `!w-full !h-fit top-[-17px] left-[50%] translate-x-[-50%] px-4 py-7 ${classNames.innerWrapper}`,
        }}
      >
        {icon && (
          <div className="absolute top-0 left-0 overflow-hidden rounded-3xl">
            <Image
              alt=""
              src={icon}
              width={115}
              height={155}
              className={`relative -top-5 left-0 ${classNames.icon}`}
            />
          </div>
        )}
        {title && statistics && (
          <>
            <div className="w-14 h-14 rounded-2xl bg-white"></div>
            <h1 className="text-2xl mt-3">
              <span className="font-Peyda-Numeric">{statistics}</span>
              <span>{title}</span>
            </h1>
          </>
        )}
        <p className="font-Peyda-400 mt-3 max-lg:h-12">{describe}</p>
      </FileContainer>
    </FileContainer>
  );
};

export default Card;
