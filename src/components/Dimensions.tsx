export default function Dimensions(){
	return(
		<div className = "dimension-div">
			<p className="dimension-title">Enter dimensions n and m to customize the matrices below:</p>
			
			

			<div className = "full-dimension-input-div">

				<div className = "dimension-input-div">
					<label className="dimension-label" htmlFor  = "dimension-n">
						<span className="tnr2">n</span>&nbsp; = &nbsp;
					</label>
					<input className="dimension-input" type="number" placeholder="max 9" id = "dimension-n" min="1" max="9" step ="1"></input>
				</div>

				<div className = "dimension-input-div">
					<label className="dimension-label ">
						<span className="tnr2">m</span> = &nbsp;
					</label>
					<input className="dimension-input" type="number" placeholder="max 9" id = "dimension-m" min="1" max="9" step ="1"></input>
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
	);
}

