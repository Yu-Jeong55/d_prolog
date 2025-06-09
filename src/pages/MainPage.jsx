import { useState, useEffect } from 'react';

import MainHeader from 'components/main/MainHeader';
import Kanban from 'components/main/kanban/Kanban';
import CalendarPage from 'pages/calendar';

import styled from 'styled-components';

const Direction = styled.div`
  padding: 20px;
  background-color: #f5f5f59f;
  border-radius: 10px;
`;

const Directions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
  transition: all 0.5s ease-in-out;
`;

function MainPage() {
  const [isOn, setIsOn] = useState(false);
  const [showDirection, setShowDirection] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDirection(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  function toggleHandler() {
    setIsOn(!isOn);
  }

  return (
    <>
      {/* <MainHeader isOn={isOn} setIsOn={setIsOn} toggleHandler={toggleHandler} /> */}
      {/* {isOn ? <Kanban /> : <CalendarPage />} */}
      <CalendarPage />

      <Directions $show={showDirection}>
        <Direction>각 공고를 또는 + 버튼을 클릭해 프로세스를 시작해 보세요.</Direction>
        <Direction>내 일정을 눌러 진행중인 프로세스를 확인해보세요.</Direction>
      </Directions>
    </>
  );
}

export default MainPage;
