import { BsPostcard } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiMoneyWavyBold, PiUsersThree } from "react-icons/pi";
import { TbChecklist } from "react-icons/tb";
import { THouseBookingSteps } from "./type";

export const HouseBookingStepsTitle : THouseBookingSteps[] = [
  { id: 1, title: "انتخاب هتل", icon: HiOutlineOfficeBuilding },
  { id: 2, title: "مشخصات مسافران", icon: PiUsersThree },
  { id: 3, title: "تایید اطلاعات", icon: TbChecklist },
  { id: 4, title: "پرداخت آنلاین", icon: PiMoneyWavyBold },
  { id: 5, title: "صدور بلیط", icon: BsPostcard , last : true},
];
