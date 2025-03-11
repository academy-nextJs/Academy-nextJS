import { AxiosResponse } from "axios";
import http from "../../interceptor";
import { CreateBookingParamsType } from "@/core/models/booking.models";
import { useMutation } from "@tanstack/react-query";

export async function CreateBooking(
  params: Omit<CreateBookingParamsType, "id">
): Promise<AxiosResponse<CreateBookingParamsType>> {
  const response = http.post("/bookings", params);
  return response;
}

export function useCreateBooking() {
  return useMutation({
    mutationKey: ["CREATE-BOOKING"],
    mutationFn: CreateBooking,
    onSuccess: () => {
      // toast.success("اقامتگاه مورد نظر به لیست رزرو ها اضافه شد")
    },
  });
}
