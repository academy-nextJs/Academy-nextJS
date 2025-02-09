import { SlLocationPin } from "react-icons/sl";

const Location = ({ location }: { location: string }) => {
  return (
    <div className="w-full flex flex-row-reverse gap-x-3 text-[#AAAAAA]">
      <SlLocationPin size={18} />
      <span className="font-Peyda-500">{location}</span>
    </div>
  );
};

export default Location;
