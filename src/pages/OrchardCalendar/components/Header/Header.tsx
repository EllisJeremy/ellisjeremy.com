import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import orchardLogo from '../.././assets/OrchardLogoHeader.png'
import { taskStore } from '../../store';
let isTaskSet = false;


export default function Header(){
  //this is just here for the demo to show some examples of tasks; it will be removed later
  const {setTaskDatabase} = taskStore(); 
  
  if (!isTaskSet) {
      isTaskSet = true; // Mark as executed
      setTaskDatabase('1/4/2025', '^ to toggle edit ability', '', 'In the real version, admin is determined by a log in. For the demo, you can see either perspective by clicking the Toggle Admin Button', 'Orange', 'Jeremy');
      setTaskDatabase('1/1/2025', 'Click on any day to', '', '', 'Purple', 'Jeremy');
      setTaskDatabase('1/1/2025', 'create or remove a task', '', '', 'Purple', 'Jeremy');
      setTaskDatabase('1/15/2025', 'If there are too many tasks,', '', '', 'Blue', 'Jeremy');
      setTaskDatabase('1/15/2025', 'there will be a notification', '', '', 'Blue', 'Jeremy');
      setTaskDatabase('1/15/2025', 'click to see the rest', '', '', 'Blue', 'Jeremy');
      setTaskDatabase('1/15/2025', 'now you can see this task', '', '', 'Blue', 'Jeremy');
      setTaskDatabase('1/15/2025', 'and this one', '', '', 'Blue', 'Jeremy');
      setTaskDatabase('1/5/2025', '^ to change the month', '', '', 'Red', 'Jeremy');
  }
  


  const navigate = useNavigate();

  const homeLink = () => {
    navigate('/');
  };

  return(
    <div className={styles.headerDiv}>
      <div className={styles.headerDivFlex}>
        <img className={styles.headerLogo} src={orchardLogo} />
        <button className={styles.buttonHome} onClick={homeLink}>
           Home
        </button>
      </div>
    </div>
  )
  
}