import Chip from "@/components/common/Chip";
import Card from "./Card";

export default function AboutUs() {
  return (
    <div className="w-[1376px] flex flex-col items-center gap-6 text-white font-Peyda-500 ">
      <Chip side="Two-way">درباره ما</Chip>
      <h1 className="text-4xl max-sm:text-3xl">دلتا رو بیشتر بشناس !</h1>
      <p className="font-Peyda-400 text-center">
        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا
        بتواند در تمام لحظات کنار شما باشد .
      </p>
      <div className="w-full grid max-md:grid-cols-1 max-[1462px]:grid-cols-2 grid-cols-3 max-md:grid-rows-6 grid-rows-2 gap-5 mt-14">
        <Card
          color="#444444"
          width={445}
          height={225}
          classNames={{
            base: "col-span-1 row-span-1 max-[1462px]:!w-full",
          }}
          icon="/security.png"
          statistics="+12000"
          title="خونه فعال"
          describe="خانه هایی که نضافت و امنیت شان تامین شده!"
        />
        <Card
          color="#7569FF"
          width={446}
          height={510}
          classNames={{
            base: "col-span-1 row-span-2 max-sm:text-sm max-[1462px]:!w-full max-md:col-span-1 max-[1462px]:col-span-2 max-[1462px]:order-1 text-xl max-sm:leading-8 leading-10 text-center",
          }}
          describe="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو د..."
        />
        <Card
          color="#232323"
          width={445}
          height={225}
          classNames={{
            base: "col-span-1 row-span-1 max-[1462px]:!w-full",
          }}
          icon="/support.png"
          statistics="24/7"
          title="ساعت شبانه روز"
          describe="تیم پشتیبانی در تمام طول روز همراه شما هستن"
        />
        <Card
          color="#232323"
          width={445}
          height={225}
          classNames={{
            base: "col-span-1 row-span-1 max-[1462px]:!w-full",
            icon: "!top-0"
          }}
          icon="/cup.png"
          statistics="+10"
          title="سال سابقه درخشان"
          describe="در مهمان نوازی به شما مسافران عزیز"
        />
        <Card
          color="#444444"
          width={445}
          height={225}
          classNames={{
            base: "col-span-1 row-span-1 max-[1462px]:!w-full",
          }}
          icon="/heart.png"
          statistics="+15.000"
          title="نظرات کاربران"
          describe="رضایت مسافرانی که از پلتفرم دلتا استفاده کردند"
        />
      </div>
    </div>
  );
}
