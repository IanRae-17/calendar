import styles from "../css/calendar.module.css";

function CalendarHeader() {
  return (
    <div className={styles.calendar_header}>
      <div>SUNDAY</div>
      <div>MONDAY</div>
      <div>TUESDAY</div>
      <div>WEDNESDAY</div>
      <div>THURSDAY</div>
      <div>FRIDAY</div>
      <div>SATURDAY</div>
    </div>
  );
}

export default CalendarHeader;
