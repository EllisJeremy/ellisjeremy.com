function Static() {
	return(
		
		<div>
			<header>
      <h1>
        Sylvester Solver
      </h1>
      <h2>  
        Computes a solution (<span className="tnr">X</span>) to the Sylvester equation <span className="tnr"> AX + XB  = C </span>
      </h2>
    </header>

    <main>

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

    </main>

		</div>
	);
}

export default Static;