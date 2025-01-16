
import Header from './components/Header/Header.tsx';
import CalendarHeaderMonths from './components/CalendarHeaderMonths/CalendarHeaderMonths.tsx'; 
import CalendarHeaderDays from './components/CalendarHeaderDays/CalendarHeaderDays.tsx';
import Calendar from './components/Calendar/Calendar.tsx';
import TaskModal from './components/TaskModal/TaskModal.tsx';
import { Helmet } from "react-helmet";
import styles from './OrchardCalendar.module.css';

export default function OrchardCalendar() {
  
  return (
    <>
      <Helmet>
        <body className={styles.orchardCalendar} />
      </Helmet>
      <Header />
      <div className={styles.calendar}>
        <CalendarHeaderMonths />
        <CalendarHeaderDays /> 
        <Calendar />
        <TaskModal />
      </div>
    </>
  );
}