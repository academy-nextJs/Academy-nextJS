import Button from "@/components/common/Button/Button";
import FileContainer from "@/components/common/FileContainer";
import SliderSection from "./SliderSection";
import Chip from "@/components/common/Chip/SectionChip";

const NewestEntertainmentAreas = () => {
  return (
    <FileContainer
      background="#232323"
      radius="lg"
      size="lg"
      labelHeight="30px"
      labelWidth="15%"
      width="100%"
      classNames={{
        base: "h-[550px] max-w-[1376px] flex flex-wrap justify-center gap-y-6 pt-[32px] p-8 text-white",
        wrapperLabel: "max-sm:!w-[40%]",
      }}
    >
      <Chip side="One-way" className="font-Peyda-500 w-full max-sm:text-center">
        جدید ترین نقاط
      </Chip>
      <div className="w-full flex justify-between max-sm:items-center max-sm:flex-col gap-y-8 font-Peyda-500">
        <h1 className="text-4xl max-sm:text-3xl">جدید ترین مناقط تفریحی</h1>
        <Button variant="bordered" size="md" color="light" isMagnetic>
          مشاهده همه
        </Button>
      </div>
      <SliderSection />
    </FileContainer>
  );
};

export default NewestEntertainmentAreas;
