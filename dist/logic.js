"use strict";
//these 3 functions are necessary to solve the systems of equations we will make in the solver function 
// Decomposes a given matrix A into its LU decomposition with optional partial pivoting.
function LU(A, fast = false) {
    const n = A.length;
    const L = Array.from({ length: n }, (_, i) => Array(n).fill(0).map((_, j) => (i === j ? 1 : 0)));
    const U = A.map(row => row.slice());
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
function LUsolve(LU, b) {
    const { L, U } = LU;
    const n = L.length;
    // Forward substitution for L * y = b
    const y = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        y[i] = b[i];
        for (let j = 0; j < i; j++) {
            y[i] -= L[i][j] * y[j];
        }
        y[i] /= L[i][i];
    }
    // Backward substitution for U * x = y
    const x = Array(n).fill(0);
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
function solve(A, b, fast = false) {
    const LUResult = LU(A, fast);
    return LUsolve(LUResult, b);
}
//this is not part of the program i was just using it to make sure the functions above worked
const A = [
    [2, 1, 5, 6],
    [1, 3, 6, 12],
    [1, 3, 5, 12],
    [3, 5, 3, 2]
];
const b = [8, 13, 5, 8];
// Solve the system
const x = solve(A, b);
console.log(x);
//function to compute the sylvester equation
//I'm not naming it sylvester because I consistently spell that word wrong
function compute(matrixA, matrixB, matrixC) {
    // we are going to solve for the X terms using the from Y * X = C
    // Xv is a vector of our unknowns X matrix values
    // Cv is a vector of our known C values
    // Ym is a matrix of known A B values
    // the v and m denote vector or matrix variables respectively
    // I am naming these differently from the other matrices to avoid confusion
    let matrixY = [[(matrixA[0][0] + matrixB[0][0]), matrixB[1][0], matrixA[0][1], 0],
        [matrixB[0][1], (matrixA[0][0] + matrixB[1][1]), 0, matrixA[0][1]],
        [matrixA[1][0], 0, (matrixA[1][1] + matrixB[0][0]), matrixB[1][0]],
        [0, matrixA[1][0], matrixB[0][1], (matrixA[1][1] + matrixB[1][1])]];
    let vectorC = [matrixC[0][0], matrixC[0][1], matrixC[1][0], matrixC[1][1]];
    //solve the system
    let vectorX = solve(matrixY, vectorC);
    //round to 10 decimal places
    vectorX = vectorX.map(x => Number(x.toFixed(10)));
    //convert vector x into a matrix
    let matrixX = [[vectorX[0], vectorX[1]],
        [vectorX[2], vectorX[3]]];
    //output matrix X
    return matrixX;
}
//START OF WEBSITE______________________________________________________________________________________
//retrieve the button from html
const button = document.getElementById('compute');
//if the button is hit this program will run
//if the input has no value it defaults to 0 ?.value || '0'
button.addEventListener('click', () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    //retrieve values for A
    const A00 = parseFloat(((_a = document.getElementById('A00')) === null || _a === void 0 ? void 0 : _a.value) || '0');
    const A01 = parseFloat(((_b = document.getElementById('A01')) === null || _b === void 0 ? void 0 : _b.value) || '0');
    const A10 = parseFloat(((_c = document.getElementById('A10')) === null || _c === void 0 ? void 0 : _c.value) || '0');
    const A11 = parseFloat(((_d = document.getElementById('A11')) === null || _d === void 0 ? void 0 : _d.value) || '0');
    //retrieve values for B
    const B00 = parseFloat(((_e = document.getElementById('B00')) === null || _e === void 0 ? void 0 : _e.value) || '0');
    const B01 = parseFloat(((_f = document.getElementById('B01')) === null || _f === void 0 ? void 0 : _f.value) || '0');
    const B10 = parseFloat(((_g = document.getElementById('B10')) === null || _g === void 0 ? void 0 : _g.value) || '0');
    const B11 = parseFloat(((_h = document.getElementById('B11')) === null || _h === void 0 ? void 0 : _h.value) || '0');
    //retrieve values for C
    const C00 = parseFloat(((_j = document.getElementById('C00')) === null || _j === void 0 ? void 0 : _j.value) || '0');
    const C01 = parseFloat(((_k = document.getElementById('C01')) === null || _k === void 0 ? void 0 : _k.value) || '0');
    const C10 = parseFloat(((_l = document.getElementById('C10')) === null || _l === void 0 ? void 0 : _l.value) || '0');
    const C11 = parseFloat(((_m = document.getElementById('C11')) === null || _m === void 0 ? void 0 : _m.value) || '0');
    //create matrix for A
    let matrixA = [[A00, A01],
        [A10, A11]];
    //create matrix for B
    let matrixB = [[B00, B01],
        [B10, B11]];
    //create matrix for C
    let matrixC = [[C00, C01],
        [C10, C11]];
    //compute X
    let matrixX = compute(matrixA, matrixB, matrixC);
    //display X
    document.getElementById('X00').textContent = matrixX[0][0].toString();
    document.getElementById('X01').textContent = matrixX[0][1].toString();
    document.getElementById('X10').textContent = matrixX[1][0].toString();
    document.getElementById('X11').textContent = matrixX[1][1].toString();
});
