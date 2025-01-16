import Titles from "./components/Titles/Titles";
import Dimensions from "./components/Dimensions/Dimensions";
import Matrices from "./components/Matrices/Matrices";
import Button from "./components/Button/Button";
import { Helmet } from "react-helmet";
import styles from "./Sylvester.module.css"

export default function Sylvester(){
  return(
    <>
    <Helmet>
        <body className={styles.sylvester} />
    </Helmet>
    <Titles />
    <Dimensions />
    <Matrices />
    <Button />
    </>
    
  )
}
  
