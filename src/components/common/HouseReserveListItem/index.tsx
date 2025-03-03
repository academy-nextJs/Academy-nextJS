"use client";
import React, { useState } from "react";
import { HouseReserveListType } from "@/core/constants/house-reserve/types";
import HouseReserveListItemMain from "./HouseReserveListItemMain";
import SelectedHouseReserveListItemMain from "./SelectedHouseReserveListItemMain";

interface Props{
  data: HouseReserveListType;
  selectedItem: HouseReserveListType | undefined;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<HouseReserveListType | undefined>
  >;
}
const HouseReserveListItem = ({
  data,
  selectedItem,
  setSelectedItem,
}:Props ) => {

  return (
    <div className="flex flex-nowrap justify-between py-6 cursor-pointer" onClick={(e) => {
      e.stopPropagation()
      setSelectedItem(data);

      }}>
      {
        selectedItem === data ? <SelectedHouseReserveListItemMain data={data} /> : <HouseReserveListItemMain data={data} />
      }

    </div>
  );
};

export default HouseReserveListItem;
