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

  aboutRef: React.RefObject<HTMLDivElement> | null;
  experience1Ref: React.RefObject<HTMLDivElement> | null;
  project1Ref: React.RefObject<HTMLDivElement> | null;
  project2Ref: React.RefObject<HTMLDivElement> | null;

  setRefs: (refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    experience1Ref: React.RefObject<HTMLDivElement>;
    project1Ref: React.RefObject<HTMLDivElement>;
    project2Ref: React.RefObject<HTMLDivElement>;
  }) => void;
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

  aboutRef: null,
  experience1Ref: null,
  project1Ref: null,
  project2Ref: null,
  setRefs: (refs) => set(refs),
}));
