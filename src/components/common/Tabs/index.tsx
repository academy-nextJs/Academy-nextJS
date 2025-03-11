import { Tabs, TabsProps } from "@heroui/react";
import { FC, ReactNode } from "react";

interface CustomTabsProps {
  children: ReactNode;
}

const CustomTabs: FC<CustomTabsProps & TabsProps> = (props) => {
  return (
    <Tabs
      aria-label="Options"
      color="danger"
      classNames={{
        base: "w-full font-Peyda-500 text-gray rounded-2xl",
        cursor: "bg-[#8CFF45] shadow-[0px_8px_10px_rgba(140,255,69,0.16)]",
        tabContent:
          "fill-[#AAAAAA] group-data-[selected=true]:fill-[#363636] group-data-[selected=true]:text-[#363636]",
        tabList: "!w-full !max-w-none",
        tab: "w-fit",
        panel: "!w-full"
      }}
      {...props}
    >
      {props.children}
    </Tabs>
  );
};

export default CustomTabs;
