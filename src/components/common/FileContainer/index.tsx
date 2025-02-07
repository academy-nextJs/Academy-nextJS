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
  labelWidth: string;
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
  const tagRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`w-[306px] h-[203px] relative ${classNames?.base}`}
      style={{
        borderRadius: RADIUS_SIZE?.[radius],
        borderTopRightRadius: "0px",
        backgroundColor: background,
        marginTop: classNames?.labelHeight,
      }}
    >
      <div
        ref={labelRef}
        className={`w-[140px] absolute z-10 right-0`}
        style={{
          borderTopRightRadius: RADIUS_SIZE?.[radius],
          borderTopLeftRadius: "100%",
          backgroundColor: background,
          height: classNames?.labelHeight,
          width: classNames?.labelWidth,
          top: `-${classNames?.labelHeight} `,
        }}
      >
        <div className={`relative z-40 w-full p-4 ${classNames?.label}`}>{label}</div>
        <div
          className="skew-x-[-45deg] absolute -left-6 bottom-0"
          style={{
            backgroundColor: background,
            height: classNames?.labelHeight,
            width: `calc(${classNames?.labelWidth} - 10%)`,
            borderTopLeftRadius: RADIUS_SIZE?.[radius],
          }}
        >
          <div
            className={`w-5 h-5 rounded-br-full z-10 absolute bottom-0
            left-[-19px]`}
            style={{ boxShadow: `4px 6px ${background}` }}
          ></div>
        </div>
      </div>
      <div
        ref={tagRef}
        className={`w-[calc(100%-${
          labelRef.current?.clientWidth.toString() + "px"
        })]
          absolute left-0 ${classNames?.tag} h-fit`}
        style={{
          width: `calc(95% - ${classNames?.labelWidth})`,
          top: `-${tagRef.current?.offsetHeight.toString()}px`,
        }}
      >
        {tag}
      </div>
      {children}
    </div>
  );
};

export default FileContainer;
