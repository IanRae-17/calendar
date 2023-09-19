import Calendar from "./components/calendar";
import CalendarHeader from "./components/CalendarHeader";

import styles from "./css/calendar.module.css";

function App() {
  return (
    <div className={styles.body}>
      <CalendarHeader />
      <Calendar startDay={4} month={1} />
    </div>
  );
}

export default App;
