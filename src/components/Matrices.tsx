function Matricies() {
	return(
    <>
			<div className = "full-matrix-div">

			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						A =
					</div>

					<div className="dynamic-matrix-div"> 
						
						
						<div className = "matrix-row-div">
							<div className="matrix-cell-div">
								<input className="matrix-cell-input" type="number" id = "A00" step ="1"></input>
							</div>

							<div className="matrix-cell-div">
								<input className="matrix-cell-input" type="number" id = "A01" step ="1"></input>
							</div>
						</div>

						
						

						<div className = "matrix-row-div">
							<div className="matrix-cell-div">
								<input className="matrix-cell-input" type="number" id = "A10" step ="1"></input>
							</div>

							<div className="matrix-cell-div">
								<input className="matrix-cell-input" type="number" id = "A11" step ="1"></input>
							</div>
						</div>
						
						
					</div>
				</div>
			</div>



			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						B =
					</div>

					<div className="dynamic-matrix-div"> 
						
						
						
						
						
						
					</div>
				</div>
			</div>




			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						C =
					</div>

					<div className="dynamic-matrix-div"> 
						
						
						
						
						
					</div>
				</div>
			</div>

			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						X =
					</div>

					<div className="dynamic-matrix-div"> 
						
						
						
						
						
					</div>
				</div>
			</div>

			</div>

			<button className = "compute-button" id = "compute"> Compute <span className="tnr2">X</span></button>
		</>
	)
}

export default Matricies;