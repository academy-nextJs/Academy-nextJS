import Breadcrumb, { BreadcrumbItem } from "@/components/common/BreadCrumb";
import GalleryWrapper from "@/components/single-reserve/gallery";
import ReserveInfo from "@/components/single-reserve/reserve-info";
import TabSection from "@/components/single-reserve/tabs";
import { GetSingleHouseType } from "@/core/models/house.models";
import GetSingleHouse from "@/utils/service/api/get/GetSingleHouse";
import { notFound } from "next/navigation";

const SingleHouseReserve = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const data: GetSingleHouseType = await GetSingleHouse((await params).id);
  // const similarData : GetSingleHouseType[] = await GetAllHouse({limit: 10, transaction_type: data?.transaction_type})

  if (!data) notFound();

  // Breadcrumb Links
  const breadcrumb: BreadcrumbItem[] = [
    { label: "رزرو هتل", href: "/house-reserve" },
    { label: data.title },
  ];

  return (
    <div className="w-full mx-8 mt-32 h-fit max-w-[1376px]">
      <Breadcrumb items={breadcrumb} />
      <GalleryWrapper
        star={data.rate}
        title={data.title}
        address={data.address}
        pictures={data.photos}
      />
      <div className="w-full mt-[49px] mb-14 flex gap-x-[48px]">
        <TabSection house_id={data.id} categories={data.categories} />
        <ReserveInfo price={data.price} house_id={data.id} />
      </div>
      {/* <SimilarAds href="/house-reserve" data={similarData} /> */}
    </div>
  );
};

export default SingleHouseReserve;
