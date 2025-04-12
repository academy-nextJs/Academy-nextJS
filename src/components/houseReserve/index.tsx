"use client";
import React from "react";
import Breadcrumb from "../common/BreadCrumb";

import ListOfHousesSection from "./ListOfHousesSection";
import { useGetHousesList } from "@/utils/service/api/get/HouseReserveList";

const breadcrumbItems = [
  {
    label: "رزرو هتل",
  },
];

const HouseReserveWrapper = () => {
  // const [houses, setHouses] = useState<HouseReserveListType[] | undefined>(
  //   undefined
  // );
  const { data:houses } = useGetHousesList();

  // useEffect(() => {
  //   setHouses(data);
  // }, [data]);

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
      <section className="overflow-hidden">
        <ListOfHousesSection Houses={houses ?? []} />
      </section>
    </div>
  );
};

export default HouseReserveWrapper;
