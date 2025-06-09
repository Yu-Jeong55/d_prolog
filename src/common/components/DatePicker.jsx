import './Components.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePick({ onChange, selectedDate }) {
  return (
    <div className="datepicker">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        className="inputDate"
        minDate={new Date()}
        dayClassName={(d) =>
          d.getDate === selectedDate.getDate() ? 'selectedDay' : 'unselectedDay'
        }
      />
    </div>
  );
}
