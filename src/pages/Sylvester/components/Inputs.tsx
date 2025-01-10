import { inputsStore, matricesStore } from "../store"


export default function Inputs() {
	
  const {n, m, setN, setM, incrementN, decrementN, incrementM, decrementM} = inputsStore();
	const { matrixA, setMatrixA} = matricesStore();

	const matrixAResizer = (input: number) => {
	
		console.log('n changes')
		
		
		const resizedMatrix: number[][] = matrixA.slice(0, input).map((row: number[]) => row.slice(0, input));
		
		setMatrixA(resizedMatrix);
		
		
		
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
						onChange={(e) =>{
							setN(e.currentTarget.valueAsNumber);
							matrixAResizer(e.currentTarget.valueAsNumber);
						}} 
						
						
						></input>
            <button className="dimension-input-button" onClick={decrementN}>-</button>
            <button className="dimension-input-button" onClick={incrementN}>+</button>
					</div>

					<div className = "dimension-input-div">
						<label className="dimension-label ">
							<span className="tnr2">m</span>&nbsp; = &nbsp;
						</label>
						<input className="dimension-input" type="number" placeholder="max 9" value = {m} onChange={(e) => setM(e.currentTarget.valueAsNumber)} min="1" max="9" step ="1"></input>
            <button className="dimension-input-button" onClick={decrementM}>-</button>
            <button className="dimension-input-button" onClick={incrementM}>+</button>
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
  
