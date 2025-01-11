import { inputsStore, matricesStore } from "../store"


export default function Inputs() {
	
  const {n, m, setN, setM, incrementN, decrementN, incrementM, decrementM} = inputsStore();
	const { matrixA, matrixB, matrixC,  setMatrixA, setMatrixB, setMatrixC, setMatrixX} = matricesStore();

	const matrixAResizer = (inputN: number) => {
		const resizedMatrix: number[][] = matrixA.slice(0, inputN).map((row: number[]) => row.slice(0, inputN));
		setMatrixA(resizedMatrix);
	}

	const matrixBResizer = (inputM: number) => {
		const resizedMatrix: number[][] = matrixB.slice(0, inputM).map((row: number[]) => row.slice(0, inputM));
		setMatrixB(resizedMatrix);
	}

	const matrixCResizer = (inputN: number, inputM: number) => {
		const resizedMatrix: number[][] = matrixC.slice(0, inputN).map((row: number[]) => row.slice(0, inputM));
		setMatrixC(resizedMatrix);
	}

	const matrixXResizer = (inputN: number, inputM: number) => {
		if (inputN < 1){
			inputN = 1;
		}
		if (inputM < 1){
			inputM = 1;
		}
		
		const resizedMatrix: string[][] = Array.from({ length: inputN }, () => Array(inputM).fill(''));
		setMatrixX(resizedMatrix);
	}
		


	return(
    <>
			<div className = "dimension-div">
				<p className="dimension-title">Enter dimensions n and m to customize the matrices below:</p>
				
				

				<div className = "full-dimension-input-div">

					<div className = "dimension-input-div">
						<label className="dimension-label" htmlFor  = "dimension-n">
							<span className="tnr2">n</span>&nbsp;&nbsp; = &nbsp;
						</label>
						<input className="dimension-input" type="number" placeholder="max 9" value = {n} 
							onChange={(e) => {
								setN(e.currentTarget.valueAsNumber);
								matrixAResizer(e.currentTarget.valueAsNumber);
								matrixCResizer(e.currentTarget.valueAsNumber, m)
								matrixXResizer(e.currentTarget.valueAsNumber, m)
							}} />
						
            <button className="dimension-input-button" onClick={() => {decrementN(); matrixAResizer(n - 1); matrixCResizer(n - 1, m);; matrixXResizer(n - 1, m)}}>-</button>
            <button className="dimension-input-button" onClick={() => {incrementN(); matrixXResizer(n + 1, m)}}>+</button>
					</div>

					<div className = "dimension-input-div">
						<label className="dimension-label ">
							<span className="tnr2">m</span>&nbsp; = &nbsp;
						</label>
						<input className="dimension-input" type="number" placeholder="max 9" value = {m}
							onChange={(e) => {
								setM(e.currentTarget.valueAsNumber)
								matrixBResizer(e.currentTarget.valueAsNumber);
								matrixCResizer(n, e.currentTarget.valueAsNumber );
								matrixXResizer(n, e.currentTarget.valueAsNumber );
						}} />

            <button className="dimension-input-button" onClick={() => {decrementM(); matrixBResizer(m - 1); matrixCResizer(n, m - 1); matrixXResizer(n, m - 1)}}>-</button>
            <button className="dimension-input-button" onClick={() => {incrementM(); matrixXResizer(n, m + 1)}}>+</button>
					</div>

				</div>

				<div className = "full-dimension-examples-div">

					<div className = "dimension-examples-div">
						<span className="tnr2">A</span> is <span className="tnr2">n</span>&times;<span className="tnr2">n</span>
					</div>

					<div className = "dimension-examples-div">
						<span className="tnr2">B</span> is <span className="tnr2">m</span>&times;<span className="tnr2">m</span>
					</div>

					<div className = "dimension-examples-div">
						<span className="tnr2">C</span> is <span className="tnr2">n</span>&times;<span className="tnr2">m</span>
					</div>

					<div className = "dimension-examples-div">
						<span className="tnr2">X</span> is <span className="tnr2">n</span>&times;<span className="tnr2">m</span>
					</div>
				</div>
				
			</div>
    </>
  );
}
  
