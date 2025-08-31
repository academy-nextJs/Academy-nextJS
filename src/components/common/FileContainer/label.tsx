import { CSSProperties, FC } from "react";
import { RadiusSize, ShapeProps } from "./types";
import { Hollow } from "./hollows";
import { cn } from "@heroui/theme";

const Label: FC<
  Omit<ShapeProps, "children" | "width" | "height" | "tag" | "tagHeight">
> = ({
  background,
  radius,
  size,
  classNames,
  labelHeight,
  labelWidth,
  label,
}) => {
  const labelContainerStyle: CSSProperties = {
    borderTopRightRadius: RadiusSize?.[radius],
    borderTopLeftRadius: size == "lg" ? "30%" : RadiusSize?.[radius],
    backgroundColor: background,
    height: labelHeight,
    width: labelWidth,
    top: `-${labelHeight}`,
  };

  return (
    <div
      className={cn("absolute z-30 !right-0", classNames?.wrapperLabel)}
      style={labelContainerStyle}
    >
      <div className={cn("relative z-40 w-full p-4", classNames?.innerLabel)}>
        {label}
      </div>
      <Hollow
        size={size}
        background={background}
        classNames={classNames}
        labelHeight={labelHeight}
        radius={radius}
      />
    </div>
  );
};

export default Label;
