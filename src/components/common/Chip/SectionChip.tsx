import { TriangleIcon } from "@/core/icon/icons";
import { FC, ReactNode } from "react";

interface ChipProps {
  children: Readonly<ReactNode>;
  side: "Two-way" | "One-way";
  className?: string;
}

const Chip: FC<ChipProps> = ({ children, side, className }) => {
  return (
    <div className={`flex gap-x-4 ${className}`}>
      {side == "Two-way" && (
        <TriangleIcon
          width={48}
          height={16}
          fill="#8CFF45"
          className="rotate-180"
        />
      )}
      <h6 className="text-green">{children}</h6>
      <TriangleIcon width={48} height={16} fill="#8CFF45" />
    </div>
  );
};

export default Chip;
