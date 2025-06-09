import './index.scss';

// 전체 요일 component
function CalendarWeeks() {
  const weeks = [];
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // 각 요일 component
  for (let i = 0; i < 7; i++) {
    weeks.push(
      <div className="week" key={i}>
        {week[i]}
      </div>
    );
  }

  return <div className="weeks">{weeks}</div>;
}

export default CalendarWeeks;
