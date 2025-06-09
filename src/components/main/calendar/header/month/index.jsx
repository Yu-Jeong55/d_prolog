import './index.scss';
import { format, addMonths, subMonths } from 'date-fns';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function CalendarMonth({ month, setMonth }) {
  function prevMonth() {
    const newMonth = subMonths(month, 1);
    setMonth(newMonth);
  }

  const nextMonth = () => {
    const newMonth = addMonths(month, 1);
    setMonth(newMonth);
  };

  return (
    <div className="calendarHeader">
      <SlArrowLeft onClick={prevMonth} />
      <div className="yyyymm">
        <div className="mm">{format(month, 'MMMM')}</div>
        <div className="yy">{format(month, 'yyyy')}</div>
      </div>
      <SlArrowRight onClick={nextMonth} />
    </div>
  );
}

export default CalendarMonth;
