import { cn } from "@heroui/theme";
import { CSSProperties, FC } from "react";
import { HollowType, RadiusSize } from "./types";

export const HollowSizeMD: FC<
  Pick<HollowType, "background" | "classNames">
> = ({ classNames, background }) => {
  return (
    <div
      className={cn(
        "w-5 h-5 rounded-br-full z-10 absolute bottom-0 left-[-19px]",
        classNames?.coverHollow
      )}
      style={{ boxShadow: `4px 6px ${background}` }}
    ></div>
  );
};

export const HollowSizeLG: FC<Omit<HollowType, "size">> = ({
  background,
  classNames,
  labelHeight,
  radius,
}) => {
  const HollowStyle: CSSProperties = {
    backgroundColor: background,
    height: labelHeight,
    width: `80%`,
    borderTopLeftRadius: radius && RadiusSize[radius],
  };

  return (
    <div
      className="skew-x-[-45deg] absolute -left-6 bottom-0"
      style={HollowStyle}
    >
      <HollowSizeMD background={background} classNames={classNames} />
    </div>
  );
};

export const Hollow: FC<HollowType> = (props) => {
  return props.size == "md" ? (
    <HollowSizeMD background={props.background} classNames={props.classNames} />
  ) : (
    <HollowSizeLG
      background={props.background}
      classNames={props.classNames}
      labelHeight={props.labelHeight}
      radius={props.radius}
    />
  );
};
