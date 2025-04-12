"use client";
import { HouseReserveListType } from "@/core/constants/house-reserve/types";
import React, { ReactNode, useState } from "react";
import HouseReserveListItem from "../common/HouseReserveListItem";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/common/MapComponent"), { ssr: false });



interface Props {
  Houses: HouseReserveListType[];
}

const ListOfHousesSection = ({ Houses }: Props) => {
  const [selectedItem, setSelectedItem] =
    useState<HouseReserveListType | undefined>(undefined);
  return (
    <div className=" p-6 h-[75vw] min-h-[50rem] rounded-[2.5rem] bg-gray flex gap-8 flex-nowrap">
      <div className="w-[calc(57%_-_16px)] h-full  relative overflow-y-auto *:border-b-4 *:border-b-[#3B3B3B]">
        {Houses?.map((house) => {
          return <HouseReserveListItem key={house.id} data={house} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />;
        })}
        <div className="sticky -bottom-px left-0 right-0 h-1/4 bg-gradient-to-t from-[#30303000]/100 to-[#30303000]/0 z-50 !border-b-0"></div>
      </div>
      <div className="w-[calc(43%_-_16px)] h-full bg-[#262626] rounded-[2.5rem] text-center overflow-hidden">
        <MapComponent data={selectedItem?.location} />
      </div>
    </div>
  );
};

export default ListOfHousesSection;
