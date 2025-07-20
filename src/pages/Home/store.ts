import { create } from "zustand";

export interface homeStoreType {
  section: string;
  setSection: (section: string) => void;
}

export const homeStore = create<homeStoreType>((set) => ({
  section: "home",
  setSection: (section: string) => set(() => ({ section })),
}));
