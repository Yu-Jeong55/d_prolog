import styled from 'styled-components';
import QnA from 'components/masterPaper/QnA';
import MasterPaperList from 'components/masterPaper/list';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function MasterPaper() {
  return (
    <Container>
      <QnA />
      <MasterPaperList />
    </Container>
  );
}

export default MasterPaper;
