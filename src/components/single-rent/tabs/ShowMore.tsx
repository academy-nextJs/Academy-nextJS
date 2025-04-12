import { Dispatch, FC, SetStateAction } from "react";

interface ShowMoreProps {
  showMore: boolean;
  setShowMore: Dispatch<SetStateAction<boolean>>;
}

const ShowMore: FC<ShowMoreProps> = ({ showMore, setShowMore }) => {
  return (
    <span
      onClick={() => {
        setShowMore(!showMore);
      }}
      className="text-green cursor-pointer sm:hidden"
    >
      {!showMore ? "مشاهده بیشتر" : "مشاهده کمتر"}
    </span>
  );
};

export default ShowMore;
