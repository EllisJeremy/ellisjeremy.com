import styles from "./ReturnButton.module.css"
import { useNavigate } from 'react-router-dom';
export default function Button(){

  
  const navigate = useNavigate();

  const homeLink = () => {
      navigate('/');
    };
	

  return(
    <button onClick={homeLink} className = {styles.computeButton} > Home </button>
  )
}

