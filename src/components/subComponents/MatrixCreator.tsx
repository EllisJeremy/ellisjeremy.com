export function CreateMatrixA(
	{n = 7}:
	{n?: number}
){
	return (
    <>
			{/* create the columns */}
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each column (= to rows) */}
					{Array.from({ length: n }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* create each input */}
						<input className ="matrix-cell-input" type="number" id = {"A" + indexN.toString() + indexM.toString() } step="any"></input>

					</div>
				))}
				</div>
      ))}
    </>
  );
}

export function CreateMatrixB(
	{n = 3, m = 5}:
	{n?: number, m?: number}
){
	return (
    <>
			{/* create the columns */}
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each column (= to rows) */}
					{Array.from({ length: m }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* create each input */}
						<input className ="matrix-cell-input" type="number" id = {"A" + indexN.toString() + indexM.toString() } step="any"></input>

					</div>
				))}
				</div>
      ))}
    </>
  );
}

export function CreateMatrixC(
	{n = 3, m = 5}:
	{n?: number, m?: number}
){
	return (
    <>
			{/* create the columns */}
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each column (= to rows) */}
					{Array.from({ length: m }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* create each input */}
						<input 
							className ="matrix-cell-input" 
							type="number" 
							id = {"A" + indexN.toString() + indexM.toString()} 
							step="any">
						</input>
					</div>
				))}
				</div>
      ))}
    </>
  );
}

export function CreateMatrixX(
	{n = 3, m = 5}:
	{n?: number, m?: number}
){
	return (
    <>
			{/* create the columns */}
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each column (= to rows) */}
					{Array.from({ length: m }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* create each input */}
						<input className ="matrix-cell-input" type="number" id = {"A" + indexN.toString() + indexM.toString() } step="any"></input>

					</div>
				))}
				</div>
      ))}
    </>
  );
}