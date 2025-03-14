import { ReactNode } from "react";

const TabTitle = ({ icon, title }: { icon: ReactNode; title: string }) => {
  return (
    <div className="flex gap-2">
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default TabTitle;
