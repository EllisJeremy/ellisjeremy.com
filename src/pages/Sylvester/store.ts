import { create } from "zustand";


//defines the type for the userStore object
export interface inputsStoreType {
  
  n: number;
  m: number;
  
  setN: (age: number) => void;
  setM: (age: number) => void;
}

//default vales and functions for m and n inputs 
export const inputsStore = create<inputsStoreType>(
  (set) => ({
    
    n: 2, 
    m: 2, 

    setN : (n: number) => set(() => ({n})),
    setM : (m: number) => set(() => ({m})),
  })
);



