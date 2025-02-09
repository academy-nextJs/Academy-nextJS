import { contactUs } from "@/core/constants/ContactUs/type";

const ContactUsWaysItem = ({ text, icon }: contactUs) => {
  console.log(icon.prototype);
  return (
    <div className="bg-gray w-fit flex gap-2 text-xl items-center max-lg:mx-auto py-2 px-5 rounded-xl">
      <icon.prototype.constructor color="#aaaaaa" size={22}/>
      <p className="text-gray">{text}</p>
    </div>
  );
};

export default ContactUsWaysItem;
