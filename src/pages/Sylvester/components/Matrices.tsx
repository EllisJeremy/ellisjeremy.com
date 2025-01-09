import {CreateMatrixA, CreateMatrixB, CreateMatrixC, CreateMatrixX} from "./subComponents/MatrixCreator.tsx"
import {useState} from 'react';




export default function Matrices() {

	{/*inputs*/}
	const [n, setN] = useState<number>()
	const [m, setM] = useState<number>()

	function handleNChange(event: React.ChangeEvent<HTMLInputElement>){
		setN(event.currentTarget.valueAsNumber);
	}
	function handleMChange(event: React.ChangeEvent<HTMLInputElement>){
		setM(event.currentTarget.valueAsNumber);
	}

	{/*matrices*/}
	




	



		
	return(
    <>
		{/*First part is for the matrix dimension inputs */}



			<div className = "dimension-div">
				<p className="dimension-title">Enter dimensions n and m to customize the matrices below:</p>
				
				

				<div className = "full-dimension-input-div">

					<div className = "dimension-input-div">
						<label className="dimension-label" htmlFor  = "dimension-n">
							<span className="tnr2">n</span>&nbsp; = &nbsp;
						</label>
						<input className="dimension-input" type="number" placeholder="max 9" value = {n} onChange={handleNChange} min="1" max="9" step ="1"></input>
					</div>

					<div className = "dimension-input-div">
						<label className="dimension-label ">
							<span className="tnr2">m</span> = &nbsp;
						</label>
						<input className="dimension-input" type="number" placeholder="max 9" value = {m} onChange={handleMChange} min="1" max="9" step ="1"></input>
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



			{/*Second part is for the matrix value inputs */}



			<div className = "full-matrix-div">

			{/* Matrix A */}

			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						A =
					</div>
					
					<div className="dynamic-matrix-div"> 
						
					  {/* Dynamic part */}
            <CreateMatrixA n = {n} />
						
						
					</div>
				</div>
			</div>



			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						B =
					</div>

					<div className="dynamic-matrix-div"> 
						{/* Dynamic part */}
						<CreateMatrixB m = {m} />
						
						
						
						
					</div>
				</div>
			</div>




			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						C =
					</div>

					<div className="dynamic-matrix-div"> 
						{/* Dynamic part */}
						<CreateMatrixC n = {n} m = {m} />
						
						
						
					</div>
				</div>
			</div>



			{/*Last part is for the matrix value outputs */}



			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						X =
					</div>

					<div className="dynamic-matrix-div"> 
						{/* Dynamic part */}
						<CreateMatrixX  n = {n} m = {m}/>
						
						
						
					</div>
				</div>
			</div>

			</div>

			<button className = "compute-button" id = "compute"> Compute <span className="tnr2">X</span></button>
		</>
	);
}

