const HouseFacilities = ({ K, V }: { K: string; V: string }) => {
  return (
    <div className="w-[127px] h-[94px] py-3 px-2 flex flex-wrap text-white bg-[#3F3F3F] rounded-2xl font-Peyda-600">
      <h1 className="w-full text-center">{K}</h1>
      <div className="w-full h-[37px] bg-[#7569FF] rounded-[10px] text-center leading-10">
        {V}
      </div>
    </div>
  );
};

export default HouseFacilities;
