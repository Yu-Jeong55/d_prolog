import styled from 'styled-components';
import { useState, useEffect } from 'react';
import DatePick from 'common/components/DatePicker';
import { parse } from 'date-fns';

const DDayBox = styled.div`
  background-color: rgb(249, 148, 23);
  color: rgb(245, 245, 245);
  border-radius: 10px;
  padding: 2px 6px;
  margin: 0px 0px 4px 5px;
  font-size: 12px;
`;

function DDay({ deadline }) {
  const [daysDiff, setDaysDiff] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date(deadline));

  useEffect(() => {
    const currentDate = new Date();
    const timeDiff = selectedDate - currentDate;
    const calcDaysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    if (calcDaysDiff === 0) {
      setDaysDiff('D-DAY');
    } else if (calcDaysDiff > 0) {
      setDaysDiff(`D-${calcDaysDiff}`);
    } else {
      setDaysDiff(`D+${Math.abs(calcDaysDiff)}`);
    }
  }, [selectedDate]);

  function handleChange(date) {
    setSelectedDate(date);
  }

  return (
    <div className="datepicker">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '0px 5px',
        }}
      >
        <span style={{ fontSize: '13.5px' }}>마감일</span>
        <DDayBox>{daysDiff}</DDayBox>
      </div>
      <DatePick
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onChange={handleChange}
      />
    </div>
  );
}

export default DDay;
