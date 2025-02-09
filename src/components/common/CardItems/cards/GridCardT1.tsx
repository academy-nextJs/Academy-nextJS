// Common
import { FC } from "react";
import { Title } from "../components/common-grid";
import CardHeader from "../components/common-grid/CardHeader";

interface GridCardT1Props {
  title: string;
  describe?: string;
  score: string;
  href: string;
}

const GridCardT1: FC<GridCardT1Props> = ({ title, describe, score, href }) => {
  return (
    <div className="max-w-[316px] flex flex-col items-center mx-auto gap-y-6 group hover:cursor-pointer">
      <CardHeader score={score} href={href}>
        <Title title={title} describe={describe} />
      </CardHeader>
    </div>
  );
};

export default GridCardT1;
