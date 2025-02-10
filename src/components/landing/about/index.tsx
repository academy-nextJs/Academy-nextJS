import Chip from "@/components/common/Chip";
import Card from "./Card";

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center gap-6 text-white font-Peyda-500 ">
      <Chip side="Two-way">درباره ما</Chip>
      <h1 className="text-4xl max-sm:text-3xl">دلتا رو بیشتر بشناس !</h1>
      <p className="font-Peyda-400 text-center">
        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا
        بتواند در تمام لحظات کنار شما باشد .
      </p>
      <div className=" w-full grid max-md:grid-cols-1 max-[1462px]:grid-cols-2 grid-cols-3 max-md:grid-rows-6 grid-rows-2 gap-5 mt-14">
        <Card
          color="#444444"
          width={445}
          height={225}
          className="col-span-1 row-span-1 max-[1462px]:!w-full"
        >
          <div className="w-14 h-14 rounded-2xl bg-white"></div>
          <h1 className="text-2xl mt-3">
            <span className="font-Peyda-Numeric">+12000</span> خونه فعال
          </h1>
          <p className="font-Peyda-400 mt-3 max-lg:h-12">
            خانه هایی که نضافت و امنیت شان تامین شده!
          </p>
        </Card>
        <Card
          color="#7569FF"
          width={446}
          height={510}
          className="col-span-1 row-span-2 max-sm:text-sm max-[1462px]:!w-full max-md:col-span-1 max-[1462px]:col-span-2 max-[1462px]:order-1 text-xl max-sm:leading-8 leading-10 text-center"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو د...
        </Card>
        <Card
          color="#232323"
          width={445}
          height={225}
          className="col-span-1 row-span-1 max-[1462px]:!w-full"
        >
          <div className="w-14 h-14 rounded-2xl bg-white"></div>
          <h1 className="text-2xl mt-3">
            <span className="font-Peyda-Numeric">24/7</span> ساعت شبانه روز
          </h1>
          <p className="font-Peyda-400 mt-3 max-lg:h-12">
            تیم پشتیبانی در تمام طول روز همراه شما هستن
          </p>
        </Card>
        <Card
          color="#232323"
          width={445}
          height={225}
          className="col-span-1 row-span-1 max-[1462px]:!w-full"
        >
          <div className="w-14 h-14 rounded-2xl bg-white"></div>
          <h1 className="text-2xl mt-3">
            <span className="font-Peyda-Numeric">10+</span> سال سابقه درخشان
          </h1>
          <p className="font-Peyda-400 mt-3 max-lg:h-12">
            در مهمان نوازی به شما مسافران عزیز
          </p>
        </Card>
        <Card
          color="#444444"
          width={445}
          height={225}
          className="col-span-1 row-span-1 max-[1462px]:!w-full"
        >
          <div className="w-14 h-14 rounded-2xl bg-white"></div>
          <h1 className="text-2xl mt-3">
            <span className="font-Peyda-Numeric">15.000+</span> نظرات کاربران
          </h1>
          <p className="font-Peyda-400 mt-3 max-lg:h-12">
            رضایت مسافرانی که از پلتفرم دلتا استفاده کردند
          </p>
        </Card>
      </div>
    </div>
  );
}
