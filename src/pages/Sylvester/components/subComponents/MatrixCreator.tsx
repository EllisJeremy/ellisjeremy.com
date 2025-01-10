import { matricesStore } from "../../store";


 


export function CreateMatrixA(
	{n = 2, }:
	{n?: number}
){

	const { matrixA, setMatrixA} = matricesStore();

	if( n > 9 ){
		n = 9
	}

	const handleCellChange = (rowIndex: number, colIndex: number, value: number) => {
		const updatedMatrix: number[][] = matrixA;
		updatedMatrix[rowIndex][colIndex] = value;
		
		
		setMatrixA(updatedMatrix); // Update the store with the modified matrix
	};
	
	
	
	return (
    <>
		
			{/* create the rows */}
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each row */}
					{Array.from({ length: n }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* create each input */}
						<input 
							className ="matrix-cell-input" 
							type="number" 
							
							value={matrixA[indexN]?.[indexM]}//if this breaks add || 0 to the end
							onChange={(e) => {
								handleCellChange(indexN, indexM, parseFloat(e.target.value));   
								console.log('Key pressed in cell', indexN, indexM, e.target.value);
								console.log(matrixA)
							}} //if this breaks add || 0 to the end
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