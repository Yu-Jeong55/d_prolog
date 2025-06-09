import styled from 'styled-components';
import { RxCheckCircled } from 'react-icons/rx';
import Button from 'common/components/Button';
import ModalComponent from 'common/components/modal';

const SaveModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
  }
`;

function SaveModal({ isSaveOpen, setIsSaveOpen }) {
  return (
    <ModalComponent
      isOpen={isSaveOpen}
      onRequestClose={() => setIsSaveOpen(false)}
      width={'300px'}
      height={'300px'}
      contentLabel="Save Modal"
    >
      <SaveModalContainer>
        <RxCheckCircled size={50} color={'rgb(77, 76, 125)'} />
        <div>
          <h2>저장이</h2>
          <h2>완료되었습니다.</h2>
        </div>
        <Button className={'navy saveButton'} onClick={() => setIsSaveOpen(false)} width={'100px'}>
          {'확인'}
        </Button>
      </SaveModalContainer>
    </ModalComponent>
  );
}

export default SaveModal;
