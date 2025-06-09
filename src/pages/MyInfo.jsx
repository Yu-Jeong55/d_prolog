import styled from 'styled-components';
import MyInfoBody from 'components/myInfo/MyInfomation';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  width: 60%;
`;

function MyInfoPage() {
  return (
    <Container>
      <MyInfoBody />
    </Container>
  );
}

export default MyInfoPage;
