import ProgressBarBox from 'components/dashboard/Dashboard';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 646px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Title = styled.div`
  font-size: x-large;
  font-weight: bold;
  text-align: center;
`;
const DashboardEx = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const Dashboard = () => {
  const info = JSON.parse(sessionStorage.getItem('info'));

  return (
    <Container>
      <div>
        <Title>{`${info?.nickname}님의 진행 상태 통계입니다.`}</Title>
        <DashboardEx>
          프로세스들의 각 전형 단계별 진행 비율과 최종 합격률을 한눈에 확인하세요.
        </DashboardEx>
      </div>
      <ProgressBarBox />
    </Container>
  );
};

export default Dashboard;
