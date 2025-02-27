"use client";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import GridCardT2 from "../CardItems/cards/GridCardT2";

const SliderSection = () => {
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
      <SwiperSlide>
        <GridCardT2
          href="/"
          score="4.5"
          title="آپارتمان لوکس زعفرانیه"
          bathroom={2}
          isRent={false}
          room={4}
          yard
          price="5000000"
          location="گیلان ، رشت"
          garage={1}
          describeType="pipe"
        />
      </SwiperSlide>
      <SwiperSlide>
        <GridCardT2
          href="/"
          score="4.5"
          title="آپارتمان لوکس زعفرانیه"
          bathroom={2}
          isRent={false}
          room={4}
          yard
          price="5000000"
          location="گیلان ، رشت"
          garage={1}
          describeType="pipe"
        />
      </SwiperSlide>
      <SwiperSlide>
        <GridCardT2
          href="/"
          score="4.5"
          title="آپارتمان لوکس زعفرانیه"
          bathroom={2}
          isRent={false}
          room={4}
          yard
          price="5000000"
          location="گیلان ، رشت"
          garage={1}
          describeType="pipe"
        />
      </SwiperSlide>
      <SwiperSlide>
        <GridCardT2
          href="/"
          score="4.5"
          title="آپارتمان لوکس زعفرانیه"
          bathroom={2}
          isRent={false}
          room={4}
          yard
          price="5000000"
          location="گیلان ، رشت"
          garage={1}
          describeType="pipe"
        />
      </SwiperSlide>
      <SwiperSlide>
        <GridCardT2
          href="/"
          score="4.5"
          title="آپارتمان لوکس زعفرانیه"
          bathroom={2}
          isRent={false}
          room={4}
          yard
          price="5000000"
          location="گیلان ، رشت"
          garage={1}
          describeType="pipe"
        />
      </SwiperSlide>
    </Slider>
  );
};

export default SliderSection;
