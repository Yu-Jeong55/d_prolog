import './index.scss';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Button from 'common/components/Button';
import DatePick from 'common/components/DatePicker';
import ModalComponent from 'common/components/modal/index';

const Head = styled.div`
  width: 20vw;
`;
const Row = styled.div`
  display: flex;
`;

// 모달 창 content
function AddProcessModal({ isAddOpen, setIsAddOpen }) {
  const navigate = useNavigate();
  const [processData, setProcessData] = useImmer({
    company: '',
    type: '',
    deadline: new Date(),
  });

  function saveAddProcess() {
    if (!processData.company.trim()) {
      alert('회사명을 입력해주세요.');
      return;
    }
    if (!processData.type) {
      alert('전형 유형을 선택해주세요.');
      return;
    }

    const templateName =
      processData.type === 'paper'
        ? 1
        : processData.type === 'test'
          ? 2
          : processData.type === 'interview'
            ? 3
            : 4;

    // 템플릿 페이지로 이동
    navigate(`/process?template=${processData.type}&t_id=${templateName}`, {
      state: processData,
    });
  }

  function handleChange(date) {
    setProcessData((draft) => {
      draft.deadline = date;
    });
  }

  function handleAddTypeChange(e) {
    const selectedValue = e.target.value;
    if (selectedValue) {
      setProcessData((draft) => {
        draft.type = selectedValue;
      });
    } else {
      alert('전형을 선택해주세요.');
    }
  }

  return (
    <ModalComponent
      isOpen={isAddOpen}
      onRequestClose={() => setIsAddOpen(false)}
      contentLabel="AddProcess"
      overflow="visible"
      width="600px"
      height="300px"
    >
      <div className="add-process">
        <input
          type="text"
          onChange={(e) =>
            setProcessData((draft) => {
              draft.company = e.target.value;
            })
          }
          className="input-company"
          placeholder="회사명을 입력하세요."
        />
        <div className="input-datas">
          <Row>
            <Head>1차 전형 날짜</Head>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <DatePick
                selectedDate={processData.deadline}
                setSelectedDate={(date) =>
                  setProcessData((draft) => {
                    draft.deadline = date;
                  })
                }
                onChange={handleChange}
              />
            </div>
          </Row>
          <Row>
            <Head>1차 전형 유형</Head>
            <div>
              <select onChange={handleAddTypeChange} className="selectType">
                <option>전형을 선택해주세요.</option>
                {TYPES.map((type, index) => (
                  <option key={index} value={type.value}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
          </Row>
        </div>
        <Row style={{ justifyContent: 'flex-end', gap: '20px' }}>
          <Button className={'navy'} onClick={saveAddProcess} type={'submit'}>
            {'프로세스 시작하기'}
          </Button>
          <Button className={'gray'} onClick={() => setIsAddOpen(false)}>
            {'취소'}
          </Button>
        </Row>
      </div>
    </ModalComponent>
  );
}

const TYPES = [
  {
    title: '서류 전형',
    value: 'paper',
  },
  {
    title: '테스트 전형',
    value: 'test',
  },
  {
    title: '면접 전형',
    value: 'interview',
  },
  { title: '메모', value: 'memo' },
];

export default AddProcessModal;
