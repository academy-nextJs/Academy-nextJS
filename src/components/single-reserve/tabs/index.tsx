"use client";
import Comment from "@/components/common/Comment";
import HouseFacilities from "@/components/common/HouseFacilities";
import CustomTabs from "@/components/common/Tabs";
import TabTitle from "@/components/common/Tabs/TabTitle";
import { CommentIcon, DocumentIcon, FacilitiesIcon } from "@/core/icon/icons";
import { Tab } from "@heroui/react";
import About from "./About";
import CardComment from "@/components/common/Comment/Card";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/common/Slider";

const TabSection = () => {
  return (
    <div className="w-[999px] flex flex-wrap gap-y-8 h-fit">
      <CustomTabs>
        <Tab
          key="HouseAbout"
          title={
            <TabTitle
              title="درباره ملک"
              icon={<DocumentIcon className="fill-inherit" />}
            />
          }
          className="font-Peyda-500 flex flex-wrap gap-y-3 text-white"
        >
          <About />
        </Tab>
        <Tab
          key="HouseFacilities"
          title={
            <TabTitle
              title="امکانات اقامتگاه"
              icon={<FacilitiesIcon className="fill-inherit" />}
            />
          }
          className="flex flex-wrap gap-x-[17px] gap-y-8"
        >
          <HouseFacilities K="سن بنا" V="نوساز" />
        </Tab>
        <Tab
          key="HouseComment"
          title={
            <TabTitle
              title="نظرات کاربران"
              icon={<CommentIcon className="fill-inherit" />}
            />
          }
        >
          <Comment view="reserve" />
          <div className="w-[999px] h-[540px] mt-10 mb-[156px]">
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
              <SwiperSlide>
                <CardComment
                  view="writeonly"
                  date="12 مرداد - 1401 / 12:33"
                  message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گ"
                  name="محمد رضا ساداتی"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardComment
                  view="writeonly"
                  date="12 مرداد - 1401 / 12:33"
                  message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گ"
                  name="محمد رضا ساداتی"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardComment
                  view="writeonly"
                  date="12 مرداد - 1401 / 12:33"
                  message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گ"
                  name="محمد رضا ساداتی"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardComment
                  view="writeonly"
                  date="12 مرداد - 1401 / 12:33"
                  message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گ"
                  name="محمد رضا ساداتی"
                />
              </SwiperSlide>
            </Slider>
          </div>
        </Tab>
      </CustomTabs>
    </div>
  );
};

export default TabSection;
