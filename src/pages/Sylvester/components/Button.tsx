import { inputsStore, matricesStore } from "../store"
import numeric from 'numeric';

export default function Button(){

  const {matrixA, matrixB, matrixC, matrixX } = matricesStore();
  const {n, m } = inputsStore();

  function kronecker(A: number[][], B: number[][]) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;
  
    const result = [];
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < rowsB; j++) {
        const row = [];
        for (let k = 0; k < colsA; k++) {
          for (let l = 0; l < colsB; l++) {
            row.push(A[i][k] * B[j][l]);
          }
        }
        result.push(row);
      }
    }
    return result;
  }

  //both matrices are the same size
  function addMatrix(matrix1: number[][] , matrix2: number[][]){
    for (let n: number = 0; n < matrix1.length; n++){
      for (let m: number = 0; m < matrix1[n].length; m++){
        matrix1[n][m] = matrix1[n][m] + matrix2[n][m];
    }}

    return matrix1
  }


  function vectorize(matrix: number[][]){
    const vector: number[] = [];
    for (let n: number = 0; n < matrix.length; n++){
      for (let m: number = 0; m < matrix[n].length; m++){
        
        vector.push(matrix[n][m]);
    }}

    return vector;

  }

  //these 3 functions are necessary to solve the systems of equations we will make in the solver function 

interface LUResult {
  L: number[][];
  U: number[][];
  P: number[][]; 
}

// Decomposes a given matrix A into its LU decomposition with optional partial pivoting.
function LU(A: number[][]): LUResult {
  const n = A.length;
  const L: number[][] = Array.from({ length: n }, (_, i) => Array(n).fill(0).map((_, j) => (i === j ? 1 : 0)));
  const U: number[][] = A.map(row => row.slice()); 

  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          const factor = U[j][i] / U[i][i];
          L[j][i] = factor;
          for (let k = i; k < n; k++) {
              U[j][k] -= factor * U[i][k];
          }
      }
  }

  return { L, U, P: Array.from({ length: n }, (_, i) => Array(n).fill(0).map((_, j) => (i === j ? 1 : 0))) };
}

// Solves the system of linear equations using the LU decomposition and a given vector b.

function LUsolve(LU: LUResult, b: number[]): number[] {
  const { L, U } = LU;
  const n = L.length;

  // Forward substitution for L * y = b
  const y: number[] = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
      y[i] = b[i];
      for (let j = 0; j < i; j++) {
          y[i] -= L[i][j] * y[j];
      }
      y[i] /= L[i][i];
  }

  // Backward substitution for U * x = y
  const x: number[] = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
      x[i] = y[i];
      for (let j = i + 1; j < n; j++) {
          x[i] -= U[i][j] * x[j];
      }
      x[i] /= U[i][i];
  }

  return x;
}


// Solves a system of linear equations A * x = b by performing LU decomposition and substitution.
function solve(A: number[][], b: number[]): number[] {
  const LUResult = LU(A);
  return LUsolve(LUResult, b);
}

	function matrixXSolver(){
    //solve using Kronecker product notation
    //this is slightly slower than  Bartels–Stewart algorithm but due to the size of the matrices it should not matter
    //(Im x A + Bt x In)vec(X) = vec(C)
    
    

    //create the parts from the equation above
    const identityN: number[][] = numeric.identity(n);
    const identityM: number[][] = numeric.identity(m);
    
    //do kronecker products for each side and add them 
    const leftKronecker: number[][] = kronecker(identityM, matrixA);
    const rightKronecker: number[][] = kronecker(numeric.transpose(matrixB), identityN);
    const coefficient: number[][] = addMatrix(leftKronecker, rightKronecker);
    const vectorC: number[] = vectorize(matrixC)

    const vectorX: number[] = solve(coefficient, vectorC);
    
    console.log(vectorX);
    
    console.log(vectorize([[1,0],[0,1]]))






































		
	}

  return(
    <button onClick={() =>  {matrixXSolver(); console.log(matrixA, matrixB, matrixC, matrixX)}} 
    className = "compute-button" id = "compute"> Compute <span className="tnr2">X</span></button>
  )
}