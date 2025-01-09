import { create } from "zustand";


//defines the type for the userStore object
export interface inputsStoreType {
  
  n: number;
  m: number;
  
  setN: (n: number) => void;
  setM: (m: number) => void;

  incrementN: () => void;
  decrementN: () => void;
  incrementM: () => void;
  decrementM: () => void;
}

//default vales and functions for m and n inputs 
export const inputsStore = create<inputsStoreType>((set) => ({
    
    n: 2, 
    m: 2, 

    setN : (n: number) => set(() => ({n})),
    setM : (m: number) => set(() => ({m})),

    incrementN: () => set((state) => {
      if (state.n < 9){
        return { n: state.n + 1 };
      }
      return state;
     }),
    decrementN: () => set((state) => {
      if (state.n > 1) {
        return { n: state.n - 1 }; 
      }
      return state; 
    }),
  
    incrementM: () => set((state) => {
      if (state.m < 9){
        return { m: state.m + 1 };
      }
      return state;
     }),
    decrementM: () => set((state) => {
      if (state.m > 1) {
        return { m: state.m - 1 }; 
      }
      return state; 
    }),
  })
);


export interface matricesStoreType {
  
  matrixA: number[][];
  
  setMatrixA: (matrixA: number[][]) => void;
}

export const matricesStore = create<matricesStoreType>(
  (set) => ({

    matrixA: [[0]],

    setMatrixA : (matrixA: number[][]) => set(() => ({matrixA})),
   
  })
);
