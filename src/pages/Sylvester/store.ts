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
  matrixB: number[][];
  matrixC: number[][];
  matrixX: number[][];
  
  setMatrixA: (matrixA: number[][]) => void;
  setMatrixB: (matrixB: number[][]) => void;
  setMatrixC: (matrixC: number[][]) => void;
  setMatrixX: (matrixC: number[][]) => void;
}

export const matricesStore = create<matricesStoreType>(
  (set) => ({

    matrixA: [[]],
    matrixB: [[]],
    matrixC: [[]],
    matrixX: [[1,2],[3,4]],


    setMatrixA : (matrixA: number[][]) => set(() => ({matrixA})),
    setMatrixB : (matrixB: number[][]) => set(() => ({matrixB})),
    setMatrixC : (matrixC: number[][]) => set(() => ({matrixC})),
    setMatrixX : (matrixC: number[][]) => set(() => ({matrixC})),
   
  })
);
