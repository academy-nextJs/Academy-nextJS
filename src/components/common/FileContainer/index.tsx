"use client";
import { FC } from "react";
import { RadiusSize, ShapeProps } from "./types";
import Label from "./label";
import Tag from "./tag";
import { cn } from "../../../utils/cn";

const FileContainer: FC<ShapeProps> = ({
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
  return (
    <div
      className={cn("h-fit relative z-30", classNames?.base)}
      style={{
        width: width,
        height: height,
        borderTopLeftRadius: RadiusSize?.[radius],
        borderTopRightRadius: "0px",
        borderBottomLeftRadius: RadiusSize?.[radius],
        borderBottomRightRadius: RadiusSize?.[radius],
        backgroundColor: background,
        marginTop: labelHeight,
      }}
    >
      <Label
        background={background}
        radius={radius}
        size={size}
        classNames={classNames}
        label={label}
        labelHeight={labelHeight}
        labelWidth={labelWidth}
      />
      <Tag
        classNames={classNames}
        labelHeight={labelHeight}
        labelWidth={labelWidth}
        tagHeight={tagHeight}
        tag={tag}
      />
      {children}
    </div>
  );
};

export default FileContainer;
