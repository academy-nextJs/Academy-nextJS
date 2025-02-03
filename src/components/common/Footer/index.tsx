import Poster from "./Poster";

export default function Footer() {
  return (
    <footer className="w-[1376px] grid grid-cols-2 p-8 pt-16 rounded-3xl bg-[#8CFF45]">
      <Poster />
      <div className="bg-red-500"></div>
      <div dir="rtl" className="bg-[#232323] p-[48px] min-h-[496px] rounded-[56px] col-span-2 relative">
        <h1 className="text-white text-[32px]">پلتفرم دلتا</h1>
        <div className="w-full h-[180px] bg-red-200"></div>
        <div className="w-full h-[56px] bg-red-500"></div>
        <div className="w-full h-[56px] bg-red-500"></div>
        <hr />
        <div className="w-full h-[40px] bg-red-900"></div>
      </div>
    </footer>
  );
}
