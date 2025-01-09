





export function CreateMatrixA(
	{n = 2, }:
	{n?: number}
){
	if( n > 9 ){
		n = 9
	}

	
	
	return (
    <>
		
			{/* create the columns */}
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each column (= to rows) */}
					{Array.from({ length: n }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* create each input */}
						<input 
							className ="matrix-cell-input" 
							type="number" 
							step="any"
							
						/>
              
						
						
					</div>
				))}
				</div>
      ))}
			
    </>
  );
}



export function CreateMatrixB(
	{m = 2}:
	{ m?: number}
){
	if( m > 9 ){
		m = 9
	}
	return (
    <>
			{/* create the columns */}
      {Array.from({ length: m }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each column (= to rows) */}
					{Array.from({ length: m }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* create each input */}
						<input 
							className ="matrix-cell-input" 
							type="number" 
							//value = {"B" + indexN.toString() + indexM.toString() } 
							step="any">
						</input>

					</div>
				))}
				</div>
      ))}
    </>
  );
}






export function CreateMatrixC(
	{n = 2, m = 2}:
	{n?: number, m?: number}
){
	if( n > 9 ){
		n = 9
	}
	if( m > 9 ){
		m = 9
	}
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
	{n = 2, m = 2}:
	{n?: number, m?: number}
){
	if( n > 9 ){
		n = 9
	}
	if( m > 9 ){
		m = 9
	}
	return (
		
    <>
			{/* create the columns */}
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each column (= to rows) */}
					{Array.from({ length: m }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* create each input */}
						<p className ="matrix-cell-output">textsss</p>

					</div>
				))}
				</div>
      ))}
    </>
  );
}