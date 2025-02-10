import FileContainer from "@/components/common/FileContainer";
import { FC, ReactNode } from "react";

interface CardProps {
  className: string;
  height?: number;
  width?: number;
  color: string;
  children: ReactNode;
  innerWrapper?: string;
}

const Card: FC<CardProps> = ({
  className,
  height,
  width,
  children,
  color,
  innerWrapper,
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
        base: `!h-fit px-4 ${className}`,
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
          base: `!w-full !h-fit top-[-17px] left-[50%] translate-x-[-50%] px-4 py-7 ${innerWrapper}`,
        }}
      >
        {children}
      </FileContainer>
    </FileContainer>
  );
};

export default Card;
