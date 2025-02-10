"use client"
import { RiUserLine } from "react-icons/ri";
import { TAuthTab } from "./type";
import { BiUserPlus } from "react-icons/bi";

export const AuthTab: TAuthTab[] = [
  { Key : "/login", text: "ورود به حساب کاربری", icon: RiUserLine , href : "/login" },
  { Key : "/signUp",  text: " ساخت حساب کاربری", icon: BiUserPlus , href : "/signUp"  },
];
