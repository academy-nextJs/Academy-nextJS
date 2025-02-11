import { FC, ReactNode } from "react";

interface HolderProps {
  height?: string;
  className?: string;
  children: ReactNode;
  background: string;
}

const Holder: FC<HolderProps> = ({
  height,
  className,
  children,
  background,
}) => {
  return (
    <div
      className={`w-full overflow-hidden relative rounded-b-[64px] shadow-[0px_12px_32px_rgba(0, 0, 0, 0.06)] ${className}`}
      style={{ height: height, backgroundColor: background }}
    >
      {children}
    </div>
  );
};

export default Holder;
