import './index.scss';
import { useState } from 'react';

function DateFilter({ setDateType }) {
  const DateTypes = [
    {
      title: '채용 마감일',
      value: '1',
    },
    {
      title: '채용시',
      value: '2',
    },
    {
      title: '상시',
      value: '3',
    },
    {
      title: '수시',
      value: '4',
    },
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  function handleDateChange(event) {
    const selectedDateType = event.target.value;
    setSelectedDate(selectedDateType);
    const selectedDateObject = DateTypes.find((type) => type.value.toString() === selectedDateType);
    setDateType(selectedDateObject);
  }

  return (
    <select onChange={handleDateChange} className="date-filter">
      <option value="" disabled>
        마감일 형식
      </option>
      {DateTypes.map((type, index) => (
        <option key={index} value={type.value}>
          {type.title}
        </option>
      ))}
    </select>
  );
}

export default DateFilter;
