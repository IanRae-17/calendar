import { useMemo } from "react";

import styles from "../css/calendar.module.css";

function Calendar({ startDay, month }) {
  const monthDays = useMemo(() => {
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }, []);

  function renderCalendarWeeks(startDay, month) {
    let calendar = [];
    let count = 0;
    for (let x = 1; x <= monthDays[month] + startDay - 1; x++) {
      if (x < startDay) {
        calendar.push(<div></div>);
      } else {
        count++;
        calendar.push(<div>{count}</div>);
      }
    }

    return calendar;
  }

  return (
    <div className={styles.calendar_container}>
      {renderCalendarWeeks(startDay, month)}
    </div>
  );
}

export default Calendar;
