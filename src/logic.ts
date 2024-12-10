
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


//this is not part of the program i was just using it to make sure the functions above worked
const A: number[][] = [
    [2, 1, 5, 6],
    [1, 3, 6, 12],
    [1, 3, 5, 12],
    [3, 5, 3, 2]
];
const b: number[] = [8, 13,5, 8];

// Solve the system
const x: number[] = solve(A, b);

console.log(x); 








//function to compute the sylvester equation
//I'm not naming it sylvester because I consistently spell that word wrong


function compute(matrixA: number[][],matrixB: number[][],matrixC: number[][]){


   
    // we are going to solve for the X terms using the from Y * X = C
   
    // Xv is a vector of our unknowns X matrix values
    // Cv is a vector of our known C values
    // Ym is a matrix of known A B values
    // the v and m denote vector or matrix variables respectively
    // I am naming these differently from the other matrices to avoid confusion
   
   


    let matrixY: number[][] = [[(matrixA[0][0] + matrixB[0][0]),matrixB[1][0],matrixA[0][1],0],
                               [matrixB[0][1],(matrixA[0][0] + matrixB[1][1]),0,matrixA[0][1]],
                               [matrixA[1][0],0,(matrixA[1][1] + matrixB[0][0]),matrixB[1][0]],
                               [0,matrixA[1][0],matrixB[0][1],(matrixA[1][1] + matrixB[1][1])]];
   
    let vectorC: number[] = [matrixC[0][0],matrixC[0][1],matrixC[1][0],matrixC[1][1]];                        




    //solve the system
    
   

    let vectorX: number[] = solve(matrixY, vectorC);
    

    //round to 10 decimal places
    vectorX = vectorX.map(x => Number(x.toFixed(10)));

   //convert vector x into a matrix
    let matrixX: number[][] = [[vectorX[0],vectorX[1]],
                               [vectorX[2],vectorX[3]]];
    //output matrix X
    return matrixX;
}




//START OF WEBSITE______________________________________________________________________________________



//retrieve the button from html
const button = document.getElementById('compute') as HTMLButtonElement;




//if the button is hit this program will run
//if the input has no value it defaults to 0 ?.value || '0'
button.addEventListener('click', () => {
    //retrieve values for A
    const A00: number = parseFloat((document.getElementById('A00') as HTMLInputElement)?.value || '0');
    const A01: number = parseFloat((document.getElementById('A01') as HTMLInputElement)?.value || '0');
    const A10: number = parseFloat((document.getElementById('A10') as HTMLInputElement)?.value || '0');
    const A11: number = parseFloat((document.getElementById('A11') as HTMLInputElement)?.value || '0');


    //retrieve values for B
    const B00: number = parseFloat((document.getElementById('B00') as HTMLInputElement)?.value || '0');
    const B01: number = parseFloat((document.getElementById('B01') as HTMLInputElement)?.value || '0');
    const B10: number = parseFloat((document.getElementById('B10') as HTMLInputElement)?.value || '0');
    const B11: number = parseFloat((document.getElementById('B11') as HTMLInputElement)?.value || '0');


    //retrieve values for C
    const C00: number = parseFloat((document.getElementById('C00') as HTMLInputElement)?.value || '0');
    const C01: number = parseFloat((document.getElementById('C01') as HTMLInputElement)?.value || '0');
    const C10: number = parseFloat((document.getElementById('C10') as HTMLInputElement)?.value || '0');
    const C11: number = parseFloat((document.getElementById('C11') as HTMLInputElement)?.value || '0');


    //create matrix for A
    let matrixA: number[][] = [[A00,A01],
                               [A10,A11]];


    //create matrix for B
    let matrixB: number[][] = [[B00,B01],
                               [B10,B11]];
    //create matrix for C
    let matrixC: number[][] = [[C00,C01],
                               [C10,C11]];
    //compute X
    let matrixX: number[][] = compute(matrixA,matrixB,matrixC);
   
    //display X
    (document.getElementById('X00') as HTMLParagraphElement).textContent = matrixX[0][0].toString();
    (document.getElementById('X01') as HTMLParagraphElement).textContent = matrixX[0][1].toString();
    (document.getElementById('X10') as HTMLParagraphElement).textContent = matrixX[1][0].toString();
    (document.getElementById('X11') as HTMLParagraphElement).textContent = matrixX[1][1].toString();
   
});






