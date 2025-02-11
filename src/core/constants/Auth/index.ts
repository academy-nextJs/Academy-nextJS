"use client"
import { RiUserLine } from "react-icons/ri";
import { TAuthTab } from "./type";
import { BiUserPlus } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
import { HiOutlineLockClosed } from "react-icons/hi";

export const AuthTab: TAuthTab[] = [
  { Key : "/login", text: "ورود به حساب کاربری", icon: RiUserLine , href : "/login" },
  { Key : "/signUp",  text: " ساخت حساب کاربری", icon: BiUserPlus , href : "/signUp"  },
];

export const loginStatus: TAuthTab[] = [
  { Key : "number", text: "ورود با شماره", icon: PiPhoneCall },
  { Key : "password",  text: "ورود با پسورد", icon: HiOutlineLockClosed  },
];