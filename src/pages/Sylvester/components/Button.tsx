import { inputsStore, matricesStore } from "../store"
import numeric  from 'numeric';

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
  function addMatrix(matrix1: number[][], matrix2: number[][]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}


  function vectorize(matrix: number[][]){
    const vector: number[] = [];
    for (let col = 0; col < matrix[0].length; col++) {
      for (let row = 0; row < matrix.length; row++) {
          vector.push(matrix[row][col]);
      }
  }
    

    return vector;

  }

 //these 3 functions are necessary to solve the systems of equations we will make in the solver function 

interface LUResult {
  L: number[][];
  U: number[][];
  P: number[][]; 
}

// Decomposes a given matrix A into its LU decomposition with optional partial pivoting.
function LU(A: number[][], fast: boolean = false): LUResult {
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
function solve(A: number[][], b: number[], fast: boolean = false): number[] {
  const LUResult = LU(A, fast);
  return LUsolve(LUResult, b);
}

	function matrixXSolver(){
    //solve using Kronecker product notation
    //this is slightly slower than  Bartels–Stewart algorithm but due to the size of the matrices it should not matter
    //(Im x A + Bt x In)vec(X) = vec(C)
    
    
    console.log(matrixA, matrixB, matrixC)
    console.log(matrixB[1][0])
    //create the parts from the equation above
    const identityN: number[][] = numeric.identity(n);
    console.log('identityN')
    console.log(identityN)
    const identityM: number[][] = numeric.identity(m);
    console.log('identityM')
    console.log(identityM)
    const transposeB: number[][] = numeric.transpose(matrixB);
    console.log('transposeB')
    console.log(transposeB)

    //do kronecker products for each side and add them 
    const leftKronecker: number[][] = kronecker(identityM, matrixA);
    console.log('leftKronecker')
    console.log(leftKronecker)
    const rightKronecker: number[][] = kronecker(transposeB, identityN);
    console.log('rightKronecker')
    console.log(rightKronecker)
    const coefficient: number[][] = addMatrix(leftKronecker, rightKronecker);
    console.log('coefficient')
    console.log(coefficient)
    
    //solve system of equations for vector x
    const vectorC: number[] = vectorize(matrixC)
    console.log('vectorC')
    console.log(vectorC)
    const vectorX: number[] = solve(coefficient, vectorC);
    console.log('vectorX');
    console.log(vectorX);
    
    

    console.log(numeric.transpose([[1,2],[3,4]]))






    /*
    
    //testing section
    const matrixExample1: number[][] = [
      [1,2,3,4,5],
      [1,7,-7,8,5],
      [1,6,23,5,3],
    ]

    const matrixExample2: number[][] = [
      [3,2,3,4],
      [1,7,3,8],
      [1,6,23,5],
      [8,6,3,34]
    ]

    const matrixExample3: number[][] = [
      [3,2,3,4],
      [1,2,3,8],
      [1,5,23,5],
      [8,6,7,34]
    ]

    const vectorExample1: number[] = [1,2,3]

    //identity  yes
    console.log('identity')
    console.log(numeric.identity(5));
    console.log(numeric.identity(7));

    //transpose  yes
    console.log('transpose')
    console.log(numeric.transpose(matrixExample1))
    console.log(numeric.transpose(matrixExample2))

    //kronecker  yes*
    console.log('kronecker')
    console.log(kronecker(matrixExample1,matrixExample2))
    console.log(kronecker(matrixExample2,matrixExample3))

    //addMatrix yes
    console.log('add')
    console.log(addMatrix(matrixExample2,matrixExample3))

    //vectorize yes
    console.log('vectorize')
    console.log(vectorize(matrixExample1))
    console.log(vectorize(matrixExample2))

    //solve yes
    console.log('solve')
    console.log(solve(matrixExample1, vectorExample1))

    */
























		
	}

  return(
    <button onClick={matrixXSolver}
    className = "compute-button" > Compute <span className="tnr2">X</span></button>
  )
}

//onClick={() =>  {matrixXSolver(); console.log(matrixA, matrixB, matrixC, matrixX)}}