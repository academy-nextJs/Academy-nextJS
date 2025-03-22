"use server";
import { cookies } from "next/headers";

// Function for saving and setting cookies
export const setCookie = async (cookieName: string, value: string) => {
  await (
    await cookies()
  ).set(cookieName, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
};

// Function for reading and getting cookies
export const getCookie = async (cookieName: string): Promise<string | null> => {
  const cookieValue = (await cookies()).get(cookieName);
  return cookieValue ? cookieValue.value : null;
};

// Function for deleting cookies
export const deleteCookie = async (cookieName: string) => {
  await (await cookies()).delete(cookieName);
};

// Function for review and Availability of cookies
export const hasCookie = async (cookieName: string): Promise<boolean> => {
  const hasCookie = (await cookies()).has(cookieName);
  return hasCookie;
};
