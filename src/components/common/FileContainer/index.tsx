"use client";
import { FC, ReactNode, useRef } from "react";

enum RADIUS_SIZE {
  "sm" = "[14px]",
  "md" = "3xl",
  "lg" = "[40px]",
}

interface ClassNames {
  base: string;
  label: string;
  cover: string;
  tag: string;
}

interface FileContainerProps {
  radius: "sm" | "md" | "lg";
  classNames?: Partial<ClassNames>;
  background: string;
  children: ReactNode;
  tag: ReactNode;
  label: ReactNode;
}

const FileContainer: FC<FileContainerProps> = ({
  radius,
  classNames,
  background,
  children,
  tag,
  label,
}) => {
  const labelRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`w-[306px] h-[203px] relative rounded-tr-none 
        mt-10 ${classNames?.base} rounded-${RADIUS_SIZE?.[radius]} bg-[${background}]`}
    >
      <div
        ref={labelRef}
        className={`w-[140px] h-10 absolute z-10 -top-10 right-0 
          ${classNames?.label} rounded-t-${RADIUS_SIZE?.[radius]} bg-[${background}]`}
      >
        {label}
        <div
          className={`w-5 h-5 rounded-br-full absolute bottom-0 
            -left-5 shadow-[6px_6px] ${classNames?.cover} shadow-[${background}]`}
        ></div>
      </div>
      <div
        className={`w-[calc(100%-${
          labelRef.current?.clientWidth.toString() + "px"
        })]
          absolute -top-10 left-0 ${classNames?.tag} h-10 bg-transparent`}
      >
        {tag}
      </div>
      {children}
    </div>
  );
};

export default FileContainer;
