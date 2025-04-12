import { HouseReserveListParamsType } from "@/core/models/types/houseList.models";
import { create } from "zustand";

export const useHouseListParams = create<HouseReserveListParamsType>()(
  (set) => ({
    address: undefined,
    capacity: undefined,
    limit: 10,
    order: undefined,
    page: 1,
    price: undefined,
    rate: undefined,
    sort: undefined,
    title: undefined,
    transaction_type: undefined,
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
