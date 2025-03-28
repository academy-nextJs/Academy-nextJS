import { FC, ReactNode } from "react";

interface CustomInputsProps {
  children: ReactNode;
  tag: string;
  className?: string;
}

const CustomInputs: FC<CustomInputsProps> = ({ children, tag, className }) => {
  return (
    <div
      className={`w-full h-[53px] relative border-2 
        border-[#AAAAAA] rounded-2xl pt-3 px-4 ${className}`}
    >
      <div className="absolute -top-3 bg-gray px-2 text-[#AAAAAA] font-Peyda-500">
        {tag} :
      </div>
      {children}
    </div>
  );
};

export default CustomInputs;
