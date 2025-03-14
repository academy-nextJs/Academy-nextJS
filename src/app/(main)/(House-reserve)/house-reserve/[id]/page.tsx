import Breadcrumb, { BreadcrumbItem } from "@/components/common/BreadCrumb";
import SimilarAds from "@/components/common/SimilarAds";
import GalleryWrapper from "@/components/single-reserve/gallery";
import ReserveInfo from "@/components/single-reserve/reserve-info";
import TabSection from "@/components/single-reserve/tabs";
import React from "react";

const SingleHouseReserve = () => {

  // Breadcrumb Links
  const breadcrumb: BreadcrumbItem[] = [
    { label: "رزرو هتل", href: "/house-reserve" },
    { label: "رزرو هتل رشت", href: "/house-reserve" },
    { label: "رزرو هتل رشت سراوان رایان" },
  ];

  return (
    <div className="w-full mx-8 mt-32 h-fit max-w-[1376px]">
      <Breadcrumb items={breadcrumb} />
      <GalleryWrapper
        star={5}
        title="هتل همایون فر کیش ایران"
        address="گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ"
      />
      <div className="w-full mt-[49px] mb-14 flex gap-x-[48px]">
        <TabSection />
        <ReserveInfo />
      </div>
      <SimilarAds href="/house-reserve" />
    </div>
  );
};

export default SingleHouseReserve;
