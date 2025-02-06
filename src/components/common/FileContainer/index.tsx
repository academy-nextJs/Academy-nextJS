"use client";
import { FC, ReactNode, useRef } from "react";

enum RADIUS_SIZE {
  "sm" = "14px",
  "md" = "24px",
  "lg" = "40px",
}

interface ClassNames {
  base: string;
  label: string;
  labelHeight: string;
  tag: string;
}

interface FileContainerProps {
  radius: "sm" | "md" | "lg";
  classNames?: Partial<ClassNames>;
  background: string;
  children: ReactNode;
  tag?: ReactNode;
  label?: ReactNode;
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
      className={`w-[306px] h-[203px] relative
        mt-10 ${classNames?.base}`}
      style={{
        borderRadius: RADIUS_SIZE?.[radius],
        borderTopRightRadius: "0",
        backgroundColor: background,
      }}
    >
      <div
        ref={labelRef}
        className={`w-[140px] absolute z-10 right-0
          ${classNames?.label}`}
        style={{
          borderTopRightRadius: RADIUS_SIZE?.[radius],
          borderTopLeftRadius: RADIUS_SIZE?.[radius],
          backgroundColor: background,
          height: classNames?.labelHeight,
          top: `-${classNames?.labelHeight} `,
        }}
      >
        {label}
        <div
          className={`w-5 h-5 rounded-br-full absolute bottom-0
            -left-5`}
          style={{ boxShadow: `6px 6px  ${background}` }}
        ></div>
      </div>
      <div
        className={`w-[calc(100%-${
          labelRef.current?.clientWidth.toString() + "px"
        })]
          absolute -top-10 left-0 ${classNames?.tag} h-10`}
      >
        {tag}
      </div>
      {children}
    </div>
  );
};

export default FileContainer;
