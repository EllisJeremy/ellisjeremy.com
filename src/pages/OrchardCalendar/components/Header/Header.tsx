import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import orchardLogo from '../.././assets/OrchardLogoHeader.png'
export default function Header(){

  
  const navigate = useNavigate();

  const homeLink = () => {
    navigate('/');
  };

  return(
    <div className={styles.headerDiv}>
      <div className={styles.headerDivFlex}>
        <img className={styles.headerLogo} src={orchardLogo} />
        <button className={styles.buttonHome} onClick={homeLink}>
           Return Home
        </button>
      </div>
    </div>
  )
  
}