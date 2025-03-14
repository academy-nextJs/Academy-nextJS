import Breadcrumb, { BreadcrumbItem } from "@/components/common/BreadCrumb";
import SimilarAds from "@/components/common/SimilarAds";
import GalleryWrapper from "@/components/single-rent/gallery";
import TabSection from "@/components/single-rent/tabs";
import { GetSingleHouseType } from "@/core/models/house.models";
import GetSingleHouse from "@/utils/service/api/get/GetSingleHouse";
import { notFound } from "next/navigation";
import { FC } from "react";

interface SingleHouseRentProps {
  params: Promise<{ id: string }>;
}

const SingleHouseRent: FC<SingleHouseRentProps> = async ({ params }) => {
  // Breadcrumb Links
  const breadcrumb: BreadcrumbItem[] = [
    { label: "رهن و اجاره", href: "/house-rent" },
    { label: "رهن و اجاره آپارتمان", href: "/house-rent" },
    { label: "رهن و اجاره آپارتمان رشت", href: "/house-rent" },
    { label: "خونه 400 متری درسا در تهران" },
  ];

  const data: GetSingleHouseType = await GetSingleHouse((await params).id);
  // const similarData : GetSingleHouseType[] = await GetAllHouse({limit: 10, transaction_type: data?.transaction_type})

  if (!data) {
    notFound()
  }

  return (
    <div className="w-full mt-32 h-fit max-w-[1416px] px-8">
      <Breadcrumb items={breadcrumb} />
      <GalleryWrapper
        title={data.title}
        address={data.address}
        photos={data.photos}
        price={data.price}
        rate={data.rate}
        tags={data.tags}
      />
      <TabSection categories={data.categories} location={data.location} house_id={data.id} />
      {/* <SimilarAds href="/house-rent" data={similarData} /> */}
    </div>
  );
};

export default SingleHouseRent;
