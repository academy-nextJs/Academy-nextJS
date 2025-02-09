import { Score } from "@/components/common/CardItems/components/common-grid";
import FileContainer from "@/components/common/FileContainer";
import { LuCalendarDays } from "react-icons/lu";

const Card = () => {
  return (
    <FileContainer
      background="#393939"
      radius="md"
      size="md"
      label={<Score score={"4.5"} />}
      classNames={{
        base: "w-full h-[280px] flex flex-wrap hover:cursor-pointer p-4 gap-y-6 pt-[32px]",
        labelHeight: "30px",
        labelWidth: "100px",
        label: "!p-3 flex justify-center items-center",
        labelWrapper: "group-hover:!bg-green",
        cover: "group-hover:!text-green",
        tag: "h-[30px] -top-[30px]",
      }}
    >
      <p
        dir="rtl"
        className="text-xl font-Peyda-400 leading-10 h-[120px] line-clamp-3"
      >
        ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد... “
      </p>
      <div
        dir="rtl"
        className="w-full flex gap-x-4 h-20 rounded-3xl bg-[#444444] p-3"
      >
        <div className="min-w-14 w-14 h-14 rounded-2xl bg-[#D9D9D9]"></div>
        <div className="w-full flex flex-col justify-between">
          <h1 className="w-full font-Peyda-400">محمد رضا ساداتی</h1>
          <div className="text-[#AAAAAA] flex  gap-2 items-center font-Peyda-Numeric">
            <LuCalendarDays size={18} />
            <span>12 مرداد - 1401 / 12:33</span>
          </div>
        </div>
      </div>
    </FileContainer>
  );
};

export default Card;
