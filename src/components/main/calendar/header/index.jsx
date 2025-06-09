import CalendarMonth from 'components/main/calendar/header/month';
import CalendarFilter from 'components/main/calendar/header/filters';

function CalendarHeader({ display, setDisplay, month, setMonth, setDateType, setSearchTerm }) {
  return (
    <>
      <CalendarFilter
        display={display}
        setDisplay={setDisplay}
        setDateType={setDateType}
        setSearchTerm={setSearchTerm}
      />
      <CalendarMonth month={month} setMonth={setMonth} />
    </>
  );
}

export default CalendarHeader;
