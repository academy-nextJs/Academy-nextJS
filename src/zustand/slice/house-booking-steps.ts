import { create } from "zustand";

type TStore = {
  count: number;
  inc: (value: number) => void;
};

export const useBookingStepCount = create<TStore>()((set) => ({
  count: 1,
  inc: (value) => set(() => ({ count: value })),
}));
