import './index.scss';
import { format } from 'date-fns';
import Recruit from 'components/main/calendar/Recruit';
import { CiSquarePlus } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { JDData } from 'data/JDdata';
import { isSameMonth, isSameDay, addDays, parseISO } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';

function CalendarDays({ month, display, dateType, searchTerm, selectedDate, setIsAddOpen }) {
  const navigate = useNavigate();
  const isLogin = sessionStorage.getItem('isLoggedIn') === 'true';
  // 달의 시작일과 마지막일
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(monthStart);

  // 전체 달력의 시작일과 마지막일
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const allDays = []; // 달력의 모든 날짜
  let oneWeek = []; // 한 주
  let day = startDate; // 페이지의 시작일
  let formattedDate = ''; // 각 날짜

  function handleMyPlanClick(data) {
    navigate(`/process?p_id=${data.id}&template=paper&t_id=1`, {
      state: {
        company: data.company,
        type: 'paper',
        deadline: data.end_date,
      },
    });
  }

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const dayPlans = JDData.process.filter((data) => {
        const endDate = data.end_date ? parseISO(data.end_date) : new Date();
        return isSameDay(endDate, day);
      });

      oneWeek.push(
        <div
          // 이번달 날짜가 아니면 disabled
          // 이번달 날짜이면 valid
          // 오늘 날짜는 selected
          className={`dayBox ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
                ? 'selected'
                : format(month, 'M') !== format(day, 'M')
                  ? 'not-valid'
                  : 'valid'
          }`}
          key={day}
        >
          <div className="plusHover">
            <div className={format(month, 'M') !== format(day, 'M') ? 'text not-valid' : 'text'}>
              {formattedDate}
            </div>
            <CiSquarePlus className="plusButton" onClick={() => setIsAddOpen(true)} />
          </div>
          {isLogin && display.my && (
            <ul className="my-plan-wrapper">
              {dayPlans?.map((data, index) => (
                <li className="my-plan" key={index} onClick={() => handleMyPlanClick(data)}>
                  {data.company}
                </li>
              ))}
            </ul>
          )}
          {display.all && (
            <Recruit
              day={day}
              searchTerm={searchTerm}
              dateType={dateType}
              CompanyData={JDData.jd}
            />
          )}
        </div>
      );
      day = addDays(day, 1);
    }
    allDays.push(
      <div className="oneWeek" key={day}>
        {oneWeek}
      </div>
    );
    oneWeek = [];
  }

  return <div className="allDays">{allDays}</div>;
}

export default CalendarDays;
