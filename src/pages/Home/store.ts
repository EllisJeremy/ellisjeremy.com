import { create } from "zustand";

export interface homeStoreType {
  section: string;
  setSection: (section: string) => void;
  blur: boolean;
  setBlur: (blur: boolean) => void;
  scale: boolean;
  setScale: (scale: boolean) => void;
  filter: boolean;
  setFilter: (filter: boolean) => void;
  allowObserver: boolean;
  setAllowObserver: (allowObserver: boolean) => void;
}

export const homeStore = create<homeStoreType>((set) => ({
  section: "about",
  setSection: (section: string) => set(() => ({ section })),
  blur: false,
  setBlur: (blur: boolean) => set(() => ({ blur })),
  scale: false,
  setScale: (scale: boolean) => set(() => ({ scale })),
  filter: false,
  setFilter: (filter: boolean) => set(() => ({ filter })),
  allowObserver: true,
  setAllowObserver: (allowObserver: boolean) => set(() => ({ allowObserver })),
}));

interface screenStoreType {
  isMobile: boolean;
  setIsMobile: (val: boolean) => void;
}

export const screenStore = create<screenStoreType>((set) => ({
  isMobile: window.innerWidth < 1150,
  setIsMobile: (val) => set({ isMobile: val }),
}));
