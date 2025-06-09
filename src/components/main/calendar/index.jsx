import './index.scss';
import { useEffect, useState } from 'react';

import { JDData } from '../../../data/JDdata';

import CalendarHeader from './header/index';
import CalendarContent from './content/days/index.jsx';

export default function Calendar({ setIsAddOpen }) {
  const isLogin = sessionStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    setDisplay({
      my: isLogin,
      all: !isLogin,
    });
  }, [isLogin]);

  // 달력 상태 월 관리
  const [month, setMonth] = useState(new Date());

  // 공고 검색 상태 관리
  const [dateType, setDateType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // 일정 필터링 상태 관리
  const [display, setDisplay] = useState({
    my: isLogin,
    all: !isLogin,
  });

  return (
    <div className="calendar">
      <div>
        <CalendarHeader
          month={month}
          setMonth={setMonth}
          display={display}
          setDisplay={setDisplay}
          setDateType={setDateType}
          setSearchTerm={setSearchTerm}
        />
        <div className="calendarBody">
          <CalendarContent
            month={month}
            display={display}
            dateType={dateType}
            searchTerm={searchTerm}
            setIsAddOpen={setIsAddOpen}
          />
        </div>
      </div>
      {/* {JDData && <JobDescription JDData={JDData} />} */}
    </div>
  );
}
