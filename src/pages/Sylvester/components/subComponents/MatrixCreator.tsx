import { matricesStore } from "../../store";


 


export function CreateMatrixA(
	{n = 2, }:
	{n?: number}
){

	if( n > 9 ){
		n = 9
	}

	const { matrixA, setMatrixA} = matricesStore();

	const handleCellChangeA = (rowIndex: number, colIndex: number, value: number) => {
		if ( matrixA[rowIndex] === undefined) {
			matrixA[rowIndex] = [];
		}
		const updatedMatrix: number[][] = matrixA;
		updatedMatrix[rowIndex][colIndex] = value;
		
		setMatrixA(updatedMatrix); 
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
							
							value={matrixA[indexN]?.[indexM]}
							onChange={(e) => {
								handleCellChangeA(indexN, indexM, parseFloat(e.target.value));   
								console.log('Key pressed in cell', indexN, indexM, e.target.value);
								
							}} 
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

	const { matrixB, setMatrixB} = matricesStore();

	const handleCellChangeB = (rowIndex: number, colIndex: number, value: number) => {
		if ( matrixB[rowIndex] === undefined) {
			matrixB[rowIndex] = [];
		}
		const updatedMatrix: number[][] = matrixB;
		updatedMatrix[rowIndex][colIndex] = value;
		
		setMatrixB(updatedMatrix); 
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
							 
							value={matrixB[indexN]?.[indexM]}
							onChange={(e) => {
								handleCellChangeB(indexN, indexM, parseFloat(e.target.value));   
								console.log('Key pressed in cell', indexN, indexM, e.target.value);
								
							}} 
						/>
						

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

	const { matrixC, setMatrixC} = matricesStore();

	const handleCellChangeC = (rowIndex: number, colIndex: number, value: number) => {
		if ( matrixC[rowIndex] === undefined) {
			matrixC[rowIndex] = [];
		}
		const updatedMatrix: number[][] = matrixC;
		updatedMatrix[rowIndex][colIndex] = value;
		
		setMatrixC(updatedMatrix); 
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
							
							value={matrixC[indexN]?.[indexM]}
							onChange={(e) => {
								handleCellChangeC(indexN, indexM, parseFloat(e.target.value));   
								console.log('Key pressed in cell', indexN, indexM, e.target.value);
								
							}} />
						
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

	//const {matrixX} = matricesStore();


	

	return (
		
    <>
			{/* create the columns */}
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className="matrix-row-div">
					
					{/* create the cells in each column (= to rows) */}
					{Array.from({ length: m }, (_, indexM) => (
					<div key={indexM} className="matrix-cell-div">

						{/* this needs to be an input to handle overflow (when the number is bigger than the element) 
						this may show an error in the browser console, but this is the intended implementation*/}
						<input className = "matrix-cell-output" value= {''} />

					</div>
				))}
				</div>
      ))}
    </>
  );
}