import { Score } from "@/components/common/CardItems/components/common-grid";
import FileContainer from "@/components/common/FileContainer";
import { DateIcon } from "@/core/icon/icons";

const Card = () => {
  return (
    <FileContainer
      background="#393939"
      radius="md"
      size="md"
      label={<Score score={"4.5"} />}
      labelHeight="30px"
      labelWidth="100px"
      width="100%"
      classNames={{
        base: "h-[280px] flex flex-wrap hover:cursor-pointer p-4 gap-y-6 pt-[32px]",
        innerLabel: "!p-3 flex justify-center items-center",
        wrapperLabel: "group-hover:!bg-green",
        coverHollow: "group-hover:!text-green",
      }}
    >
      <p className="text-xl max-sm:text-base font-Peyda-400 leading-10 h-[120px] line-clamp-3">
        ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد... “
      </p>
      <div className="w-full flex gap-x-4 h-20 rounded-3xl bg-[#444444] p-3">
        <div className="min-w-14 w-14 h-14 rounded-2xl bg-[#D9D9D9]"></div>
        <div className="w-full flex flex-col justify-between">
          <h1 className="w-full font-Peyda-400 max-sm:text-sm">محمد رضا ساداتی</h1>
          <div className="text-[#AAAAAA] flex max-sm:text-sm gap-2 items-center font-Peyda-Numeric">
            <DateIcon width={16} height={16} />
            <span>12 مرداد - 1401 / 12:33</span>
          </div>
        </div>
      </div>
    </FileContainer>
  );
};

export default Card;
