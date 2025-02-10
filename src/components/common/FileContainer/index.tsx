"use client";
import { FC, ReactNode, useRef } from "react";

enum RADIUS_SIZE {
  "sm" = "14px",
  "md" = "24px",
  "lg" = "40px",
}

interface ClassNames {
  base: string;
  innerLabel: string;
  wrapperLabel: string;
  wrapperTag: string;
  coverHollow: string;
}

interface FileContainerProps {
  children: ReactNode;
  background: string;
  radius: "sm" | "md" | "lg";
  size: "lg" | "md";
  width?: string;
  height?: string;
  label?: ReactNode;
  tag?: ReactNode;
  labelWidth?: string;
  labelHeight?: string;
  tagHeight?: string;
  classNames?: Partial<ClassNames>;
}

const FileContainer: FC<FileContainerProps> = ({
  children,
  background,
  radius,
  size,
  width,
  height,
  label,
  tag,
  labelWidth,
  labelHeight,
  tagHeight,
  classNames,
}) => {
  const labelRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  // Hollows
  const HollowSizeMD = () => {
    return (
      <div
        style={{
          boxShadow: `4px 6px`,
          color: `${background}`,
          pointerEvents: "none",
        }}
        className={`w-5 h-5 rounded-br-full z-10 absolute bottom-0
            left-[-19px] ${classNames?.coverHollow}`}
      ></div>
    );
  };
  const HollowSizeLG = () => {
    return (
      <div
        className="skew-x-[-45deg] absolute -left-6 bottom-0"
        style={{
          backgroundColor: background,
          height: labelHeight,
          width: `80%`,
          borderTopLeftRadius: RADIUS_SIZE?.[radius],
        }}
      >
        <div
          className={`w-5 h-5 rounded-br-full z-10 absolute bottom-0
            left-[-19px] ${classNames?.coverHollow}`}
          style={{ boxShadow: `4px 6px ${background}` }}
        ></div>
      </div>
    );
  };

  return (
    <div
      className={`h-fit relative z-30 ${classNames?.base}`}
      style={{
        width: width,
        height: height,
        borderRadius: RADIUS_SIZE?.[radius],
        borderTopRightRadius: "0px",
        backgroundColor: background,
        marginTop: labelHeight,
      }}
    >
      <div
        ref={labelRef}
        className={`absolute z-30 !right-0 ${classNames?.wrapperLabel}`}
        style={{
          borderTopRightRadius: RADIUS_SIZE?.[radius],
          borderTopLeftRadius: size == "lg" ? "30%" : RADIUS_SIZE?.[radius],
          backgroundColor: background,
          height: labelHeight,
          width: labelWidth,
          top: `-${labelHeight}`,
        }}
      >
        <div className={`relative z-40 w-full p-4 ${classNames?.innerLabel}`}>
          {label}
        </div>
        {size == "lg" ? <HollowSizeLG /> : <HollowSizeMD />}
      </div>
      <div
        ref={tagRef}
        className={`absolute !left-0 h-fit flex justify-end items-start ${classNames?.wrapperTag}`}
        style={{
          width: `calc(95% - ${labelWidth})`,
          height: `${tagHeight ? tagHeight : labelHeight}`,
          top: `-${tagHeight ? tagHeight : labelHeight}`,
          pointerEvents: "none",
        }}
      >
        {tag}
      </div>
      {children}
    </div>
  );
};

export default FileContainer;
