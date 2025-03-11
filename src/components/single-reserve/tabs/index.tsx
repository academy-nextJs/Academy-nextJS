"use client";
import CommentWrapper from "@/components/common/Comment";
import HouseFacilities from "@/components/common/HouseFacilities";
import CustomTabs from "@/components/common/Tabs";
import TabTitle from "@/components/common/Tabs/TabTitle";
import { TabSectionProps } from "@/components/common/Tabs/types";
import { CommentIcon, DocumentIcon, FacilitiesIcon } from "@/core/icon/icons";
import { Tab } from "@heroui/react";
import { FC } from "react";
import About from "./About";

const TabSection: FC<Omit<TabSectionProps, "location">> = ({
  categories,
  house_id,
}) => {
  return (
    <div className="w-[999px] flex flex-wrap gap-y-8 h-fit">
      <CustomTabs>
        <Tab
          key="HouseAbout"
          title={
            <TabTitle
              title="درباره ملک"
              icon={<DocumentIcon className="fill-inherit" />}
            />
          }
          className="font-Peyda-500 flex flex-wrap gap-y-3 text-white"
        >
          <About />
        </Tab>
        <Tab
          key="HouseFacilities"
          title={
            <TabTitle
              title="امکانات اقامتگاه"
              icon={<FacilitiesIcon className="fill-inherit" />}
            />
          }
          className="flex flex-wrap gap-x-[17px] gap-y-8"
        >
          {categories?.map((item) => (
            <HouseFacilities key={item.id} K="سن بنا" V={item.name} />
          ))}
        </Tab>
        <Tab
          key="HouseComment"
          title={
            <TabTitle
              title="نظرات کاربران"
              icon={<CommentIcon className="fill-inherit" />}
            />
          }
        >
          <CommentWrapper house_id={house_id} width="999px" height="620px" />
        </Tab>
      </CustomTabs>
    </div>
  );
};

export default TabSection;
