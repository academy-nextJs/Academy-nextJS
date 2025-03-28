import { useState } from "react";
import ShowMore from "./ShowMore";

const HouseAbout = ({caption}: {caption: string | null}) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="w-full">
      <p
        className={`w-full leading-9 font-Peyda-400 text-[#AAAAAA] ${
          !showMore && "max-sm:line-clamp-3"
        }`}
      >
        {caption ? caption : "مالک محترم توضیح ای برای این اقامتگاه وارد نکرده است!"}
      </p>
      <ShowMore setShowMore={setShowMore} showMore={showMore} />
    </div>
  );
};

export default HouseAbout;
