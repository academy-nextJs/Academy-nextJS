import React from "react";
import Breadcrumb from "../common/BreadCrumb";

import { HouseReserveListType } from "@/core/constants/house-reserve/types";
import ListOfHousesSection from "./ListOfHousesSection";

const breadcrumbItems = [
  {
    label: "رزرو هتل",
  },
];

const HouseReserveWrapper = async () => {
  const Houses: HouseReserveListType[] = await (
    await fetch(
      "https://delta-project.liara.run/api/houses?page=1&limit=10&sort=&order=ASC"
    )
  ).json();

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
      <section className="overflow-hidden">
      <ListOfHousesSection Houses={Houses} />
      </section>
    </div>
  );
};

export default HouseReserveWrapper;
