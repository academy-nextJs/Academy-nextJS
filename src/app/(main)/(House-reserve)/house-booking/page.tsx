import Breadcrumb from "@/components/common/BreadCrumb";
// import { THouseDetailsResponse } from "@/core/models/houseDetails.models";
// import { UseGetHouseDetails } from "@/utils/service/api/Get_Method";
// import axios from "axios";

const HouseBooking = () => {
  // data fetching SSR
//  const data  = UseGetHouseDetails()

//  console.log(data.)

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
    </>
  );
};

export default HouseBooking;
