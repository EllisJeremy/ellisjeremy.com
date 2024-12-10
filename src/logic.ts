


import {create, all } from "mathjs";
const math = create(all);







//function to compute the sylvester equation
//I'm not naming it sylvester because I consistently spell that word wrong 

function compute(matrixA: number[][],matrixB: number[][],matrixC: number[][]){

    
    // we are going to solve for the X terms using the from Y * X = C
    
    // Xv is a vector of our unknowns X matrix values 
    // Cv is a vector of our known C values 
    // Ym is a matrix of known A B values 
    // the v and m denote vector or matrix variables respectively
    // I am naming these differently from the other matrices to avoid confusion
    
    

    let Ym: number[][] = [[(matrixA[0][0] + matrixB[0][0]),matrixB[1][0],matrixA[0][1],0],
                          [matrixB[0][1],(matrixA[0][0] + matrixB[1][1]),0,matrixA[0][1]],
                          [matrixA[1][0],0,(matrixA[1][1] + matrixB[0][0]),matrixB[1][0]],
                          [0,matrixA[1][0],matrixB[0][1],(matrixA[1][1] + matrixB[1][1])]];
    
    let Cv: number[] = [matrixC[0][0],matrixC[0][1],matrixC[1][0],matrixC[1][1]];                         


    //solve the system
    let Xv = math.lusolve(Ym,Cv) as number[][];
    

    let example: number = Xv[0][0];


    //create matrix X
    let matrixX: number[][] = [[Xv[0][0],Xv[1][0]],
                               [Xv[2][0],Xv[3][0]]];
    //output matrix X
    return matrixX;
}


//retrieve the button from html
const button = document.getElementById('compute') as HTMLButtonElement;


//if the button is hit this program will run
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

const A00: number = parseFloat((document.getElementById('A00') as HTMLInputElement)?.value || '0');
const A01: number = parseFloat((document.getElementById('A01') as HTMLInputElement)?.value || '0');
const A10: number = parseFloat((document.getElementById('A10') as HTMLInputElement)?.value || '0');
const A11: number = parseFloat((document.getElementById('A11') as HTMLInputElement)?.value || '0');

let matrixA: number[][] = [[A00,A01],
                          [A10,A11]];
                          
(document.getElementById('X00') as HTMLParagraphElement).textContent = matrixA[0][0].toString();
(document.getElementById('X01') as HTMLParagraphElement).textContent = matrixA[0][1].toString();
(document.getElementById('X10') as HTMLParagraphElement).textContent = matrixA[1][0].toString();
(document.getElementById('X11') as HTMLParagraphElement).textContent = matrixA[1][1].toString();
