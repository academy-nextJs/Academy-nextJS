import Comment from "@/components/common/Comment";
import CardComment from "@/components/common/Comment/Card";
import CommentCardSkeleton from "@/components/common/Comment/Skeleton";
import Slider from "@/components/common/Slider";
import { CommentSingleType } from "@/core/models/types/comment.models";
import { useGetAllComments } from "@/utils/service/api/get/GetAllComments";
import { Fragment } from "react";
import { SwiperSlide } from "swiper/react";

const CommentSection = ({ house_id }: { house_id: string }) => {
  const { data, isSuccess, isLoading, isError } = useGetAllComments({
    house_id: house_id,
  });

  const SkeletonData = [{}, {}];

  return (
    <Fragment>
      <Comment view="rent" house_id={house_id} />
      <div
        className={`w-[1376px] h-[630px] mt-10 mb-14 ${
          isError || data?.length == 0 ? "hidden" : null
        }`}
      >
        <Slider
          slidesPerView={2}
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="h-full"
          loop
        >
          {!isLoading &&
            isSuccess &&
            data.map((item: CommentSingleType) => (
              <SwiperSlide key={item.id}>
                <CardComment
                  view="writeonly"
                  date={item.created_at}
                  caption={item.caption}
                  title={item.title}
                  score={item.rating}
                  name="محمد رضا ساداتی"
                />
              </SwiperSlide>
            ))}
          {isLoading &&
            SkeletonData.map((item, index) => (
              <SwiperSlide key={index}>
                <CommentCardSkeleton />
              </SwiperSlide>
            ))}
        </Slider>
      </div>
      {isError || data?.length == 0 ? (
        <div className="w-full text-center py-10">
          کامنتی برای این اقامتگاه وجود ندارد
        </div>
      ) : null}
    </Fragment>
  );
};

export default CommentSection;
