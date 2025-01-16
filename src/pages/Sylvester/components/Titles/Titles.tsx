import styles from "./Titles.module.css"

export default function Titles() {
  return(
        
		<header>
			<h1 className={styles.h1}>
				Sylvester Solver
			</h1>
			<h2 className={styles.h2}>  
				Computes a solution (<span className={styles.tnr}>X</span>) to the Sylvester equation <span className={styles.tnr}> AX + XB  = C </span>
			</h2>
		</header>
     
  );
}


 