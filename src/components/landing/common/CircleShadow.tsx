import { FC } from "react";

interface CircleShadowProps {
  color: string;
  className: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
  opacity: string;
}

// Create all types optionally without color
type CircleShadowRequiredProps = Required<Pick<CircleShadowProps, "color">> &
  Partial<Omit<CircleShadowProps, "color">>;

const CircleShadow: FC<CircleShadowRequiredProps> = ({
  color,
  className,
  top,
  left,
  right,
  bottom,
  opacity,
}) => {
  return (
    <div
      className={`absolute w-[218px] h-[218px] blur-[128px] z-0 ${className}`}
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        backgroundColor: color,
        opacity: opacity,
      }}
    ></div>
  );
};

export default CircleShadow;
