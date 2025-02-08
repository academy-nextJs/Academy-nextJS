import { FaStar } from "react-icons/fa6";

const Score = ({ score }: { score: string }) => {
  return (
    <div className="w-[67px] h-8 flex group-hover:text-white group-hover:bg-[#2D2D2D] items-center justify-center gap-x-[5px] bg-white rounded-[10px] text-[#363636] font-Peyda-Numeric">
      <FaStar size={16} className="text-[#363636] group-hover:text-white" />
      <h1 className="h-4">{score}</h1>
    </div>
  );
};

export default Score;
