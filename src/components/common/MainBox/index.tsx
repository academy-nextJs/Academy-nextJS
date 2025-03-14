import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
  boxClassName?: string;
  mainClassName?: string;
  isTopSection?: boolean;
}

const MainBox: FC<IProps> = ({ children, boxClassName, isTopSection = true ,mainClassName}) => {
  return (
    <div className={`bg-graySecondary p-4 rounded-2xl w-full ${boxClassName}`}>
      {/* Top Content */}
      {isTopSection && <div className="bg-gray  rounded-2xl"></div>}
      <div className={`w-full ${mainClassName}`}>{children}</div>
    </div>
  );
};

export default MainBox;
