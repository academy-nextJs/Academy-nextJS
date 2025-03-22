import CardComment from "@/components/common/Comment/Card";
import Slider from "@/components/common/Slider";
import { CommentSingleType } from "@/core/models/comment.models";
import { useGetAllComments } from "@/utils/service/api/get/GetAllComments";
import { FC, Fragment } from "react";
import { SwiperSlide } from "swiper/react";
import CommentForm from "./CommentForm";
import CommentSkeleton from "./CommentSkeleton";
import { CommentWrapperProps } from "./types";

const CommentWrapper: FC<CommentWrapperProps> = ({
  house_id,
  height,
}) => {
  const { data, isSuccess, isLoading, isError } = useGetAllComments({
    house_id: house_id,
  });

  const SkeletonData = [{}, {}];

  return (
    <Fragment>
      <CommentForm house_id={house_id} />
      <div
        style={{
          height: height,
        }}
        className={`mt-10 mb-14 !w-full ${
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
                <CommentSkeleton />
              </SwiperSlide>
            ))}
        </Slider>
      </div>
      {isError || data?.length == 0 ? (
        <div className="w-full text-center py-28 font-Peyda-500 text-white">
          کامنتی برای این اقامتگاه وجود ندارد
        </div>
      ) : null}
    </Fragment>
  );
};

export default CommentWrapper;
