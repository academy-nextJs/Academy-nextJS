import React from "react";
import Breadcrumb from "../common/BreadCrumb";
import BookingStepsBox from "./stepsBox";
import BookingStepsWrappers from "./stepsWrappers";

const HouseBookingWrapper = () => {
  // data fetching SSR
  //  const data  = UseGetHouseDetails()

  // BreadcrumbItems
  const breadcrumbItems = [
    {
      label: "رزرو هتل",
      href: "/house-reserve",
    },
    {
      label: "رزرو هتل رشت ",
      href: "/house-reserve",
    },
    // { label: `رزرو ${data.title}` },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col gap-4 px-10">
        {/* Booking Steps Section */}
        <BookingStepsBox />
        {/* Booking Steps Pages Section */}
        <BookingStepsWrappers />
      </div>
    </>
  );
};

export default HouseBookingWrapper;
