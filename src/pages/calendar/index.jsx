import { useState } from 'react';
import Calendar from 'components/main/calendar/index';
import AddProcessModal from 'components/modals/add/index';

function CalendarPage() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <>
      <Calendar setIsAddOpen={setIsAddOpen} />
      <AddProcessModal isAddOpen={isAddOpen} setIsAddOpen={setIsAddOpen} />
    </>
  );
}

export default CalendarPage;
