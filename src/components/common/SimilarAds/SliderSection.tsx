"use client";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import GridCardT2 from "../CardItems/cards/GridCardT2";
import { GetSingleHouseType } from "@/core/models/house.models";

const SliderSection = ({ data }: { data: GetSingleHouseType[] }) => {
  return (
    <Slider
      slidesPerView={4}
      spaceBetween={20}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="w-full h-full mb-20"
      loop
      breakpoints={{
        1367: {
          slidesPerView: 4,
        },
        1113: {
          slidesPerView: 3,
        },
        755: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <GridCardT2
            href={`house-rent/${item.id}`}
            score={item.rate}
            title={item.title}
            bathroom={item.bathrooms}
            isRent={false}
            room={item.rooms}
            yard
            price={item.price}
            location={item.address}
            garage={item.parking}
            describeType="pipe"
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default SliderSection;
