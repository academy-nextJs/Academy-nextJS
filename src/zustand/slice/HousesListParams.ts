import { HouseReserveListParamsType } from "@/core/models/types/houseList.models";
import { create } from "zustand";

export const useHouseListParams = create<HouseReserveListParamsType>()(
  (set) => ({
    address: "",
    capacity: "",
    limit: 10,
    order: "ASC",
    page: 1,
    price: "",
    rate: "",
    sort: undefined,
    title: "",
    transaction_type: "",
    setAdress: (value: string) => set(() => ({ address: value })),
    setCapacity: (value: string) => set(() => ({ capacity: value })),
    setOrder: (value: "ASC" | "DESC") => set(() => ({ order: value })),
    setPrice: (value: string) => set(() => ({ price: value })),
    setRate: (value: string) => set(() => ({ rate: value })),
    setSort: (value: "price" | "rate") => set(() => ({ sort: value })),
    setTitle: (value: string) => set(() => ({ address: value })),
    setTransaction_type: (value: string) =>
      set(() => ({ transaction_type: value })),
  })
);
