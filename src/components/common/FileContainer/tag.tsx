import { cn } from "@heroui/theme";
import { CSSProperties, FC } from "react";
import { ShapeProps } from "./types";

const Tag: FC<
  Pick<
    ShapeProps,
    "classNames" | "labelWidth" | "tagHeight" | "labelHeight" | "tag"
  >
> = ({ classNames, labelHeight, labelWidth, tag, tagHeight }) => {
  const TagStyle: CSSProperties = {
    width: `calc(95% - ${labelWidth})`,
    height: `${tagHeight ? tagHeight : labelHeight}`,
    top: `-${tagHeight ? tagHeight : labelHeight}`,
    pointerEvents: "none",
  };

  return (
    <div
      className={cn(
        "absolute !left-0 h-fit flex justify-start items-start",
        classNames?.wrapperTag
      )}
      style={TagStyle}
    >
      {tag}
    </div>
  );
};

export default Tag;
