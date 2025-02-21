"use client";
import { TAuthTab } from "@/core/constants/Auth/type";
import { Tab, Tabs } from "@heroui/react";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface IProps {
  buttonArray: TAuthTab[];
  color: "success" | "default" | "primary" | "secondary" | "warning" | "danger" | undefined
}

const CustomTab: FC<IProps> = ({ buttonArray, color }) => {
  const pathname = usePathname();
  return (
    <div>
      <Tabs
        selectedKey={color === "success" ? pathname : undefined}
        aria-label="Options"
        color={color}
        classNames={{ tabList: "p-1.5 w-full", tab: `px-2`, base: "w-full" }}
      >
        {buttonArray?.map((tab) => (
          <Tab
            key={tab.Key}
            href={tab.href && tab.href}
            title={
              <div className={`flex items-center gap-2`}>
                <tab.icon size={15} />
                <span>{tab.text}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default CustomTab;
