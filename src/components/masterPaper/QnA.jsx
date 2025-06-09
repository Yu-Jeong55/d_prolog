import styled from 'styled-components';
import Button from 'common/components/Button';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;

const MasterTitle = styled.div`
  color: gray;
  font-size: x-large;
  margin-bottom: 10px;
`;

const Explain = styled.div`
  color: gray;
  margin-bottom: 10px;
`;

function QnAContainer() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div>
          <Explain>아직 채용 공고가 올라오지 않았나요?</Explain>
          <MasterTitle>자기소개서를 먼저 작성해보세요!</MasterTitle>
        </div>
        <Button className={'navy'} onClick={() => navigate('/masterpaper/new')}>
          {'새 자기소개서 작성'}
        </Button>
      </Container>
    </>
  );
}

export default QnAContainer;
