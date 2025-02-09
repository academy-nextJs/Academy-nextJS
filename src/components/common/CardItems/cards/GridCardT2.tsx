import { FC } from "react";
import { Location, Price, Title } from "../components/common-grid";
import CardHeader from "../components/common-grid/CardHeader";
import Describe from "../components/Describe";

interface GridCardT2Props {
  title: string;
  location: string;
  discount?: string;
  score: string;
  href: string;
  bathroom: number;
  room: number;
  yard: boolean;
  garage?: number;
  capacity?: number;
  price: string;
  isRent: boolean;
  discountPercent?: number;
  describeType: "pipe" | "comma";
  priceTime?: string;
}

const GridCardT2: FC<GridCardT2Props> = ({
  title,
  discountPercent,
  location,
  bathroom,
  room,
  yard,
  garage,
  capacity,
  discount,
  price,
  isRent,
  score,
  href,
  describeType,
  priceTime,
}) => {
  return (
    <div className="max-w-[306px] flex flex-col items-center gap-y-4 w-fit mx-auto group hover:cursor-pointer">
      <CardHeader href={href} score={score}>
        <Title title={title} discount={discountPercent} />
        <Location location={location} />
        <Describe
          bathroom={bathroom}
          garage={garage}
          yard={yard}
          room={room}
          capacity={capacity}
          type={describeType}
        />
        <Price
          discount={discount}
          price={price}
          isRent={isRent}
          time={priceTime}
        />
      </CardHeader>
    </div>
  );
};

export default GridCardT2;
