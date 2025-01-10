import { matricesStore } from "../store"


export default function Button(){

  const {matrixA, matrixB, matrixC, matrixX, setMatrixX } = matricesStore();

	function matrixXSolver(){
    console.log("is it working?")
		const testMatrix: number[][] = [[1,2],[3,4]];
    setMatrixX(testMatrix);
		
	}

  return(
    <button onClick={() =>  {matrixXSolver(); console.log(matrixA, matrixB, matrixC, matrixX)}} 
    className = "compute-button" id = "compute"> Compute <span className="tnr2">X</span></button>
  )
}