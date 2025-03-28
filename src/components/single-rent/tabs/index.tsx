"use client";
import HouseFacilities from "@/components/common/HouseFacilities";
import CustomTabs from "@/components/common/Tabs";
import TabTitle from "@/components/common/Tabs/TabTitle";
import {
  CommentIcon,
  Document2Icon,
  DocumentIcon,
  LocationIcon,
} from "@/core/icon/icons";
import { CategoriesType, LocationsType } from "@/core/models/house.models";
import { Tab } from "@heroui/react";
import { FC } from "react";
import CommentSection from "./CommentSection";
import HouseAbout from "./HouseAbout";
import LocationSection from "./LocationSection";

export interface TabSectionProps {
  location: LocationsType;
  categories: CategoriesType[];
  house_id: string;
}

const TabSection: FC<TabSectionProps> = ({ location, categories, house_id }) => {
  return (
    <div className="w-full flex flex-wrap gap-y-8 h-fit mt-[69px]">
      <CustomTabs>
        <Tab
          key="HouseAbout"
          title={
            <TabTitle
              title="توضیحات ملک"
              icon={<DocumentIcon className="fill-inherit max-sm:hidden" />}
            />
          }
          className="font-Peyda-500 flex flex-wrap gap-y-3 text-white"
        >
          <HouseAbout />
        </Tab>
        <Tab
          key="HouseFacilities"
          title={
            <TabTitle
              title="امکانات ملک"
              icon={<Document2Icon className="fill-inherit max-sm:hidden" />}
            />
          }
          className="font-Peyda-500 flex flex-wrap gap-5 text-white"
        >
          {categories?.map((item) => (
            <HouseFacilities key={item.id} K="سن بنا" V={item.name} />
          ))}
        </Tab>
        <Tab
          key="HouseLocation"
          title={
            <TabTitle
              title="موقعیت ملک"
              icon={<LocationIcon className="fill-inherit max-sm:hidden" />}
            />
          }
          className="flex max-lg:flex-wrap gap-5 text-white max-lg:h-fit text-[#AAAAAA] font-Peyda-400"
        >
          <LocationSection location={location} />
        </Tab>
        <Tab
          key="HouseComments"
          title={
            <TabTitle
              title="نظرات کاربران"
              icon={<CommentIcon className="fill-inherit max-sm:hidden" />}
            />
          }
          className="font-Peyda-500 flex flex-wrap gap-y-3 text-white"
        >
          <CommentSection house_id={house_id} />
        </Tab>
      </CustomTabs>
    </div>
  );
};

export default TabSection;
