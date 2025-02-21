"use client";
import GridCardT1 from "@/components/common/CardItems/cards/GridCardT1";
import Slider from "@/components/common/Slider";
import React from "react";
import { SwiperSlide } from "swiper/react";

const SliderSection = () => {
  return (
    <div className="w-full max-w-[1311px] mt-10">
      <Slider
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        className="w-full h-full mb-14"
        breakpoints={{
          1367: {
            slidesPerView: 4
          },
          1113: {
            slidesPerView: 3
          },
          755: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }}
      >
        <SwiperSlide>
          <GridCardT1
            href="/"
            score="4.5"
            title="اقمتگاه دال در قشم"
            describe=" 11.000 نفر بازدید کننده"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCardT1
            href="/"
            score="4.5"
            title="اقمتگاه دال در قشم"
            describe=" 11.000 نفر بازدید کننده"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCardT1
            href="/"
            score="4.5"
            title="اقمتگاه دال در قشم"
            describe=" 11.000 نفر بازدید کننده"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCardT1
            href="/"
            score="4.5"
            title="اقمتگاه دال در قشم"
            describe=" 11.000 نفر بازدید کننده"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCardT1
            href="/"
            score="4.5"
            title="اقمتگاه دال در قشم"
            describe=" 11.000 نفر بازدید کننده"
          />
        </SwiperSlide>
      </Slider>
    </div>
  );
};

export default SliderSection;
