import { FC, ReactNode } from "react";

interface PanelChipProps {
  icon?: ReactNode;
  text: string;
  className?: string;
}

const PanelChip: FC<PanelChipProps> = ({ icon, text, className }) => {
  return (
    <div
      className={`absolute bg-[#565656] ${className}`}
    >
      {icon}
      <span className="text-white font-Peyda-600">{text}</span>
    </div>
  );
};

export default PanelChip;
