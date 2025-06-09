import styled from 'styled-components';
import DateFilter from 'components/main/calendar/header/filters/date';
import SearchFilter from 'components/main/calendar/header/filters/search';
import CheckFilter from 'components/main/calendar/header/filters/check';

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
`;

export default function CalendarFilter({ setSearchTerm, setDateType, display, setDisplay }) {
  return (
    <Filter>
      <SearchFilter setSearchTerm={setSearchTerm} />
      <DateFilter setDateType={setDateType} />
      <CheckFilter display={display} setDisplay={setDisplay} />
    </Filter>
  );
}
