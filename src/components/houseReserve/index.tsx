"use client";
import React from "react";
import Breadcrumb from "../common/BreadCrumb";

import ListOfHousesSection from "./ListOfHousesSection";
import { useGetHousesList } from "@/utils/service/api/get/HouseReserveList";
import { useHouseListParams } from "@/zustand/store";
import LocalAutocomplete from "../common/Autocompelete/Autocomplete";

const breadcrumbItems = [
  {
    label: "رزرو هتل",
  },
];

const HouseReserveWrapper = () => {

  const {limit,order,page,sort,transaction_type,address,capacity,price,rate,title} = useHouseListParams();

  const { data:houses } = useGetHousesList({limit,order,page,sort, transaction_type,address,capacity,price,rate,title} );

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
      <LocalAutocomplete options={[{label:1,key:1},{label:"qwew",key:3},]} />
      <section className="overflow-hidden">
        <ListOfHousesSection Houses={houses ?? []} />
      </section>
    </div>
  );
};

export default HouseReserveWrapper;
