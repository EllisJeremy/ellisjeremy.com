import { matricesStore } from "../../store";

export default function matrixXSolver(){
  const { matrixC, setMatrixX, setDisplayMatrixX} = matricesStore();







  setDisplayMatrixX(true);
  setMatrixX(matrixC)
}