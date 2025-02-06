import WrapperForm from "./WrapperForm";
import Poster from "./Poster";
import WrapperLinks from "./WrapperLinks";

export default function Footer() {
  return (
    <footer className="w-[1376px] h-fit grid grid-cols-2 p-8 pt-16 rounded-3xl bg-[#8CFF45]">
      <Poster />
      <WrapperForm />
      <WrapperLinks />
    </footer>
  );
}
